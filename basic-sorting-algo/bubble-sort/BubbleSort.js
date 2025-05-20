function bubbleSortBad(arr){
    const n = arr.length;
    let comparision = 0; // total koto bar loop ta cholche compare korar jonno
    let swapping = 0; // koto bar swap hocche track korar jonno

    for(let i = 0; i<n; i++){
        for(let j = 0; j< n; j++){
            comparision++;
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                swapping++
            }
        }
    }
    console.log('Comparision or loop count: ',comparision);
    console.log('Swapping : ',swapping);
    
    return arr;
}



function bubbleSortGood(arr){
    const n = arr.length;
    let comparision = 0; // total koto bar loop ta cholche compare korar jonno
    let swapping = 0; // koto bar swap hocche track korar jonno
    let swap = false;

    for(let i = 0; i<n - 1; i++){  // proti ta "i" er jonno jehetu j = currentIndex && j = NextIndex (currentIndex + 1) nicche,
                                // tai ekhane amar loop er last index porjonto traverse korar dorkar nai.
        for(let j = 0; j< n - 1 - i; j++){
            comparision++;
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                swap = true;
                swapping++
            }
            
        }
        if(!swap) break;
        
    }
    console.log('Comparision or loop count: ',comparision);
    console.log('Swapping : ',swapping);
    
    return arr;
}

const array = [9,39,4,2,6,7,0];
const sortedArray = bubbleSortGood(array);

console.log('SortedArray with Good bubble: ',sortedArray);




