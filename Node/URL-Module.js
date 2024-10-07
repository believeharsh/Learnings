const myURL = new URL(
  "https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash"
);
const url = new URL("https://example.org");
url.pathname = "/a/b/c";
url.search = "?d=e";
url.hash = "#fgh";

console.log(myURL); 
console.log(myURL.href)
