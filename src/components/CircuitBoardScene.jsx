import React, { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { CanvasTexture, MathUtils, SRGBColorSpace } from "three";

const LIME = "#c9f36a";
const pins = Array.from({ length: 12 }, (_, i) => (i - 5.5) * 0.15);

function Block({
  position,
  size,
  color = "#20291a",
  glow = false,
  metalness = 0.65,
  ...props
}) {
  return (
    <mesh position={position} {...props}>
      <boxGeometry args={size} />
      <meshStandardMaterial
        color={color}
        metalness={metalness}
        roughness={0.36}
        emissive={glow ? color : "#000000"}
        emissiveIntensity={glow ? 0.8 : 0}
      />
    </mesh>
  );
}

function CoreLabel() {
  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const context = canvas.getContext("2d");
    context.fillStyle = "#25301c";
    context.fillRect(0, 0, 512, 512);
    context.strokeStyle = "#6a8447";
    context.lineWidth = 2;
    context.strokeRect(24, 24, 464, 464);
    context.fillStyle = "#d8f4a8";
    context.textAlign = "center";
    context.font = "bold 170px sans-serif";
    context.fillText("AK", 256, 280);
    context.fillStyle = "#adc589";
    context.font = "22px monospace";
    context.fillText("C U R I O S I T Y", 256, 350);
    context.font = "17px monospace";
    context.fillText("CORE_01   /   ECE", 256, 414);
    const map = new CanvasTexture(canvas);
    map.colorSpace = SRGBColorSpace;
    return map;
  }, []);
  useEffect(() => () => texture.dispose(), [texture]);
  return (
    <mesh position={[0, 0.326, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[1.27, 1.27]} />
      <meshStandardMaterial map={texture} roughness={0.5} metalness={0.3} />
    </mesh>
  );
}

function Processor({ exploded }) {
  return (
    <group position={[0, exploded ? 0.95 : 0.2, 0]}>
      <Block position={[0, 0, 0]} size={[1.92, 0.15, 1.92]} color="#485c30" />
      <Block
        position={[0, 0.13, 0]}
        size={[1.57, 0.19, 1.57]}
        color="#111a0d"
      />
      <Block
        position={[0, 0.26, 0]}
        size={[1.38, 0.12, 1.38]}
        color="#657c43"
      />
      <CoreLabel />
      {pins.map((pin, index) => (
        <group key={index}>
          {[-1, 1].map((side) => (
            <group key={side}>
              <Block
                position={[side * 1.02, -0.015, pin]}
                size={[0.25, 0.07, 0.055]}
                color="#abc77a"
              />
              <Block
                position={[pin, -0.015, side * 1.02]}
                size={[0.055, 0.07, 0.25]}
                color="#abc77a"
              />
            </group>
          ))}
        </group>
      ))}
    </group>
  );
}

function Sculpture({ active, angle, exploded }) {
  const group = useRef(null);
  const orbit = useRef(null);
  const time = useRef(0);
  const { invalidate } = useThree();
  useEffect(() => {
    invalidate();
  }, [angle, exploded, active, invalidate]);
  useFrame(({ pointer }, delta) => {
    if (!active) return;
    time.current += Math.min(delta, 0.05);
    group.current.rotation.y = MathUtils.damp(
      group.current.rotation.y,
      -0.35 + pointer.x * 0.18,
      3,
      delta,
    );
    group.current.rotation.x = MathUtils.damp(
      group.current.rotation.x,
      0.14 - pointer.y * 0.1,
      3,
      delta,
    );
    group.current.position.y = Math.sin(time.current * 0.65) * 0.08;
    orbit.current.rotation.y = time.current * 0.09;
  });
  return (
    <group ref={group} rotation={[0.14, -0.35, -0.08]}>
      <group rotation={[0, angle, 0]}>
        <Block
          position={[0, -0.23, 0]}
          size={[3.2, 0.18, 3.2]}
          color="#1d2817"
        />
        <Block
          position={[0, -0.12, 0]}
          size={[3.15, 0.035, 3.15]}
          color="#657e40"
        />
        <Block
          position={[0, -0.06, 0]}
          size={[3.2, 0.07, 3.2]}
          color="#28371e"
        />
        <Block
          position={[0, -0.43, 0]}
          size={[2.8, 0.07, 2.8]}
          color="#303d25"
        />
        <Processor exploded={exploded} />
        {pins
          .filter((_, i) => i % 2 === 0)
          .map((offset, index) => (
            <group key={index}>
              {[-1, 1].map((side) => (
                <group key={side}>
                  <Block
                    position={[side * 1.27, 0.009, offset]}
                    size={[0.51, 0.012, 0.016]}
                    color={index % 2 === 0 ? LIME : "#6f8d4c"}
                    glow={index % 2 === 0}
                  />
                  <Block
                    position={[offset, 0.009, side * 1.27]}
                    size={[0.016, 0.012, 0.51]}
                    color="#98b965"
                  />
                  <Block
                    position={[side * 1.52, 0.009, offset + side * 0.13]}
                    size={[0.016, 0.012, 0.26]}
                    color="#98b965"
                  />
                </group>
              ))}
            </group>
          ))}
        {[-1, 1].flatMap((x) =>
          [-1, 1].map((z) => (
            <mesh
              key={`${x}-${z}`}
              position={[x * 1.39, 0.007, z * 1.39]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <torusGeometry args={[0.065, 0.018, 8, 20]} />
              <meshStandardMaterial
                color="#b1c68b"
                metalness={0.7}
                roughness={0.3}
              />
            </mesh>
          )),
        )}
        {[0, 1, 2].map((index) => (
          <group key={index} position={[-1.33, 0.07, -0.55 + index * 0.45]}>
            <Block size={[0.17, 0.13, 0.23]} color="#0b1008" />
            <Block
              position={[0, 0.07, 0]}
              size={[0.08, 0.018, 0.12]}
              color={LIME}
              glow
            />
          </group>
        ))}
        {[0, 1, 2].map((index) => (
          <mesh key={index} position={[0.5 - index * 0.42, 0.08, -1.32]}>
            <cylinderGeometry args={[0.09, 0.09, 0.18, 16]} />
            <meshStandardMaterial
              color="#98a687"
              metalness={0.85}
              roughness={0.26}
            />
          </mesh>
        ))}
        <group
          position={[exploded ? 1.9 : 1.5, 1.1, -1.3]}
          rotation={[0.2, 0.3, 0.2]}
        >
          <Block size={[0.38, 0.38, 0.38]} color="#879e5c" />
          <Block
            position={[0, 0.2, 0]}
            size={[0.28, 0.015, 0.28]}
            color={LIME}
            glow
          />
        </group>
        <group position={[-1.9, 0.6, 0.9]} rotation={[0.3, -0.3, -0.2]}>
          <Block size={[0.32, 0.32, 0.32]} color="#607543" />
        </group>
      </group>
      <group ref={orbit}>
        <mesh rotation={[0.06, 0, 0.15]} position={[0, -0.05, 0]}>
          <torusGeometry args={[2.45, 0.009, 6, 100]} />
          <meshBasicMaterial color="#83975c" transparent opacity={0.55} />
        </mesh>
        <mesh
          rotation={[Math.PI / 2 + 0.12, 0.15, 0.1]}
          position={[0, -0.2, 0]}
        >
          <torusGeometry args={[2.7, 0.008, 6, 100]} />
          <meshBasicMaterial color="#b2ce7e" transparent opacity={0.38} />
        </mesh>
        <mesh position={[2.45, -0.05, 0]}>
          <sphereGeometry args={[0.055, 12, 12]} />
          <meshBasicMaterial color={LIME} />
        </mesh>
        <mesh position={[-2.65, 0.02, 0]}>
          <sphereGeometry args={[0.035, 10, 10]} />
          <meshBasicMaterial color={LIME} />
        </mesh>
      </group>
    </group>
  );
}

function ContextMonitor({ onLost }) {
  const { gl } = useThree();
  useEffect(() => {
    const canvas = gl.domElement;
    const lost = (event) => {
      event.preventDefault();
      onLost();
    };
    canvas.addEventListener("webglcontextlost", lost);
    return () => canvas.removeEventListener("webglcontextlost", lost);
  }, [gl, onLost]);
  return null;
}

export default function CircuitBoardScene({
  active = true,
  angle = 0,
  exploded = false,
}) {
  const [lost, setLost] = React.useState(false);
  const fallback = (
    <div className="circuit-fallback">
      <span className="circuit-fallback-chip">
        AK
        <br />
        <small>CORE / 01</small>
      </span>
    </div>
  );
  if (lost) return fallback;
  return (
    <Canvas
      camera={{ position: [5, 5.4, 7.2], fov: 39 }}
      dpr={[1, 1.5]}
      frameloop={active ? "always" : "demand"}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      fallback={fallback}
    >
      <ambientLight intensity={1.4} />
      <hemisphereLight args={["#dae9bd", "#26351b", 2]} />
      <directionalLight position={[1, 7, 4]} intensity={3.6} color="#e5f7c7" />
      <directionalLight position={[-5, 2, -3]} intensity={3} color="#a0c860" />
      <pointLight position={[1, 2, 1]} intensity={6} color={LIME} />
      <Sculpture active={active} angle={angle} exploded={exploded} />
      <ContextMonitor onLost={() => setLost(true)} />
    </Canvas>
  );
}
