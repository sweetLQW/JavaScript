/**
 * @auther: 刘倩文<18511753482@163.com>
 * @date: 2018-11-20
 * @params：{number} designWidth  设计稿的宽度
 * @params：{number} count 1rem换算成多少px
 */
(function (designWidth, count) {
	function setFontSize() {
		var ele = document.getElementsByTagName('html')[0];
  		ele.style.fontSize = window.innerWidth/designWidth*count + 'px';
	}
	setFontSize();
	window.onresize = setFontSize;
})(1080, 100);