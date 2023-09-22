// it's similar to map only
// it returns first element which satisfies the condition

const transactions = [200, 550, -600, 543, 7897, -650, -98];

// find out first withdrawl
let firstWithdrawl = transactions.find((trans)=>{
    return trans<0;
});
console.log(`First withdrawl is ${firstWithdrawl}`);

// find out index for first withdrawl. We can use findIndex here
let firstWithdrawlIndex = transactions.findIndex((trans)=>{
    return trans<0;
});
console.log(`First withdrawl is ${firstWithdrawlIndex}`);
console.log(`First withdrawl amount is ${transactions[firstWithdrawlIndex]}`);