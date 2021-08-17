/**

* 压缩照片

* @param {Object} imgSrc 图片url

* @param {Object} callback 回调设置返回值

*/

export function translate(imgSrc, callback) {

	var img = new Image();

	img.src = imgSrc;

	img.onload = function() {

		var that = this;

		var h = that.height;

		// 默认按比例压缩

		var w = that.width;

		var canvas = document.createElement('canvas');

		var ctx = canvas.getContext('2d');

		var anw = document.createAttribute("width");

		anw.nodeValue = w;

		var anh = document.createAttribute("height");

		anh.nodeValue = h;

		canvas.setAttributeNode(anw);

		canvas.setAttributeNode(anh);

		ctx.drawImage(that, 0, 0, w, h);

		//压缩比例

		var quality = 0.3;

		var base64 = canvas.toDataURL('image/jpeg', quality);

		canvas = null;

		// var blob = base64ToBlob(base64);

		//                 console.log(333);
		// console.log(base64)

		//Blob对象转blob地址

		// var blobUrl = window.URL.createObjectURL(blob);

		callback(base64);

	}

}
