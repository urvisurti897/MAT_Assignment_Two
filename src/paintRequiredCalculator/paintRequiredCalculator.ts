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

  if (area % 1 !== 0){
    throw new Error("Area should not be decimal number");
  }

  if (coveragePerLiter % 1 !== 0){
    throw new Error("Coverage Per Liter should not be decimal number");
  }

  return area / coveragePerLiter;
}
