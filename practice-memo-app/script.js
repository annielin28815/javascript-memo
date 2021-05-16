const title = document.getElementById('title')
const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addedBtn = document.getElementById('addedBtn')
const deletedBtn = document.getElementById('deletedBtn')
const list = document.getElementById('list')

const listContent = []

// 把功能包成一個class，讓新增和刪除共用，再render出去。（把很多的功能包裝起來時可以用） 

// class RenderFeature{
// 功能一
//   append() {

//   }
//  功能二
//   render() {
//     // 渲染頁面的list
//     let htmlStr = ''
  
//     listContent.forEach(function (item) {
//       htmlStr = htmlStr + `
//       <div class="item">
//         <div>
//           <p>內容：${item.content}</p>
//           <p>時間：${item.date} ${item.time}</p>
//         </div>
//       </div>
//       `
//     })
  
//     list.innerHTML = htmlStr
//   }
// }


// 把功能包成一個function，讓新增和刪除共用，再render出去。（把渲染的邏輯包裝起來，節省程式碼） 
function render() {
  // 渲染頁面的list
  let htmlStr = ''

  // 透過迴圈的方式，把陣列裡的東西逐一遍歷出來。
  // 所以原本空的陣列，會因為丟進去的東西有幾個，就跑幾次。
  listContent.forEach(function (item) {
    // 反引號稱做模版語法，並可透過$號放入變數
    htmlStr = htmlStr + `
    <div class="item">
      <div>
        <p>標題：${item.title}</p>
        <p>內容：${item.content}</p>
        <p>時間：${item.date} ${item.time}</p>
      </div>
    </div>
    `
  })

  // 會取代原本HTML的內容
  list.innerHTML = htmlStr
}

// const r1 = new RenderFeature()

addedBtn.addEventListener('click', function () {

  // push ->  是從後面推東西進去（越新越後面）
  // unshift -> 是從前面推東西進去（越新越前面）
  listContent.unshift({
    title: title.value,
    content: content.value,
    date: date.value,
    time: time.value
  })

  render()
  
})

deletedBtn.addEventListener('click', function () {

  // pop ->  是從後面推東西進去（越新越後面）
  // shift -> 是從前面推東西進去（越新越前面）
  listContent.shift()

  render()
})
