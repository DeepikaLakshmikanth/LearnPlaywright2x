interface APIResponse {
    body: string;
    headers?: object;
    responseTime?: number;
}

let response1: APIResponse = {
    body: 'This is for testing purpose',

};

let response2: APIResponse = {
    body: "This is for testing purpose",
    headers: {},
    responseTime: 1500
};
