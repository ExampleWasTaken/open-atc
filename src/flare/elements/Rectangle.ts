import { Vector3D } from '../geometry/Vector3D.ts';
import { CanvasElement } from './CanvasElement.ts';

export class Rectangle implements CanvasElement {
  private location: Vector3D;
  private width: number;
  private height: number;

  private draggable: boolean;
  private selectable: boolean;

  constructor(location: Vector3D, width: number, height: number, draggable = false, selectable = false) {
    this.location = location;
    this.width = width;
    this.height = height;

    this.draggable = draggable;
    this.selectable = selectable;
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
