import React from "react";
// import Spinner from 'react-bootstrap/Spinner';
import { TempleLoader } from "../assets/assetsSvg";
import Sun from "../assets/sun.png";

const Loader: React.FC = () => {
  return (
    <div style={{ display: "grid" }}>
      <div className="text-center position-relative">
        <div className="sun-wrapper">
          <img src={Sun} alt="Sun" className="sun-icon" />
        </div>
        <div className="temple-icon-wrapper ">
          <TempleLoader />
        </div>
      </div>
      <style>{`
        .sun-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
          animation: spin 2s linear infinite;
        }

        .sun-icon {
          width: 8rem;
          height: 8rem;
        }

        .temple-icon-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
        }

        .temple-icon {
          width: 2rem;
          height: 2rem;
        }

        @keyframes spin {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
