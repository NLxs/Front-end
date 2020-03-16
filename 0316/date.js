// // 日期和时间

// // 
// // let now = new Date();
// // console.log(now);

// // 0 表示 01.01.1970 UTC+0
// let Jan01_1970 = new Date(0);
// console.log(Jan01_1970);

// // 现在增加 24 小时，得到 02.01.1970 UTC+0
// let Jan02_1970 = new Date(24 * 3600 * 1000);
// console.log(Jan02_1970);
// // 传入的整数参数代表的是自 1970-01-01 00:00:00 以来经过的毫秒数，该整数被称为 时间戳

// // 参数, 前两必须有
// // new Date(year, month, date, hours, minutes, seconds, ms)

// let time = new Date();
// let year = time.getFullYear() 
// console.log(year);

// /**
// getFullYear()
// 获取年份（4 位数）
// getMonth()
// 获取月份，从 0 到 11。
// getDate() 获取当月的具体时间
// 获取当月的具体日期，从 1 到 31，这个方法名称可能看起来有些令人疑惑。
// getHours()，getMinutes()，getSeconds()，getMilliseconds()
// 获取相应的时间组件。
// getDay() 获取一周中的某一天

// */

// 任务

/**
 * 创建日期
 * 创建一个 Date 对象，日期是：Feb 20, 2012, 3:12am。时区是当地时区。
 * 使用 alert 显示结果。
 */

// let d = new Date(2012, 1, 20, 3, 12);
// alert(d);

/**
 * 给出日期显示星期数
 */

// function getWeekDay(date) {
//   let days = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
//   return days[date.getDay()];
// }

// let date = new Date(2012, 0, 3);

// alert(getWeekDay(date));

// 欧洲星期计算
function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) { // weekday 0 (sunday) is 7 in european
    day = 7;
  }
  return day;
}





















