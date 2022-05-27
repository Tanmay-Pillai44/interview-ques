const http = require("http"); //ES5 writing format
//require() is a built-in function to include external modules that exist in separate files.

// creating a server
http.createServer((req, res) => {
    res.write("Hello World") // sending text response
    res.write("<h1>Hello World</h1>"); // sending html response
    res.write(JSON.stringify({name: "Tanmay", age: 22})); // sending json response

    res.end(); // closing the server
}).listen(8000) // listening to port 8000

// Everytime we update the response we need to restart the server again.