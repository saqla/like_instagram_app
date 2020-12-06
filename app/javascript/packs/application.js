// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")
require('jquery')

import $ from 'jquery'
import axios from 'axios'

import 'src/js/sample.js'

document.addEventListener('DOMContentLoaded', () => {
  $('.test-title').on('click', () => {
    axios.get('/')
      .then((response) => {
        console.log(response)
      })
  })
})

// $(document).ready(function(){
//   $("#upload-img").change(function(){
//     var formData = new FormData();
//     formData.append("image", $("#upload-img")[0].files[0]);
//     $.ajax({url: 'profile_url',
//             type: 'PUT',
//             processData: false,
//             contentType: false,
//             dataType : 'json',
//             data: formData
//     });
//   });
// });

// 最新
// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelector("#avatar-image").onclick = function() => {
//     const postAvatar = async function( image: File ) => {
//       const url = profile_path;
//       const data = new FormData();
//       data.append("image", image);
//       const headers = { "content-type": "multipart/form-data" };
//       const res = await axios.post(url, data, { headers });
//       return res;
//     };
//   }
// })


// document.addEventListener('DOMContentLoaded', () => {
//   $('.btn-axios').on('click', evt => {
//       console.log('axios')
//       chooseFile().then(f => {
//         const body = new FormData
//         body.append('img', f)
//         body.append('foo', 'fuga')
//         axios.post(profile, body).then((resp) => {
//           result.innerHTML = resp.data
//         })
//       })
//   })
// })

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

// var btn = document.querySelector('#upload-button')
// btn.addEventListener('click', async function() {
// 	let upload = await uploadFile();

// 	if(upload.error == 0)
// 		alert('File uploaded successful');
// 	else if(upload.error == 1)
// 		alert('File uploading failed - ' + upload.message);
// });

// // async function managing upload operation
// async function uploadFile() {
// 	// function return value
// 	let return_data = { error: 0, message: '' };

// 	try {
// 		// no file selected
// 		if(document.querySelector("#file-to-upload").files.length == 0) {
// 			throw new Error('No file selected');
// 		}
// 		else {
// 			// formdata
// 			let data = new FormData();
// 			data.append('title', 'Sample Title');
// 			data.append('file', document.querySelector("#file-to-upload").files[0]);

// 			// send fetch along with cookies
// 			let response = await fetch('/upload.php', {
// 		        method: 'POST',
// 		        credentials: 'same-origin',
// 		        body: data
// 		    });

// 	    	// server responded with http response != 200
// 	    	if(response.status != 200)
// 	    		throw new Error('HTTP response code != 200');

// 	    	// read json response from server
// 	    	// success response example : {"error":0,"message":""}
// 	    	// error response example : {"error":1,"message":"File type not allowed"}
// 	    	let json_response = await response.json();
// 	        if(json_response.error == 1)
// 	           	throw new Error(json_response.message);
// 		}
// 	}
// 	catch(e) {
// 		// catch rejected Promises and Error objects
//     	return_data = { error: 1, message: e.message };
//     }

// 	return return_data;
// }


// const imageFileField = document.getElementById("image_file");
// imageFileField.addEventListener("change", event => {
//   const files = imageFileField.files;
//   Array.from(files).forEach(file => {
//     fileUpload(file);
//   });
// });

// function fileUpload(file) {
//   Promise.resolve(file)
//     .then(fetch("/api/upload.py", { method: "POST", body: file }))
//     .then(showResult)
//     .catch(showResult);
// }

// function showResult(result) {
//   return new Promise(resolve => {
//     console.log(result);
//   });
// }
