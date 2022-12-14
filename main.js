const dayMessage = ['loves', 'eradicate', 'invented', 'codes', 'dine with', 'eat', 'wake up', 'drink', 'makes joke about', 'think about'];

const monthMessage = ['Aliens', 'Santa', 'Your future grand-child', 'Your brother', 'Your 10th spouse', 'Everyone except you', 'Nobody', 'The Flying Spaghetti Monster', 'Your neighbor', 'Your boss', 'The pizza delveryman', 'Your future self'];

const decadeMessage = ['bitcoin', 'seals', 'global warming', 'codecademy', 'kinden garden drawings', 'turtles', 'water', 'triple jalapenos pizza'];

const RandomMessage = (dayOfBirth, monthOfBirth, decadeOfBirth) => {
    let returnedMonthMessage = "";
    let returnedDayMessage = "";
    let returnedDecadeMessage = "";

    if (dayOfBirth > 0 && dayOfBirth < 31 && monthOfBirth > 0 && monthOfBirth < 13 && decadeOfBirth > 1940 && decadeOfBirth < 2023){
        if (dayOfBirth < 5){
            console.log("it works")
        }
        


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


RandomMessage(4, 3, 1999);
