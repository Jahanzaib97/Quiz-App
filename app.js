function check(){
    var score = 0;
 var right_Ans1 = document.getElementById("q1-a1")
 if (right_Ans1.checked === true) {
     alert("Answer 1 is Correct !")
     score++;
     
 } else {
    alert("Answer 1 is Wrong !")
     
 }   


var right_Ans2 = document.getElementById("q2-a2")
 if (right_Ans2.checked === true) {
     alert("Answer 2 is Correct !")
     score++;
     
 } else {
    alert("Answer 2 is Wrong !")
     
 }   

 var right_Ans3 = document.getElementById("q3-a4")
 if (right_Ans3.checked === true) {
     alert("Answer 3 is Correct !")
     score++;
     
 } else {
    alert("Answer 3 is Wrong !")
     
 } 
 
 var right_Ans4 = document.getElementById("q4-a4")
 if (right_Ans4.checked === true) {
     alert("Answer 4 is Correct !")
     score++;
     
 } else {
    alert("Answer 4 is Wrong !")
     
 }   

 var right_Ans5 = document.getElementById("q5-a2")
 if (right_Ans5.checked === true) {
     alert("Answer 5 is Correct !")
     score++;
     
 } else {
    alert("Answer 5 is Wrong !")
     
 }  
 

 if (score === 0) {
    alert("Your score is" + " " + score + " " + "\nSorry! You don't have any General Knowledge about Pakistan") 
    
 }
 else if (score >1 && score <=3) {
    alert("Your score is" + " " + score + " " + "\nNot Bad! You just need some more practice")
    score
}
else if (score === 4) {
    alert("Your score is" + " " + score + " " + "\nGreat! You are good at General Knowledge of Pakistan")
    
}
else if (score === 5) {
    alert("Your score is" + " " + score + " " + "\nHurrah! You did it. You are great at General Knowledge")
}
else{
    alert("Your score is" + " " + score + " " + "\nSorry! Try Harder Next Time.") 
}
}
 