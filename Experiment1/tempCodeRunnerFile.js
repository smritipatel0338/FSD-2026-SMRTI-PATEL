console.log('1,start');
process.nextTick(() => 
  console.log('2,nextTick ')
);
setTimeout(() =>
  console.log('3,setTimeout ')
, 0);
setImmediate(() =>
  console.log('4,setImmediate ')
);
console.log('5,end');
