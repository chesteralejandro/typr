(function () {
	const script = document.currentScript;
	if (!script) return;

	const classSelector = script.dataset.class;

	const element = document.querySelector(`.${classSelector}`);
	const wordList = JSON.parse(script.dataset.wordList) || [];

	if (!element || !wordList.length) return;

	// Inject styles only once
	if (!document.getElementById('typewriter-style')) {
		const style = document.createElement('style');

		style.id = 'typewriter-style';
		style.textContent = `
			.cursor::after {
				content: "|";
				color: hsl(0, 0%, 7%);
				font-weight: lighter;
				display: inline-block;
				transform: translateY(-10%);
				animation: blink-cursor 500ms infinite;
			}
			@keyframes blink-cursor {
				from { opacity: 1; }
				to { opacity: 0; }
			}
		`;

		document.head.appendChild(style);
	}

	element.classList.add('cursor');

	let wordIndex = 0;
	let charIndex = 0;
	let isTyping = true;

	function typeCharacter() {
		charIndex = charIndex + 1;
	}

	function deleteCharacter() {
		charIndex = charIndex - 1;
	}

	function getUpdatedText(text) {
		return text.slice(0, charIndex);
	}

	function updateElementText(newText) {
		element.textContent = newText;
	}

	function changeWord() {
		wordIndex = (wordIndex + 1) % wordList.length;
	}

	function type() {
		const currentWord = wordList[wordIndex];

		if (isTyping) {
			typeCharacter();
		} else {
			deleteCharacter();
		}

		const updatedText = getUpdatedText(currentWord);

		updateElementText(updatedText);

		let delay = 100;
		const wordIsFullyTyped = charIndex === currentWord.length;
		const wordIsFullyDeleted = charIndex === 0;

		if (isTyping && wordIsFullyTyped) {
			delay = 2000;
			isTyping = false;
		} else if (!isTyping && wordIsFullyDeleted) {
			delay = 500;
			isTyping = true;
			changeWord();
		}

		setTimeout(type, delay);
	}

	type();
})();
