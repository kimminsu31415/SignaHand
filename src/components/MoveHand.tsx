import React, { useEffect, useRef } from "react";
import Webcam from "react-webcam";
import { Camera } from "@mediapipe/camera_utils";
import { Hands, Results } from "@mediapipe/hands";
import { moveImg } from "../utils/moveImg";
import { useResizeContext } from "../contexts/HandContext";



const MoveHand: React.FC = () => {
  const webcamRef = useRef<Webcam>(null); // 웹캠과 캔버스 요소에 대한 ref 생성
  const resultsRef = useRef<Results>();  // Results : 손 인식 결과
  const { imgRef } = useResizeContext();

  const ResultsListener = (results: Results) => {
    resultsRef.current = results;
    const moveCoord = moveImg(results);
    if(moveCoord != undefined){
        if(imgRef.current){
            console.log(imgRef.current.style.left);
            imgRef.current.style.left =moveCoord[0].toString()+'px';
            imgRef.current.style.top =moveCoord[1].toString()+'px';
        }
    }
  };


  useEffect(() => {
    const startCamera = async () => {
      if (webcamRef.current) {
        const hands = new Hands({
          locateFile: (file) => {
            return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
          },
        });
    
        // 손 인식 설정 옵션
        hands.setOptions({
          // selfieMode : true,
          maxNumHands: 1,
          modelComplexity: 1,
          minDetectionConfidence: 0.5,
          minTrackingConfidence: 0.5,
        });
        
        hands.onResults(ResultsListener)
    
        if (
          typeof webcamRef.current !== "undefined" &&
          webcamRef.current !== null
        ) {
          const camera = new Camera(webcamRef.current.video!, {
            onFrame: async () => {
              try {
                await hands.send({ image: webcamRef.current!.video! });
              } catch(error) {
                console.log(error);
              }
            },
            width: 1280,
            height: 720,
          });
          camera.start();
        }
      }
    }

    startCamera();
  },[ResultsListener]);


  return (
    <div>
    <Webcam
      audio={false}
      style={{ visibility: "hidden" }}
      mirrored = {true}
      width={1280}
      height={720}
      ref={webcamRef}
      screenshotFormat="image/jpeg"
      videoConstraints={{ width: 1280, height: 720, facingMode: "user" }}
    />
  </div>
  );
};

export default MoveHand;