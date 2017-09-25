 class CardPool {
	constructor(pool) {
		this.cards = []
		this.all = pool
	}

	addCard(name) {
		this.cards.push(new Card(this.all[name], name))
	}
}