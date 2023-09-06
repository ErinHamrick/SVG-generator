const fs = require("fs");
const inquirer = require("inquirer");
const SVG = require("./lib/svg");
const { Circle, Triangle, Square } = require("./lib/shape");

async function generateLogo() {
	try {
		const userInput = await inquirer.prompt([
			{
				type: "input",
				name: "text",
				message:
					"Enter the text you would like displayed (3 characters or less):",
				validate: (input) => input.length <= 3,
			},
			{
				type: "input",
				name: "textColor",
				message:
					"What color would you like your text to be? Enter color keyword or hexadecimal code:",
			},
			{
				type: "list",
				name: "shape",
				message: "Please choose a shape for your logo:",
				choices: ["circle", "triangle", "square"],
			},
			{
				type: "input",
				name: "bgColor",
				message:
					"What color would you like the backgroud to be? Enter color keyword or hexadecimal code:"
			},
		]);

		let shape;
		if (userInput.shape === "circle") {
			shape = new Circle(userInput.bgColor);
		} else if (userInput.shape === "triangle") {
			shape = new Triangle(userInput.bgColor);
		} else {
			shape = new Square(userInput.bgColor);
		}

		// shape.setText(userInput.text, userInput.textColor, userInput.shape);

        const svg = new SVG();
        svg.setShape(shape);
        svg.setText(userInput.text, userInput.textColor, userInput.shape);

        const svgContent = svg.render();

fs.writeFileSync('logo.svg', svgContent, 'utf-8');

console.log('Generated logo.svg');


	} catch (error) {
		console.log("An error occurred:", error);
	}
}

generateLogo();