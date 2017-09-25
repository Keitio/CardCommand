class Card {
	// 50x89 for the size
	constructor(data, name) {
		//console.log(data)
		Object.keys(data).forEach(function(el) {
			//console.log(el)
			Object.defineProperty(this, el, {value:data[el]})
		}, this)
		console.log(this)
		this.img = "assets/img/" + name + ".png"
	}

	toString() {
		var ret = ""
		ret += "" +
		"<table class='card' onmouseover='showdesc(this)' onmouseout='hidedesc(this)'>" +
			"<tr>" +
				"<td class='named'>" +
					(this.named || "NO NAME") +
				"</td>" +
				"<td class='price'>" +
					(this.price || 0) +
				"</td>" +
			"</tr>" +
			"<tr>" +
				"<td>" +
					"<img class='image' alt='image could not be loaded' src='" +
						(this.img || "NO IMAGE") +
					"'></img>" +
				"</td>" +
			"</tr>" +
			"<tr class='desctext'>" +
					"<td class='description'>" +
						(this.desc || "") +
					"</td>" +
					"<td class='flavor'>" +
						(this.flavor || "") +
					"</td>" +
			"</tr>" +
			"<tr class='stats'>" +
				"<td class='power'>" +
					(this.power || "?") +
				"</td>" +
				"<td class='vigor'>" +
					(this.vigor || "?") +
				"</td>" +
			"</tr>" +
		"</table>"
		return ret
	}
}