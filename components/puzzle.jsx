import { OrbitControls } from 'drei';
import { Canvas } from 'react-three-fiber';
import { MOUSE } from 'three';

import Cube, { cubes } from './cube';

const Puzzle = () => (
  <Canvas camera={{ position: [-5, 3, 7] }}>
    <ambientLight intensity={2} />
    {cubes.map((c) => (
      <Cube {...c} key={c.position.join(':')} />
    ))}
    <OrbitControls
      enablePan={false}
      mouseButtons={{
        LEFT: undefined,
        MIDDLE: MOUSE.DOLLY,
        RIGHT: MOUSE.ROTATE,
      }}
    />
  </Canvas>
);

export default Puzzle;
