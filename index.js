const calculateTemp = () =>{

    const inputTemp = document.getElementById('temp').value;
    
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    // celsius to fahrenheit
    const celToFah = (cel) =>{
        let fahrenheit = ((cel*9/5)+32).toFixed(1);
        return fahrenheit;
    }

    // fahrenheit to celsius
    const fahToCel = (fah) =>{
        let celsius = ((fah-32)*5/9).toFixed(1);
        return celsius;
    }

    // celsius to kelvin
    const celToKel = (kel) => {
        let kelvin = ((kel)+273.15).toFixed(1);
        return kelvin;
    }



    if ( valueTemp === 'cel' ){
        document.getElementById("result").innerHTML = celToFah(inputTemp)+"&#176; F";
    } else if(valueTemp === 'fah'){
        document.getElementById("result").innerHTML = fahToCel(inputTemp)+'&#176; C';
    } else if(valueTemp === 'kel'){
        document.getElementById("result").innerHTML = celToKel(inputTemp)+"&#176; K";
    } else {

    }
    return false;
}