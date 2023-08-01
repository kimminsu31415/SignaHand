import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { HAND_CONNECTIONS, Results, NormalizedLandmark, NormalizedLandmarkList } from "@mediapipe/hands";


export const drawCanvas = (ctx: CanvasRenderingContext2D, results: Results, coordList: { x: number; y: number }[], mode: string) => {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;

  console.log("drawCanvas", mode);

  // const [mode, setMode] = useState<string>("init");

  // const coordList : {x : number; y : number}[] = [];
  let x : number;
  let y : number;
  const indexLandmarkList : NormalizedLandmarkList = [];
  // let mode;

  // 좌표
  class Point {
    constructor(public x: number, public y: number) {}
  }

  // 두 점 거리 계산 함수
  const calculateDistance = (p1: NormalizedLandmark, p2: NormalizedLandmark): number => {
    const deltaX = p2.x - p1.x;
    const deltaY = p2.y - p1.y;
    const distance= Math.sqrt(deltaX * deltaX + deltaY * deltaY );
    return distance;
  }



  ctx.save();
  // ctx.clearRect(0, 0, width, height);
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
        coordList.push({x, y})
        indexLandmarkList.push(handLandmarks[8])

        // if (calculateDistance(handLandmarks[12], handLandmarks[0]) < calculateDistance(handLandmarks[12], handLandmarks[9])){
        //   mode = "draw";
        // }else {
        //   mode = "move";
        // }
        // console.log(coordList);
      }
      // 골격 그리기
      // drawConnectors(ctx, landmarks, HAND_CONNECTIONS, {
      //   color: "#FFFFFF",
      //   lineWidth: 5,
      // });


      if (mode === "move"){
        ctx.clearRect(0, 0, width, height);
        // 각 랜드마크 그리기
        drawLandmarks(ctx, indexLandmarkList, {
          color: "#A374DB",
          lineWidth: 1,
          radius: 5,
        });
      }
      

      // 그리기
      if (mode === "draw"){
        if (coordList.length >= 2) {
          ctx.beginPath();
          ctx.moveTo(coordList[coordList.length - 2].x, coordList[coordList.length - 2].y);
          ctx.lineTo(coordList[coordList.length - 1].x, coordList[coordList.length - 1].y);
          ctx.lineWidth = 3;
          ctx.strokeStyle = 'yellow';
          ctx.stroke();
          // console.log(coordList[coordList.length-1]);
        }
      }
      
    }
  }

  
  
  ctx.restore();
};