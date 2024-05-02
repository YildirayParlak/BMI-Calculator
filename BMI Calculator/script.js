const buton = document.querySelector("#calculate-btn");

buton.addEventListener("click",function(){
    const height = Number(document.querySelector("#height").value);
    const weight =Number(document.querySelector("#weight").value);

    let height_status =false,weight_status=false;//*ilk başta bir değerim yok

    if(height === '' || isNaN(height) || (height <=0)){
        document.querySelector("#height-error").innerHTML='Please provide a valid height';

    }else{
        document.querySelector("#height-error").innerHTML='';
        height_status=true;
    }



    if(weight === '' || isNaN(weight) || (weight <=0)){
        document.querySelector("#weight-error").innerHTML='Please provide a valid weight';
    }else{
        document.querySelector("#weight-error").innerHTML='';
        weight_status=true;
    }

    if(height_status && weight_status){
        const bmi = (weight / ((height*height)/ 10000)).toFixed(4);
        
        if(bmi < 18.6){
            result.innerHTML = "Underweight: " + bmi; 
        } else if (bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = "Normal: " + bmi;
        } else {
            result.innerHTML = "Overweight: " + bmi;
        }
    } else {
        alert('Please provide the right numbers');
        result.innerHTML = "";
    }
    
});