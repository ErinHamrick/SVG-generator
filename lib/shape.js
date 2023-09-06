class Shape{
    constructor(color) {
        this.color = color;
    }
}


class Circle extends Shape{
    render() {
        return `<circle cx="100" cy="100" r="80" fill=${this.color}/>`;
    }
}

class Square extends Shape{
    render() {
        return `<rect width="200" height="200" fill=${this.color}/>`;
    }
};

class Triangle extends Shape{
    render() {
        return `<polygon points="100,10 200,200 0,200" fill=${this.color}/>`;
        
    }
}

module.exports = {Circle, Square, Triangle};