var functionsTested = [];
var functionsSuccessful = [];
var functionsErrors = [];

function testFunction(functionName, params) {
    try {
        window[functionName].apply(null, params);
        functionsSuccessful.push(functionName);
    } catch (error) {
        functionsErrors.push({ functionName: functionName, error: error });
    } finally {
        functionsTested.push(functionName);
    }
}

var jsFunctions = [
    { name: "alert", params: ["Teste de alerta"] },
    { name: "confirm", params: ["Teste de confirmação"] },
    { name: "prompt", params: ["Teste de prompt"] },
    { name: "setTimeout", params: [function() { console.log('setTimeout executado'); }, 1000] },
    { name: "setInterval", params: [function() { console.log('setInterval executado'); }, 1000] },
    { name: "fetch", params: ['https://jsonplaceholder.typicode.com/posts/1'] },
    { name: "XMLHttpRequest", params: [] },
    { name: "JSON.parse", params: ['{"key": "value"}'] },
    { name: "JSON.stringify", params: [{ key: "value" }] },
    { name: "document.getElementById", params: ["elementId"] },
    { name: "document.querySelector", params: ["selector"] },
    { name: "document.createElement", params: ["div"] },
    { name: "console.log", params: ["Teste de log"] },
    { name: "console.error", params: ["Teste de erro"] },
    { name: "console.warn", params: ["Teste de aviso"] },
    { name: "String.fromCharCode", params: [65] },
    { name: "encodeURIComponent", params: ["teste de encode"] },
    { name: "decodeURIComponent", params: ["teste%20de%20decode"] },
    { name: "Math.random", params: [] },
    { name: "Math.floor", params: [Math.random() * 100] },
    { name: "Array.isArray", params: [[]] },
    { name: "Array.prototype.forEach", params: [[1, 2, 3], function(item) { console.log(item); }] },
    { name: "Object.keys", params: [{ key: "value" }] },
    { name: "Object.values", params: [{ key: "value" }] },
    { name: "Date.now", params: [] },
    { name: "Date.prototype.toLocaleString", params: [] },
    { name: "String.prototype.toUpperCase", params: [] },
    { name: "String.prototype.trim", params: [] },
    { name: "Number.prototype.toFixed", params: [3.14159265359, 2] },
    { name: "Boolean", params: [true] },
    { name: "atob", params: ["SGVsbG8gV29ybGQh"] },
    { name: "btoa", params: ["Hello World!"] },
    { name: "parseInt", params: ["10"] },
    { name: "parseFloat", params: ["3.14"] },
    { name: "isNaN", params: ["Hello"] },
    { name: "isFinite", params: [42] },
    { name: "decodeURI", params: ["https://example.com/path/to/page?name=test&age=30"] },
    { name: "encodeURI", params: ["https://example.com/path/to/page?name=test&age=30"] },
    { name: "escape", params: ["Hello World!"] },
    { name: "unescape", params: ["Hello%20World%21"] },
    { name: "Array.prototype.map", params: [[1, 2, 3], function(item) { return item * 2; }] },
    { name: "Array.prototype.filter", params: [[1, 2, 3], function(item) { return item > 1; }] },
    { name: "Array.prototype.reduce", params: [[1, 2, 3], function(total, item) { return total + item; }, 0] },
    { name: "String.prototype.substring", params: ["Hello World!", 6] }
];

jsFunctions.forEach(function(func) {
    testFunction(func.name, func.params);
});

console.clear();

console.log("📜 -- Tested Functions:", functionsTested.length);
console.log("🟢 -- Working Functions:", functionsSuccessful.length);
console.log("🔴 -- Bugged Functions:", functionsErrors.length);
