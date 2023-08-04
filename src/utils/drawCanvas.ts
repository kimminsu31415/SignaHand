import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { HAND_CONNECTIONS, Results, NormalizedLandmark, NormalizedLandmarkList } from "@mediapipe/hands";


export const drawCanvas = (ctx: CanvasRenderingContext2D, results: Results, coordList: { x: number; y: number }[]) => {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;

  let x : number;
  let y : number;
  const indexLandmarkList : NormalizedLandmarkList = [];

   // 손 동작 모드 : move, draw, done
  let mode;
   // 손가락 상태 판단을 위한 변수
  let index_finger;
  let middle_finger;
  let ring_finger;

  // 두 점 거리 계산 함수
  const calculateDistance = (p1: NormalizedLandmark, p2: NormalizedLandmark): number => {
    const deltaX = p2.x - p1.x;
    const deltaY = p2.y - p1.y;
    const distance= Math.sqrt(deltaX * deltaX + deltaY * deltaY );
    return distance;
  }


  ctx.save();
  // canvas의 좌우 반전
  ctx.scale(-1, 1);
  ctx.translate(-width, 0);
  // 캔버스에 웹캠 스트림으로부터 받은 이미지를 그린다.
  // ctx.drawImage(results.image, 0, 0, width, height);

  // 손의 랜드마크 그리기
  if (results.multiHandLandmarks) {
    for (const handLandmarks of results.multiHandLandmarks) {
      if (handLandmarks[8]) {
        // console.log("검지손가락",handLandmarks[8].x);
        x = handLandmarks[8].x * 1280;
        y = handLandmarks[8].y * 720;
        if (coordList.length >= 2) {
          x = coordList[coordList.length - 1].x + (x - coordList[coordList.length - 1].x)/4;
          y = coordList[coordList.length - 1].y + (y - coordList[coordList.length - 1].y)/4;
          console.log("check",x,y);
        }
        coordList.push({x, y})
        indexLandmarkList.push(handLandmarks[8])

        // 손가락을 접은 경우 true
        index_finger = calculateDistance(handLandmarks[8], handLandmarks[0]) < calculateDistance(handLandmarks[5], handLandmarks[0]);
        middle_finger = calculateDistance(handLandmarks[12], handLandmarks[0]) < calculateDistance(handLandmarks[9], handLandmarks[0]);
        ring_finger = calculateDistance(handLandmarks[16], handLandmarks[0]) < calculateDistance(handLandmarks[13], handLandmarks[0]);
        if (!index_finger && !middle_finger && !ring_finger){
          mode = "move";
        }else if (!index_finger && middle_finger){
          mode = "done";
        }else if (!index_finger && !middle_finger){
          mode = "draw";
        }
      }
      // 골격 그리기
      // drawConnectors(ctx, landmarks, HAND_CONNECTIONS, {
      //   color: "#FFFFFF",
      //   lineWidth: 5,
      // });

      console.log(mode);

      // 이동 모드
      if (mode === "move"){
        ctx.fillStyle = '#FFF';
        ctx.fillRect(0, 0, width, height);
        // 각 랜드마크 그리기
        drawLandmarks(ctx, indexLandmarkList, {
          color: "#000000",
          lineWidth: 1,
          radius: 2,
        });
      }
      
      // 그리기 모드
      else if (mode === "draw"){
        if (coordList.length >= 2) {
          ctx.beginPath();
          ctx.moveTo(coordList[coordList.length - 2].x, coordList[coordList.length - 2].y);
          ctx.lineTo(coordList[coordList.length - 1].x, coordList[coordList.length - 1].y);
          ctx.lineWidth = 3;
          ctx.strokeStyle = '#000000';
          ctx.stroke();
          // console.log(coordList[coordList.length-1]);
        }
      }
      else{
        console.log("done");
      }
      
    }
  }
  ctx.restore();
};