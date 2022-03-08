const fn01 = function (x){
  return x * x;
}

const fn02 = (x) => {
  return x * x;
}

const fn03 = (x) => x * x

console.log(fn01(3));
console.log(fn02(3));
console.log(fn03(3));

const eventObj = {
  name:'Birthday Party',
  printGuestList01 : function(){
    console.log("Guest list for " + this.name)
  },
  printGuestList02 : () => {
    console.log("Guest list for " + this.name)
  }
}

eventObj.printGuestList01();
eventObj.printGuestList02();