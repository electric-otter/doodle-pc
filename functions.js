document.getElementById('runFunctionBtn').addEventListener('click', function() {
  let i = 0;
  
  // Promise and increment logic
  const promise = Promise.resolve();
  promise.then(() => {
    i += 1;
    console.log(i);
  });

  promise.then(() => {
    i += 1;
    console.log(i);
  });

  // Handle connection type (if available)
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (connection) {
    console.log("Connection type:", connection.effectiveType);
  }

  // Initialize MyNamespace object
  const MyNamespace = {}; 
  MyNamespace.SubNamespace = {}; 
  MyNamespace.SubNamespace.anotherVariable = 123;

  // Local and session storage handling
  const storage = localStorage;
  sessionStorage.clear();

  // Cookie reading function
  let x = document.cookie;

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  // Placeholder for compareObject function
  function compareObject() {
    console.log("Comparing objects...");
  }

  // The 'required' function throws an error
  var required = function() {
    throw new Error("Implement!");
  };

  // Interface for Input-related methods
  var InputInterface = {
    render: required,
    value: required
  };

  // Input constructor function
  function Input() {}
  Input.prototype = Object.create(InputInterface);

  // Checkbox constructor function
  function Checkbox() {
    this.$el = $("<input/>", { type: "checkbox" });
  }
  
  Checkbox.prototype = Object.create(Input); // Inherit from Input
  Checkbox.prototype.render = function() {
    return this.$el;
  };
  Checkbox.prototype.value = function() {
    return this.$el.prop("checked"); // Override methods
  };

  // Function Overloading Example
  function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b; // Both numbers
    }
    if (typeof a === 'string' && typeof b === 'string') {
      return a + b; // Both strings
    }
    return null; // If types don't match
  }

  // Remove the unnecessary switch with console.log
  console.log(1);
  console.log(2);

  // Create file input for ISO file selection
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.iso';

  input.addEventListener('change', (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Handle the selected ISO file
      console.log('Selected ISO file:', selectedFile.name);
    }
  });

  input.click();

  // Function call after 5 seconds (dothis function not provided)
  setTimeout(dothis, 5000);

  // WeakMap usage
  const wm = new WeakMap();
  const key = {};
  wm.set(key, { key });

  // Do-while loop example
  let output = '';
  let i = 0;
  do {
    output += i + ' ';
    i++;
  } while (i < 5);
  console.log(output);

  // Get current date in ISO format
  const now = new Date();
  const isoString = now.toISOString();
  console.log(isoString); // e.g., "2025-04-26T14:50:00.000Z"

  // Socket.IO connection handling
  socketio.sockets.on('connection', function(socket) {
    socket.on('init', function(config) {
      var r = createRfbConnection(config, socket);
      socket.on('mouse', function(evnt) {
        r.pointerEvent(evnt.x, evnt.y, evnt.button);
      });
      socket.on('keyboard', function(evnt) {
        r.keyEvent(evnt.keyCode, evnt.isDown);
      });
      socket.on('disconnect', function() {
        disconnectClient(socket);
      });
    });
  });
});
