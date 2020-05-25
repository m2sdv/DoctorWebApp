import ivalidate from "validate.js";

/**
 * Default error messages
 */
ivalidate.validators.presence.options = {message: "This field is required"};
ivalidate.validators.email.options = {message: "Please enter valid email"};


/**
 * Validation composer
 */
export const validate = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)


/**
 * Common validators
 */
export const required = value => ivalidate.single(value, {presence: true});
export const email = value => ivalidate.single(value, {email: true});
export const mobile = value => ivalidate.single(value, {mobile: true});
export const validator = ivalidate
