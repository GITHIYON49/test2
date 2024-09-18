1. what is the output of this code?

var x = false || true;
document.write(!(x !==true));

a. true
b. undefine
c. false

Ans = true;

2. what is the output of this code?
<div id="temp">0</div>

<script>
    var a = document.getElementById("temp");
    a.innerHTML = "1";
    a.innerHTML += "2";

</script>

a. 012
b. 3
c. 0
d. 12

Ans = 12;

3. what is the output of this code?

var a = 20;
// var a = 15;
alert(a);

Ans = 20;

4. in which range does this code's output lay?
for(let i = 0; i< 100; i++)
if(i%20==i-20)
document.write(i + ",");

a. 30 - 40
b. 20 - 39
c. 20 - 50
d. 10 - 19

Ans = 20 - 39

5. what is the output of this code?

class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static slopeAB (A,B){
        const dx = A.x-B.x;
        const dy = A.y-B.y;
        return dy/dx;
    }
}

const P1 = new Point(1,2);
const P2 = new Point(3,4);

console.log(Point.slopeAB(P1,P2))

Ans = 1;