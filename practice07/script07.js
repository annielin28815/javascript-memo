// *全域變數
// window -> 一整個瀏覽器的操作
// document -> 拿檔案裡的某個標籤

window.addEventListener('load', function () {
  const p1 = document.getElementById('title')
  // 插入文字
  p1.innerText = "點點看吧"

  const b1 = document.getElementById('btn')


  b1.addEventListener('click', function () {
    console.log('點下去了')
  })

  const box1 = document.getElementById('box')
  // 改變原本的HTML結構
  box1.innerHTML = '<p>Test</p>'

  const in1 = document.getElementById('input1')
  // keyup -> 鍵盤按下去彈起來的意思，每打一次會出現一次
  in1.addEventListener('keyup', function (e) {
    console.log('e.target.value', e.target.value)
  })
  
})