import { useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls, Box } from 'drei';

import cubes from '../components/cube';

const genColorMesh = (colors) => (
  <>
    {colors.map((c) => (
      <meshBasicMaterial attachArray="material" color={c} />
    ))}
  </>
);

const Cube = (props) => {
  const mesh = useRef();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <Box
      args={[1, 1, 1]}
      {...props}
      ref={mesh}
      scale={[0.9, 0.9, 0.9]}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      {genColorMesh(props.colors)}
    </Box>
  );
};

const RubiksCube = () => {
  return [
    <Canvas camera={{ position: [-5, 3, 9] }}>
      <ambientLight intensity={2} />
      {cubes.map((c) => (
        <Cube {...c} key={c.position.join(':')} />
      ))}
      <OrbitControls />
    </Canvas>,
  ];
};

export default RubiksCube;
