// 文件单位进行换算
var filesize = 2837475;
function format(size){
    return size>1024**3&&(size/1024**3).toFixed(2)+'G' || 
           size>1024**2&&(size/1024**2).toFixed(2)+'M' || 
           (size/1024).toFixed(2)+'K';
}

console.log(format(2837475555)) //2.64G
console.log(format(2837475)) //2.71M
console.log(format(28374)) //27.71K

