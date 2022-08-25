import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {

    private snake: Snake;

    private food: Food;

    private scorePanel: ScorePanel;

    private direction: string = '';

    private isLive: boolean = true;


    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel(0, 1, 10, 10);
        this.initScorePanel();
        this.init();
    }

    initScorePanel(): void {
        this.scorePanel.init();
    }

    init(): void {
        // 绑定键盘事件 bind(this) 绑定当前 this
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run();
    }

    /**
     * 键盘按下处理
     * @param event
     */
    keydownHandler(event: KeyboardEvent): void {
        this.direction = event.key;
    }

    /**
     * 根据方向移动
     */
    run(): void {
        let x = this.snake.x;
        let y = this.snake.y;
        switch (this.direction) {
            case 'w':
                y -= 10;
                break;
            case 'a':
                x -= 10;
                break;
            case 's':
                y += 10;
                break;
            case 'd':
                x += 10
                break;
        }
        this.checkAteFood(this.snake.x, this.snake.y)
        try {
            this.snake.x = x;
            this.snake.y = y;
        } catch (e) {
            alert(`${(e as Error).message}，游戏结束`);
            this.isLive = false;
            location.reload();
        }
        // 定时调用 isLive === true 执行
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }

    /**
     * 检测蛇是否吃到食物
     */
    checkAteFood(snakeX: number, snakeY: number) {
        if (snakeX === this.food.x && snakeY === this.food.y) {
            console.log('吃到食物');
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }
}

export default GameControl;
