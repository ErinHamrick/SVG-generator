const { Circle, Square, Triangle } = require("./shape");

describe("Circle Class", () => {
	test("Circle should generate valid SVG markup", () => {
		const circle = new Circle("#FF0000");
		const svg = circle.render();
		expect(svg).toContain("<circle");
		expect(svg).toContain('fill="#FF0000"');
	});
});

describe("Square Class", () => {
	test("Square should generate valid SVG markup", () => {
		const square = new Square("#A33F3F");
		const svg = square.render();
		expect(svg).toContain("<rect");
		expect(svg).toContain('fill="#A33F3F"');
	});
});

describe("Triangle Class", () => {
	test("Triangle should generate valid SVG markup", () => {
		const triangle = new Triangle("#A33F3F");
		const svg = triangle.render();
        expect(svg).toContain("<polygon");
        expect(svg).toContain("fill=\"#A33F3F\"");
	});
});
