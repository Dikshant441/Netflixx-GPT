
export const checkValidData = (name, email, password) => {


    const isNAmeValid = name !== ''
    
    const isEmailValid = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) && email !== "");
    const isPasswordValid= (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password) && password !== '');


    if(!isNAmeValid) return "Enter your Valid Name";
    if(!isEmailValid) return "Email ID is not Valid";
    if(!isPasswordValid) return "Password ID is not Valid";

    return null;


};

export const checkValidData1 = ( email, password) => {

    const isEmailValid = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) && email !== "");
    const isPasswordValid=  (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password) && password !== '');

    if(!isEmailValid) return "Email ID is not Valid";
    if(!isPasswordValid) return "Password ID is not Valid";

    return null;


};