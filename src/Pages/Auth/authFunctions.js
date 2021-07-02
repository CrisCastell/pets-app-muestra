import { emailValidation, textValidation } from '../../Utils/utilFunctions';

const validatePasswordRegister = values => {
    let error = "";
    const passwordRegex = /(?=.*[0-9])/;
    if (!values) {
      error = "*Required";
    } else if (values.length < 8) {
      error = "*Password must be 8 characters long.";
    } else if (!passwordRegex.test(values)) {
      error = "*Invalid password. Must contain one number.";
    }
    return error;
};

const validatePasswordLogin = values => {
    let error = ""
    if (!values) {
      error = "Este campo no puede estar vacío para iniciar sesión";
    }
    return error;
};

const validateConfirmPassword = (pass, value) => {
    console.log(pass)
    console.log(value)
    let error = "";
    if (pass && value) {
      if (pass !== value) {
        error = "Password not matched";
      }
    }
    return error;
  };
export const registerValidate = {
    username: username => textValidation('username', username),
    email: emailValidation,
    password: validatePasswordRegister,
    password2:(password, password2) => validateConfirmPassword(password, password2)
};

export const loginValidate = {
    username:emailValidation,
    password:validatePasswordLogin,
}

export const registerInitialValues = {
    username: '',
    email: '',
    password:'',
    password2:''
};

export const loginInitialValues = {
    username: '',
    password:'',
};
