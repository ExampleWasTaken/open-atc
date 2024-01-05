import { CanvasElement } from '../../core/elements/CanvasElement.ts';
import { Vector3D } from '../../core/geometry/Vector3D.ts';
import { VehicleBlip } from './VehicleBlip.ts';
import { VehicleTag } from './VehicleTag.ts';

export class TagLine implements CanvasElement {
  private readonly id: string;
  private from: VehicleBlip;
  private to: VehicleTag;
  private draggable: boolean;
  private selectable: boolean;

  constructor(id: string, from: VehicleBlip, to: VehicleTag, draggable = false, selectable = false) {
    this.id = id;
    this.from = from;
    this.to = to;
    this.draggable = draggable;
    this.selectable = selectable;
  }
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.strokeStyle = '#b2b2b2';
    ctx.lineWidth = 1;
    ctx.moveTo(
      this.from.getLocation().getX() + this.from.getWidth() / 2,
      this.from.getLocation().getY() + this.from.getHeight() / 2
    );
    ctx.lineTo(
      this.to.getLocation().getX() + this.to.getWidth() / 2,
      this.to.getLocation().getY() + this.to.getHeight() / 2
    );
    ctx.stroke();

    ctx.strokeStyle = '#000';
  }

  getId(): string {
    return this.id;
  }

  getLocation(): Vector3D {
    return this.from.getLocation();
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

  setLocation(location: Vector3D): void {
    this.from.setLocation(location);
  }

  setSelectable(selectable: boolean): void {
    this.selectable = selectable;
  }
}
