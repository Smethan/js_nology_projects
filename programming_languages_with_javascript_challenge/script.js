const calculateAge = (event) => {
    let age = event.target.value
    let isEligibleForRetirement = age >= 65 ? "You're retired!" : `you are ${65 - age} away from retirement :()`

    alert(isEligibleForRetirement)
}

const translateHello = (event) => {
    let word = event.target.value.toLowerCase()

    switch (word) {
        case "hello":
            alert("bonjour")
            break;
        case "goodbye":
            alert("au revoir")
            break;
        default:
            alert("word not recognized :(")
            break;
    }
}