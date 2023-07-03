const Regex = {
  description: /^[A-Za-z\s]+$/,
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};
const limitRule = (min, max, name) => ({
  minLength: {
    value: min,
    message: `${name} is too short`,
  },
  maxLength: {
    value: max,
    message: `${name} is too long`,
  },
});
const requiredRuleForInputField = (label) => ({
  required: `${label} is required`,
});
export const validationRules = {
  email: {
    ...requiredRuleForInputField("email"),
    ...limitRule(3, 50, "email"),
    pattern: {
      value: Regex.email,
      message: "please enter a valid email",
    },
  },
  description: {
    ...requiredRuleForInputField("Instructions"),
    ...limitRule(3, 100, "Instructions"),
    pattern: {
      value: Regex.description,
      message: "Instructions must contain alpha characters only",
    },
  },
  sender :{
    ...requiredRuleForInputField("sender"),
  },
  receiver :{
    ...requiredRuleForInputField("receiver"),
  }
};
