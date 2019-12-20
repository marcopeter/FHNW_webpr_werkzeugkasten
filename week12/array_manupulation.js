Array.from( {length:  4});
//(4) [undefined, undefined, undefined, undefined]

Array.from( {length:  4}, (it) => it);
//(4) [undefined, undefined, undefined, undefined]

Array.from( {length:  4}, (it, idx) => idx);
//(4) [0, 1, 2, 3]

let x = Array.from( {length:  4}, (it, idx) => idx);
//undefined
x.reverse(); // => Seiteneffekt, unser x (1,2,3,4) ist nicht mehr unser x... x ist nun 3,2,1,0...
//(4) [3, 2, 1, 0]

x.slice().reverse(); // => Slice macht ein neuers Array...
//(4) [3, 2, 1, 0]

[...x].reverse(); // => neues Array machen -> [] , ... Platt klopfen
//(4) [3, 2, 1, 0]

[...x, 5].reverse();
//(5) [5, 3, 2, 1, 0]

[-1,...x, 5].reverse();
//(6) [5, 3, 2, 1, 0, -1]