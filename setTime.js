/** setTimeout() global function
* The global setTimeout() method sets a timer which executes
* a function or specified piece of code once the time expires.
*/

// syntax
//setTimeout(code, delay)
function greetMe(){
    console.log("Hello David");
    setTimeout(()=>{    //the seTimeout out function is inside the call function to make it recursive.
        greetMe();
    }, 1000)
    
}

greetMe();