import { Point } from './classes';

class Point3d extends Point {
  z: number;
  static numberOfInstances = 0;
  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
    Point3d.numberOfInstances++;
  }
  add(point: Point3d) {
    const point2d = super.add(point);
    return new Point3d(point2d.x, point2d.y, this.z + point.z);
  }
}

const point3d = new Point3d(1, 2, 3);
const point3d2 = new Point3d(1, 2, 3);

console.log(point3d.add(point3d2));
console.log(Point3d.numberOfInstances);
