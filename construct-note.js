// add whatever parameters you deem necessary
function constructNote(message, givenLetters) {
	const lettersFreq = {};
	const messageFreq = {};

	for (let char of givenLetters) {
		lettersFreq[char] = ++lettersFreq[char] || 1;
	}
	for (let char of message) {
		messageFreq[char] = ++messageFreq[char] || 1;
	}
	for (let char in messageFreq) {
		if (!lettersFreq[char]) {
			return false;
		}
		if (messageFreq[char] > lettersFreq[char]) {
			return false;
		}
	}
	return true;
}
