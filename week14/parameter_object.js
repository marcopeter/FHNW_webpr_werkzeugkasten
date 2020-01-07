// Parameter object

let foo;
foo = (x) => console.log(x);
foo(1); // 1

foo = (x, y) => console.log(x, x+y);
foo(1,2); // 1 3

foo = (x, y, z) => console.log(x, x+y, y-z);
foo(1,2,0); // 1 3 2

foo = ({x, y, z}) => console.log(x, x+y, y-z); // => Egal in welcher Reihenfolge die Felder im Objekt sind
foo({x:1, z:0, y:2}); // 1 3 2

foo = ({x, y, z=0}) => console.log(x, x+y, y-z); // Es kann auch ein Default Wert gesetzt werden und somit beim Aufruf weggelassen
foo({x:1, z:0, y:2}); // 1 3 2
foo({x:1, y:2}); // 1 3 2
