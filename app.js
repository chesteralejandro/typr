(function runTypewriter() {
	const cursor = document.querySelector('.cursor');
	const WORD_LIST = ['Web Developer.', 'Designer.', 'Coder.'];
	let currentWord = '';
	let index = 0;
	let typedWordLength = 0;
	let time = 0;
	let isTyping = true;

	let type = () => {
		currentWord = WORD_LIST[index];
		cursor.innerText = currentWord.slice(
			0,
			isTyping ? ++typedWordLength : --typedWordLength,
		);
		const wordIsDeleted = typedWordLength == 0;
		const wordIsTypedCompletely = typedWordLength == currentWord.length;
		const wordIsBeingDeleted =
			typedWordLength < currentWord.length && !isTyping;

		if (wordIsDeleted) {
			time = 500;
			isTyping = true;
			index++;
		}

		if (wordIsTypedCompletely) {
			time = 2500;
			isTyping = false;
		}

		if (wordIsBeingDeleted) {
			time = 150;
		}

		if (index == WORD_LIST.length) index = 0;

		setTimeout(type, time);
	};

	type();
})();
