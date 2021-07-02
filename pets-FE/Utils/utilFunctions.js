export const errorRequestHandler = (errorObj) => {
    if(errorObj.response === undefined){
        const noConnectionMessage = "No pudimos conectar con el servidor, revisa tu conexión a internet o refresca la página."
        return noConnectionMessage
    } 
    
    const errorData = errorObj.response.data
    if(errorData.non_field_errors !== undefined) return errorData.non_field_errors
    if(errorData.error !== undefined) return errorData.error.detail
    if(errorData.old_password !== undefined) return errorData.old_password.detail
    if(errorData.username !== undefined) return errorData.username
    if(errorData.email !== undefined) return errorData.email

    return "Lo sentimos. Ha ocurrido un error inesperado. Por favor, refresca la página."
}



export const textValidation = (fieldName, fieldValue) => {
    // if (fieldValue.trim() === '') {
    //     return `El ${fieldName} es requerido`;
    // }
    if (/[^a-zA-Z0-9 -]/.test(fieldValue)) {
        return 'Caracteres invalidos';
    }
    // if (fieldValue.trim().length < 3) {
    //     return `El ${fieldName} necesita tener al menos 3 caracteres`;
    // }
    return null;
};

export const emailValidation = username => {
    if (
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        username,
        )
    ) {
        return null;
    }
    if (username.trim() === '') {
        return 'El correo electrónico es requerido';
    }
    return 'Por favor ingrese un correo electronico válido';
};

// function validatedate(dateString){      
//     let dateformat = /^(0?[1-9]|1[0-2])[/-/](0?[1-9]|[1-2][0-9]|3[01])[/-/]\d{4}$/;      
//     if(dateString === '') return null
//     // Match the date format through regular expression      
//     if(dateString.match(dateformat)){      
//         let operator = dateString.split('-');      
      
//         // Extract the string into month, date and year      
//         let datepart = [];      
//         if (operator.length>1){      
//             datepart = dateString.split('-');      
//         }      
//         let month= parseInt(datepart[0]);      
//         let day = parseInt(datepart[1]);      
//         let year = parseInt(datepart[2]);      
              
//         // Create list of days of a month      
//         let ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];      
//         if (month==1 || month>2){      
//             if (day>ListofDays[month-1]){      
//                 ///This check is for Confirming that the date is not out of its range      
//                 return 'el dia no es correcto';      
//             }      
//         }else if (month===2){      
//             let leapYear = false;      
//             if ( (!(year % 4) && year % 100) || !(year % 400)) {      
//                 leapYear = true;      
//             }      
//             if ((leapYear === false) && (day>=29)){      
//                 return 'Invalid date format 1';      
//             }else      
//             if ((leapYear===true) && (day>29)){      
//                 return 'Invalid date format 2' 
//             }      
//         }      
//     }else{      
//         return "Invalid date format 3"     
//     }      
//     return null;   
// }
export const accountValidate = {
    username: username => textValidation('username', username),
    email: emailValidation,
    first_name:first_name => textValidation('first_name', first_name),
    last_name:last_name => textValidation('last_name', last_name),
};

