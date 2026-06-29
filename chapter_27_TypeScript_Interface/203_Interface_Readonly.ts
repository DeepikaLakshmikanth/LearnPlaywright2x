interface APIResponse {
    readonly statusCode: number;
    body: string;
    headers?: object;
    responseTime?: number;
}

// readonly -- means it cannot be modified 

let response: APIResponse = {
    statusCode: 200,
    body: '{"user":"admin"}',

};

console.log("Status", response.statusCode);
console.log("Body", response.body);
console.log("Header", response.headers);
