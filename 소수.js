
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



