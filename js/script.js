let $ = document
let locationKey = $.querySelector('#location')
let title = $.querySelector('title')
let eventKey = $.querySelector('#key')
let eventLocation = $.querySelector('#location')
let eventWitch = $.querySelector('#which')
let eventCode = $.querySelector('#code')
let headCode = $.querySelector('#keyCode')

document.body.addEventListener('keydown', function (event) {
	starter.style.display = 'none'
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'
	event.preventDefault()
	eventKey.innerHTML = event.key
	eventLocation.innerHTML = event.location
	eventWitch.innerHTML = event.which
	eventCode.innerHTML = event.code
	headCode.innerHTML = event.code
})

