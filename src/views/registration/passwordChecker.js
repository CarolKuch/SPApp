export const passwordChecker = password => {
    let passwordStrength = 0;
    
    const passwordRegs = [
        /(?=.*[A-Z])(?=.*[0-9])([a-zA-Z0-9]{12,})/,
        /((?=.*[A-Z])||(?=.*[0-9]))([a-zA-Z0-9]{8,})/,
        /\S/
    ];    
   
    passwordRegs.forEach((regex)=>{
        if(regex.test(password)){
           passwordStrength++;
        }
    })    

    return passwordStrength;
}
