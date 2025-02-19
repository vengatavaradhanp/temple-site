// import React from "react";
// // import Spinner from 'react-bootstrap/Spinner';
// import { TempleLoader } from "../assets/assetsSvg";
// import Sun from "../assets/sun.png";

// const Loader: React.FC = () => {
//   return (
//     <div style={{ display: "grid" }}>
//       <div className="text-center absolute h-50">
//         <div className="sun-wrapper">
//           <img src={Sun} alt="Sun" className="sun-icon" />
//         </div>
//         <div className="temple-icon-wrapper ">
//           <TempleLoader />
//         </div>
//       </div>
//       <style>{`
//         .sun-wrapper {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           z-index: 1;
//           animation: spin 2s linear infinite;
//         }

//         .sun-icon {
//           width: 8rem;
//           height: 8rem;
//         }

//         .temple-icon-wrapper {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           z-index: 2;
//         }

//         .temple-icon {
//           width: 2rem;
//           height: 2rem;
//         }

//         @keyframes spin {
//           0% { transform: translate(-50%, -50%) rotate(0deg); }
//           100% { transform: translate(-50%, -50%) rotate(360deg); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Loader;

import React from "react";
// import Spinner from 'react-bootstrap/Spinner';
import { TempleLoader } from "../assets/assetsSvg";
import Sun from "../assets/sun.png";

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="text-center">
        <div className="sun-wrapper">
          <img src={Sun} alt="Sun" className="sun-icon" />
        </div>
        <div className="temple-icon-wrapper">
          <TempleLoader />
        </div>
      </div>
      <style>{`
        .loader-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100vw;
          position: fixed;
          top: 0;
          left: 0;
          background-color: rgba(255, 255, 255, 0.8);
          z-index: 9999;
        }

        .sun-wrapper {
          position: relative;
          animation: spin 2s linear infinite;
        }

        .sun-icon {
          width: 9em;
          height: 9em;
        }

        .temple-icon-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
        }

        .temple-icon {
          width: 2em;
          height: 2em;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
