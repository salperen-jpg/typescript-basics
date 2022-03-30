export class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(point: Point) {
    return new Point(this.x + point.x, this.y + point.y);
  }
}

const point = new Point(1, 2);
const point2 = new Point(1, 2);

console.log(point.add(point2));
