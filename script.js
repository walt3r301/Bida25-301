console.log("JavaScript is connected!"); 

function showResult() {

    // Get selected answers
    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');
    let q4 = document.querySelector('input[name="q4"]:checked');
    let q5 = document.querySelector('input[name="q5"]:checked');
    let q6 = document.querySelector('input[name="q6"]:checked');
    let q7 = document.querySelector('input[name="q7"]:checked');
    let q8 = document.querySelector('input[name="q8"]:checked');
    let q9 = document.querySelector('input[name="q9"]:checked');
    let q10 = document.querySelector('input[name="q10"]:checked');

    // Check if all questions are answered
    if (q1 == null || q2 == null || q3 == null || q4 == null || q5 == null
        || q6 == null || q7 == null || q8 == null || q9 == null || q10 == null
    ) {
        document.getElementById("result").innerHTML = "Please answer all questions!";
        return;
    }

    // Create counters
    let oily = 0;
    let dry = 0;
    let combo = 0;
    let normal = 0;

    // Count answers for Question 1
    if (q1.value == "oily") {
        oily = oily + 1;
    } else if (q1.value == "dry") {
        dry = dry + 1;
    } else if(q1.value == "combo") {
        combo = combo + 1;
    } else if (q1.value == "normal") {
        normal = normal + 1;
    }

    // Count answers for Question 2
    if (q2.value == "oily") {
        oily = oily + 1;
    } else if (q2.value == "dry") {
        dry = dry + 1;
    } else if(q2.value == "combo") {
        combo = combo + 1;
    } else if (q2.value == "normal") {
        normal = normal + 1;
    }

    // Count answers for Question 3
    if (q3.value == "oily") {
        oily = oily + 1;
    } else if (q3.value == "dry") {
        dry = dry + 1;
    } else if(q3.value == "combo") {
        combo = combo + 1;
    } else if (q3.value == "normal") {
        normal = normal + 1;
    }


    // Count answers for Question 4
    if (q4.value == "oily") {
        oily = oily + 1;
    } else if (q4.value == "dry") {
        dry = dry + 1;
    } else if(q4.value == "combo") {
        combo = combo + 1;
    } else if (q4.value == "normal") {
        normal = normal + 1;
    }


    // Count answers for Question 5
    if (q5.value == "oily") {
        oily = oily + 1;
    } else if (q5.value == "dry") {
        dry = dry + 1;
    } else if(q5.value == "combo") {
        combo = combo + 1;
    } else if (q5.value == "normal") {
        normal = normal + 1;
    }


    // Count answers for Question 6
    if (q6.value == "oily") {
        oily = oily + 1;
    } else if (q6.value == "dry") {
        dry = dry + 1;
    } else if(q6.value == "combo") {
        combo = combo + 1;
    } else if (q6.value == "normal") {
        normal = normal + 1;
    }


    // Count answers for Question 7
    if (q7.value == "oily") {
        oily = oily + 1;
    } else if (q7.value == "dry") {
        dry = dry + 1;
    } else if(q7.value == "combo") {
        combo = combo + 1;
    } else if (q7.value == "normal") {
        normal = normal + 1;
    }



    // Count answers for Question 8
    if (q8.value == "oily") {
        oily = oily + 1;
    } else if (q8.value == "dry") {
        dry = dry + 1;
    } else if(q8.value == "combo") {
        combo = combo + 1;
    } else if (q8.value == "normal") {
        normal = normal + 1;
    }


    // Count answers for Question 9
    if (q9.value == "oily") {
        oily = oily + 1;
    } else if (q9.value == "dry") {
        dry = dry + 1;
    } else if(q9.value == "combo") {
        combo = combo + 1;
    } else if (q9.value == "normal") {
        normal = normal + 1;
    }



    // Count answers for Question 10
    if (q10.value == "oily") {
        oily = oily + 1;
    } else if (q10.value == "dry") {
        dry = dry + 1;
    } else if(q10.value == "combo") {
        combo = combo + 1;
    } else if (q10.value == "normal") {
        normal = normal + 1;
    }



    // Decide final result
    if (oily > dry && oily > combo && oily > normal) {
        document.getElementById("result").innerHTML = "You have OILY skin.";
    } 
    else if (dry > oily && dry > combo && dry > normal) {
        document.getElementById("result").innerHTML = "You have DRY skin.";
    } 
    else if (combo > oily && combo > dry && combo > normal) {
        document.getElementById("result").innerHTML = "You have COMBINATION skin.";
    }
    else if (normal > oily && normal > dry && normal > combo) {
        document.getElementById("result").innerHTML = "You have NORMAL skin.";
    }
}


/*******menubar*******/

let menulist = document.getElementById("menulist")
menulist.style.maxHeight = "0px";

function toggleMenu() {
    if (
        menulist.style.maxHeight == "0px") {

        menulist.style.maxHeight = "200px";
    } 
    else {
        menulist.style.maxHeight = "0px";
    }
}
