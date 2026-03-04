// Typr v1 - Simple declarative typewriter effect
// Initializes automatically on DOM load

(function () {
	const targetElements = document.querySelectorAll('[data-typr]');
	let styleElement = document.getElementById('typr-style');

	// Inject styles only once
	if (!styleElement) {
		styleElement = document.createElement('style');
		styleElement.id = 'typr-style';
		styleElement.textContent = `@keyframes typr-blink-cursor { from { opacity: 1; } to { opacity: 0; }}`;

		document.head.appendChild(styleElement);
	}

	function addClassStyle(elementClass, cursor, cursorColor, typrBlink) {
		const typrBlinkKeyword = 'off';
		const willBlink = typrBlinkKeyword === typrBlink.toLowerCase().trim();
		const safeCursor = cursor.replace(/"/g, '\\"');
		const sheet = styleElement.sheet;
		sheet.insertRule(`
		.${elementClass}::after {
			content: "${safeCursor}";
			color: ${cursorColor};
			font-weight: lighter;
			display: inline-block;
			transform: translateY(-5%);
			${willBlink ? '' : 'animation: typr-blink-cursor 750ms infinite;'}
		}`);
	}

	function getUpdatedText(text, charIndex) {
		return text.slice(0, charIndex);
	}

	const WORD_SEPARATOR = '|';

	targetElements.forEach((targetElement, index) => {
		const {
			typr,
			typrColor = 'hsl(0, 0%, 7%)',
			typrBlink = 'on',
		} = targetElement.dataset;
		const typrSpeed = Number(targetElement.dataset.typrSpeed) || 100;
		const wordDelay = Number(targetElement.dataset.wordDelay) || 500;
		const pauseDelay = Number(targetElement.dataset.pauseDelay) || 2000;

		const state = {
			wordIndex: 0,
			charIndex: 0,
			canType: true,
			isTyping: true,
		};
		const elementClass = `typr${index}-cursor`;
		let timeoutId;

		addClassStyle(
			elementClass,
			typr || WORD_SEPARATOR,
			typrColor,
			typrBlink,
		);
		targetElement.classList.add(elementClass);
		targetElement.addEventListener('mouseenter', () => {
			clearTimeout(timeoutId);
			state.canType = false;
		});
		targetElement.addEventListener('mouseleave', () => {
			clearTimeout(timeoutId);
			state.canType = true;
			type();
		});

		const originalText = targetElement.textContent;
		const wordList = originalText
			.split(WORD_SEPARATOR)
			.map((w) => w.trim())
			.filter(Boolean);

		if (!wordList.length) return;

		function type() {
			if (!state.canType) return;

			const currentWord = wordList[state.wordIndex];

			if (state.isTyping) {
				state.charIndex++;
			} else {
				state.charIndex--;
			}

			const updatedText = getUpdatedText(currentWord, state.charIndex);

			targetElement.textContent = updatedText;

			const wordIsFullyTyped = state.charIndex === currentWord.length;
			const wordIsFullyDeleted = state.charIndex === 0;

			let speed = typrSpeed;

			if (wordList.length === 1 && wordIsFullyTyped) {
				return;
			} else if (state.isTyping && wordIsFullyTyped) {
				speed = pauseDelay;
				state.isTyping = false;
			} else if (!state.isTyping && wordIsFullyDeleted) {
				speed = wordDelay;
				state.isTyping = true;

				state.wordIndex = (state.wordIndex + 1) % wordList.length;
			}

			timeoutId = setTimeout(type, speed);
		}

		type();
	});
})();
