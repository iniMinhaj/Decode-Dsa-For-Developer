function bubbleSortGood(arr = []) {
	let n = arr.length;
	let swapped;

	for (let i = 0; i < n - 1; i++) {
		swapped = false;

		for (let j = 0; j < n - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // new swap syntax
				swapped = true;
			}
		}

		if (!swapped) break;
	}

	return arr;
}

const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSortGood(arr));
