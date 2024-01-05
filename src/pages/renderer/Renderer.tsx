import { useLayoutEffect, useRef, useState } from 'react';
import { Flare } from '../../flare/core/Flare.ts';
import { Vehicle } from '../../flare/custom-elements/vehicle/Vehicle.ts';
import { Vector3D } from '../../flare/core/geometry/Vector3D.ts';

export const Renderer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [flare, setFlare] = useState<Flare | null>(null);

  useLayoutEffect(() => {
    if (!canvasRef.current) return;

    if (!flare) {
      setFlare(new Flare(canvasRef.current));
      return;
    }

    const aircraft_one = new Vehicle(
      window.crypto.randomUUID().toString(),
      {
        callsign: 'ANZ1',
        altitude: 23000,
        verticalSpeed: 0,
        selectedAltitude: 23000,
        assignedAltitude: 23000,
        heading: 170,
        assignedHeading: 170,
        speed: 290,
        assignedSpeed: 'FREE',
      },
      new Vector3D(600, 600, 23000)
    );

    const aircraft_two = new Vehicle(
      window.crypto.randomUUID().toString(),
      {
        callsign: 'ANZ90',
        altitude: 6700,
        verticalSpeed: -1000,
        selectedAltitude: 5000,
        assignedAltitude: 5000,
        heading: 180,
        assignedHeading: 180,
        speed: 250,
        assignedSpeed: 250,
      },
      new Vector3D(400, 400, 6700)
    );

    flare.setElements([aircraft_one, aircraft_two]);

    flare.startRender();

    return () => {
      flare.stopRender();
    };
  }, [flare]);

  return (
    <div className="w-screen h-screen">
      <canvas
        className="bg-[#000]"
        ref={canvasRef}
      />
    </div>
  );
};
