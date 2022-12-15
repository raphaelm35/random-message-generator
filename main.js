//#region 
// creating arrays to contain each a part of the final message
const dayMessage = ['aliens', 'santa', 'your future grand-child', 'your brother', 'your 10th spouse', 'everyone except you', 'nobody', 'The Flying Spaghetti Monster', 'your neighbor', 'your boss', 'the pizza delverymanguy'];
const monthMessage = ['loves', 'eradicate', 'invented', 'codes', 'dine with', 'eat', 'wake up', 'drink', 'makes joke about', 'think about', 'party with', 'is looking for'];
const decadeMessage = ['turtles', 'seals', 'codecademy', 'kinden garden drawings', 'Ninja Turtles', 'alcohol', 'bitcoin', 'triple jalapenos pizza'];

// creating the function that makes the random message
const RandomMessage = (dayOfBirth, monthOfBirth, decadeOfBirth) => {
// creating the variables that will "stock" the message
    let returnedDayMessage = "";
    let returnedMonthMessage = "";
    let returnedDecadeMessage = "";
    //making sure that the dates given by user is in our scope
    if (dayOfBirth > 0 && dayOfBirth < 31 && monthOfBirth > 0 && monthOfBirth < 13 && decadeOfBirth > 1940 && decadeOfBirth < 2023){
        // detemining the random message for the day by picking up a string in the "dayMessage" array depending on the user date of birth
                for (i = 0; i < 31; i++) {
                    if (dayOfBirth < 3) {
                        returnedDayMessage = dayMessage[0];
                    } else if (dayOfBirth >= 3 && dayOfBirth <= 5) {
                        returnedDayMessage = dayMessage[1];
                    } else if (dayOfBirth >= 6 && dayOfBirth <= 8) {
                        returnedDayMessage = dayMessage[2];
                    } else if (dayOfBirth >= 9 && dayOfBirth <= 11) {
                        returnedDayMessage = dayMessage[3];
                    } else if (dayOfBirth >= 12 && dayOfBirth <= 14) {
                        returnedDayMessage = dayMessage[4];
                    } else if (dayOfBirth >= 15 && dayOfBirth <= 17) {
                        returnedDayMessage = dayMessage[5];
                    } else if (dayOfBirth >= 18 && dayOfBirth <= 20) {
                        returnedDayMessage = dayMessage[6];
                    } else if (dayOfBirth >= 21 && dayOfBirth <= 23) {
                        returnedDayMessage = dayMessage[7];
                    } else if (dayOfBirth >= 24 && dayOfBirth <= 26) {
                        returnedDayMessage = dayMessage[8];
                    } else if (dayOfBirth >= 27 && dayOfBirth <= 29) {
                        returnedDayMessage = dayMessage[9];
                    } else if (dayOfBirth >= 30 && dayOfBirth <= 31) {
                        returnedDayMessage = dayMessage[10];
                    };
                };
        // same for the month (using switch because cleaner)
                switch (monthOfBirth) {
                    case 1:
                        returnedMonthMessage = monthMessage[0];
                        break;
                    case 2:
                        returnedMonthMessage = monthMessage[1];
                        break;
                    case 3:
                        returnedMonthMessage = monthMessage[2];
                        break;
                    case 4:
                        returnedMonthMessage = monthMessage[3];
                        break;
                    case 5:
                        returnedMonthMessage = monthMessage[4];
                        break;
                    case 6:
                    returnedMonthMessage = monthMessage[5];
                    break;
                    case 7:
                        returnedMonthMessage = monthMessage[6];
                        break;
                    case 8:
                        returnedMonthMessage = monthMessage[7];
                        break;
                    case 9:
                        returnedMonthMessage = monthMessage[8];
                        break;
                    case 10:
                        returnedMonthMessage = monthMessage[9];
                        break;
                    case 11:
                        returnedMonthMessage = monthMessage[10];
                        break;
                    default:
                        returnedMonthMessage = monthMessage[11];
                        break;
                };
        // same with decade of birth
                for (j = 0; j < decadeMessage.length; j++) {
                    if (decadeOfBirth < 1949) {
                        returnedDecadeMessage = decadeMessage[0];
                    } else if (decadeOfBirth >= 1949 && decadeOfBirth <= 1959) {
                        returnedDecadeMessage = decadeMessage[1];
                    } else if (decadeOfBirth >1959 && decadeOfBirth <= 1969) {
                        returnedDecadeMessage = decadeMessage[2];
                    } else if (decadeOfBirth >1969 && decadeOfBirth <= 1979) {
                        returnedDecadeMessage = decadeMessage[3];
                    } else if (decadeOfBirth >1979 && decadeOfBirth <= 1989) {
                        returnedDecadeMessage = decadeMessage[4];
                    } else if (decadeOfBirth >1989 && decadeOfBirth <= 1999) {
                        returnedDecadeMessage = decadeMessage[5];
                    } else if (decadeOfBirth >1999 && decadeOfBirth <= 2009) {
                        returnedDecadeMessage = decadeMessage[6];
                    } else if (decadeOfBirth >2009 && decadeOfBirth <= 2019) {
                        returnedDecadeMessage = decadeMessage[7];
                    } else if (decadeOfBirth >2019 && decadeOfBirth < 2024) {
                        returnedDecadeMessage = decadeMessage[8];
                    } else if (decadeOfBirth => 2024) {
                        console.log("You are from the future ! Thank you for reading my code !") 
                    } else {
                        console.log("Please return valid decade of birth")
                };
            };
            console.log(`The undeniable truth is that ${returnedDayMessage} ${returnedMonthMessage} ${returnedDecadeMessage}`);
    // pushing messages to make sure that the user gives appropriate date
    } else if (dayOfBirth <= 0 || dayOfBirth > 31) {
        console.log("Please return valid date of birth")
    } else if (monthOfBirth <= 0 || monthOfBirth >= 13) {
        console.log("Please return valid month of birth")
    } else if (decadeOfBirth < 1940) {
        console.log("Please return valid decade of birth")
    } else if (decadeOfBirth > 2024) {
    // just want to be thankfull for anyone coming from the future
        console.log("You are from the future ! Thank you for reading my code !") 
    } else {
        console.log("Please return valid dates")
    }
};

RandomMessage(18, 01, 2025);
