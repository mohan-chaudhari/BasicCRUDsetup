let i =0


function repeat(){
     
    if(i>2){
        clearInterval(b)
        return;
    }

    console.log("deepan")
    i++
}




const b = setInterval(repeat,3000)

