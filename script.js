const secretNum = 7


const btn = document.getElementById('btn')

btn.addEventListener('click', function(){

    let numInput = 0

    while( numInput != secretNum ) {
        numInput = prompt(' Enter your guess number')

        let numguess = numInput

        if(numguess == '') {
            alert('Please enter guess number first')
        }
        
        else if(numInput > secretNum) {
            alert('Your Number is greater than Secret Number')
        }
        else if(numInput < secretNum) {
            alert('Your Number is less than Secret Number')
        }
    }

    alert('Your Number is correct')

})
