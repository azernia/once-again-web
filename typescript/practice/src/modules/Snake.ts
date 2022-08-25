class Snake {
    /**
     * 蛇头
     * @private
     */
    private head: HTMLElement;
    /**
     * 蛇的身体
     * @private
     */
    private bodies: HTMLCollection;

    /**
     * 蛇
     * @private
     */
    private element: HTMLElement;

    constructor() {
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = document.getElementById('snake')!.getElementsByTagName('div');
        this.element = document.getElementById('snake')!;
    }

    /**
     * 获取蛇头 x 的坐标
     */
    get x(): number {
        return this.head.offsetLeft;
    }

    /**
     * 获取蛇头 y 的坐标
     */
    get y(): number {
        return this.head.offsetTop
    }

    set x(value: number) {
        if (this.x === value) {
            return;
        }
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了');
        }
        // 判断是否发生水平掉头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            // 向右走为调头继续向左
            if (value > this.x) {
                value = this.x - 10;
            } else {
                value = this.x + 10;
            }
        }
        this.moveBody();
        this.head.style.left = `${value}px`;
        this.checkHeadTouchBody();
    }

    set y(value: number) {
        if (this.y === value) {
            return;
        }
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了');
        }
        // 判断是否发生垂直掉头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            // 向下走为调头继续向上
            if (value > this.y) {
                value = this.y - 10;
            } else {
                value = this.y + 10;
            }
        }
        this.moveBody();
        this.head.style.top = `${value}px`;
        this.checkHeadTouchBody();
    }

    /**
     * 增加身体
     */
    addBody(): void {
        this.element.insertAdjacentHTML('beforeend', '<div></div>');
    }

    /**
     * 移动身体
     */
    moveBody(): void {
        // 获取所有身体
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let preBodyX = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let preBodyY = (this.bodies[i-1] as HTMLElement).offsetTop;
            // 设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = `${preBodyX}px`;
            (this.bodies[i] as HTMLElement).style.top = `${preBodyY}px`;
        }
    }

    /**
     * 判断蛇头是否碰到身体
     */
    checkHeadTouchBody(): void {
        for (let i = 1; i < this.bodies.length; i++) {
            let body = this.bodies[i] as HTMLElement;
            if (this.x === body.offsetLeft && this.y === body.offsetTop) {
                throw new Error('撞到身体');
            }
        }
    }
}

export default Snake;
