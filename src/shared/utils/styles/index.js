const prefix = 'ge'

export default (classname, conditionalClasses) => {
	let finalClassList = `${prefix}-${classname}`
	const classList = []

	if (conditionalClasses) {
		Object.keys(conditionalClasses).forEach(key => {
			if (conditionalClasses[key] === true) {
				classList.push(key)
			}
		})

		finalClassList = `${prefix}-${classname} ${classList.toString().replace(/,/g, ' ')}`
	}

	return finalClassList
}
