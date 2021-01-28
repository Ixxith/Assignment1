// Ian Cole
// This creates an on click event for the submit button and calculates the score and 
// grade using javascipt
var submit = $("#submitButton").click(
// Add listener event
 function () {
    // Set default grade
    var gradeScore = 0;
    // Get scores from form
    var aScore = $("#assignment").value;
    var gScore = $("#group").value;
    var qScore = $("#quiz").value;
    var eScore = $("#exam").value;
    var iScore = $("#intex").value;
    // Add up scores with weights
    gradeScore += aScore / 100 * 50;
    gradeScore += gScore / 100 * 10;
    gradeScore += qScore / 100 * 10;
    gradeScore += eScore / 100 * 20;
    gradeScore += iScore / 100 * 10;
    // Determine the grade letter
    var gradeLetter='E';
    if (gradeScore < 60) {
        gradeLetter = 'E';
    }
    else if (gradeScore < 64) {
        gradeLetter = 'D-';
    }
    else if (gradeScore < 67) {
        gradeLetter = 'D';
    }
    else if (gradeScore < 70) {
        gradeLetter = 'D+';
    }
    else if (gradeScore < 74) {
        gradeLetter = 'C';
    }
    else if (gradeScore < 77) {
        gradeLetter = 'C-';
    }
    else if (gradeScore < 80) {
        gradeLetter = 'C+';
    }
    else if (gradeScore < 84) {
        gradeLetter = 'B-';
    }
    else if (gradeScore < 87) {
        gradeLetter = 'B';
    }
    else if (gradeScore < 90) {
        gradeLetter = 'B+';
    }
    else if (gradeScore < 94) {
        gradeLetter = 'A-';
    }
    else if (gradeScore >= 94) {
        gradeLetter = 'A';
    } 
   
    // print the score and grade
    alert("You currently have " + gradeScore + "% (" + gradeLetter + ")!")
});
