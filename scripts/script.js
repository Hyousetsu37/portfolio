import fs from 'fs'

const workingDir = './src/components/SVG/Stack/Used'

console.log('working')
fs.readdir(workingDir, (err, files) => {
	if (err) {
		console.log(err)
	}
	console.log(files)
	files.forEach((file) => {
		console.log(`Renaming ${file} to ${file.replace('.astro', '.svg').toLowerCase()}`)
		fs.renameSync(
			`${workingDir}/${file}`,
			`${workingDir}/${file.replace('.astro', '.svg').toLowerCase()}`
		)
	})
})
