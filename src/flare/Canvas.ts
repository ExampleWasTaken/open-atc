import { CanvasElement } from './elements/CanvasElement.ts';

export class Canvas {
  private elements: CanvasElement[];

  constructor() {
    this.elements = [];
  }

  addElement(element: CanvasElement): void {
    this.elements.push(element);
  }

  setElements(...elements: CanvasElement[]): void {
    this.elements = elements;
  }

  getElements(): CanvasElement[] {
    return this.elements;
  }
}
