import { Rectangular } from '../../core/elements/Rectangular.ts';
import { Vector3D } from '../../core/geometry/Vector3D.ts';

/**
 * The blip indicating the position of the vehicle on the scope.
 */
export class VehicleBlip implements Rectangular {
  private readonly id: string;
  private location: Vector3D;
  private width: number;
  private height: number;

  private draggable: boolean;
  private selectable: boolean;

  constructor(id: string, location: Vector3D, width: number, height: number, draggable = false, selectable = false) {
    this.id = id;
    this.location = location;
    this.width = width;
    this.height = height;
    this.draggable = draggable;
    this.selectable = selectable;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.strokeStyle = '#007bff';
    ctx.lineWidth = 2;
    ctx.strokeRect(this.location.getX(), this.location.getY(), this.width, this.height);

    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;
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
