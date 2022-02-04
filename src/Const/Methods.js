
const formattedTime = (d, h, m, s) => {
    d = d < 10 ? "0" + d : d;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    return `${d}:${h}:${m}:${s}`;
}

const formattedTimeUnit = (u) => {
    u = u < 10 ? "0" + u : u;
    return u;
}

const formattedDashedDate = (date) => {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "Sepetmber", "October", "November", "December"];
    const givenDate = new Date(date);
    let day = givenDate.getDate();
    const month = givenDate.getMonth();
    const year = givenDate.getFullYear();

    switch (day) {
        case 1:
            day = day + "st";
            break;
        case 2:
            day = day + "nd";
            break;
        case 3:
            day = day + "rd";
            break;
        default:
            day = day + "th";
            break;
    }

    return `${months[month]} ${day}  ${year}`;
}

function Uuid() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

export { formattedTime, formattedTimeUnit, formattedDashedDate, Uuid };