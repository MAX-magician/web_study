function circleHeaderBtn() {
  let btn = document.querySelectorAll("#cccc > div");
  btn[circleHeaderSL].setAttribute("class", "active");
  circleHeaderContent();
  circleHeader_comment()
  for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = () => {
      for (let j = 0; j < btn.length; j++) {
        btn[j].setAttribute("class", "");
      }
      btn[i].setAttribute("class", "active");
      circleHeaderSL = i;
      circleHeaderContent();
    };
  }
}
function circleHeaderContent(){
  if(circleHeaderSL === 0) {
    ajaxs("./page/circleMainDiv1.html", "circleMainDiv");
  }else{
    ajaxs("./page/circleMainDiv2.html", "circleMainDiv");
  }
}
function circleHeader_comment(){
  let circleMain1_contentBtn = document.querySelectorAll(".circleMain1_contentBtn > div:nth-child(2)");
  for (let i = 0; i < circleMain1_contentBtn.length; i++){
    circleMain1_contentBtn[i].onclick = function(){
      let aaa = document.createElement("div");
      let aaa1 = document.createElement("div");
      aaa.setAttribute("class", "circleComment_main");
      aaa1.setAttribute("class", "circleComment_mainList");
      document.body.appendChild(aaa);
    }
  }
}