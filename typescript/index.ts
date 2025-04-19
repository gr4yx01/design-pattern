interface Shape {
  area(): number;
  perimeter(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Triangle implements Shape {
  constructor(
    private width: number,
    private height: number,
  ) {}

  area(): number {
    return 0.5 * this.width * this.height;
  }

  perimeter(): number {
    return this.width * this.height * 2;
  }
}

const calculateArea = (shape: Shape) => {
  return shape.area();
};

let circle: Circle = new Circle(5);
let triangle: Triangle = new Triangle(3, 4);

console.log("area", calculateArea(circle));
