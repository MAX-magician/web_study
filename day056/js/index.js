// 储存序号
var liNums = 0;
var indexsd = [];
var indexsw = [];

// 页面加载完成时执行
window.onload = function() {
    indexs();
    view();
    updateNumbs();
};

// 检查是否有索引
function indexs(){
    // 是否有正在进行索引
    if(localStorage.getItem("indexsd")){
        // 获取索引
        indexsd = JSON.parse(localStorage.getItem("indexsd"));
    }else{
        // 创建索引
        localStorage.setItem("indexsd", JSON.stringify(indexsd));
    }
    // 是否有已经完成索引
    if(localStorage.getItem("indexsw")){
        // 获取索引
        indexsw = JSON.parse(localStorage.getItem("indexsw"));
    }else{
        // 创建索引
        localStorage.setItem("indexsw", JSON.stringify(indexsw));
    }
    if(localStorage.getItem("liNums")){
        liNums = localStorage.getItem("liNums");
    }else{
        localStorage.setItem("liNums", liNums);
    }
}

// 显示之前存储过的数据
function view(){
    let aad = JSON.parse(localStorage.getItem("indexsd"));
    let aaw = JSON.parse(localStorage.getItem("indexsw"));
    for(let i = 0; i < aad.length; i++){
        let ax = document.createElement("li");
        const ay = Number(aad[i].substr(3));
        ax.setAttribute("id", aad[i]);
        const az = localStorage.getItem(aad[i]);
        ax.innerHTML = `<input class="checkBox" type="checkbox" style="float: left" onchange='change(${ay},false)' />
<input class="content" type="text" style="float: left" id="${ay}" value="${az}" onchange="update(${ay})" />
<span class="listSpan" style="float: right" onclick="remove(${ay})" >-</span>`;
        todoList.appendChild(ax);
    }
    for(let i = 0; i < aaw.length; i++){
        let ax = document.createElement("li");
        const ay = Number(aaw[i].substr(3));
        ax.setAttribute("id", aaw[i]);
        const az = localStorage.getItem(aaw[i]);
        ax.innerHTML = `<input class="checkBox" checked=true type="checkbox" style="float: left" onchange='change(${ay},true)' />
<input class="content" type="text" style="float: left" id="${ay}" value="${az}" onchange="update(${ay})" />
<span class="listSpan" style="float: right" onclick="remove(${ay})" >-</span>`;
        doneList.appendChild(ax);
    }
}

// 更新列表总数提示方法并更新序号总数
function updateNumbs() {
    const xx = document.querySelectorAll("#todoList > li");
    const yy = document.querySelectorAll("#doneList > li");
    todoCount.innerHTML = xx.length;
    doneCount.innerHTML = yy.length;
}

// 创建事件方法
function postaction() {
  let a = document.createElement("li");
  let b = inputTodo.value;
  a.setAttribute("id", `li-${liNums}`);
  // 为索引追加值
  indexsd.push(`li-${liNums}`);
  // 更新索引
  localStorage.setItem("indexsd", JSON.stringify(indexsd));
  localStorage.setItem(`li-${liNums}`, b);
  a.innerHTML = `<input class="checkBox" type="checkbox" style="float: left" onchange='change(${liNums},false)' />
  <input class="content" type="text" style="float: left" id="${liNums}" value="${b}" onchange="update(${liNums})" />
  <span class="listSpan" style="float: right" onclick="remove(${liNums})" >-</span>`;
  todoList.appendChild(a);
  liNums++;
  localStorage.setItem("liNums", liNums);
  updateNumbs();
}

// 转换事件方法
function change(num, val) {
  const xx = document.querySelector(`#li-${num}`);
  const yy = xx.querySelector("input[type=checkbox]");
  // 转换真假
  yy.setAttribute("onchange", `change(${num}, ${!val})`);
  if (val) {
    // 转为待办
    todoList.appendChild(xx);
    let aa = JSON.parse(localStorage.getItem("indexsw"));
    let bb = `li-${num}`;
    for(let i = 0; i < aa.length; i++){
        if(aa[i] == bb){
            aa.splice(i, 1);
        }
    }
    indexsw = aa;
    localStorage.setItem("indexsw", JSON.stringify(aa));
    indexsd.push(`li-${num}`);
    localStorage.setItem("indexsd", JSON.stringify(indexsd));
  } else {
    // 转为完成
    doneList.appendChild(xx);
    let aa = JSON.parse(localStorage.getItem("indexsd"));
    let bb = `li-${num}`;
    for(let i = 0; i < aa.length; i++){
        if(aa[i] == bb){
            aa.splice(i, 1);
        }
    }
    indexsd = aa;
    localStorage.setItem("indexsd", JSON.stringify(aa));
    indexsw.push(`li-${num}`);
    localStorage.setItem("indexsw", JSON.stringify(indexsw));
  }
  updateNumbs();
}

// 更新内容
function update(unum){
    let uaa = document.querySelector(`#li-${unum} input[type=text]`);
    localStorage.setItem(`li-${unum}`, uaa.value);
}

// 单个删除
function remove(rnum){
    let rbb = JSON.parse(localStorage.getItem("indexsd"));
    let rcc = JSON.parse(localStorage.getItem("indexsw"));
    let rdd = `li-${rnum}`;
    let ree = rbb.concat(rcc);
    for(let i = 0; i < ree.length; i++){
        if(ree[i] == rdd){
            if(i > rbb.length - 1){
                rcc.splice((i - rbb.length), 1);
                indexsw = rcc;
                localStorage.setItem("indexsw", JSON.stringify(rcc));
                const rff = doneList.querySelector(`#${rdd}`);
                doneList.removeChild(rff);
            }else{
                rbb.splice(i, 1);
                indexsd = rbb;
                localStorage.setItem("indexsd", JSON.stringify(rbb));
                const rff = todoList.querySelector(`#${rdd}`);
                todoList.removeChild(rff);
            }
        }
    }
    localStorage.removeItem(rdd);
}

// 清空
function clear() {
    const xx1 = document.querySelector("#todoList");
    const yy1 = xx1.querySelectorAll("li");
    const xx2 = document.querySelector("#doneList");
    const yy2 = xx2.querySelectorAll("li");
    localStorage.clear();
    liNums = 0;
    for (let i = 0; i < yy1.length; i++){
        xx1.removeChild(yy1[i]);
    }
    for (let i = 0; i < yy2.length; i++){
        xx2.removeChild(yy2[i]);
    }
    indexsd = [];
    indexsw = [];
    indexs();
}
