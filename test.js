const fs = require('fs')
const path = require('path')
const directory = path.resolve("./public/images/Articles")

fs.unlink(path.join(directory, './1643815963982_slytherindorm.jpg'), (err) => {
  if (err) console.log(err)
  else console.log('Delete Img' + './1643815963982_slytherindorm.jpg')
})

// https://github.com/hsukrd/architecture-nodejs-base/blob/image/api/controllers/articleController.js