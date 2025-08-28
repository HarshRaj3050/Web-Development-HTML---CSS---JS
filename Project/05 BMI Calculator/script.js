const form = document.querySelector('form');
form.addEventListener("submit", (e)=> {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector(".result");

    if(height <= 0 || height == "" || isNaN(height)) {
        result.innerHTML = "Please give a Vaild Height";
    } else if (weight <= 0 || weight == "" || isNaN(weight)) {
        result.innerHTML = "Please give a Vaild Weight";
    } else {
        let bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi <= 18.5) {
            result.innerHTML = `Your Score is : ${bmi} --- Under Weight`;
        } else if (bmi > 18.5 && bmi < 30.0) {
            result.innerHTML = `Your Score is : ${bmi} --- Normal Range`;
        } else {
            result.innerHTML = `Your Score is : ${bmi} --- OverWeight`;
        }
    }
})




