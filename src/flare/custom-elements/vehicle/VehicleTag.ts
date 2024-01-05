import { Rectangular } from '../../core/elements/Rectangular.ts';
import { Vector3D } from '../../core/geometry/Vector3D.ts';

export class VehicleTag implements Rectangular {
  private readonly id: string;
  private location: Vector3D;
  private width: number;
  private height: number;
  private content: string[];
  private draggable: boolean;
  private selectable: boolean;

  private static LINE_HEIGHT;

  static {
    this.LINE_HEIGHT = 15;
  }

  constructor(
    id: string,
    location: Vector3D,
    minWidth: number,
    minHeight: number,
    content: string[],
    draggable = false,
    selectable = false
  ) {
    this.id = id;
    this.location = location;
    this.width = minWidth;
    this.height = minHeight;
    this.content = content;
    this.draggable = draggable;
    this.selectable = selectable;

    this.width = minWidth;
    this.height = minHeight;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.drawBackground(ctx);
    this.drawOutline(ctx);
    this.drawText(ctx);
  }

  getContent(): string[] {
    return this.content;
  }

  setContent(content: string[]): void {
    this.content = content;
  }

  getHeight(): number {
    return this.height;
  }

  getId(): string {
    return this.id;
  }

  getLocation(): Vector3D {
    return this.location;
  }

  getWidth(): number {
    return this.width;
  }

  isDraggable(): boolean {
    return this.draggable;
  }

  isSelectable(): boolean {
    return this.selectable;
  }

  setDraggable(draggable: boolean): void {
    this.draggable = draggable;
  }

  setHeight(height: number): void {
    this.height = height;
  }

  setLocation(location: Vector3D): void {
    this.location = location;
  }

  setSelectable(selectable: boolean): void {
    this.selectable = selectable;
  }

  setWidth(width: number): void {
    this.width = width;
  }

  private drawBackground(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.fillStyle = '#000';
    ctx.fillRect(this.location.getX(), this.location.getY(), this.width, this.height);

    ctx.fillStyle = '#000';
  }

  private drawOutline(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#007bff';
    ctx.strokeRect(this.location.getX() - 1, this.location.getY() - 1, this.width, this.height);

    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000';
  }

  private drawText(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.textBaseline = 'top';
    ctx.font = '15px sans-serif';

    for (let i = 0; i < this.content.length; i++) {
      ctx.fillText(this.content[i], this.location.getX(), this.location.getY() + VehicleTag.LINE_HEIGHT * i);
    }

    ctx.fillStyle = '#fff';
    ctx.textBaseline = 'middle';
    ctx.font = '10px sans-serif';
  }
}
