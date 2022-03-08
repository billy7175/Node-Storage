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
  guestList:['Harry','John','Bill'],
  printGuestList01 : function(){
    console.log("Guest list for " + this.name)
  },
  printGuestList02 : () => {
    console.log("Guest list for " + this.name)
  },
  printGuestList03 (){
    const that = this
    this.guestList.forEach(function(user){
      console.log(user + ' is attending ' + that.name, this.name);
    })
  },
  printGuestList04 (){
    // const that = this
    this.guestList.forEach((user) => {
      console.log(user + ' is attending ' + this.name);
    })
  }
}

eventObj.printGuestList01();
eventObj.printGuestList02();
eventObj.printGuestList03();
eventObj.printGuestList04();