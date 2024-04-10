var canCompleteCircuit = function(gas, cost) {
    let totalTank = 0;
    let currentTank = 0;
    let startStation = 0;
    let totalCost = 0;

    for (let i = 0; i < gas.length; i++) {
        totalTank += gas[i];
        totalCost += cost[i];
        currentTank += gas[i] - cost[i];

        if (currentTank < 0) {
            startStation = i + 1;
            currentTank = 0;
        }
    }

    return totalTank >= totalCost ? startStation : -1;
};

let gas =  [5,1,2,3,4]
let cost = [4,4,1,5,1]
canCompleteCircuit(gas, cost);
// Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// Output: 3

// Input: gas = [2,3,4], cost = [3,4,3]
// Output: -1
