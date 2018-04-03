export function calcTime(value){

  let seconds = value % 60;
  let remainMinutes = Math.floor(value / 60) ;
  let minutes =remainMinutes % 60;
  let hours = Math.floor(remainMinutes / 60);

  return (z(hours) +':'+ z(minutes)+':'+z(seconds));
}


function z(n){
  return (n<10? '0' : '') + n;
}



export function clacMinutes(value){
  let remainMinutes = Math.floor(value / 60) ;
  return remainMinutes % 60;
}


export function calcSeconds(value){
  return value % 60;
}
