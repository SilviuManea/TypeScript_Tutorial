# TypeScript_Tutorial
TypeScript Basics - The Net Ninja

Introductory Video:

https://www.youtube.com/watch?v=2pZmKW9-I_k&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=1

Check the files on each branch for comments and examples.

Lesson1 - Presentation
//watch video linked above

Lesson2 - TypeScript Tutorial #2 - Compiling TypeScript
//To compile from ts to js ->> in terminal ->> tsc sandbox.ts
//To watch and auto compile the ts file execute ->> tsc sandbox.ts -w

Lesson3 - TypeScript Tutorial #3 - Type Basics
//we can define the type of an argument when declaring the function.

Lesson4 - TypeScript Tutorial #4 - Objects & Arrays
//mixed type of values on arrays
//type of object - once declared we can not change the type of the object or it's structure(we can change the values of its properties though(but not their type))

Lesson5 - TypeScript Tutorial #5 - Explicit Types
//Set specific type to an object or variable

Lesson6 - TypeScript Tutorial #6 - Dynamic (any) Types
//We use the any type for a vbariable that can be of any type and in the future can change its type. - THIS IS NOT RECOMMENDED BECAUSE WE ARE LOSING ALL THE BENEFITS OF TYPESCRIPT

Lesson7 - TypeScript Tutorial #7 - Better Workflow & tsconfig
//we can use tsc --init to create a tsconfig.jscon file in which we can specify what folders to compile when using tsc:    

Enable this under tsconfig.js:
"outDir": "./public",    /* Redirect output structure to the directory. */
"rootDir": "./src",      /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */

and at the end, to include only the files in a specific folder(ex: src) we should add
"include":["src"] //include ONLY files inside the src folder and nothing else

Lesson8 - TypeScript Tutorial #8 - Function Basics
//optional parameters for functions and return types

Lesson9 - TypeScript Tutorial #9 Type Aliases
//we can use an alias for a custom type so that we dont need to define them each time in the functions.Plus we reduce code duplication

Lesson10 - TypeScript Tutorial #10 - Function Signatures
//Signatures describe the general structure of a function - what data type it takes and returns.

Lesson11 - TypeScript Tutorial #11 - The DOM & Type Casting
//Basic Dom Interaction and type casting.

Lesson12 - TypeScript Tutorial #12 - Classes
//Basic class declaration, initialization and use.

Lesson13 - TypeScript Tutorial #13 - Public, Private & Readonly
//Examples of use in the corresponding branch

Lesson14 - TypeScript Tutorial #14 - Modules
//Under tsconfig.json modify ->  "target": "es6","module": "es2015"  
//under index.html set -> <script type  = "module" src='app.js'></script>
//in order to use a module we first separate and export the class and we need to import that class in the file we want to instantiate it. Example: export on the file Invoice.ts class and import on file app.ts
//in order to be optimal, we should use webpack with the module system, which allows us to also use this oon older browser, since it's supported only on newest browsers.(optional)

Lesson15 - TypeScript Tutorial #15 - Interfaces
//Allows us to enforce a certain structure of a class or object.Used to decribe what properties, methods and return of those methods are.

Lesson16 - TypeScript Tutorial #16 - Interfaces with Classes
//We can use interfaces with clases so that when we instantiate a new object of a certain class we can specify what type of interface has to implement that class

Lesson17 - TypeScript Tutorial #17 - Rendering an HTML Template
//We are rendering the info from the input on to the list of the main page.

Lesson18 - TypeScript Tutorial #18 - Generics
//Feature  - Allows us to create reusable blocks of code which can be used with different types.

Lesson19 - TypeScript Tutorial #19 - Enums
//Special datatype that allows us to store a set of constants or keywords and associate it with a numeric value.