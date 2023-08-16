/*
* export default component name: ResizeHand
* dev: sean5
* description: 손동작~~~~~~~~~~~~~
* 이 라인은 확인하면 지울 것!!!!! -> 이 컴포넌트는 어디에 위치시키면 좋을지 모르겠어서 디렉터리 구조보고 요령껏 위치시켜주세여~
* */
import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { Camera } from "@mediapipe/camera_utils";
import { Hands, Results } from "@mediapipe/hands";
import { resizeImg } from "../../../utils/resizeImg";
import { useResizeContext } from "../../../context/HandContext";



const ResizeHand: React.FC = () => {
  const webcamRef = useRef<Webcam>(null); // 웹캠과 캔버스 요소에 대한 ref 생성
  const resultsRef = useRef<Results>();  // Results : 손 인식 결과
  const { imgRef, imgRef2 } = useResizeContext();

  const ResultsListener = (results: Results) => {
    resultsRef.current = results;
    const resizeMode = resizeImg(results);
    if(imgRef.current){
      console.log("check",imgRef.current.width);
      const currentWidth = (imgRef.current.width);
      if(resizeMode == "up") {
        const newWidth = currentWidth * 1.005;
        imgRef.current.width = newWidth;
      } else if (resizeMode == "down") {
        const newWidth = currentWidth * 0.995;
        imgRef.current.width = newWidth;
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

export default ResizeHand;