import { CanvasElement } from './elements/CanvasElement.ts';

export class CanvasManager {
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;
  private elements: CanvasElement[];

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ctx = this.canvas.getContext('2d');
    if (!ctx) {
      throw new Error('Canvas has no context');
    }
    this.ctx = ctx;
    this.elements = [];

    this.formatCanvas();

    window.addEventListener('resize', () => this.formatCanvas());
  }

  drawElements(): void {
    this.clear();
    const sortedByZPosition = this.sortElementsByZPosition();
    for (const currentElement of sortedByZPosition) {
      currentElement.draw(this.ctx);
    }
  }

  addElement(element: CanvasElement): void {
    this.elements.push(element);
  }

  setElements(...elements: CanvasElement[]): void {
    this.elements = elements;
  }

  removeElement(id: string): void {
    this.elements.splice(
      this.elements.findIndex(element => element.getId() === id),
      1
    );
  }

  getElements(): CanvasElement[] {
    return this.elements;
  }

  private sortElementsByZPosition(): CanvasElement[] {
    return this.elements.toSorted((a, b) => a.getLocation().getZ() - b.getLocation().getZ());
  }

  private clear(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private formatCanvas(): void {
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.width = this.canvas.offsetWidth * window.devicePixelRatio;
    this.canvas.height = this.canvas.offsetHeight * window.devicePixelRatio;
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }
}
