

const fn=(a)=>
{
    let a2=[];
a.forEach((i)=>
{
    i=i%2==0?i*2:i*3;
a2.push(i)
})
  return a2;
}

console.log(fn([1,2,3,4]));