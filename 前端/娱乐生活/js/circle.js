function circleHeaderBtn() {
  let btn = document.querySelectorAll("#cccc > div");
  btn[circleHeaderSL].setAttribute("class", "active");
  circleHeaderContent();
  circleHeader_comment();
  for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = () => {
      for (let j = 0; j < btn.length; j++) {
        btn[j].setAttribute("class", "");
      }
      btn[i].setAttribute("class", "active");
      circleHeaderSL = i;
      circleHeaderContent();
      circleHeader_comment();
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
  let circleMain1_contentsImg = document.querySelectorAll(".circleMain1_contents > img");
  let circleMain1_contentShare = document.querySelectorAll(".circleMain1_contentBtn > div:nth-child(3)");
  //评论按钮
  for (let i = 0; i < circleMain1_contentBtn.length; i++){
    circleMain1_contentBtn[i].onclick = function(){
      let aaa = document.createElement("div");
      aaa.setAttribute("id", "circleComment_main");
      document.body.appendChild(aaa);
      ajaxs("./page/circleComment.html", "circleComment_main");
      let btn = document.querySelector(".circleComment_mainAll div:nth-of-type(4)");
      btn.onclick = function (){
        document.body.removeChild(aaa);
      }
      circleComment_main.onclick = function(e){
        if(e.target.id === "circleComment_main"){
          document.body.removeChild(aaa);
        }
        return;
      }
    }
  }
  //查看用户
  for(let i = 0; i < circleMain1_contentsImg.length; i++){
    circleMain1_contentsImg[i].onclick = function(){
      let aaa = document.createElement("div");
      aaa.setAttribute("id", "circleUser_main");
      document.body.appendChild(aaa);
      ajaxs("./page/circleUser.html", "circleUser_main");
      circleUser_main.onclick = function(e){
        if(e.target.id === "circleUser_main"){
          document.body.removeChild(aaa);
        }
        return;
      }
    }
  }
  // 分享界面
  for(let i = 0; i < circleMain1_contentShare.length; i++){
    circleMain1_contentShare[i].onclick = function(){
      let aaa = document.createElement("div");
      aaa.setAttribute("id", "circleShare_main");
      document.body.appendChild(aaa);
      ajaxs("./page/circleShare.html", "circleShare_main");
      circleShare_main.onclick = function(e){
        if(e.target.id === "circleShare_main"){
          document.body.removeChild(aaa);
        }
        return;
      }
    }
  }
}