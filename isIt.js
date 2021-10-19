function isItSomeonesBirthday() {

    const currentDate = new Date()
    const Macola = new Date(currentDate.getFullYear(), 9, 25)
    const Gabs = new Date(currentDate.getFullYear(), 9, 9)
    const Culs = new Date(currentDate.getFullYear(), 8, 1)
    const Paks = new Date(currentDate.getFullYear(), 5, 25)
    const Ivo = new Date(currentDate.getFullYear(), 7, 20)

    if (Macola.getFullYear() === currentDate.getFullYear()
        && Macola.getMonth() === currentDate.getMonth()
        && Macola.getDate() === currentDate.getDate()) {
        return "Macolin je bday"
    } else if (Gabs.getFullYear() === currentDate.getFullYear()
        && Gabs.getMonth() === currentDate.getMonth()
        && Gabs.getDate() === currentDate.getDate()) {
        return "Gabs babs slavi rod"
    } else if (Culs.getFullYear() === currentDate.getFullYear()
        && Culs.getMonth() === currentDate.getMonth()
        && Culs.getDate() === currentDate.getDate()) {
        return "Cula slavi rod"
    } else if (Paks.getFullYear() === currentDate.getFullYear()
        && Paks.getMonth() === currentDate.getMonth()
        && Paks.getDate() === currentDate.getDate()) {
        return "paks"
    } else if (Ivo.getFullYear() === currentDate.getFullYear()
        && Ivo.getMonth() === currentDate.getMonth()
        && Ivo.getDate() === currentDate.getDate()) {
        return "Ivin je rod"
    } else {
        return "Nije nikome rodendan :("
    }
}

module.exports = isItSomeonesBirthday