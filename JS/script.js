function getSignal(){
    let array = new Array(0);

    while(array[array.length - 1] >= 0 || array.length === 0){
        array.push(Math.floor(Math.random() * 400) - 40);
    }

    getSequence(array);
}


function setValues(){
    let arreglo = [ 90 , 180, 270, 360]
    getSequence(arreglo)
}


function getSequence(array){
    let signals = new Array(0);
    array.forEach(element => {
        if(element < 45 && element >= 0 || element > 315 &&  element <= 360){
            signals.push("E");
        }
        if(element >= 45 && element < 135){
            signals.push("N");
        }
        if(element >= 135 && element < 225){
            signals.push("O");
        }
        if(element >= 225 && element <= 315){
            signals.push("S");
        }
    });

    for(let i = 0; i < signals.length; i++){
        document.write(signals[i] + " " + array[i] + "° <br>");
    }

    cycleAround(array, signals);
}

function cycleAround(array, signals){
    let cycles = 0;
    let counter = 0;
    let last = "";
    let error = false;
    signals.forEach(element => {
        error = false;
        // last = element;
        if(last != null){
            if(last == "O"){
                if(element != "S" ){
                    error = true;
                }
            }
            if(last == "S"){
                if(element != "E"){
                    error = true;
                }
            }
            if(last == "E"){
                if(element != "N"){
                    error = true;
                }
            }
            if(last == "N"){
                if(element != "O"){
                    error = true;
                }
            }
        }
        last = element;

        counter++;

        if(error == true){
            counter=0;
        }

        if(counter >= 4){
            cycles+=1;
            counter = 0;
        }
    });

    document.write("Veces en las que se completo un ciclo: " + cycles + "<br>");
    GetCounters(signals);
}

function GetCounters(signals){
    let repeticiones = [0,0,0,0]
    let total = 0;
    signals.forEach(element => {
        switch(element){
            case 'N':
                repeticiones[0]++;
                break;
            case 'O':
                repeticiones[1]++;
                break;
            case 'S':
                repeticiones[2]++;
                break;
            case 'E':
                repeticiones[3]++;
                break;
        }
        total++;
    });

    // let x = total/100;

    document.write("Porcentaje Norte: " + (100 * repeticiones[0])/total + "%<br>");
    document.write("Porcentaje Oeste: " + (100 * repeticiones[1])/total + "%<br>");
    document.write("Porcentaje Sur: " + (100 * repeticiones[2])/total + "%<br>");
    document.write("Porcentaje Este: " + (100 * repeticiones[3])/total + "%");
}