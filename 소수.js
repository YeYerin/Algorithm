/* 효율성 실패
function solution(n) {

    let answer = 0;

    for(let i=2; i<=n; i++){
        let thtn = 0;

        for(let j=2; j<=i; j++){
            if(i%j == 0) thtn++;
        }

        if(thtn < 2) answer++;
    }
    
    return answer;
}


*/

function solution(n) {

    let answer = 1; 
    if ( n == 2 ) answer = 1; 
    else { 
        for ( let i = 3; i <= n; i++ ) { 
            let thtn = false; 
            for ( let j = 2; j < i; j++) { 
                if ( i % j != 0 ) thtn = true;  
                else {thtn = false; break; }
            } 
            if (thtn) answer++;
    return answer;
}
