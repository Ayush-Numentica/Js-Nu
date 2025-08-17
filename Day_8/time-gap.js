function calculateTotalHoursElapsed(initialTime, finalTime) {
    // checking whether the input is string or not
    if (typeof initialTime !== "string" || typeof finalTime !== "string") {
        console.error("Invalid input");
        return false;
    }

    // checking for empty string
    if (initialTime.length === 0 || initialTime === " " || finalTime.length === 0 || finalTime === " ") {
        console.error("you have not entered any time");
        return false;
    }


    // splitting the inputs

    const [initialTimeDuration, initialTimePeriod] = initialTime.split(" ");
    const [finalTimeDuration, finalTimePeriod] = finalTime.split(" ");

    // checking for valid inputs
    if (initialTimeDuration.length === 0 || initialTimePeriod.length === 0 || finalTimeDuration.length === 0 || finalTimePeriod.length === 0) {
        console.error("the input is invalid");
        return false;
    }

    // checking the time period is AM and PM only
    if (initialTimePeriod !== "AM" || initialTimePeriod !== "PM" ||
        finalTimePeriod !== "AM" || finalTimePeriod !== "PM") {
        console.error("Your time period is incorrect give 'AM' or 'PM'")
    }

    // splitting the timeduration
    const [initialHourStr, initialMinuteStr] = initialTimeDuration.split(":");
    const [finalHourStr, finalMinuteStr] = finalTimeDuration.split(":");

    // checking for valid time hours and minutes
    if (initialHourStr.length === 0 || initialMinuteStr.length === 0 || finalHourStr.length === 0 || finalMinuteStr === 0) {
        console.error("the input is invalid");
        return false;
    }


    // parsing to number
    let initialHour = parseInt(initialHourStr);
    let initialMinute = parseInt(initialMinuteStr);
    let finalHour = parseInt(finalHourStr);
    let finalMinute = parseInt(finalMinuteStr);

    //checking for the 24 hour format
    if ((initialHour == 0 || initialHour > 12) || (finalHour === 0 || finalHour > 12)) {
        console.error("Invalid time format! use 12 hour time format");
        return false;
    }

    // checking whether the time is number only
    if (
        isNaN(initialHour) || isNaN(initialMinute) ||
        isNaN(finalHour) || isNaN(finalMinute)
    ) {
        console.error("Invalid time values. Please provide proper time format like '9:00 AM'");
        return false;
    }

    let finalHourStamp = 0;
    let finalMinuteStamp = 0;
    if (initialTimePeriod === finalTimePeriod) {
        if ((initialHour <= finalHour) && (initialMinute <= finalMinute)) {
            finalHourStamp = finalHour - initialHour;
            finalMinuteStamp = finalMinute - initialMinute;
            console.log(`${finalHourStamp} hour and ${finalMinuteStamp} minutes`);
            return true;
        }
        if (initialHour < finalHour && initialMinute > finalMinute) {
            finalHourStamp = (finalHour - initialHour) - 1;
            finalMinuteStamp = (finalMinute - initialMinute) + 60;
            console.log(`${finalHourStamp} hour and ${finalMinuteStamp} minutes`);
            return true;
        }
        if ((initialHour > finalHour) && (initialMinute <= finalMinute)) {
            finalHourStamp = (finalHour - initialHour) + 12;
            finalMinuteStamp = finalMinute - initialMinute;
            console.log(`${finalHourStamp} hour and ${finalMinuteStamp} minutes`);
            return true;
        }
        if ((initialHour > finalHour) && (initialMinute > finalMinute)) {
            finalHourStamp = (finalHour - initialHour) + 23;
            finalMinuteStamp = (finalMinute - initialMinute) + 60;
            console.log(`${finalHourStamp} hour and ${finalMinuteStamp} minutes`);
            return true;
        }
    }

    if ((initialTimePeriod === "AM" && finalTimePeriod === "PM") || (initialTimePeriod === "PM" && finalTimePeriod === "AM")) {
        if ((initialHour <= finalHour) && (initialMinute <= finalMinute)) {
            finalHourStamp = (finalHour - initialHour) + 12;
            finalMinuteStamp = finalMinute - initialMinute;
            console.log(`${finalHourStamp} hour and ${finalMinuteStamp} minutes`);
            return true;
        }
        if (initialHour <= finalHour && initialMinute > finalMinute) {
            finalHourStamp = (finalHour - initialHour) + 11;
            finalMinuteStamp = (finalMinute - initialMinute) + 60;
            console.log(`${finalHourStamp} hour and ${finalMinuteStamp} minutes`);
            return true;
        }
        if ((initialHour > finalHour) && (initialMinute <= finalMinute)) {
            finalHourStamp = (finalHour - initialHour) + 12;
            finalMinuteStamp = finalMinute - initialMinute;
            console.log(`${finalHourStamp} hour and ${finalMinuteStamp} minutes`);
            return true;
        }
        if ((initialHour > finalHour) && (initialMinute > finalMinute)) {
            finalHourStamp = (finalHour - initialHour) + 11;
            finalMinuteStamp = (finalMinute - initialMinute) + 60;
            console.log(`${finalHourStamp} hour and ${finalMinuteStamp} minutes`);
            return true;
        }
    }

}

const startTime = "12:00 AM";
const endTime = "12:00 PM";
calculateTotalHoursElapsed(startTime, endTime);