import { CanvasElement } from './elements/CanvasElement.ts';
import { CanvasManager } from './CanvasManager.ts';

export class Flare {
  private readonly canvas: HTMLCanvasElement;
  private readonly canvasManager: CanvasManager;

  private running: boolean;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.canvasManager = new CanvasManager(this.canvas);

    this.running = false;

    this.initCanvas();
  }

  startRender(): void {
    this.running = true;
    requestAnimationFrame(() => this.render());
  }

  /**
   * This is mostly used for development purposes. <br>
   * ***NOTE:** Will also stop rendering initiated by calling `Flare.startRender()`!*
   */
  renderOnce(): void {
    this.running = false;
    requestAnimationFrame(() => this.render());
  }

  stopRender(): void {
    this.running = false;
  }

  addElement(element: CanvasElement): void {
    this.canvasManager.addElement(element);
  }

  setElements(elements: CanvasElement[]): void {
    this.canvasManager.setElements(...elements);
  }

  removeElement(id: string): void {
    this.canvasManager.removeElement(id);
  }

  private render(): void {
    console.log('[FLARE] Rendering...');
    this.canvasManager.drawElements();

    if (this.running) {
      requestAnimationFrame(() => this.render());
    }
  }

  private initCanvas(): void {
    console.log('[FLARE] Initializing canvas...');
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
  }
}
