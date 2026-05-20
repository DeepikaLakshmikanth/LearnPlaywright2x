let browser = "Firefox";

switch (browser) {

    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera": console.log("Chromium Supported Project");
        break;

    case "Firefox": console.log("Mozilla  Supported Project");
        break;
    case "Safari": console.log("Apple  browser - uses JavaScript ");
        break;

    default:
        console.log("Unknown Browser -- Manual Testing Required");

}