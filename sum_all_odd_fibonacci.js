/*
Sum all Odd numbers in a Fibonacci series
*/
function sumFibs(num) {
    var sum = 0, cnt = 1, prevNum = 0;
    while(cnt<=num){
        if(cnt%2!==0){
            sum += cnt;
        }
        cnt += prevNum;
        prevNum = cnt - prevNum;
    }
    
    return sum;
}

sumFibs(1000);