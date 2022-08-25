class ScorePanel {
    private readonly _maxLevel: number;

    private readonly  _upScore: number;

    private _score: number;

    private _level: number;

    private scoreElem: HTMLElement;

    private levelElem: HTMLElement;

    constructor(score: number, level: number, maxLevel: number, upScore: number) {
        this._score = score;
        this._level = level;
        this._maxLevel = maxLevel;
        this._upScore = upScore;
        // document.getElementById('score')! 标识获取的不为空
        this.scoreElem = document.getElementById('score')!;
        this.levelElem = document.getElementById('level')!;
    }


    get score(): number {
        return this._score;
    }

    set score(value: number) {
        this._score = value;
    }

    get level(): number {
        return this._level;
    }

    set level(value: number) {
        this._level = value;
    }

    init(): void {
        this.scoreElem.innerHTML = this._score + '';
        this.levelElem.innerHTML = this._level + '';
    }

    addScore(): void {
        this.scoreElem.innerHTML = ++this._score + '';
        if (this._score % this._upScore === 0) {
            this.levelUp();
        }
    }

    levelUp(): void {
        if (this._level < this._maxLevel) {
            this.levelElem.innerHTML = ++this._level + '';
        }
    }
}

export default ScorePanel;
