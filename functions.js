document.getElementById('runFunctionBtn').addEventListener('click', function() {
const promise = Promise.resolve();
let i = 0;
promise.then(() => {
  i += 1;
  console.log(i);
});
promise.then(() => {
  i += 1;
  console.log(i);
});
const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
if (connection) {
  console.log("Connection type:", connection.effectiveType);
}
MyNamespace.SubNamespace = {};
MyNamespace.SubNamespace.anotherVariable = 123;
const storage = localStorage
sessionStorage.clear();
let x = document.cookie; 
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
compareObject()
Object.prototype.valueOf()
var required = function(){ throw new Error("Implement!"); };
var InputInterface = {
    render: required,
    value: required
};
function Input(){}
Input.prototype = Object.create(InputInterface);
function Checkbox(){ 
    this.$el = $("<input/>", { type: "checkbox" }); 
}
Checkbox.prototype = Object.create(Input); // inherit
Checkbox.prototype.render = function(){ return this.$el; };
Checkbox.prototype.value = function(){ 
    return this.$el.prop("checked"); // override methods
};
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): number | string {
  return a + b;
});
