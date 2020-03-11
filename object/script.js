/*
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // 属性键的值
  alert( user[key] ); // John, 30, true
}
*/

// let codes = {
//   "49": "Germany",
//   "41": "Switzerland",
//   "44": "Great Britain",
//   "1": "USA"
// };

// for(let code in codes) {
//   alert(code);
// }

/*
按下面的要求写代码，一条对应一行代码
创建一个空的对象 user
为这个对象增加一个属性，键是 name，值是 John
再增加一个属性，键是 surname，值是 Smith
把键为 name 的属性的值改成 Pete
删除这个对象中键为 name 的属性

let user = {};
user.name = 'Jone';
user.surname = 'Smith'
console.log(user);
user.name = 'Pete'
console.log(user);
delete user.name;
console.log(user);
*/

// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

// function isEmpty(obj) {
//   for(let key in obj) {
//     return false;
//   }
//   return true
// }

// const user = {
//   name: 'Jone'
// };
// user.name = "Pete" // 成功
// user = 123; // 报错 const 只能保证变量名不能改变

/*
let salaries = {
  Jone: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for(let key in salaries) {
  sum += salaries[key];
}

alert(sum)
*/

// 对象可以使用多个字符
// let userInfo = {
//   name: 'Jone',
//   age: 10,
//   "wechat id": 'nuolu'
// }

// delete userInfo.age;
// delete userInfo["wechat id"]

// let user = {
//   name: "John",
//   age: 30
// };
// alert(user.name);
// let key = prompt('替代', 'name');
// alert(user[key]); // 等同于92行

// // 此时的key=name
// let key = prompt("What do you want to know about the user?", "name");

// // 访问变量
// alert( user[key] ); // John（如果输入 "name"）alert(user.name)

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj) {
//   for(let key in obj) {
//     if(typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
// };

// multiplyNumeric(menu);

// let id = Symbol("id");
// let user = {
//   name: 'Jone',
//   age: 23,
//   [id]: 123
// };

// for(let key in user) {
//   alert(key)
// };

// alert('Direct: ' + user[id]);

// let user = {
//   name: 'Jone',
//   age: 30,
//   sayHi() {
//     alert(this.name);
//   }
// };

// let admin = user;
// user = null;

// admin.sayHi()

// let user = {
//   name: 'John'
// }

// let admin = {
//   name: 'Peter'
// }

// function sayHi() {
//   alert(this.name);
// }

// user.f = sayHi;
// admin.f = sayHi;

// // console.log(user.f());
// // console.log(admin.f());

// admin['f']()

// 复杂的方法调用可能会失去this
// let user = {
//   name: 'Jone',
//   hi() { alert(this.name); },
//   bye() {alert('bye')}
// }

// user.hi();

// let user = {
//   firstName: "Ilya",
//   // 储存在对象中的函数叫方法
//   sayHi() {
//     let arrow = () => alert(this.firstName);
//     arrow();
//   }
// };

// user.sayHi(); // Ilya

// let user = {
//   name: 'John',
//   go: function() {
//     alert(this.name)
//   }
// }; // 不加分号会报错

// (user.go)()
/* 要注意的是，(user.go) 外边这层括号在这没有任何作用。
通常用它们来设置操作的顺序，但在这里点符号 . 
总是会先执行，所以并没有什么影响。分号是唯一重要的。*/

/*
let obj, method;

obj = {
  go: function() { alert(this) }
};

obj.go(); // object

(obj.go)();

(method = obj.go)();
// 计算函数表达式 f = obj.go 调用 f()
(obj.go || obj.stop)();
*/

// 在对象字面量中使用'this'
// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// };

// let user = makeUser();

// alert( user.ref.name ); // Error: Cannot read property 'name' of undefined

/*
let calcuator = {
  // 输入数字
  read() {
    this.a = +prompt('a?', 0),
    this.b = +prompt('b?', 0)
  },
  // 求和
  sum() {
    return this.a + this.b;
  },
  // 积
  mul() {
    return this.a * this.b;
  }
};

calcuator.read();
alert(calcuator.sum());
alert(calcuator.mul());
*/

// 有一个可以上下移动的 ladder 对象:
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.setp--;
  },
  showStep: function() { // 显示当前的step
    alert(this.step);
  }
}

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
}
// 调用链接
ladder.up().up().down().showStep(); // 1

ladder
  .up()
  .up()
  .down()
  .up()
  .down()
  .showStep(); // 1