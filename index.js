// Your code here
function createEmployeeRecord(payCard) {
    return {
        firstName: payCard[0],
        familyName: payCard[1],
        title: payCard[2],
        payPerHour: payCard[3],
        timeInEvents: [],
        timeOutEvents: [],
    };
}