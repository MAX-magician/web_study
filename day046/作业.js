class People {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  introduce() {
    console.log("");
  }
}
class Student extends People {
  constructor(name, age, sex, hobby) {
    super(name, age, sex);
    this.hobby = hobby;
  }
  introduce() {
    console.log("");
  }
}
class Pupil extends Student {
  constructor(name, age, sex, hobby, birthday) {
    super(name, age, sex, hobby);
    this.birthday = birthday;
  }
  introduce() {
    console.log(
      `您好，我叫${this.name}，是一个${this.sex}生，喜欢看${this.hobby}，${this.birthday}是我的生日`
    );
  }
}
class Undergraduate extends Student {
  constructor(name, age, sex, hobby, major, school, loverName) {
    super(name, age, sex, hobby);
    this.major = major;
    this.school = school;
    this.loverName = loverName;
  }
  introduce() {
    console.log(`你好，我的名字叫${this.name}，今年${this.age}，性别${this.sex}，就读于${this.school},${this.major}，爱好${this.hobby}，我的${this.sex == "男" ? "女" : "男"}朋友叫${this.loverName}`);
  }
}
class Teacher extends People {
  constructor(name, age, sex, rank, salary) {
    super(name, age, sex);
    this.rank = rank;
    this.salary = salary;
  }
  introduce() {
    console.log(
      `我是${this.name}老师，性别${this.sex},${this.age}，现担任${this.rank}一职，工资到手${this.salary}，我很幸福`
    );
  }
}
const xiaoming = new Pupil("小明", 5, "男", "《奥特曼》", "2016年4月1日");
const xiaohong = new Pupil("小红", 4, "女", "《喜洋洋与灰太狼》", "2017年6月2日");
const lilei = new Undergraduate("李雷", 18, "男", "看电影", "日语专业", "哈尔滨工业大学", "韩梅梅");
const hanmeimei = new Undergraduate("韩梅梅", 21, "女", "钓鱼", "土木工程", "海南大学", "李雷");
const zhangsanqiang = new Teacher("张三强", 53, "男", "系主任", 1800);

xiaoming.introduce();
xiaohong.introduce();
lilei.introduce();
hanmeimei.introduce();
zhangsanqiang.introduce();