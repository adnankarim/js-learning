var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
 var x=[];
for(var i=0; i<iterable.length;i++)
{

  if(iterable[i]!==iterable[i+1])
  {
    x.push(iterable[i]);
  }

}
return x;

}
