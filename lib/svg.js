class SVG {
    constructor(){
        this.text = ''
        this.shape = ''
    }

    setText(message,color){
        this.text = ``
    }

    setShape(shape){
        this.shape = shape.render()
    }

    render(){}
}

module.exports = SVG;