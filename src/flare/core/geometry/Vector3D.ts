import { Vector } from './Vector.ts';

export class Vector3D implements Vector {
  private x: number;
  private y: number;
  private z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  add(other: Vector3D): Vector3D {
    return new Vector3D(this.x + other.getX(), this.y + other.getY(), this.z + other.getZ());
  }

  subtract(other: Vector3D): Vector3D {
    return new Vector3D(this.x + other.getX(), this.y + other.getY(), this.z + other.getZ());
  }

  multiply(scalar: number): Vector3D {
    return new Vector3D(this.x * scalar, this.y * scalar, this.z * scalar);
  }

  divide(scalar: number): Vector3D {
    return new Vector3D(this.x / scalar, this.y / scalar, this.z / scalar);
  }

  magnitude(): number {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
  }

  dotProduct(other: Vector3D): number {
    return this.x * other.getX() + this.y * other.getY() + this.z * other.getZ();
  }

  crossProduct(other: Vector3D): Vector3D {
    const x = this.y * other.getZ() - this.z * other.getY();
    const y = this.z * other.getX() - this.x * other.getZ();
    const z = this.x * other.getY() - this.y * other.getX();

    return new Vector3D(x, y, z);
  }

  normalize(): Vector3D {
    const absX = Math.abs(this.x);
    const absY = Math.abs(this.y);
    const absZ = Math.abs(this.z);

    // Avoid division by zero
    const newX = absX === 0 ? 0 : this.x / absX;
    const newY = absY === 0 ? 0 : this.y / absY;
    const newZ = absZ === 0 ? 0 : this.z / absZ;

    return new Vector3D(newX, newY, newZ);
  }

  toString(): string {
    return `{${this.x} | ${this.y} | ${this.z}}`;
  }

  getX(): number {
    return this.x;
  }

  setX(x: number): void {
    this.x = x;
  }

  getY(): number {
    return this.y;
  }

  setY(y: number): void {
    this.y = y;
  }

  getZ(): number {
    return this.z;
  }

  setZ(z: number): void {
    this.z = z;
  }
}
