import { VehicleBlip } from './VehicleBlip.ts';
import { VehicleTag } from './VehicleTag.ts';
import { TagLine } from './TagLine.ts';
import { CanvasElement } from '../../core/elements/CanvasElement.ts';
import { Vector3D } from '../../core/geometry/Vector3D.ts';

interface Data {
  callsign: string;
  altitude: number;
  selectedAltitude: number;
  assignedAltitude: number;
  verticalSpeed: number;
  heading: number;
  assignedHeading: number;
  procedure?: string;
  speed: number;
  assignedSpeed: number | 'FREE';
}

const TAG_WIDTH = 150;
const TAG_HEIGHT = 80;

export class Vehicle implements CanvasElement {
  private readonly blip: VehicleBlip;
  private readonly tag: VehicleTag;
  private readonly tagLine: TagLine;

  private readonly id: string;
  private location: Vector3D;

  private draggable: boolean;
  private selectable: boolean;

  constructor(id: string, data: Data, location: Vector3D) {
    this.id = id;
    this.blip = new VehicleBlip(id, location, 5, 5);
    this.tag = new VehicleTag(id, this.getTagPosition(location), TAG_WIDTH, TAG_HEIGHT, {
      content: [
        data.callsign,
        `${data.altitude} ${data.selectedAltitude} ${
          data.verticalSpeed < 0 ? 'v' : data.verticalSpeed === 0 ? '=' : '^'
        } ${data.assignedAltitude}`,
        `${data.heading} ${data.assignedHeading} ${data.procedure && data.procedure}`,
        `${data.speed} ${data.assignedSpeed}`,
      ],
      lineHeight: 12,
    });
    this.tagLine = new TagLine(id, this.blip, this.tag);

    this.location = location;
    this.draggable = false;
    this.selectable = false;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.tagLine.draw(ctx);
    this.blip.draw(ctx);
    this.tag.draw(ctx);
  }

  getId(): string {
    return this.id;
  }

  getLocation(): Vector3D {
    return this.location;
  }

  isDraggable(): boolean {
    return this.draggable;
  }

  isSelectable(): boolean {
    return this.selectable;
  }

  setDraggable(draggable: boolean): void {
    this.draggable = draggable;
  }

  setLocation(location: Vector3D): void {
    this.location = location;
  }

  setSelectable(selectable: boolean): void {
    this.selectable = selectable;
  }

  private getTagPosition(blipPosition: Vector3D): Vector3D {
    let x: number;
    let y: number;
    if (blipPosition.getX() < TAG_WIDTH) {
      x = blipPosition.getX() + 20 + TAG_WIDTH;
    } else {
      x = blipPosition.getX() - 20 - TAG_WIDTH;
    }

    if (blipPosition.getY() < TAG_HEIGHT) {
      y = blipPosition.getY() + 20 + TAG_HEIGHT;
    } else {
      y = blipPosition.getY() - 20 - TAG_HEIGHT;
    }

    return new Vector3D(x, y, blipPosition.getZ());
  }
}
