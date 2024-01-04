import { CanvasElement } from './CanvasElement.ts';

export interface Circular extends CanvasElement {
  getRadius(): number;
  setRadius(radius: number): void;
}
