let start = confirm('Do you want to play a game?');
let maxPrize = 1000000000;
let numberRandom = 9;
let numberPrize = 2;
let numberIncrease = 4;
let numberMinTotal = 25;
let numberAttempts = 3;
let numberDefaultPrize = 100;
let random = Math.floor(Math.random() * numberRandom);
if (start === null || start === '') {
    alert('You did not become a billionaire, but can.');
}
while (start) {
    let attempts = 3;
    let total = 0;
    let prize = 100;
    let content = `
Choose a roulette pocket number from 0 to ${numberRandom - 1}
Attempts left: ${attempts}
Total prize: ${total}$
Possible prize on current attempt: ${prize}$
`;
    let answer = parseInt(prompt(content));
    while(attempts !== 0){
        if(total >= numberMinTotal){
            attempts = numberAttempts;
            prize *= numberPrize;
            numberRandom += numberIncrease;
            random = Math.floor(Math.random() * numberRandom);
            content = `
            Choose a roulette pocket number from 0 to ${numberRandom - 1}
            Attempts left: ${attempts}
            Total prize: ${total}$
            Possible prize on current attempt: ${prize}$
            `;
            answer = parseInt(prompt(content));
        }
        while (attempts-- !== 1 && answer !== random) {
            alert('Wrong!');
            prize /= numberPrize;
            content = `
            Choose a roulette pocket number from 0 to ${numberRandom - 1}
            Attempts left: ${attempts}
            Total prize: ${total}$
            Possible prize on current attempt: ${prize}$
            `;  
            answer = parseInt(prompt(content));
        }
        if (answer === random && total !== maxPrize) {
            total += prize;
            let win = `Congratulation, you won! Your prize is: ${total}$. Do you want to continue?`;
            let confirmAnswer = confirm(win);
            if (!confirmAnswer) {
                break;
            } else {
                prize = numberDefaultPrize;
                continue;
            }
        }else {
            let lose = `Thank you for your participation. Your prize is: ${total}$`;
            alert(lose);
            break;
        }
    }
    let confirmAnswer = confirm('Do you want to play a game?');
    if(!confirmAnswer){
        break;
    } else{
        continue;
    }
}