let day = 10;
switch (day) {
    case 0:
        console.log("Sunday - Rest Day  ");
        break;
    case 1:
        console.log("Monday - Sprint Planning");
    case 2:
        console.log("Tuesday - Daily Standup");
        break;
    case 3:
        console.log("Wednesday - Team Meeting");
        break;
    case 4:
        console.log("Thursday - Code Review");
        break;
    case 5:
        console.log("Friday - Deployment");
        break;
    case 6:
        console.log("Saturday - Review and Planning for Next Sprint ");
        break;
    default:
        console.log("Invalid day");
}