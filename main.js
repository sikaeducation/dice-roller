const dieRolls = []

const rollButton = document.querySelector("#roll")
rollButton.addEventListener("click", () => {
	const $rollCount = document.querySelector("#roll-count")
	const rollCount = $rollCount.value

	for (let countsRemaining = rollCount; countsRemaining > 0; countsRemaining--) {
		const randomNumber = Math.ceil(Math.random() * 6)
		dieRolls.push(randomNumber)
	}

	let sum = 0
	for (let dieRoll of dieRolls) {
		sum += dieRoll
	}

	document.querySelector("#total-count").textContent = sum
})

const showAllRollsButton = document.querySelector("#show-all-rolls")
const allRolls = document.querySelector("#all-rolls")
showAllRollsButton.addEventListener("click", () => {
	for (let dieRoll of dieRolls) {
		allRolls.innerHTML += `<li>${dieRoll}</li>`
	}
})
