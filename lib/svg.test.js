const SVG = require('./svg')


describe('All SVG Test', () => {
    test('should render a svg element 300 by 300', () => {
        const finalSVG = `<svg height="300" width="300"></svg>`
        const newSVG = new SVG()
        expect(newSVG.render()).toEqual(finalSVG)
    })

    test()
})