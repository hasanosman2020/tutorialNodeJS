//Local variable (not shared with rest of the application)
const secret = 'SUPERSECRET';

//Global variable(shared with rest of the application)
const john = 'John';
const peter = 'Peter';

console.log(module);
module.exports = {john, peter};