import { useLayoutEffect, useRef, useState } from 'react';
import { Flare } from '../../flare/core/Flare.ts';
import { OutlinedRectangle } from '../../flare/core/elements/OutlinedRectangle.ts';
import { Vector3D } from '../../flare/core/geometry/Vector3D.ts';
import { FilledCircle } from '../../flare/core/elements/FilledCircle.ts';

export const Renderer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [flare, setFlare] = useState<Flare | null>(null);

  useLayoutEffect(() => {
    if (!canvasRef.current) return;

    if (!flare) {
      setFlare(new Flare(canvasRef.current));
      return;
    }

    const rect = new OutlinedRectangle('test', new Vector3D(10, 10, 0), 200, 100, { color: '#000', lineWidth: 1 });
    const circ = new FilledCircle('circle', 100, new Vector3D(20, 250, 0), { color: '#fff' });

    flare.addElement(rect);
    flare.addElement(circ);
    flare.renderOnce();

    return () => {
      flare.stopRender();
    };
  }, [flare]);

  return (
    <div className="w-screen h-screen">
      <canvas
        className="bg-gray-500"
        ref={canvasRef}
      />
    </div>
  );
};
