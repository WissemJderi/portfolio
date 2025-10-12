"use client";
const MovingSquaresBackground = () => {
  return (
    <>
      <div className="squares-bg"></div>
      <style jsx>{`
        .squares-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image:
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 79px,
              rgba(255, 255, 255, 0.1) 79px,
              rgba(255, 255, 255, 0.1) 80px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 79px,
              rgba(255, 255, 255, 0.1) 79px,
              rgba(255, 255, 255, 0.1) 80px
            );
          background-size: 80px 80px;
          animation: moveUp 10s linear infinite;
          will-change: transform;
          z-index: 0;
        }

        @keyframes moveUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-80px);
          }
        }

        @media (max-width: 768px) {
          .squares-bg {
            background-size: 60px 60px;
          }
          @keyframes moveUp {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-60px);
            }
          }
        }
        background: linear-gradient(
          135deg,
          #0f0c29 0%,
          #302b63 50%,
          #24243e 100%
        );
      `}</style>
    </>
  );
};

export default MovingSquaresBackground;
