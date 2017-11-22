const surpriseSection = document.getElementById('surprise');

function showSurprise() {
	surpriseSection.textContent = '🎉 Surprise! 🎉';
}

const randomTime = Math.random() * 4000;
console.log(randomTime / 1000);
setTimeout(showSurprise, randomTime);

// Otra forma de llamar a una función anónima
//setTimeout(() => surpriseSection.textContent = '🎉 Surprise! 🎉', randomTime);

//showSurprise();