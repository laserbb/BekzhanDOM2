document.getElementById("source").innerHTML="https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html"
document.getElementById("source").style.fontWeight = "bold";

var words = document.getElementById("text").innerHTML;
var numbers = words.match(/(\w+)/g).length;
document.getElementById("number").innerHTML = numbers;

let badText = document.getElementById("text").innerHTML;
let goodText = badText.replaceAll("?", "🤔");
let bestText = goodText.replaceAll("!", "😯");
document.getElementById("text").innerHTML = bestText;