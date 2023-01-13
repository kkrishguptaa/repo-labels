const { read } = require('yaml-reader')

const yaml = read('reviewpad.yml')

const labels = []

Object.values(yaml.labels).forEach(label => {
	labels.push({
		name: label.name,
		description: label.description,
		color: label.color
	})
})

const json = JSON.stringify(labels, null, 2)

require('fs').writeFileSync('labels.json', json)
