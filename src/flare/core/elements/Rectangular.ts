import { CanvasElement } from './CanvasElement.ts';

export interface Rectangular extends CanvasElement {
  getWidth(): number;
  setWidth(width: number): void;
  getHeight(): number;
  setHeight(height: number): void;
}
