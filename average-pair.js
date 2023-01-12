// add whatever parameters you deem necessary
function averagePair(sortedArr, targetAvg) {
	let start = 0;
	let end = sortedArr.length - 1;

	while (start < end) {
		let avg = (sortedArr[start] + sortedArr[end]) / 2;
		if (avg === targetAvg) {
			return true;
		}
		else if (avg < targetAvg) {
			start++;
		}
		else {
			end--;
		}
	}
	return false;
}
