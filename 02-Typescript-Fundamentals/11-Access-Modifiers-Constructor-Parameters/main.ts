class Point {
  constructor(private x: number, private y: number) {
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