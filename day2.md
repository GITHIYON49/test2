1. what is the output of this code?

function foo(str){
    arguments[0] = "Hello";
    return str;
}

function bar(str){
    "use strict";
    arguments[0] = "World";
    return str;

}

console.log(foo("hello")+""+bar("world"));

Ans = Hello world

2. what is the output of this code?

var x = 6;
var y = 0;

while(X > 0 && y < 6){
    x-;
    y += x;
}

document.write(y);

Ans = 9

3. what is the output of this code?

function findl(v,t){
    let len = v.length;
    for(let i=0; i < len; ++i){
        if(v[i]==t) return i;
    }
    return -1;
}

var a = findl([8,7,1,4],7);
console.log(a);

Ans = 1;

4. what is the output of this code?

var a = 4;
alert(a % 5);

Ans = 4;

5. what is the output of this code?

var c = 16.22;
var d = "javascript";

console.log(Math.ceil(c)+d.length);

Ans = 27