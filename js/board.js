class Board {
	constructor() {
		this.cards = []
	}

	printHTML() {
		let shw = "" +
		"<table>" +
			"<tr>" +
				"<td>" +
					this.cards[0] +
				"</td>" +
				"<td>" +
					this.cards[1] +
				"</td>" +
				"<td>" +
					this.cards[2] +
				"</td>" +
				"<td>" +
					this.cards[3] +
				"</td>" +
			"</tr>" +
			"<tr>" +
				"<td>" +
					this.cards[4] +
				"</td>" +
				"<td>" +
					this.cards[5] +
				"</td>" +
				"<td>" +
					this.cards[6] +
				"</td>" +
				"<td>" +
					this.cards[7] +
				"</td>" +
			"</tr>" +
			"<tr>" +
				"<td>" +
					this.cards[8] +
				"</td>" +
				"<td>" +
					this.cards[9] +
				"</td>" +
				"<td>" +
					this.cards[10] +
				"</td>" +
				"<td>" +
					this.cards[11] +
				"</td>" +
			"</tr>" +
		"</table>"
		document.getElementById('board').innerHTML += shw
	}
}