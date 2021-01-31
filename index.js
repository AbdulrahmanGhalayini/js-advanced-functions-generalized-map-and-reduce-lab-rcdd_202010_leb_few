<<<<<<< HEAD
=======


function mapToNegativize(s){
  return s.map(x => x*-1);
}


function mapToNoChange(s){
  return s.map(x => x);
}

function mapToDouble(s){
  return s.map(x => x*2);
}

function mapToSquare(s){
  return s.map(x => x*x);
}



function reduceToTotal(s , a=0){
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return s.reduce(reducer , a);
}


function reduceToAllTrue(s ){

  return s.reduce((acc, val) => {
  return val = val ? true : false;
}); 
}


function reduceToAnyTrue(s ){

  return s.reduce((acc, val) => {
    console.log("acc= "+ acc+ " val= "+ val);
  return val || acc ? true : false;
}); 
}



function reduceToTotal(s , a=){
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return s.reduce(reducer , a);
}
>>>>>>> e5b752208e6355ff7c31720dfc69e2b328af0bda
