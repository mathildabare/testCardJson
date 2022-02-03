const fs = require('fs')
const path = require('path')
const directory = path.resolve("./ztest")



// Delete One








// A rajouter sur la route-- 
.put(editMulter, upload.single('img'),(req, res) => {
  console.log('put', req.body, req.file)
  res.render('index')
})







fs.unlink(path.join(directory, file), (err) => {
  if (err) console.log(err)
  else console.log('Delete Img' + file)
})





// https://github.com/hsukrd/architecture-nodejs-base/blob/image/api/controllers/articleController.js







// sql = `UPDATE articles SET articleImg = ? WHERE id = ?`
//         values = [req.file.filename]