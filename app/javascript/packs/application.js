// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require('jquery')

import $ from 'jquery'

import 'src/js/sample.js'

document.addEventListener('DOMContentLoaded', () => {
  console.log('aaaaaa')
  $('.test-title').on('click', () => {
    window.alert('CLICKED')
  })
})

// jqueryボタンクリック
// var btn1 = document.getElementById('btnJquery')
// btn1.addEventListener('click', () => {
//   console.log('jquery')
  // chooseFile().then(f => {
  //   const body = new FormData()
  //   body.append('img', f)
  //   body.append('foo', 'fuga')
  //   $.ajax({
  //     url: 'file.php',
  //     method: 'post',
  //     data: body,
  //     success: data => {
  //       result.innerHTML = data
  //     },
  //     contentType: false,
  //     processData: false,
  //   })
  // })
// })

// -- 幻時刻表示 --
// document.addEventListener('DOMContentLoaded', () => {
//   $('.test-title').on('click', () => {
//     var date = new Date();
//     const utc = date.toUTCString();
//     const g = utc.replace('GMT', '');
//     const gDate = new Date(g);
//     const hours = gDate.getHours();
//     const time = gDate.setHours(hours + 9);
//     const strTime = strTime.toString();

//     const jTime = strTime.split(' '); ←split出来ない

//     window.alert(jTime[4]);
//   })
// })

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
