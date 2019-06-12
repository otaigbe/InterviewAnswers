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
	


