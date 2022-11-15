const arr2=[5,8,34,13,2]
function sortNumbers(arr){
return arr.sort((a, b) => b - a);

}
console.log(sortNumbers(arr2))

function subtractNumbers(arr) {
    sortNumbers(arr);
    let total=0;
for (let index = 1; index < arr.length; index++) {
    total+=arr[index]
    
}
return arr[0]-total;
}
console.log(subtractNumbers(arr2))

export{
    sortNumbers,
    subtractNumbers,
}