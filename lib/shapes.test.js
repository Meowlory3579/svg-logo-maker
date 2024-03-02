// Import
const { Circle, Square, Triangle } = require('../lib/shapes.js');

// Test to ensure the circle is rendered as expected
describe('Circle', () => {
  test('should return a string representing the circle svg file ', () => {
    const circle = new Circle("blue");
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="blue" />');
  });
})

// Test to ensure the square is rendered as expected
describe('Square', () => {
  test('should return a string representing the square svg file ', () => {
    const square = new Square("blue");
    expect(square.render()).toEqual('<rect x="75" y="50" width="150" height="150" fill="blue" />');
  });
})

// Test to ensure the triangle is rendered as expected
describe('Triangle', () => {
  test('should return a string representing the triangle svg file ', () => {
    const triangle = new Triangle("blue");
    expect(triangle.render()).toEqual('<polygon points="150,50 100,150 200,150" fill="blue" />');
  });
})