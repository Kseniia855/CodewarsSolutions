
//https://www.codewars.com/users/Kseniia%20Sydorenko/completed

//Get planet

function smallest(n) {
    let min = n;
    let extractIndex = 0;
    let insertIndex = 0;
    let nStr = getString(n);
    let temp = '';
    for (let i=0; i<=nStr.length-1;i++){
        for(let j=0; j<=nStr.length-1;j++){
            temp = insertDigit(extractDigit(nStr,i),j,nStr[i]);
            if(min>getNumber(temp)){
                min = getNumber(temp);
                extractIndex = i;
                insertIndex = j;
            }
        }
    }
    return [min,extractIndex,insertIndex]
}
