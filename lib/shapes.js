// Shapes parent. [Fill] color to be shared among child classes.
class Shape {
  constructor(color) {
    this.color = color;
  }

  render() {
    throw new Error('Method render() must be implemented');
  }

  getTextAttributes() {
    throw new Error('Method getTextAttributes() must be implemented');
  }
}

// Circle - child of Shape
class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  // render svg representation of circle
  render() {
    return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
  }

  // provide text attributes specific to circle
  getTextAttributes() {
    return { x: 150, y: 100, fontSize: 40 };
  }
}

// Square - child of Shape
class Square extends Shape {
  constructor(color) {
    super(color);
  }

  // render svg representation of square
  render() {
    return `<rect x="75" y="50" width="150" height="150" fill="${this.color}" />`;
  }

  // provide text attributes specific to square
  getTextAttributes() {
    return { x: 150, y: 125, fontSize: 50 };
  }
}

// Triangle - child of Shape
class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  // render svg representation of triangle
  render() {
    return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />`;
  }

  // provide text attributes specific to triangle
  getTextAttributes() {
    return { x: 150, y: 135, fontSize: 30 };
  }
}

// Export to index.js
module.exports = { Circle, Square, Triangle };
