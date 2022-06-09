export const Loginusernamevalidation=(inputtext: string)=>{
        let userNameRegex = /^[A-Za-z]+[0-9_.-]*$/;
        console.log(userNameRegex.test(inputtext))
        return userNameRegex.test(inputtext);    
}
export const Loginpasswordvalidation=(inputtext: string)=>{
    let passwordRegex = inputtext.length>=8 
    console.log(passwordRegex);
    return passwordRegex;
}

export const Loginemailvalidation=(inputtext:string)=>{
    let emailregex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailregex.test(inputtext);
}