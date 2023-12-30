import { Vector3D } from '../geometry/Vector3D.ts';
import { CanvasElement } from './CanvasElement.ts';

export class Circle implements CanvasElement {
  private location: Vector3D;
  private radius: number;

  private draggable: boolean;
  private selectable: boolean;

  constructor(location: Vector3D, radius: number, draggable = false, selectable = false) {
    this.location = location;
    this.radius = radius;

    this.draggable = draggable;
    this.selectable = selectable;
  }

  getLocation(): Vector3D {
    return this.location;
  }

  setLocation(location: Vector3D) {
    this.location = location;
  }

  isDraggable(): boolean {
    return this.draggable;
  }

  setDraggable(draggable: boolean) {
    this.draggable = draggable;
  }

  isSelectable(): boolean {
    return this.selectable;
  }

  setSelectable(selectable: boolean) {
    this.selectable = selectable;
  }

  getRadius(): number {
    return this.radius;
  }

  setRadius(radius: number): void {
    this.radius = radius;
  }
}
