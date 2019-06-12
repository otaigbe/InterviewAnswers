const cointypes = [25, 10, 7, 2];
let amount = 191;
let numOfOccurence = 0;
        
        for (let i=0; i < cointypes.length; i++) {
        	if (cointypes[i] <= amount) {
        		numOfOccurence = Math.floor(amount/cointypes[i]);
        		console.log(numOfOccurence + "   "  + "#" + cointypes[i]);
        		amount -= numOfOccurence * cointypes[i];
        	}
        }
	

/**
Solving the make Change Problem with the greedy method.
Given a set of coin types we wish to find the minimum amount of
coin types it would require to breakdown(make change) of a certain amount.
The greedy method demands that on every step we take the best decision at that current time that might lead to the best solution.
Since the cointypes array is already sorted in descending order, the next is to implement the loop that
would go through each item of the array and check if that item is less than or equal to the amount we divide the amount by the coin type
then subtract the numOfOccurence * cointype from amount to obtain the new amount.

                             (191[25, 10, 7, 2])
                    /             |               \
                   /              |                \
          (16[25, 10, 7, 2])   (6[25, 10, 7, 2])  (4[25, 10, 7, 2])
        iteration 1:           iteration 2:        iteration 4:
      mOccurrence of 25=7   numOccurrence of 10=1  numOfOccurence of 2 = 3
      
      item 3 is skipped because it is greater than amount.
**/
