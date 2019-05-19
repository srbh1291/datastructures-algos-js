newarr = [];

function getOdd(arr){
 
 if(!arr.length){
     return newarr;
 }
    
  if(arr[0]%2!=0){
      newarr.push(arr[0]);
  }

   
  return getOdd(arr.slice(1))

}



res = getOdd([1,2,3,4,5,6,7,8,9]);

console.log(res);
