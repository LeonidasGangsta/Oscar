function password(websiteName) {
	first = websiteName.replace(/a|i|u/gi,'1')

	while (first.length < 4) {
		first = first + 'Trrs'
	}

	return first.charAt(0).toUpperCase() + first.slice(1) + '304!'
}

password('Github')