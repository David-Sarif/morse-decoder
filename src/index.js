const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '     ':  ' ',
};
// adding spaces to morse table
const DECODE_TABLE ={
    '00':'',
    '10':'.',
    '11':'-',
    '**':' '
}

function decode(expr) {
    let arr=[];
    // slicing all string to array by 10 symbols
    for (let i=0;i<expr.length;i+=10){
        arr.push(expr.substr(i,10))
    }
    // creating an array of dots and dashes
    arr=arr.map(decrypt);

    return arr.map(demorse).join('');


}
function decrypt(str){
    let newStr=''
    for (let i=0;i<10;i+=2){
        key=str[i]+str[i+1]
        newStr+=DECODE_TABLE[key]
    }
    return newStr;
}
function demorse(str){
    return MORSE_TABLE[str]
}

module.exports = {
    decode
}