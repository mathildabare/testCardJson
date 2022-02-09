if (image) {
    const dir = path.join('./public/upload/articles')
    deleteOneFile(dir, article[0].image)
    await db.query(`UPDATE articles SET image = '${req.file.filename}' WHERE id = ${id}`)
}