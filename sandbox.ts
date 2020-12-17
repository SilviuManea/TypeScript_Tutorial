const character = 'Silviu';

console.log(character);

const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach(input => {
    console.log(input);
});

//TypeScript Tutorial #2 - Compiling TypeScript
//To compile from ts to js ->> in terminal ->> tsc sandbox.ts
//To watch and auto compile the ts file execute ->> tsc sandbox.ts -w