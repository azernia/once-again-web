/**
 * 食物
 */
class Food {

    private readonly  MAX_RANGE: number = 29;

    private element: HTMLElement;

    constructor() {
        this.element = document.getElementById('food')!;
    }

    /**
     * 获取食物 x 的坐标
     */
    get x(): number {
        return this.element.offsetLeft;
    }

    /**
     * 获取食物 y 的坐标
     */
    get y(): number {
        return this.element.offsetTop
    }

    /**
     * 修改食物位置
     */
    change(): void {
        // 生成随机位置 最小 0 最大 290
        let top = Math.round(Math.random() * this.MAX_RANGE) * 10;
        let left = Math.round(Math.random() * this.MAX_RANGE) * 10;
        this.element.style.left = `${left}px`;
        this.element.style.top =`${top}px`;
    }
}

export default Food;
