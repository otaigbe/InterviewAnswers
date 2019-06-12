const performRead = async () => {
  const dataFromCache = await getFromCache();
    if (dataFromCache instanceof Error || dataFromCache == null) {
      const dataFromNetwork = await fetchFromNetwork();
       if (dataFromNetwork instanceof Error || dataFromNetwork == null) {
         return new Error("Unable to fetch desired data");
       } else {
        return dataFromNetwork;
       }
    } else {
      return dataFromCache;
    }
  };
  
/******The function above attempts to implement a better solution for case1.
We assume both getFromCache and fetchFromNetwork are asynchronous functions so we use the await/async statements to give the solution a sychronous feel.
Firstly we await the result of the getFromCache operation and check the result, if it resolves successfully we return the data but if it rejects and returns and error object or
if it resolves but returns a null/undefined we then try the fetchFromNetwork operation if it succeeds and returns data,
we return the data but if there is any error we return that too. *****/ 
