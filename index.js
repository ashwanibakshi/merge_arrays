var a =[1,2,3];
var b =[3,5,6];

for(var i=0;i<1;i++){
    for(var j=0;j<3;j++){
        a.push(b[j]);
    }
console.log(a)
}
a=a.filter((value,index,arr)=>{
    return arr.indexOf(value) === index;
})
console.log(a)
// console.log(a.concat(b))  //using concat
const array3 = [...new Set([...a,...b])]; 
// Use the spread operator for concatenating the array.
// Use Set for creating a distinct set of elements.
// Again use the spread operator to convert the Set into an array.
console.log(array3)