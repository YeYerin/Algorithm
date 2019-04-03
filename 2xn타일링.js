
/*
시간초과 : 재귀는 느리다.

function solution(n) {
    let answer = 0;
    
    if(n<3) answer = n;
    else
        answer = solution(n-1) + solution(n-2);
    
    return answer;
}

*/


// 결과는 맞으나 시간,공간 초과
function solution(n) {
    let a=1;    let b=1;    let t;
    
    for(let i=0;i<n-1;i++){
        t = a+b;
        a = b;
        b = t;
    }
    return t;
}