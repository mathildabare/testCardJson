const bcrypt = require('bcrypt');
const saltRounds = 10;


// // var a = str
const a = 'password'
// console.log('a', a);

// // var b = hash(str)
bcrypt.hash(a, saltRounds).then(async (hash) => {
  console.log('hash', hash)
  const match = await bcrypt.compare(a, hash)
  console.log('match', match)
});


// var check = compare(b, a)
// const check = bcrypt.compareSync(a, b);
// console.log('check', check);


// Result = true


// ASYNC

// const test = async () => {
//   const hash = await bcrypt.hash(a, saltRounds)
//   // console.log('fn test', hash)
//   return hash
// }

