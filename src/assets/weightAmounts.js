let roundingNumber = 2.5;



let weightAmounts = {
  squat: {
    reps: 12,
    weight: 200,
    estimatedMax() {
      return (roundingNumber * (Math.ceil((weightAmounts.squat.reps * weightAmounts.squat.weight * 0.03333 + weightAmounts.squat.weight) / roundingNumber)));
    }

  },
  bench: {
    reps: 10,
    weight: 195,
    estimatedMax() {
      return (roundingNumber * (Math.ceil((weightAmounts.bench.reps * weightAmounts.bench.weight * 0.03333 + weightAmounts.bench.weight) / roundingNumber)));
    }
  },
  deadLift: {
    reps: 11,
    weight: 215,
    estimatedMax() {
      return (roundingNumber * (Math.ceil((weightAmounts.deadLift.reps * weightAmounts.deadLift.weight * 0.03333 + weightAmounts.deadLift.weight) / roundingNumber)));
    }
  },
  press: {
    reps: 2,
    weight: 152,
    estimatedMax() {
      return (roundingNumber * (Math.ceil((weightAmounts.press.reps * weightAmounts.press.weight * 0.03333 + weightAmounts.press.weight) / roundingNumber)));
    }
  }

}

export {roundingNumber, weightAmounts}