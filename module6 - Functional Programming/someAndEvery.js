// Some: is used to get true or false based on condition check
// It returns true if at least one condition is satisfied
const transactions = [-200, -550, -600, 543, -7897, -650, -98];

// Check if there is any deposit in account
let _isDeposit = transactions.some((amt)=>{
    return amt>0;
});

console.log(`we have deposit transaction ===> ${_isDeposit}`);


// Every: works similarly as SOME. Every element should satisfy condition.
// Check if all transactions are withdrawl

let _allWithdrawl = transactions.every((trans)=> {
    return trans<0;
});

console.log(`we have all withdrawl transaction ===> ${_allWithdrawl}`);
