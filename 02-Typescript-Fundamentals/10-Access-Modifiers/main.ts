class Point {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }

  setX(x) {
    this.x = x;
  }

  setY(y) {
    this.y = y;
  }

  getDistance(another: Point) {
    // ...
  }
}

let point = new Point(3, 4);

point.draw();

point.setX(2);
point.setY(7);

point.draw();