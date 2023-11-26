const serverinfo = {
	"maintenance": false,
	"closed": false,
}


if (serverinfo.maintenance) {
	window.location.assign("\assets/m-error.html")
	console.warn("website is under maintenance")
}

if (serverinfo.closed) {
	window.location.assign("\assets/c-error.html")
	console.warn("website is closed")
}