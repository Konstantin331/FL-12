function makeNumber(str){
    str.split('');
    let num = '';
    for(let i=0;i<str.length;i++){
        if (!(str[i]*1)){
            continue;
        }else{
            num+=str[i];
        }
    }
    return num;
}
makeNumber('erer384jjjfd123');
makeNumber('123098h76gfdd');
makeNumber('ijifjgdj');