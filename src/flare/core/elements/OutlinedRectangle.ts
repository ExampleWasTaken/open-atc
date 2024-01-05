import { Rectangular } from './Rectangular.ts';
import { Vector3D } from '../geometry/Vector3D.ts';

interface Config {
  color: string;
  lineWidth: number;
}

/**
 * Example implementation used for testing purposes.
 */
export class OutlinedRectangle implements Rectangular {
  private readonly id: string;
  private location: Vector3D;
  private width: number;
  private height: number;

  private draggable: boolean;
  private selectable: boolean;

  private config: Config;

  constructor(
    id: string,
    location: Vector3D,
    width: number,
    height: number,
    config: Config,
    draggable = false,
    selectable = false
  ) {
    this.id = id;
    this.location = location;
    this.width = width;
    this.height = height;

    this.draggable = draggable;
    this.selectable = selectable;
    this.config = config;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.strokeStyle = this.config.color;
    ctx.lineWidth = this.config.lineWidth;
    ctx.strokeRect(this.location.getX(), this.location.getY(), this.width, this.height);

    ctx.strokeStyle = '';
    ctx.lineWidth = 1;
  }

  getId(): string {
    return this.id;
  }

  getLocation(): Vector3D {
    return this.location;
  }

  setLocation(location: Vector3D): void {
    this.location = location;
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

  getWidth(): number {
    return this.width;
  }

  setWidth(width: number): void {
    this.width = width;
  }

  getHeight(): number {
    return this.height;
  }

  setHeight(height: number): void {
    this.height = height;
  }
}
