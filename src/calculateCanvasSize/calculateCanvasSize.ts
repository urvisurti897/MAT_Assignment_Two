export default function calculateCanvasSize(
  length: string,
  width: string
) {

  const lengthNum = parseInt(length);
  const widthNum = parseInt(width);

  if (isNaN(lengthNum) || isNaN(widthNum)) {
    throw new Error("Both length and width must be valid numbers");
  }

  if (lengthNum < 0){
    throw new Error("Length should be positive");
  }

  if (widthNum < 0){
    throw new Error("Width should be positive");
  }

  return (lengthNum) * (widthNum);
}
