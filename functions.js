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

  // Initialize MyNamespace before using it
  const MyNamespace = {}; // Ensure MyNamespace is defined

  MyNamespace.SubNamespace = {};
  MyNamespace.SubNamespace.anotherVariable = 123;

  const storage = localStorage;
  sessionStorage.clear();

  let x = document.cookie;

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
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

  compareObject();

  Object.prototype.valueOf();

  var required = function() {
    throw new Error("Implement!");
  };

  var InputInterface = {
    render: required,
    value: required
  };

  function Input() {}
  Input.prototype = Object.create(InputInterface);

  function Checkbox() {
    this.$el = $("<input/>", { type: "checkbox" });
  }

  Checkbox.prototype = Object.create(Input); // inherit
  Checkbox.prototype.render = function() {
    return this.$el;
  };
  Checkbox.prototype.value = function() {
    return this.$el.prop("checked"); // override methods
  };

  // Function Overloading Fix (for JavaScript)
  function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b; // If both are numbers
    }
    if (typeof a === 'string' && typeof b === 'string') {
      return a + b; // If both are strings
    }
    return null; // If types don't match
  }

});
