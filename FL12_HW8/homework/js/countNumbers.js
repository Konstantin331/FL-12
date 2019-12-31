function countNumbers(str){
    str.split('')
    let num = '';
    let a = {};
    for(let i=0;i<str.length;i++){
        let count = 0;
        if (!(str[i]*1)){
            continue;
        }else{
            num+=str[i];
            for(let j=0; j<num.length; j++){
                if(str[i] === num[j]){
                    count++;
                    delete num[j];
                }
            }
        }
        if (count > 0){
            a[str[i]] = count;
        }
    }
    return a; 
}
countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');
countNumbers('');
