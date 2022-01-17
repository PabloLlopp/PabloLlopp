function shepard(wolves){
    let wolvesReversed = wolves.reverse();
    for (let i = 0; i < wolvesReversed.length; i++){
      if (wolvesReversed.indexOf('wolf') === 0){
        return "Pls go away and stop eating my sheep";
      } else if (wolvesReversed[i + 1] === 'wolf'){
        return `Oi! Sheep number ${i + 1}! You are about to be eaten by a wolf!`;
      }
    }
  }