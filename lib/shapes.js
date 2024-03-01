class Shape {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      throw new Error('Method render() must be implemented');
    }
}

// Circle
class Circle extends Shape {
    constructor(color) {
      super(color);
    }
  
    render() {
      return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
}
  
// Square
class Square extends Shape {
    constructor(color) {
      super(color);
    }
  
    render() {
      return `<rect x="75" y="50" width="150" height="150" fill="${this.color}" />`;
    }
}

// Triangle
class Triangle extends Shape {
    constructor(color) {
      super(color);
    }
  
    render() {
      return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Square, Triangle };
  