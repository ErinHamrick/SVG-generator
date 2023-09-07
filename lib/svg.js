class SVG {
	constructor() {
		this.text = "";
		this.shape = "";
	}

	setText(text, color) {
		this.text = `<text x='150' y='125' font-size='40' text-anchor='middle' fill='${color}'>${text}</text>`;
	}

	setShape(shape) {
		this.shape = shape.render();
	}

	render() {
		return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
	}
}

module.exports = SVG;
