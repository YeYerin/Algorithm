function solution(heights) {
    let answer = [];
    
    for(let i=heights.length-1;i>=0;i--){
        if(i==0) answer[i]=0;
        else{
            for(let j=i-1;j>=0;j--){
                if(heights[j]>heights[i]){
                    answer[i]=j+1; break;
                } else answer[i]=0;
            }
        }
        
    }
    
    return answer;
}