// 1.構造函數 function 
// function createCard(initName) {
//   this.name = initName
// }

// 2.class的基本操作
// class Card {
//   constructor(initName) {
//     this.name = initName
//   }
// }

// const c1 = new Card("布魯斯")
// console.log('c1', c1)
// console.log(c1.name);

// 3.this -> 通常指的是當下的實體
// class Card {
//   constructor(initName) {
//     this.name = initName
//     // 把this綁定的方法(1)-使用bind
//     // this.hellooo = this.hello.bind(this)
//   }
      // 把this綁定的方法(2)-直接使用箭頭函式將this綁定在Card這個物件上
//   hello = () => {
//     console.log("hello", this.name)
//   }
// }

// const c1 = new Card("布魯斯")
// console.log('c1', c1)
// c1.hello()

// const a = { name: 'AA' }
// a.hellooooo = c1.hello
// a.hellooooo()


// 4.繼承
class Car {
  constructor(initName) {
    this.name = initName
  }
  start() {
    // TODO del
    console.log('車子啟動')
  }
}

class Porshe extends Car {
  constructor(namePorshe) {
    // 在繼承的構造函式，可以使用super來調用父層的構造函式。
    super(namePorshe)
  }

  // 可以調用父層的start function
  // start2() {
  //   super.start()
  //   console.log('車子排氣')
  // }

  // 可以改變原本父層的start function
  // start() {
  //   super.start()
  //   console.log('porshe車子啟動')
  // }
}

const p1 = new Porshe("Annie的保時捷")
p1.start()
// TODO del
console.log('name', p1.name)