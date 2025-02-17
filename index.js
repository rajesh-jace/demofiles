class Parent {
  constructor(props) {
    this.parentName = props?.parentName || "kumareee";
  }
}

class Child extends Parent {
  constructor(props) {
    super(props);
    this.childName = props?.childName;
  }

  showMessage() {
    console.log(this.parentName);
    console.log(this.childName);
  }
}

const printName = new Child({ parentName: "ashok", childName: "kumar" });

printName.showMessage();

// class Parent {
//     constructor() {
//         this.message = "Hello from Parent!";
//     }
// }

// class Child extends Parent {
//     constructor() {
//         super(); // Calls Parent's constructor
//     }

//     showMessage() {
//         console.log(this.message);
//     }
// }

// const obj = new Child();
// obj.showMessage(); // Output: Hello from Parent!

// class Parent {
//     message = "Hello from Parent!"; // Defined outside constructor
// }

// class Child extends Parent {
//     constructor() {
//         super(); // Parent's constructor is called, but it's empty
//     }

//     showMessage() {
//         console.log(this.message);
//     }
// }

// const obj = new Child();
// obj.showMessage(); // Output: Hello from Parent!

function getDate() {
  var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
  console.log(tzoffset);

  var localISOTime = new Date(Date.now() - tzoffset).toISOString().slice(0, -1);
  console.log(localISOTime);

  return localISOTime.replace("T", " ").replace("Z", ""); //new Date().toISOString().replace("T"," ").replace("Z","")
}

getDate();
