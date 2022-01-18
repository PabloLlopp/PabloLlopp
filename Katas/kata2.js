function specialNumber(n){
    for (let i = 0; i < n.toString().length; i++){
      if (n.toString()[i] > '5'){
        return "NOT!!";
      } 
    } return "Special!!";
  }