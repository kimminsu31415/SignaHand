import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { Camera } from "@mediapipe/camera_utils";
import { Hands, Results } from "@mediapipe/hands";
import { drawCanvas } from "../utils/drawCanvas";

const Hand = () => {
  // 웹캠과 캔버스 요소에 대한 ref 생성
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [coordList, setCoordList] = useState<{ x: number; y: number }[]>([]);
  // const [mode, setMode] = useState<string>("init");
  // Results : 손 인식 결과
  const resultsRef = useRef<Results>();




  // 검출결과（프레임마다 호출됨）

  // Hands 클래스가 랜드마크 인식 작업의 결과를 반환할 때 ResultsListener가 호출됨
  // ResultsListener 콜백 함수는 손의 랜드마크 인식 결과가 convasRef에 그려지도록 함

  const ResultsListener = (results: Results) => {
    resultsRef.current = results;

    const canvasCtx = canvasRef.current!.getContext("2d")!;
    drawCanvas(canvasCtx, results, coordList);
  };


  // 초기 설정
  // Hands 클래스 초기화
  // locateFile 함수를 사용해 웹어셈블리 파일들이 위치한 경로를 동적으로 설정
  useEffect(() => {
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
    

    // ResultsListener 함수를 등록하는 역할
    // 손 인식 결과가 발생할 때마다 ResultsListener 함수를 호출하도록 설정한다.
    hands.onResults(ResultsListener)

    // Camera 클래스를 사용해 웹캠 스트림 다루는 camera 객체 생성
    // <video> 요소에 대한 참조
    // Camera 객체의 onFrame 속성에 콜백 함수 등록. 프레임 캡처될 때마다 실행됨
    // 웹캠에서 프레임 캡처하고, 해당 프레임을 Hands 객체로 전송
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      const camera = new Camera(webcamRef.current.video!, {
        onFrame: async () => {
          await hands.send({ image: webcamRef.current!.video! });
        },
        width: 1280,
        height: 720,
      });
      camera.start();
    }

    
  },[ResultsListener]);

  /*  랜드마크들의 좌표를 콘솔에 출력 */
  const OutputData = () => {
    const results = resultsRef.current!;
    console.log(results.multiHandLandmarks);
  };

  return (
    <div>
      {/* 비디오 캡쳐 */}
      <Webcam
        audio={false}
        style={{ visibility: "hidden" }}
        width={1280}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={{ width: 1280, height: 720, facingMode: "user" }}
      />
      {/* 캔버스 */}
      <canvas
        ref={canvasRef}
        width={1280}
        height={720}
      />
      {/* 좌표 출력 */}
      <div>
        <button onClick={OutputData}>
          Output Data
        </button>
      </div>
    </div>
  );
};

export default Hand;