import React, { useCallback, useRef, useState } from "react";
import Header from "../../components/Header";
import Webcam from "react-webcam";

const WorkerDashboard = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  console.log("🚀 ~ WorkerDashboard ~ imgSrc:", imgSrc);
  // create a capture function
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const retake = () => {
    setImgSrc(null);
  };

  return (
    <>
      <Header title="Worker Dashboard" />

      <div className="flex justify-center bg-gray-100 p-4 items-center flex-col">
        {imgSrc ? (
          <img src={imgSrc} alt="webcam" />
        ) : (
          <Webcam
            height={600}
            width={600}
            ref={webcamRef}
            screenshotFormat="image/png"
            audio={false}
          />
        )}
        <div className="mt-6">
          {imgSrc ? (
            <div className="space-x-4">
              <button
                className="bg-blue-500 px-2 text-white cursor-pointer font-semibold text-lg"
                onClick={retake}
              >
                Retake photo
              </button>
            </div>
          ) : (
            <button
              className="bg-blue-500 px-2 text-white cursor-pointer font-semibold text-lg"
              onClick={capture}
            >
              Capture photo
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default WorkerDashboard;
