        /* Question No. 01 */

let hoursToSec = () => {
    var hours = document.getElementById("hours").value;
    let seconds = hours * 60 * 60;
    if(hours === '') {
        document.getElementById("ans1").innerHTML = '';
    } else {
        document.getElementById("ans1").innerHTML = `${hours} Hours &nbsp = &nbsp ${seconds} Seconds`;
    }
}



        /* Question No. 02 */

let calcAge = () => {
    var age = document.getElementById("age").value;
    let days = age * 365;
    if(age === '') {
        document.getElementById("ans2").innerHTML = '';
    } else if (age < 0 ) {
        document.getElementById("ans2").innerHTML = 'Please Enter a Positive Integer...';
    } else {
        document.getElementById("ans2").innerHTML = `Your Age in Days is: &nbsp ${days} Days`;
    }
}



        /* Question No. 03 */

let invertArray = () => {
    var arr = document.getElementById("arr").value;
    if(arr === '' || arr === "[]") {
        document.getElementById("ans3").innerHTML = "[]";
    }
    let inverArr = [];
    //following RegEx will match any string that contains zero or one occurrence of - and after it will match any digit globally
    let num = arr.match(/-?(\d+)/g);
    for(let i = 0; i < num.length; i++) {
        num[i].slice(",");
        //it will change sign and push all the elements one-by-one in the array
        inverArr.push(parseInt(num[i]) * -1);
    }
    //converts inverArr into object format and add space after comma
    inverArr = JSON.stringify(inverArr).replace(/,/g, ", ");
    document.getElementById("ans3").innerHTML = `${inverArr}`;
}



        /* Question No. 04 */

let comp2Str = (str1, str2) => {
    var str1 = document.getElementById("str1").value;
    var str2 = document.getElementById("str2").value;
    if(str1 === '' && str2 === '') {
        document.getElementById("ans4").innerHTML = '';
    } else if(str1 === '' || str2 === '') {
        document.getElementById("ans4").innerHTML = "Please fill both fields...";
    } else if(str1.length === str2.length) {
        document.getElementById("ans4").innerHTML = "TRUE";
    } else {
        document.getElementById("ans4").innerHTML = "FALSE";
    }
}



        /* Question No. 05 */

let parseArray = () => {
    var arr2 = document.getElementById("arr2").value;
    //following replace will eradicate any string's quotes either "" or ''
    let newArr = arr2.replace(/\"|\'/g, "");
    //following will split all the elements and convert all the individuals into string
    let parsedArr = JSON.stringify(newArr.split(", "));

    parsedArr = parsedArr.replace(/,/g, ", &nbsp ");

    if(arr2 === '' || arr2 === "[]") {
        document.getElementById("ans5").innerHTML = '[]';
    } else {
        document.getElementById("ans5").innerHTML = parsedArr;
    }
}



        /* Question No. 06 */

let leapYear = () => {
    var year = document.getElementById("year").value;
    if(year === '') {
        document.getElementById("ans6").innerHTML = '';
    } else if(year % 4 === 0) {
        document.getElementById("ans6").innerHTML = `${year} is a Leap Year.`;
    } else {
        document.getElementById("ans6").innerHTML = `${year} is not a Leap Year.`;
    }
}



        /* Question No. 07 */

let endCorona = () => {
    var recoverCases = document.getElementById("id1").value;
    var newCases = document.getElementById("id2").value;
    var activeCases = document.getElementById("id3").value;
    if(recoverCases === '' || newCases === '' || activeCases === '') {
        document.getElementById("ans7").innerHTML = '';
    } else {
        recoverCases = parseInt(recoverCases); newCases = parseInt(newCases); activeCases = parseInt(activeCases);
        let days = 0;
        if(recoverCases > newCases) {
            while(true) {
                activeCases = (activeCases + newCases) - recoverCases;
                days++;
                if(activeCases === 0) {
                    break;
                } else if(activeCases + newCases < recoverCases) {
                    let lastDay = (activeCases + newCases) / recoverCases;
                    days = Math.round(days + lastDay);
                    break;
                }
            }
            document.getElementById("ans7").innerHTML = days;
        } else {
            document.getElementById("ans7").innerHTML = "Recovered Cases will be Greater than New Cases.";
        }
    }
}