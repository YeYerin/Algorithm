
/*
시간초과

function solution(n) {
    let answer = 0;
    
    if(n<3) answer = n;
    else
        answer = solution(n-1) + solution(n-2);
    
    return answer;
}

*/

/*
오류검출

function solution(n) {
    let answer = 1;
    //피보나치
    if(n<3) answer = n;
    else
        for(let i=1;i<n-1;i++){
            let a = answer;
            answer += a;
        }
    
    return answer;
}

*/