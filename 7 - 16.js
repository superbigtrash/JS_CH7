var Rectangle = class {
    constructor (width, height) {
        this.width = width;
        this.height = height;
    }
    getArea () {
        return this.width * this.height;
    }
};
var Sqaure = class extends Rectangle {
    constructor (width) {
        super(width, width);
    }
    getArea () {
        console.log('size is', super.getArea());
    }
};
console.log(Square(10));