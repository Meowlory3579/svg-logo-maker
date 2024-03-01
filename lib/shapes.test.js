const { Circle } = require('./Circle');

describe('Circle', () => {
  test('renders SVG correctly', () => {
    const circle = new Circle('#ff0000');
    expect(circle.render()).toBe(`<svg width="300" height="200"><circle cx="150" cy="100" r="50" fill="#ff0000" /></svg>`);
  });
});

// Repeat this process for Square and Triangle.