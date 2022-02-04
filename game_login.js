function addUser() {
    player1_name=document.getElementById("player1_name_input").value;
    player2_name=document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);

    window.location="game_page.html"
}
 
player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player1_name").innerHTML = player1_name + ":";

document.getElementById("player1_question").innerHTML= "Question Turn -" + player1_name;
document.getElementById("player2_question").innerHTML=  "Answer Turn -" + player2_name;
 
function send() {
get_word = document.getElementById("word").value;
word = get_word.toLowerCase();
console.log("word in lower case = " + word);
 chartAt1 = word.chartAt1() ;
 console.log(chartAt1);

 length_divide_2 = Math.floor(word/length/2);
 chartAt2 = word.chartAt(length_divide_2);
 console.log(chartAt2);

 length_minus_1 = word.length - 1;
 chartAt3 = word.chartAt(length_minus_1);
 console.log(chartAt3);

 Remove_chartAt = word.replace(chartAt1, "_")
 Remove_chartAt2 = remove_chartAt1.replace(chartAt2, "_")
 Remove_chartAt3 = remove_chartAt2.replace(chartAt3, "_")
 console.log(Remove_chartAt3);

 question_word = "<h4 id='word_display'> Q." + removeEventListener.chartAt3 + "</h4>";
 input_box = "<br><br><button class='text' id ='input_check_box'>";
 check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
 row = question_word + input_box + check_button ;
 document.getElementById("output").innerHTML = row;
 document.getElementById("word").value = "";
}