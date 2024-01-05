import { CanvasElement } from './CanvasElement.ts';

export interface Rectangular extends CanvasElement {
  setWidth(width: number): void;
  setHeight(height: number): void;
}
