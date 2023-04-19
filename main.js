let dieRolls = []

const $roll = document.querySelector("#roll")
const $count = document.querySelector("#count")
const $showAllRolls = document.querySelector("#show-all-rolls")
const $rolls = document.querySelector("#rolls")
const $total = document.querySelector("#total")
const $reset = document.querySelector("#reset")

$roll.addEventListener("click", () => {
	const rollCount = $count.value

	for (let countsRemaining = rollCount; countsRemaining > 0; countsRemaining--) {
		const randomNumber = Math.ceil(Math.random() * 6)
		dieRolls.push(randomNumber)
	}

	let sum = 0
	for (let dieRoll of dieRolls) {
		sum += dieRoll
	}

	$total.textContent = sum
})

$showAllRolls.addEventListener("click", () => {
	for (let dieRoll of dieRolls) {
		$rolls.innerHTML += `<li>${dieRoll}</li>`
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
