import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { HAND_CONNECTIONS, Results } from "@mediapipe/hands";

export const drawCanvas = (ctx: CanvasRenderingContext2D, results: Results) => {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;

  ctx.save();
  ctx.clearRect(0, 0, width, height);
  // canvas의 좌우 반전
  ctx.scale(-1, 1);
  ctx.translate(-width, 0);
  // 캔버스에 웹캠 스트림으로부터 받은 이미지를 그린다.
  ctx.drawImage(results.image, 0, 0, width, height);
  // 손의 랜드마크 그리기
  if (results.multiHandLandmarks) {
    // 골격 그리기
    for (const landmarks of results.multiHandLandmarks) {
      // drawConnectors(ctx, landmarks, HAND_CONNECTIONS, {
      //   color: "#FFFFFF",
      //   lineWidth: 5,
      // });
      // 각 랜드마크 그리기
      drawLandmarks(ctx, landmarks, {
        color: "#A374DB",
        lineWidth: 1,
        radius: 5,
      });
    }
  }
  ctx.restore();
};