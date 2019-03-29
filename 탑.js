
function solution(heights) {
    let answer = [];
    //맨앞에 위치하면 0, for문으로비교, 배열 거꾸로 되어있으니까 reserve해준다
    for(let i=heights.length;i>0;i--){
        if(i==0) answer[i]=0;
        else{
            for(let j=i-1;i>0;i--){
                
            }
        }
    }
    
    return answer;
}