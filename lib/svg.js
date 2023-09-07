class SVG {
	constructor() {
		this.text = "";
		this.shape = "";
	}

	// setText(message = "", color = "black", shapeType){
	//     let textPosition = "";

	//     if (shapeType === "circle") {
	//         textPosition = `<text x="65"y="110" font-size="40" text-anchor="middle" fill="${color}">${message}</text>`
	//     }
	//     if (shapeType === "square") {
	//         textPosition = `<text x="35%" y="55%" font-size="40" text-anchor="middle" fill="${color}">${message}</text>`
	//     }
	//     if (shapeType === "triangle") {
	//         textPosition = `<text x="50%" y="50%" text-anchor="middle" font-size="40" fill="${color}">${message}</text>`
	//     }

	// this.text = textPosition;

	// }

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
