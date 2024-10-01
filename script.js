// Good Luck 💪🏾
function reverseWords(sentence){
    let sentencesplit=sentence.split(" ");
    let sentencereverse=sentencesplit.reverse();
    let sentencejoin=sentencereverse.join(" ");
    return sentencejoin

}

console.log(reverseWords("fikrcamp bootcamp")) 
console.log(reverseWords("hello there!")) 
console.log(reverseWords("welcome to my city")) 