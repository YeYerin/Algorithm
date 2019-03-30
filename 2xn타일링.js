function solution(n) {
    let answer = 0;
    
    if(n<3) answer = n;
    else
        answer = solution(n-1) + solution(n-2);
    
    return answer;
}