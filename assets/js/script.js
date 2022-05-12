if(localStorage.getItem('theme') == 'dark') {
	setDarkMode()
}

function setDarkMode() {
	let isDark = document.body.classList.toggle('darkmode')
	let theme = ''
	if(isDark) {
		localStorage.setItem('theme', 'dark')
		theme = 'Terang'
	} else {
		localStorage.removeItem('theme')
		theme = 'Gelap'
	}
	document.getElementById('changeTheme').innerHTML = theme
}