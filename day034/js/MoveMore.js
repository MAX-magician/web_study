//找对象
var more_remarks = document.querySelectorAll("div.remark");
var more_areas = document.querySelectorAll("div.area");
//创建变量
var more_areaLi = [];

//家电组
more_remarks[1].onmouseover = function (e) {
  if ("href" in e.target) {
    if (e.target.innerHTML === "热门") {
      aaa(0, 1, 1, 2, 1);
    } else if (e.target.innerHTML === "电视影音") {
      aaa(1, 1, 1, 2, 2);
    }
  }
};
//智能组
more_remarks[2].onmouseover = function (e) {
  if ("href" in e.target) {
    if (e.target.innerHTML === "热门") {
      aaa(0, 2, 3, 5, 3);
    } else if (e.target.innerHTML === "安防") {
      aaa(1, 2, 3, 5, 4);
    } else if (e.target.innerHTML === "出行") {
      aaa(2, 2, 3, 5, 5);
    }
  }
};
//搭配组
more_remarks[3].onmouseover = function (e) {
  if ("href" in e.target) {
    if (e.target.innerHTML === "热门") {
      aaa(0, 3, 6, 7, 6);
    } else if (e.target.innerHTML === "耳机音箱") {
      aaa(1, 3, 6, 7, 7);
    }
  }
};
//配件组
more_remarks[4].onmouseover = function (e) {
  if ("href" in e.target) {
    if (e.target.innerHTML === "热门") {
      aaa(0, 4, 8, 9, 8);
    } else if (e.target.innerHTML === "充电器") {
      aaa(1, 4, 8, 9, 9);
    }
  }
};
//周边组
more_remarks[5].onmouseover = function (e) {
  if ("href" in e.target) {
    if (e.target.innerHTML === "热门") {
      aaa(0, 5, 10, 11, 10);
    } else if (e.target.innerHTML === "出行") {
      aaa(1, 5, 10, 11, 11);
    }
  }
};

//aaa变量是 要高亮的<a> more_remarks的下标 要控制的起始值和终止值 显示哪一组
function aaa(aa, bb, cc, dd, ee) {
  more_remarkLi = more_remarks[bb].querySelectorAll("ul li a");
  for (var i = 0; i < more_remarkLi.length; i++) {
    more_remarkLi[i].removeAttribute("class");
  }
  more_remarkLi[aa].setAttribute("class", "highlight");
  for (var j = cc; j <= dd; j++) {
    more_areas[j].style.display = "none";
  }
  more_areas[ee].style.display = "block";
}
