const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@_.&$])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
const minMaxRegex = (min, max) => new RegExp(`^.{${min},${max}}$`);
const validationRules = {
  // Validation rules for login fields
  login: {
    email: {
      regex: emailRegex,
      message: "Please enter a valid email address."
    },
    password: {
      regex: passwordRegex,
      message: "Please enter a valid password."
    }
  },
  // Validation rules for reset password fields
  reset: {
    email: {
      regex: emailRegex,
      message: "Please enter a valid email address."
    },
    new_password: {
      regex: passwordRegex,
      message: "Please enter a valid password."
    }
  },
  // Validation rules for user fields
  user: {
    email: {
      regex: emailRegex,
      message: "Please enter a valid email address."
    },
    password: {
      regex: passwordRegex,
      message: "Please enter a valid password."
    },
    firstName: {
      regex: minMaxRegex(2, 30),
      message: "First name must be between 2 and 30 characters long."
    },
    lastName: {
      regex: minMaxRegex(0, 30),
      message: "Last name must be between 2 and 30 characters long."
    }
  },
  // Validation rules for new package fields
  newpackage: {
    description: {
      regex: minMaxRegex(2, 50),
      message: "Description must be between 2 and 50 characters long."
    }
  }
};
function validateField(entity, field, value) {
  var _a;
  const rules = validationRules[entity];
  if (!rules)
    return "";
  const rule = rules[field];
  if (!rule)
    return "";
  const valid = (_a = rule.regex) == null ? void 0 : _a.test(value);
  if (!valid) {
    return rule.message;
  } else {
    return "";
  }
}
export {
  validateField as v
};
//# sourceMappingURL=validateField-D0FnTXHY.js.map
