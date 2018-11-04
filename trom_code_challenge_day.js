//size is a positive whole number.  resulting string 
//should be 'size' length and repeat 101010101etc... 
//all solution strings will be repeats of x with odd numbers having y string at end
//floor division by 2 stored in z so that we know how many times to repeat x
//modulus to determine if odd or even
//if else executed based on odd or even
//.repeat used to concatenate '10' + '10' to '1010' etc, since 
//2x will give '20' rather than '1010'

function stringy(size) {
    var x = '10';
    var y = '1';
    var z = Math.floor(size/2);
    if (size % 2 === 0) {
        return(x.repeat(z));
    } else {
        return(x.repeat(z) + y);
    }    
}

stringy(6);
stringy(9);

// refactored in es6
stringy = (size) => {
    let x = '10';
    let y = '1';
    let z = Math.floor(size/2);
    if (size % 2 === 0) {
        return(x.repeat(z));
    } else {
        return(x.repeat(z) + y);
    }    
}

stringy(6);
stringy(9);


//Given a non-negative integer, return an array containing a list of independent 
//digits in reverse order. Example: 348597 => [7,9,5,8,4,3]
//basically make the number a string by using .toString, 
//then an array using .split('') then reverse using .reverse

function reverseArr(nums) {
    return nums.toString().split('').reverse();
}

reverseArr(348597);
reverseArr(20348112);

//es6 one liner
reverseArr = nums => nums.toString().split('').reverse();

//fibonacci sequence
//declare and initialize x, y
//initialize z and make an empty array
//z is assigned value of y which is 
//assigned value of x+y , and x is assigned
//new z value.  while loop to go thru required
//trials.  push result(newx) to array and return array

function fibonacci(trials) {
    var x = 0, y = 1, z;
    fibArr = []
    while (trials > 0) {
        z = y;
        y = x + y;
        x = z;
        trials--;
        fibArr.push(x);
    }
    
    return fibArr;
}

//es6
fibonacci = trials => {
    let x = 0, y = 1, z;
    fibArr = [];
    while (trials > 0) {
        z = y;
        y = x + y;
        x = z;
        trials--;
        fibArr.push(x);
    }
    return fibArr;
}

fibonacci(11);

//check if coupon is valid
//use Date.parse to find milliseconds since 1/1/70
//if seconds elapsed on expiration date is greater than
//seconds elapsed today, coupon is valid
//expir is an argument to enter the expiration date
//in specified string date format (ex. "Dec 11, 2017")
//Date.now is like Date.parse except for it's seconds 
//since 1/1/70 up till now

function checkCoupon(expir) {
    if (Date.parse(expir) > Date.now()) {
        return true
    } else {
        return false
    }
}

checkCoupon("June 15, 2017");
checkCoupon("Dec 15, 2018");

//more es6 practice
checkCoupon = expir => {
    if (Date.parse(expir) > Date.now()) {
        return true
    } else {
        return false
    }
}


//check if email addy is formatted correctly
//arg email takes a string and tells if a valid email
//if email is lacking a '@' or a '.' MUST be invalid/false
//check if 1st character is a letter if not then invalid
//check if before @ and after @ and after '.' is num/letter/_
//after @ is also allowed a hyphen

function valid(email) {
    myArr = email.toLowerCase().split('');
        
        if (myArr.indexOf('@') == -1) {
            return false;
        } 
        if (myArr.indexOf('.') == -1) {
            return false;
        } 
        var firstCharIsLetter = email[0].match(/[a-z]/);

           if (firstCharIsLetter == null) {
               return false
           }
        var emailParts = email.split('@');
        var emailParts2 = email.split('.');

           if (emailParts[0].match(/[a-z0-9_]/) && emailParts[1].match(/[a-z0-9_\-]/) && emailParts2[1].match(/[a-z0-9_]/)) {
               return true
           }
    
}

//es6
valid = email => {
    let myArr = email.toLowerCase().split('');
        
        if (myArr.indexOf('@') == -1) {
            return false;
        } 
        if (myArr.indexOf('.') == -1) {
            return false;
        } 
        let firstCharIsLetter = email[0].match(/[a-z]/);

           if (firstCharIsLetter == null) {
               return false
           }
        let emailParts = email.split('@');
        let emailParts2 = email.split('.');

           if (emailParts[0].match(/[a-z0-9_]/) && emailParts[1].match(/[a-z0-9_\-]/) && emailParts2[1].match(/[a-z0-9_]/)) {
               return true
           }
    
}


