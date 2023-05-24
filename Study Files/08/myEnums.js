"use strict";
// const AISLE = 0
// const MIDDLE = 1
// const WINDOW = 2
// if(seat === AISLE) {
// }
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice[SeatChoice["MIDDLE"] = 3] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 4] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 5] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
const inniSeat = SeatChoice.AISLE;
//inside inniSeat, 'aisle' would be assigned
