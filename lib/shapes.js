// Shapes parent. [Fill] color to be shared among child classes.
class Shape {
  constructor(color) {
    this.color = color;
  }

  // Throw error if a child class of Shape doesn't override render.
  render() {
    throw new Error('Method render() must be implemented');
  }

  // Throw error if a child class of Shape doesn't override getTextAttributes.
  getTextAttributes() {
    throw new Error('Method getTextAttributes() must be implemented');
  }
}

// Circle - child of Shape. Inherits [fill] color.
class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  // Render svg representation of circle.
  render() {
    return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
  }

  // Provide text attributes specific to circle.
  getTextAttributes() {
    return { x: 150, y: 100, fontSize: 40 };
  }
}

// Square - child of Shape. Inherits [fill] color.
class Square extends Shape {
  constructor(color) {
    super(color);
  }

  // Render svg representation of square.
  render() {
    return `<rect x="75" y="50" width="150" height="150" fill="${this.color}" />`;
  }

  // Provide text attributes specific to square.
  getTextAttributes() {
    return { x: 150, y: 125, fontSize: 50 };
  }
}

// Triangle - child of Shape. Inherits [fill] color.
class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  // Render svg representation of triangle.
  render() {
    return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />`;
  }

  // Provide text attributes specific to triangle.
  getTextAttributes() {
    return { x: 150, y: 135, fontSize: 30 };
  }
}

// Export
module.exports = { Circle, Square, Triangle };
