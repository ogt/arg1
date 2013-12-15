module.exports = function(func,obj) {
  return obj ? function(arg) { return func.bind(obj)(arg) } : 
               function(arg) { return func(arg) }
}
