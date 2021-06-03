let count = 0;
const inc = () => ++count;
const dec = () => --count;

const getCount = () => count;


//module.exports ="Sample";

module.exports  = {
    inc,
    dec,
    getCount
}
