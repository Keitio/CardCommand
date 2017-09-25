let cp
let board
function loaded(json) {
	cp = new CardPool(json)
	cp.addCard("template")
	cp.addCard("template")
	cp.addCard("template")
	cp.addCard("template")
	cp.addCard("c1")
	cp.addCard("c1")
	cp.addCard("c1")
	cp.addCard("c2")
	cp.addCard("c2")
	cp.addCard("c2")
	cp.addCard("c3")
	cp.addCard("c3")
	let i = 0
	board = new Board()
	cp.cards.forEach(function(el) {
		addToBoard(el, i%4+1, Math.floor(i/4)+1)
		i++
	})
	/*/
	for(let i = 0; i < document.getElementsByClassName('card').length; ++i) {
		let c = document.getElementsByClassName('card')[i]
		c.addEventListener("mouseover", showdesc(c))
		c.addEventListener("mouseout",  hidedesc(c))
	}
	/*/
	board.printHTML()
}

function addToBoard(el, x, y) {
	board.cards[(x-1)+4*(y-1)] = el
}

function showdesc(el) {
	el.getElementsByClassName('desctext')[0].style.opacity = 1
	el.style.height = "270px"
}

function hidedesc(el) {
	el.getElementsByClassName('desctext')[0].style.opacity = 0
	el.style.height = "180px"
}

loadJSON("assets/cards.json", loaded)
