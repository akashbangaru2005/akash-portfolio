import React, {
  Component,
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";
import { RotateCcw, RotateCw, Layers3 } from "lucide-react";

const CircuitBoardScene = lazy(() => import("./CircuitBoardScene"));

function BoardFallback() {
  return (
    <div
      className="circuit-fallback"
      role="img"
      aria-label="Sculptural circuit board"
    >
      <span className="circuit-fallback-chip">
        AK
        <br />
        <small>CORE / 01</small>
      </span>
    </div>
  );
}

class SceneBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? <BoardFallback /> : this.props.children;
  }
}

export default function CircuitBoardHero({ active = true }) {
  const panel = useRef(null);
  const [visible, setVisible] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);
  const [angle, setAngle] = useState(0);
  const [exploded, setExploded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting),
    );
    observer.observe(panel.current);
    const visibility = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);

  return (
    <div className="circuit-panel" ref={panel}>
      <div className="scene-halo" />
      <div className="scene-label scene-label-one">
        <div>
          <strong>THE CURIOSITY CORE</strong>
          <small>HARDWARE + SOFTWARE + A LITTLE MAGIC</small>
        </div>
      </div>
      <div
        className="circuit-viewport"
        role="img"
        aria-label="Interactive 3D circuit sculpture with floating processor layers, luminous traces, and orbital rings"
      >
        <SceneBoundary>
          <Suspense fallback={<BoardFallback />}>
            <CircuitBoardScene
              active={active && visible && pageVisible}
              angle={angle}
              exploded={exploded}
            />
          </Suspense>
        </SceneBoundary>
      </div>
      <div className="scene-label scene-label-two">
        <div>
          ENGINEERED TO EXPLORE<small>AK / CORE_01</small>
        </div>
      </div>
      <div className="scene-controls">
        <span>MOVE TO EXPLORE</span>
        <button
          type="button"
          onClick={() => setAngle((value) => value - Math.PI / 6)}
          aria-label="Rotate sculpture left"
        >
          <RotateCcw size={13} />
        </button>
        <button
          type="button"
          onClick={() => setAngle((value) => value + Math.PI / 6)}
          aria-label="Rotate sculpture right"
        >
          <RotateCw size={13} />
        </button>
        <button
          type="button"
          onClick={() => setExploded(!exploded)}
          aria-label="Separate processor layers"
          aria-pressed={exploded}
        >
          <Layers3 size={13} />
        </button>
        <button
          type="button"
          onClick={() => {
            setAngle(0);
            setExploded(false);
          }}
          aria-label="Reset sculpture"
        >
          ↺
        </button>
      </div>
    </div>
  );
}
