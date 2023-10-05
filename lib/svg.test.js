const SVG = require('./svg');

describe('SVG class', () => {
  it('should have a constructor that sets the text and shape properties to empty strings', () => {
    const svg = new SVG();
    expect(svg.text).toBe('');
    expect(svg.shape).toBe('');
  });

  it('should have a setText() method that sets the text property to the specified text and color', () => {
    const svg = new SVG();
    svg.setText('Hello, world!', 'red');
    expect(svg.text).toBe('<text x=\'150\' y=\'125\' font-size=\'40\' font-family =\'cursive\' text-anchor=\'middle\' fill=\'red\'>Hello, world!</text>');
  });

  it('should have a setShape() method that sets the shape property to the rendered version of the specified shape', () => {
    const shape = {
      render() {
        return '<circle cx="100" cy="100" r="50" fill="blue" />';
      },
    };

    const svg = new SVG();
    svg.setShape(shape);
    expect(svg.shape).toBe('<circle cx="100" cy="100" r="50" fill="blue" />');
  });

  it('should have a render() method that returns an SVG string with the specified text and shape', () => {
    const svg = new SVG();
    svg.setText('Hello, world!', 'red');
    svg.setShape({
      render() {
        return '<circle cx="100" cy="100" r="50" fill="blue" />';
      },
    });

    const expectedOutput = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="50" fill="blue" /><text x='150' y='125' font-size='40' font-family ='cursive' text-anchor='middle' fill='red'>Hello, world!</text></svg>`;

    expect(svg.render()).toBe(expectedOutput);
  });
});
