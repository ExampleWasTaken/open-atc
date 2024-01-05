import { Vector3D } from '../geometry/Vector3D.ts';
import { Circular } from './Circular.ts';

interface Config {
  color: string;
}

/**
 * Example implementation used for testing purposes.
 */
export class FilledCircle implements Circular {
  private readonly id: string;
  private radius: number;
  private location: Vector3D;

  private draggable: boolean;
  private selectable: boolean;

  private config: Config;

  constructor(id: string, radius: number, location: Vector3D, config: Config, draggable = false, selectable = false) {
    this.id = id;
    this.radius = radius;
    this.location = location;
    this.config = config;
    this.draggable = draggable;
    this.selectable = selectable;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.fillStyle = this.config.color;
    ctx.arc(this.location.getX(), this.location.getY(), this.radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '';
  }

  getRadius(): number {
    return this.radius;
  }
  setRadius(radius: number): void {
    this.radius = radius;
  }
  getId(): string {
    return this.id;
  }
  isDraggable(): boolean {
    return this.draggable;
  }
  setDraggable(draggable: boolean): void {
    this.draggable = draggable;
  }
  isSelectable(): boolean {
    return this.selectable;
  }
  setSelectable(selectable: boolean): void {
    this.selectable = selectable;
  }
  getLocation(): Vector3D {
    return this.location;
  }
  setLocation(location: Vector3D): void {
    this.location = location;
  }
}
