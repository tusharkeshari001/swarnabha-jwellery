// it is not handling edge case like if 0-term having 0 it cannot able to handle

const makeZero = (A) => {
    let N = A.length;
    // console.log(A);
    for(let i=0; i<N; i++) {
        for(let j=0; j<N; j++) {
            if(A[i][j] === 0) {
                A[0][j] = -1;
                A[i][0] = -1;
            }
        }
    }

    console.log(A);
    // row zero

    for (let i=1; i<N; i++) {
        if(A[i][0] === -1) {
            let j = 1;
            while(j<N) {
                A[i][j] = 0;
                j++;
            }
        }
    }
    // console.log(A);
    // column zero

    for (let j=1; j<N; j++) {
        if(A[0][j] === -1) {
            let i=1;
            while (i<N) {
                A[i][j] = 0;
                i++;
            }
        }
    }

    console.log(A);

    if(A[0][0] === -1) {
        let i=0, j=0;

        while (i<N) {
            A[i][j] = 0;
            i++;
        }

        while (j<N) {
            A[i][j] = 0;
            j++;
        }
    }else {
        let i=0, j=1;
        // console.log(A);
        while (j<N) {
            if(A[i][j] === -1) {
                A[i][j] = 0;
            }
            j++;
        }
        // console.log(A);
        i=1;
        j=0;

        while (i<N) {
            if(A[i][j] === -1) {
                A[i][j] = 0;
            }
            i++;
        }
    }

    // console.log(A);
    return A;
}

const A = [[1,2,3,4],[9,8,7,5],[6,11,0,13], [12,15,19,0]];
makeZero(A);