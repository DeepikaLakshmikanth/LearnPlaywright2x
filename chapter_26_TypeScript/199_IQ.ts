function buildEndpoint(base: string, path: string): string {
    return base + path;
}
function isSuccessCode(code: number): boolean {
    return code >= 200 && code < 300;
}
function logTestsStep(step: string): void {
    console.log("[Step] : " + step);

}

console.log(buildEndpoint("https://api.com", "/users"));
console.log("200 is success:", isSuccessCode(204));
console.log("404 is success:", isSuccessCode(404));
logTestsStep("Navigate to Login page");

