let getVegPrice = (event) => {
    vegetable = event.target.value
    switch (vegetable.toLowerCase()) {
        case "carrots":
        case "potatoes":
            price = 1.34
            break;
        case "asparagus":
            price = 2.56
            break;
        case "broccoli":
            price = 9.75
            break;
        case "cabbage":
            price = 400
            break;

        default:
            price = null
            break;
    }
    alert(price)
}




// let number1 = 5
// if (number1 > 0) {
//     return true
// } else {
//     return false
// }

// let number2 = 6
// let number3 = 7

// if (number1 > number2) {
//     if (number1 > number3) {
//         return number1
//     } else {return number3}
// } else if (number2 > number3) {
//     return number2
// } else { return number3 }

// let day = "Monday"
// switch (day.toLowerCase()) {
//     case "monday":
//         console.log("Only 5 more days until the weekend")
//         break;
//     case "tuesday":
//         console.log("Only 4 more days until the weekend")
//         break;
//     case "wednesday":
//         console.log("Only 3 more days until the weekend")
//         break;
//     case "thursday":
//         console.log("Only 2 more days until the weekend")
//         break;
//     case "friday":
//         console.log("Only 1 more days until the weekend")
//         break;
//     case "saturday","sunday":
//         console.log("It is the weekend!")
//         break;
//     // case "sunday":
//     //     console.log("It is the weekend!")
//     //     break;

//     default:
//         console.log("Sorry, we don't recognize that day...")
//         break;
// }
