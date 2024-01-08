function search() {
	window.open(
		document.getElementById("search_form").getAttribute("action_e") +
			" " +
			document.getElementById("search_value").value
	);
	return false;
}

let display = false;
function displayAll() {
	let elements = document.querySelectorAll(".catalogue .hidden");
	if (!display) {
		for (let elem of elements) {
			elem.style.display = "block";
			display = true;
		}
	} else {
		for (let elem of elements) {
			elem.style.display = "none";
			display = false;
		}
	}
}
// 这个文件用来防止 hexo 5.0.0 使用 "hexo clean" 命令报错。
// This file is used to prevent hexo 5.0.0 from using "hexo clean" command error.
// 在页面加载时进行重定向
window.onload = function() {
	// 重定向到指定网页
	window.location.href = "https://www.ktyhub.com";
};