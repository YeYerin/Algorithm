function solution(arr)
{
    var answer = [];

    for(let i in arr){
        if(arr[i] !== answer[answer.length-1])
            answer.push(arr[i]);
    }
    
    return answer;
}