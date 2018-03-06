class Point {
  constructor(private _x: number, private _y: number) {
  }

  draw() {
    console.log(`X: ${this._x}, Y: ${this._y}`);
  }

  set x(value) {
    if (value < 0) {
      throw new Error('Value cannot be less than 0');
    }
    this._x = value;
  }

  set y(value) {
    if (value < 0) {
      throw new Error('Value cannot be less than 0');
    }
    this._y = value;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  getDistance(another: Point) {
    // ...
  }
}

let point = new Point(3, 4);

point.draw();

point.x = 2
point.y =7;

point.draw();