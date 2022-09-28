function People(name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}
People.prototype.introduce = function(){};
Student.prototype = new People();
Teacher.prototype = new People();
function Student(name, age, sex, hobby){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.hobby = hobby;
}
Student.prototype.introduce = function(){};
function Teacher(name, age, sex, rank, salary){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.rank = rank;
    this.salary = salary;
}
Teacher.prototype.introduce = function(){
    console.log("我是" + this.name + "老师, 性别" + this.sex + ", " + this.age + "岁, 现担任" + this.rank + "一职, 工资到手" + this.salary + ", 我很幸福");
};
Pupil.prototype = new Student();
Undergraduate.prototype = new Student();
function Pupil(name, age, sex, hobby, birthday){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.hobby = hobby;
    this.birthday = birthday;
}
Pupil.prototype.introduce = function(){
    console.log("您好, 我叫" + this.name + ", 是一个" + this.sex + "生, 今年" + this.age + "岁了, 喜欢看" + this.hobby + ", " + this.birthday + "是我的生日");
};
function Undergraduate(name, age, sex,hobby, major, school, loverName){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.hobby = hobby;
    this.major = major;
    this.school = school;
    this.loverName = loverName;
}
Undergraduate.prototype.introduce = function(){
    console.log("你好, 我的姓名叫" + this.name + ", 今年" + this.age + ", 性别" + this.sex + ", 就读于" + this.school + ", " + this.major + ", 爱好" + this.hobby + ", 我的" + ((this.sex === '男') ? '女' : '男') + "朋友叫" + this.loverName);
}

var xiaoming = new Pupil("小明", 5, "男", "《奥特曼》", "2016年4月1日");
var xiaohong = new Pupil("小红", 4, "女", "《喜羊羊与灰太狼》", "2017年6月2日");
var lilei = new Undergraduate("李雷", 18, "男", "看电影", "日语", "哈尔滨工业大学", "韩梅梅");
var hanmeimei = new Undergraduate("韩梅梅", 21, "女", "钓鱼", "土木工程", "海南大学", "李雷");
var zhangsanqiang = new Teacher("张三强", 53, "男", "系主任", 1800);

xiaoming.introduce();
xiaohong.introduce();
lilei.introduce();
hanmeimei.introduce();
zhangsanqiang.introduce();