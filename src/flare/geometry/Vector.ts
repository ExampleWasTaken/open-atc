export interface Vector {
  add(other: Vector): Vector;
  subtract(other: Vector): Vector;
  multiply(scalar: number): Vector;
  divide(scalar: number): Vector;
  magnitude(): number;
  dotProduct(other: Vector): number;
  toString(): string;
}
