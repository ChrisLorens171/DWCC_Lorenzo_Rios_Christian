const ADN = ["AAAAAA", "ACACAC", "GTTTTG", "ACACAC", "GTTTTG", "ACACAC", "ACACAC", "TCCCCC", "TCCCCC"];

function getClones(ADNs) {
    const nVeces = {};

    // Contamos cuántas veces aparece cada cadena en el ADN
    ADNs.forEach(adn => {
        if (!nVeces[adn]) {
            nVeces[adn] = ADNs.filter(el => el == adn).length;
        }
    });

    // Para cada cantidad de repeticiones, contamos cuántas cadenas tienen exactamente esa cantidad de repeticiones
    const result = Object.values(nVeces).map(count => {
        return Object.values(nVeces).filter(el => el === count).length;
    });

    return result;
}

console.log(getClones(ADN));
