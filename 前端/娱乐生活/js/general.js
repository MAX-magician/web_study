// 局部刷新 同步
function ajaxs(urls, maindiv) {
  var divs = document.getElementById(maindiv);
  var xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.open("get", urls, false, xmlhttp);
  xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  const params = "THEMEID=" + urls;
  xmlhttp.send(params);
  var responseText = xmlhttp.responseText;
  divs.innerHTML = responseText;
}