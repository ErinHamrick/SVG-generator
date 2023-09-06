class Shape{
    constructor(color) {
        this.color = color;
    }
}


class Circle extends Shape{
    render() {
        return `<circle cx="100" cy="100" r="80" fill=${this.color}/>`
    }
}

class square extends Shape{};

class triangle extends Shape{}