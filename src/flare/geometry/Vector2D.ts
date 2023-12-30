import { Vector } from './Vector.ts';

export class Vector2D implements Vector {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(other: Vector2D): Vector2D {
    return new Vector2D(this.x + other.getX(), this.y + other.getY());
  }

  subtract(other: Vector2D): Vector2D {
    return new Vector2D(this.x - other.getX(), this.y - other.getY());
  }

  multiply(scalar: number): Vector2D {
    return new Vector2D(this.x * scalar, this.y * scalar);
  }

  divide(scalar: number): Vector2D {
    return new Vector2D(this.x / scalar, this.y / scalar);
  }

  magnitude(): number {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  dotProduct(other: Vector2D): number {
    return this.x * other.getX() + this.y * other.getY();
  }

  toString(): string {
    return `{${this.x} | ${this.y}}`;
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
}
