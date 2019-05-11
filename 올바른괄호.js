function solution(s){
    let answer = true;
    let arr = s.split('');
    let a=0;
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]==='(') a++;
        if(arr[i]===')') a--;
        if(a<0) break;
    }
    if(a<0 || a>0) answer = false;
    return answer;
}