import { Vector3D } from '../geometry/Vector3D.ts';

export interface CanvasElement {
  isDraggable(): boolean;
  setDraggable(draggable: boolean): void;
  isSelectable(): boolean;
  setSelectable(selectable: boolean): void;
  getLocation(): Vector3D;
  setLocation(location: Vector3D): void;
}
