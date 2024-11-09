document.addEventListener("DOMContentLoaded", () => {
	const inputField = document.getElementById("input-word");
	const animatedTextContainer = document.getElementById("animated-text");
	const animateButton = document.getElementById("animate-btn");

	const fonts = [
		"'Pacifico', cursive",
		"'Lobster', cursive",
		"'Abril Fatface', cursive",
		"'Cinzel Decorative', serif",
		"'Dancing Script', cursive",
		"'Gloria Hallelujah', cursive",
		"'Playfair Display', serif",
		"'Raleway', sans-serif",
		"'Bangers', cursive",
		"'Fredoka One', sans-serif"
	];

	const randomFont = () => fonts[Math.floor(Math.random() * fonts.length)];

	const animateText = (word) => {
		animatedTextContainer.innerHTML = "";

		word.split('').forEach(letter => {
			const span = document.createElement("span");
			span.textContent = letter === " " ? "\u00A0" : letter; // Use non-breaking space for spaces
			animatedTextContainer.appendChild(span);
		});

		const letters = document.querySelectorAll(".animated-text span");

		const delayPerLetter = 100;

		const intervals = [];
		letters.forEach((letter, index) => {
			if (letter.textContent.trim()) { // Skip animation for spaces
				intervals[index] = setInterval(() => {
					letter.style.fontFamily = randomFont();
				}, 100);
			}
		});

		setTimeout(() => {
			letters.forEach((letter, index) => {
				setTimeout(() => {
					clearInterval(intervals[index]);
					letter.style.fontFamily = "'Bai Jamjuree', sans-serif"; // Final stylish font
				}, index * delayPerLetter);
			});
		}, 1000);
	};

	animateButton.addEventListener("click", () => {
		const word = inputField.value;
		if (word) {
			animateText(word);
		} else {
			animatedTextContainer.innerHTML = "Please enter a word!";
		}
	});
});
