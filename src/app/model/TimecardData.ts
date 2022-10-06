export class TimecardData {

    timecardId : BigInt;
    userId : String;
    userName: String;
    projectId : BigInt;
    projectName : String;
    weekEnding : Date;
    comments : String;

    constructor(timecardId : BigInt) {
        timecardId = timecardId;
    }

}