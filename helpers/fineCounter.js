'use strict'

// let days = 3
// let out_date = new Date('2017-08-22')
// let in_date = new Date('2018-08-30') 

let outDate = (out_date) => {
  let outDay = out_date.setUTCMilliseconds(0);
  return new Date (outDay);
}


let dueDate = (days, out_date) => {
  let addedDay = days * 1000 * 3600 * 24;
  let milliOut = out_date.setUTCMilliseconds(0);
  let dueDay = new Date(milliOut + addedDay)
  return dueDay;
}


let inDate = (in_date) => {
  let inDay = in_date.setUTCMilliseconds(0);
  return new Date (inDay);
}


let fine = (days, out_date, in_date) => {
  let d = dueDate(days, out_date);
  let i = inDate(in_date);
  let denda = 1000;
  

  let timeDiff = Math.abs(i.getTime() - d.getTime());
  let diffDays = Math.
  ceil(timeDiff / (1000 * 3600 * 24)); 
  
  return diffDays * denda;
}

// console.log(outDate(out_date))
// console.log(inDate(in_date));
// console.log(dueDate(days, out_date));
// console.log(fine(days, out_date, in_date));
console.log(outDate(new Date()))


module.exports = {
  dueDate,
  outDate,
  inDate,
  fine
}


/*
var date1 = new Date("1997-02-22");
var date2 = new Date("1997-03-22");
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.
ceil(timeDiff / (1000 * 3600 * 24)); 
console.log(diffDays);
*/