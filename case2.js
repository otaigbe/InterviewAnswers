const numberOfEachCoinType = (cointypes,amount) => {
 const solution = {};
 for (let i = 0; i < cointypes.length; i++) {
   const value = amount/cointypes[i];
   solution[cointypes[i]] = Math.floor(value);
}
    return solution;
};

const cointypes = [25, 10, 7, 2];
const amount = 191;
const result = numberOfEachCoinType(cointypes, amount);

console.log(result);

