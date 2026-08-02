const secretNum = 7
let numInput = 0

const btn = document.getElementById('btn')

btn.addEventListener('click', function(){

    while( numInput != secretNum ) {
        numInput = prompt(' Enter your guess number')

        if(numInput > secretNum) {
            alert('Your Number is greater than Secret Number')
        }
        else if(numInput < secretNum) {
            alert('Your Number is less than Secret Number')
        }
    }

    alert('Your Number is correct')

})