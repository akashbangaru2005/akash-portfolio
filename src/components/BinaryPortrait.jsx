import React, { useEffect, useState } from "react";
import BinaryPortrait from "../components/BinaryPortrait";
const generateBinary = (length = 220) => {
  return Array.from({ length }, () =>
    Math.random() > 0.5 ? "1" : "0"
  ).join("");
};

const BinaryPortrait = () => {
  const [binary, setBinary] = useState(generateBinary());

  useEffect(() => {
    const interval = setInterval(() => {
      setBinary(generateBinary());
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="qr-portrait-wrapper">

      {/* OUTER DIGITAL FRAME */}
      <div className="qr-frame">

        {/* CORNER HUD */}
        <span className="scan-corner top-left" />
        <span className="scan-corner top-right" />
        <span className="scan-corner bottom-left" />
        <span className="scan-corner bottom-right" />

        {/* PHOTO CONTAINER */}
        <div className="scan-photo">

          {/* ORIGINAL PHOTO */}
          <img
            src="/assets/profile.jpg"
            alt="Akash"
            className="portrait-image"
          />

          {/* DARK DIGITAL OVERLAY */}
          <div className="digital-overlay" />

          {/* BINARY MATRIX */}
          <div className="binary-matrix">
            {binary}
          </div>

          {/* HORIZONTAL DIGITAL LINES */}
          <div className="scan-lines" />

          {/* MAIN SCANNING BEAM */}
          <div className="scanner-beam">
            <div className="scanner-glow" />
          </div>

          {/* GLITCH LAYERS */}
          <div className="glitch-layer glitch-one" />
          <div className="glitch-layer glitch-two" />

          {/* SCAN TEXT */}
          <div className="scan-status">
            <span className="status-dot" />
            SCANNING IDENTITY...
          </div>

          {/* TOP DATA */}
          <div className="scan-data scan-data-top">
            <span>AKASH_01</span>
            <span>ECE // AI</span>
          </div>

          {/* BOTTOM DATA */}
          <div className="scan-data scan-data-bottom">
            <span>01001011 01000001</span>
            <span>ONLINE</span>
          </div>

        </div>

        {/* SIDE BINARY */}
        <div className="binary-side binary-side-left">
          01010100
          <br />
          10101001
          <br />
          01100110
          <br />
          11010010
        </div>

        <div className="binary-side binary-side-right">
          10101010
          <br />
          01001101
          <br />
          11001001
          <br />
          00110110
        </div>

      </div>

    </div>
  );
};

export default BinaryPortrait;