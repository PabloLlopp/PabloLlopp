function specialNumber(n){
    if (n.toString().length === 1){
      if (n === 0 || n === 1 || n === 2 || n === 3 || n === 4 || n === 5){
        return 'Special!!';
      } else {
        return 'NOT!!'
      }
    } else {
      let numStringArr = n.toString().split('');
      for (let i = 0; i < numStringArr.length; i ++){
        if (numStringArr[i] === '0' || numStringArr[i] === '1' || numStringArr[i] === '2' || numStringArr[i] === '3' || numStringArr[i] === '4' || numStringArr[i] === '5'){
          return 'Special!!'
        } else if (numStringArr[i] !== '0' || numStringArr[i] !== '1' || numStringArr[i] !== '2' || numStringArr[i] !== '3' || numStringArr[i] !== '4' || numStringArr[i] !== '5'){
          return 'Perro!!'
        }
      }
    }
  }
    
    console.log(specialNumber(65));