let dieRolls = []
let sides = 6

const $roll = document.querySelector("#roll")
const $sides = document.querySelector("#sides")
const $count = document.querySelector("#count")
const $showAllRolls = document.querySelector("#show-all-rolls")
const $rolls = document.querySelector("#rolls")
const $total = document.querySelector("#total")
const $reset = document.querySelector("#reset")

$roll.addEventListener("click", () => {
	const sides = $sides.value
	const rollCount = $count.value

	for (let countsRemaining = rollCount; countsRemaining > 0; countsRemaining--) {
		const randomNumber = Math.ceil(Math.random() * sides)
		dieRolls.push(randomNumber)
	}

	let sum = 0
	for (let dieRoll of dieRolls) {
		sum += dieRoll
	}

	$total.textContent = sum
})

$showAllRolls.addEventListener("click", () => {
	$rolls.innerHTML = ""
	for (let dieRoll of dieRolls) {
		$rolls.innerHTML += `<li class="die">${dieRoll}</li>`
	}
})

$reset.addEventListener("click", () => {
	initialize()
})

function initialize() {
	dieRolls = []
	$total.innerHTML = ""
	$rolls.innerHTML = ""
	$count.value = 1
}
