import React, { useMemo } from "react";

const PROGRAMMING_LANGUAGES = [
  "C",
  "C++",
  "C#",
  "JAVA",
  "PYTHON",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "GO",
  "RUST",
  "PHP",
  "RUBY",
  "SWIFT",
  "KOTLIN",
  "DART",
  "R",
  "MATLAB",
];

const NAME = "B AKASH";

const textToBinary = (text) => {
  return text
    .split("")
    .map((char) => {
      if (char === " ") return "   ";

      return char
        .charCodeAt(0)
        .toString(2)
        .padStart(8, "0");
    })
    .join(" ");
};

const BINARY_NAME = textToBinary(NAME);

const createCodeLines = () => {
  const lines = [];

  for (let i = 0; i < 80; i++) {
    const language =
      PROGRAMMING_LANGUAGES[
        Math.floor(Math.random() * PROGRAMMING_LANGUAGES.length)
      ];

    const binary = Math.random() > 0.35;

    if (binary) {
      lines.push(
        `${BINARY_NAME} // ${language}`
      );
    } else {
      const codeSamples = [
        `${language} :: B_AKASH`,
        `${language} > AKASH`,
        `// ${language} :: B AKASH`,
        `const AKASH = "${language}"`,
        `AKASH_${language}()`,
        `B_AKASH // ${language}`,
      ];

      lines.push(
        codeSamples[
          Math.floor(Math.random() * codeSamples.length)
        ]
      );
    }
  }

  return lines;
};

const CodeMatrixBackground = () => {
  const columns = useMemo(() => {
    return Array.from({ length: 18 }, (_, columnIndex) => {
      const lines = createCodeLines();

      return {
        id: columnIndex,
        lines,
        duration: 18 + Math.random() * 20,
        delay: -(Math.random() * 25),
        opacity: 0.08 + Math.random() * 0.12,
        left: `${columnIndex * 5.8 - 2}%`,
      };
    });
  }, []);

  return (
    <div
      className="code-matrix-background"
      aria-hidden="true"
    >

      {/* Main green atmosphere */}
      <div className="matrix-glow matrix-glow-one" />
      <div className="matrix-glow matrix-glow-two" />

      {/* Digital grid */}
      <div className="matrix-grid" />

      {/* Falling code columns */}
      <div className="matrix-columns">
        {columns.map((column) => (
          <div
            className="matrix-column"
            key={column.id}
            style={{
              left: column.left,
              animationDuration: `${column.duration}s`,
              animationDelay: `${column.delay}s`,
              opacity: column.opacity,
            }}
          >
            {column.lines.map((line, index) => (
              <div
                className="matrix-line"
                key={`${column.id}-${index}`}
              >
                {line}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Large encoded name */}
      <div className="matrix-name matrix-name-one">
        {BINARY_NAME}
      </div>

      <div className="matrix-name matrix-name-two">
        {BINARY_NAME}
      </div>

      <div className="matrix-name matrix-name-three">
        {BINARY_NAME}
      </div>

      {/* Programming language labels */}
   <div className="matrix-language language-one">C</div>
<div className="matrix-language language-two">C++</div>
<div className="matrix-language language-three">C#</div>
<div className="matrix-language language-four">JAVA</div>
<div className="matrix-language language-five">PYTHON</div>

<div className="matrix-language language-six">JAVASCRIPT</div>
<div className="matrix-language language-seven">TYPESCRIPT</div>
<div className="matrix-language language-eight">GO</div>
<div className="matrix-language language-nine">RUST</div>
<div className="matrix-language language-ten">PHP</div>

<div className="matrix-language language-eleven">RUBY</div>
<div className="matrix-language language-twelve">SWIFT</div>
<div className="matrix-language language-thirteen">KOTLIN</div>
<div className="matrix-language language-fourteen">DART</div>
<div className="matrix-language language-fifteen">R</div>
<div className="matrix-language language-sixteen">MATLAB</div>

      {/* Scanning horizontal line */}
      <div className="matrix-scan-line" />

      {/* Dark readability overlay */}
      <div className="matrix-vignette" />

    </div>
  );
};

export default CodeMatrixBackground;