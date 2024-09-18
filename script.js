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