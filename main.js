const dayMessage = ['Aliens', 'Santa', 'Your future grand-child', 'Your brother', 'Your 10th spouse', 'Everyone except you', 'Nobody', 'The Flying Spaghetti Monster', 'Your neighbor', 'Your boss', 'The pizza delveryman', 'Your future self'];

const monthMessage = ['loves', 'eradicate', 'invented', 'codes', 'dine with', 'eat', 'wake up', 'drink', 'makes joke about', 'think about'];

const decadeMessage = ['bitcoin', 'seals', 'Ninja Turtles', 'codecademy', 'kinden garden drawings', 'turtles', 'alcohol', 'triple jalapenos pizza'];

const RandomMessage = (dayOfBirth, monthOfBirth, decadeOfBirth) => {
    let returnedDayMessage = "";
    let returnedMonthMessage = "";
    let returnedDecadeMessage = "";

    if (dayOfBirth > 0 && dayOfBirth < 31 && monthOfBirth > 0 && monthOfBirth < 13 && decadeOfBirth > 1940 && decadeOfBirth < 2023){
        for (i = 0 ; i < 31 ; i++){
            if (dayOfBirth < 3){
                returnedDayMessage = dayMessage[0];
            } else if (dayOfBirth >= 3 && dayOfBirth <=5){
                returnedDayMessage = dayMessage[1];
            } else if (dayOfBirth >= 6 && dayOfBirth <=8){
                returnedDayMessage = dayMessage[2];
            } else if (dayOfBirth >= 9 && dayOfBirth <=11){
                returnedDayMessage = dayMessage[3];
            } else if (dayOfBirth >= 12 && dayOfBirth <=14){
                returnedDayMessage = dayMessage[4];
            } else if (dayOfBirth >= 15 && dayOfBirth <=17){
                returnedDayMessage = dayMessage[5];
            } else if (dayOfBirth >= 18 && dayOfBirth <=20){
                returnedDayMessage = dayMessage[6];
            } else if (dayOfBirth >= 21 && dayOfBirth <=23){
                returnedDayMessage = dayMessage[7];
            } else if (dayOfBirth >= 24 && dayOfBirth <=26){
                returnedDayMessage = dayMessage[8];
            } else if (dayOfBirth >= 27 && dayOfBirth <=29){
                returnedDayMessage = dayMessage[9];
            } else if (dayOfBirth >= 30 && dayOfBirth <=31){
                returnedDayMessage = dayMessage[10];
            }
        };
        for (j=0 ; j<13 ; j++) {
            if (monthOfBirth === 1){
                returnedMonthMessage = monthMessage[0];
            };
        }
    console.log(`The undeniable truth is that ${returnedDayMessage} ${returnedMonthMessage}`);
    } else if (dayOfBirth < 0 && dayOfBirth > 31) {
        console.log("Please return valid date of birth")
    } else if (monthOfBirth < 0 && monthOfBirth >= 13) {
        console.log("Please return valid month of birth")
    } else if (decadeOfBirth < 1940 && decadeOfBirth >= 2024) {
        console.log("Please return valid decade of birth")
    } else {
        console.log("Please return valide dates")
    }
}


RandomMessage(22, 1, 1999);
