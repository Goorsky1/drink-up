import validator from 'validator';

export function validateEmail(email) {
  if (validator.isEmpty(email) || !validator.isEmail(email)) {
    return true;
  }
}

export function validatePassword(password) {
  if (validator.isEmpty(password) || !validator.isStrongPassword(password)) {
    return true;
  }
}

export function validateConfirmPassword(password, confirmPassword) {
  if (
    validator.isEmpty(confirmPassword) ||
    !validator.equals(confirmPassword, password)
  ) {
    return true;
  }
}
