function stringy(size) {
    if (size % 2 ==0) {
        return ('10')
    } else {
        return ('10'+'1')
    }
}


//size /2 floor
function stringy(size) {
var x = Math.floor(size/2)
return (x * + '10')
}

function stringy(size) {
    return ('10' + '10');
}

function test() {
    var x = '10';
    console.log(x + x);
}

function test() {
    var x = '10';
    var y = '1';
    console.log(x + y);
}

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



//check if coupon is valid
//use Date.parse to find milliseconds since 1/1/70
//if seconds elapsed on expiration date is greater than
//seconds elapsed today, coupon is valid
//expir an argument to enter the expiration date
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



if (emailParts[0].match(/[a-z0-9_]/)) {
    return true
}
var emailParts = email.split('@');

var letters = /^[A-Za-z]+$/;
for (var i = 0; i < myArr.length; i++) {


function valid(email) {
    var emailParts = email.split('@');
    var emailParts2 = email.split('.');
    console.log(emailParts);
    console.log(emailParts2);
}
var d = Date.parse("Dec 25, 1995")
console.log(d);





var iChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?0123456789";

for (var i = 0; i < chkfile.value.length; i++)
{
  if (iChars.indexOf(chkfile.value.charAt(i)) != -1)







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













