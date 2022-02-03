
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

export { formattedTime, formattedTimeUnit };