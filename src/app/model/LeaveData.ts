
export class LeaveData {

    leaveId : number;
    userId : String;
    userName : String;
    leaveType: String;
    noOfDays : String;
    leaveFrom : Date;
    leaveTo : Date;
    leaveReason: string;
   
    constructor(leaveId : BigInt) {
        leaveId = leaveId;
    }
}



