import validator from 'validator';

export function validateEmail(email) {
  if (validator.isEmpty(email) || !validator.isEmail(email)) {
    return true;
  }

  // if (!validator.isEmail(email)) {
  //   return true;
  // }
}

export function validatePassword(password) {
  if (validator.isEmpty(password) || !validator.isStrongPassword(password)) {
    return true;
  }

  // if (!validator.isLength(password, { min: 6, max: 30 })) {
  //   return {
  //     isTrue: true,
  //     name: 'Password must be between 6 and 30 characters',
  //   };
  // }
}

export function validateConfirmPassword(password, confirmPassword) {
  if (
    validator.isEmpty(confirmPassword) ||
    // !validator.matches(password, confirmPassword
    !validator.equals(confirmPassword, password)
  ) {
    console.log(confirmPassword);
    console.log(password);
    return true;
  }

  // if (!validator.equals(password, confirmPassword)) {
  //   return {
  //     isTrue: true,
  //     name: 'Passwords must match',
  //   };
  // }
}
