function bubbleSortBad(arr = []) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}

	return arr;
}

const arr2 = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSortBad(arr2));
