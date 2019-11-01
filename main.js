class Media {
    constructor(title, isCheckedOut, ratings) {
        this._title = title;
        this._isCheckedOut = isCheckedOut;
        this._ratings = ratings;
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    set isCheckedOut(boolean) {
        this._isCheckedOut = boolean;
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating() {
        return this._ratings.reduce((acc, curr) => acc + curr) / this._ratings.length;
    }
    addRating(newRating) {
        this.ratings.push(newRating);
    }
}
