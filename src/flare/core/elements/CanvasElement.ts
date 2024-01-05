import { Vector3D } from '../geometry/Vector3D.ts';

export interface CanvasElement {
  draw(ctx: CanvasRenderingContext2D): void;
  getId(): string;
  isDraggable(): boolean;
  setDraggable(draggable: boolean): void;
  isSelected(): boolean;
  setSelected(selected: boolean): void;
  getLocation(): Vector3D;
  setLocation(location: Vector3D): void;
  getWidth(): number;
  getHeight(): number;
}
