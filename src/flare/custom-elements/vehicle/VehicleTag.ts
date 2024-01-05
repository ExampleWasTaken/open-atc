import { Rectangular } from '../../core/elements/Rectangular.ts';
import { Vector3D } from '../../core/geometry/Vector3D.ts';

interface Config {
  content: string[];
  lineHeight: number;
}

export class VehicleTag implements Rectangular {
  private readonly id: string;
  private location: Vector3D;
  private width: number;
  private height: number;
  private config: Config;
  private draggable: boolean;
  private selectable: boolean;

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
    this.config = config;
    this.draggable = draggable;
    this.selectable = selectable;

    console.log(this.config.content);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.drawBackground(ctx);
    this.drawOutline(ctx);
    this.drawText(ctx);
  }

  getConfig(): Config {
    return this.config;
  }

  setConfig(config: Config): void {
    this.config = config;
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
    ctx.fillStyle = '#000';
    ctx.fillRect(this.location.getX(), this.location.getY(), this.width, this.height);

    ctx.fillStyle = '#000';
  }

  private drawOutline(ctx: CanvasRenderingContext2D): void {
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

    for (let i = 0; i < this.config.content.length; i++) {
      ctx.fillText(this.config.content[i], this.location.getX(), this.location.getY() + this.config.lineHeight * i);
    }

    ctx.fillStyle = '#fff';
  }
}
