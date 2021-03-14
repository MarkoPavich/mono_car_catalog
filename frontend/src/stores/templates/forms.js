/* Form templates with defalted values */

// CSS classNames for input containers
export const inputStatus = {
  normal: 'a-login-form-input-container',
  error: 'a-login-form-input-container input-error',
};

export const vehicleForm = {
  make: '',
  model: '',
  variant: '',
  manufactureDate: '',
  mileage: '',
  bodyType: '',
  fuelType: '',
  img: '',
  description: '',
  price: '',
};

export const loginForm = {
  username: {
    value: '',
    class: inputStatus.normal,
    toolTip: '',
  },
  password: {
    value: '',
    class: inputStatus.normal,
    tooltip: '',
  },
};

export const registerForm = {
  username: {
    value: '',
    class: inputStatus.normal,
    toolTip: '',
  },
  email: {
    value: '',
    class: inputStatus.normal,
    toolTip: '',
  },
  password: {
    value: '',
    class: inputStatus.normal,
    toolTip: '',
  },
  password2: {
    value: '',
    class: inputStatus.normal,
    toolTip: '',
  },
  touCheck: {
    value: false,
    class: inputStatus.normal,
    toolTip: '',
  },
};
