const callerObj = {
    name: 'Janek'
}

function checkMyThis(age) {
    console.log(`Czym jest this: ${this}`);
    console.log(`Czy mam na imię? ${this.name}`);
    this.age = age;
    console.log(`Ile mam lat? ${this.age}`);
}

// checkMyThis();
checkMyThis.call(callerObj, 25);