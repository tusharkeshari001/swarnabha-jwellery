// This will handle edge case also

const makeZeroRowAndColumn = (A) => {
    let setOfIth = new Set();
    let setOfJth = new Set();
    let N = A.length;
    let M = A[0].length;

    for (let i=0; i<N; i++){
        for(let j=0; j<M; j++) {
            if(A[i][j]===0){
                setOfIth.add(i);
                setOfJth.add(j);
            }
        }
    }

    for(let i of setOfIth) {
        for(let j=0; j<M; j++){
            A[i][j] = 0;
        }
    }

    for(let j of setOfJth) {
        for (let i=0; i<N; i++) {
            A[i][j]=0;
        }
    }

    return A;
}


let A = [[1,2,0,4],[2,4,7,9],[0,7,8,9]]
console.log(makeZeroRowAndColumn(A));
