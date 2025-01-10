// return the number of vowels in a string

function numberOfVowels(str){
    return str.match(/[aeiou]/gi)?.length|| 0;
}



console.log(numberOfVowels('world'));