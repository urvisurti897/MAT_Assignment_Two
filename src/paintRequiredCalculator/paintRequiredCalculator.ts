export default function paintRequiredCalculator(area: number, coveragePerLiter: number): number {

  if (area == 0){
    throw new Error("Area should not be zero");
  }

  if (coveragePerLiter == 0){
    throw new Error("Coverage Per Liter should not be zero");
  }

  if (area < 0){
    throw new Error("Area should be positive");
  }

  if (coveragePerLiter < 0){
    throw new Error("Coverage Per Liter should be positive");
  }
  
  return area / coveragePerLiter;
}
