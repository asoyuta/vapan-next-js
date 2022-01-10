const generateId = (len) => {
  var l = len
  var c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  var cl = c.length
  var r = ''
  for (var i = 0; i < l; i++) {
    r += c[Math.floor(Math.random() * cl)]
  }
  return r
}

export default generateId
