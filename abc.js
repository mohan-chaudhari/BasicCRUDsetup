// // let i =0


// // function repeat(){
     
// //     if(i>2){
// //         clearInterval(b)
// //         return;
// //     }

// //     console.log("deepan")
// //     i++
// // }




// // const b = setInterval(repeat,3000)


// console.log(0.1 + 0.2)



const str = "india is a country and india is nice india"

const delay = ms => new Promise((res) =>{
    setTimeout(res,ms)
})


const  duplicate = async(str)=>{
    const strarray = str.split(" ")
    const result = []
    for(let i=0;i<strarray.length;i++){
        if(strarray.indexOf(strarray[i] !== strarray.lastIndexOf(strarray[i]))){
            if(!result.includes(strarray[i])){
                result.push(strarray[i])
            }
        }
    }
    console.log("ab")
    await delay(10000);
    return result;
}

const n = duplicate(str)
//setTimeout(duplicate(str),10000)
//console.log(n)

// const v = "50000000000000000000"
//  const c = parseInt(v)

 






