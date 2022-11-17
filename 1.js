const reverseString = (str) => {
    const strArr = str.split(" ");

    for (let i = 0; i <=  strArr.length; i++){
        let newstr = strArr[i];

        let start = 0;
        let end = newstr.length - 1;

        while(start <= end){
            [newstr[start], newstr[end] = newstr[end], newstr[start]];

            start += 1;
            end -= 1;
        }
    }

    // let result = strArr
    return strArr
}


console.log(reverseString("Arun lohia"));