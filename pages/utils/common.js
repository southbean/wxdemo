// common.js
function sayHello(name) {
  console.log('Hello '+name+' !')
}
function sayGoodbye(name) {
  console.log(`Goodbye ${name} !`)
}

module.exports.hello = sayHello
exports.sayGoodbye = sayGoodbye