function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let comparisonCount = 0;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      comparisonCount++;
  
      // 🟨 মাঝের উপাদান মিললে return
      if (arr[mid] === target) {
        console.log('Comparison Count = ',comparisonCount);
        
        return mid;
      }
  
      // 🔽 যদি target ছোট হয়, বাম দিকে যাও
      else if (arr[mid] > target) {
        end = mid - 1;
      }
  
      // 🔼 যদি target বড় হয়, ডান দিকে যাও
      else {
        start = mid + 1;
      }
    }
    console.log('Comparison Count = ',comparisonCount);
    return -1; // যদি না পাওয়া যায়
  }
  
  // ✅ Example:
  const arr = [10, 20, 30, 40, 50, 60, 70];
  console.log(binarySearch(arr, 40)); // Output: 2
  