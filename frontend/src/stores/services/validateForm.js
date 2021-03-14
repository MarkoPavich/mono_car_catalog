import i18n from '../../i18n';

export default function validateForm(data) {
  let isValid = true;
  const tooltips = {};

  Object.keys(data).forEach((key) => {
    // Define tooltip field and default to null
    tooltips[key] = null;
    // Check empty field
    if (!data[key]) {
      isValid = false;
      tooltips[key] = i18n.t('formErrors.emptyField');
    }
    // Check terms of use agreed
    if (key === 'touCheck' && data[key] === false) {
      isValid = false;
      tooltips[key] = i18n.t('formErrors.termsOfUse');
    }
    // Check email
    if (
      key === 'email' &&
      !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data[key])
    ) {
      isValid = false;
      tooltips[key] = i18n.t('formErrors.invalidEmail');
    }
    // Check if passwords match
    if ((key === 'password' || key === 'password2') && 'password2' in data) {
      if (data.password !== data.password2) {
        isValid = false;
        tooltips[key] = i18n.t('formErrors.paswMismatch');
      }
    }
  });

  return {
    isValid,
    tooltips,
  };
}
