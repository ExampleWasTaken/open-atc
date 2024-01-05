import { CanvasManager } from '../CanvasManager.ts';
import { CanvasElement } from '../elements/CanvasElement.ts';

export class InteractionManager {
  private canvasManager: CanvasManager;
  private selectedElement: CanvasElement | null;

  constructor(canvasManager: CanvasManager) {
    this.canvasManager = canvasManager;
    this.selectedElement = null;
  }

  registerListeners(): void {
    this.canvasManager.getCanvas().addEventListener('wheel', event => this.onWheel(event));
    this.canvasManager.getCanvas().addEventListener('mousedown', event => this.onMouseDown(event));
    this.canvasManager.getCanvas().addEventListener('mouseup', () => this.onMouseUp());
    this.canvasManager.getCanvas().addEventListener('mousemove', event => this.onMouseMove(event));
  }

  unregisterListeners(): void {
    this.canvasManager.getCanvas().removeEventListener('wheel', event => this.onWheel(event));
    this.canvasManager.getCanvas().removeEventListener('mousedown', event => this.onMouseDown(event));
    this.canvasManager.getCanvas().removeEventListener('mouseup', () => this.onMouseUp());
    this.canvasManager.getCanvas().removeEventListener('mousemove', event => this.onMouseMove(event));
  }

  getSelectedElement(): CanvasElement | null {
    return this.selectedElement;
  }

  private onWheel(_event: WheelEvent): void {}

  private onMouseDown(event: MouseEvent): void {
    const target = this.getTarget(event.offsetX * devicePixelRatio, event.offsetY * devicePixelRatio);

    if (target === null) {
      this.deselectElement();
    } else {
      this.selectElement(target);
    }
  }

  private onMouseUp(): void {}

  private onMouseMove(_event: MouseEvent): void {}

  /**
   * Null indicates the canvas was clicked
   * @param x X coordinate of the event
   * @param y Y coordinate of the event
   */
  private getTarget(x: number, y: number): CanvasElement | null {
    const possibleElements: CanvasElement[] = [];
    for (const current of this.canvasManager.getElements()) {
      const location = current.getLocation();

      if (
        x > location.getX() &&
        x < location.getX() + current.getWidth() &&
        y > location.getY() &&
        y < location.getY() + current.getHeight()
      ) {
        possibleElements.push(current);
      }
    }

    // Return the element with the highest Z value indicating it is the top most.
    return possibleElements.length !== 0
      ? possibleElements.sort((a, b) => b.getLocation().getZ() - a.getLocation().getZ())[0]
      : null;
  }

  private selectElement(element: CanvasElement): void {
    this.selectedElement = element;
    element.setSelected(true);
  }

  private deselectElement(): void {
    this.selectedElement?.setSelected(false);
    this.selectedElement = null;
  }
}
