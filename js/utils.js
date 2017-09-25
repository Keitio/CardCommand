function loadJSON(file, loaded, verbose=false) {
	var xhttp = new XMLHttpRequest()
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			loaded(JSON.parse(this.responseText))
		} else {
			if(verbose) console.log('readyState:', this.readyState, ' status:', this.status)
		}
	}
	xhttp.open("GET", file, true)
	xhttp.send()
}