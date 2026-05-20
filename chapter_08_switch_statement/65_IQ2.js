let testScore = 85;
switch (true) {
    case testScore >= 95:
        console.log("Outstanding Top perfrormance   Grade: A");
        break;
    case testScore >= 85:
        console.log("  Excellent  Grade: B");
        break;
    case testScore >= 70:
        console.log("  Good Meets Expectations  Grade: C");
        break;
    case testScore >= 50:
        console.log("  Satisfactory  Grade: D");
        break;
    default:
        console.log("  Needs Improvement  Grade: F");
}