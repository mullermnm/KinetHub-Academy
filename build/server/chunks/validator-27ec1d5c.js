import isNumber from 'lodash/isNumber.js';
import z from 'zod';
import './_sentry-release-injection-file-6be6a010.js';
import { t as t2 } from './translations-90190f83.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a0bd8193-177f-49ff-9d9e-9a54d160ded9", e._sentryDebugIdIdentifier = "sentry-dbid-a0bd8193-177f-49ff-9d9e-9a54d160ded9");
  } catch (e2) {
  }
}();
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
const getOrgNameValidation = () => z.string().min(5, { message: `${t2.get("validations.organization_name.min_char")}` }).refine((val) => !/^[-]|[-]$/.test(val), {
  message: `${t2.get("validations.organization_name.hyphen_rule")}`
});
const getSiteNameValidation = () => z.string().min(5, { message: `${t2.get("validations.site_name.min_char")}` }).refine((val) => !/^[-]|[-]$/.test(val), {
  message: `${t2.get("validations.site_name.hyphen_rule")}`
});
const getNewsfeedValidation = () => z.string().min(5, { message: `${t2.get("validations.news_feed.min_char")}` });
const lessonSchema = z.object({
  title: z.string().nonempty({ message: `${t2.get("validations.lesson_schema.empty_title")}` }),
  lesson_at: z.string().optional(),
  call_url: z.string().nullable().optional(),
  is_unlocked: z.boolean().optional()
});
z.object({
  title: z.string().min(6, {
    message: "Must be 6 or more characters long",
    invalid_type_error: `${t2.get("validations.invalid_type_error")}`
  })
});
const askCommunityValidationSchema = z.object({
  title: z.string().min(6, {
    message: `${t2.get("validations.ask_community.title.min_char")}`,
    invalid_type_error: `${t2.get("validations.invalid_type_error")}`
  }),
  body: z.string().min(20, {
    message: `${t2.get("validations.ask_community.body.min_char")}`,
    invalid_type_error: `${t2.get("validations.invalid_type_error")}`
  }),
  courseId: z.string().min(36, {
    message: `${t2.get("validations.ask_community.course_id.select_course")}`,
    invalid_type_error: `${t2.get("validations.ask_community.course_id.select_course")}`
  })
});
z.object({
  comment: z.string().min(6, {
    message: `${t2.get("validations.comment_in_community.min_char")}`,
    invalid_type_error: `${t2.get("validations.invalid_type_error")}`
  })
});
z.object({
  name: z.string().min(6, {
    message: `${t2.get("validations.org_landing_page.name.min_char")}`,
    invalid_type_error: `${t2.get("validations.invalid_type_error")}`
  }),
  email: z.string().email({
    message: `${t2.get("validations.org_landing_page.email.invalid_email")}`,
    invalid_type_error: `${t2.get("validations.invalid_type_error")}`
  }),
  phone: z.string().min(6, {
    message: `${t2.get("validations.org_landing_page.phone.min_char")}`,
    invalid_type_error: `${t2.get("validations.invalid_type_error")}`
  }),
  message: z.string().min(20, {
    message: `${t2.get("validations.org_landing_page.message.min_char")}`,
    invalid_type_error: `${t2.get("validations.invalid_type_error")}`
  })
});
const forgotValidationSchema = z.object({
  email: z.string().email({
    message: `${t2.get("validations.forgot.invalid_email")}`,
    invalid_type_error: `${t2.get("validations.invalid_type_error")}`
  })
});
const authValidationSchema = z.object({
  email: z.string().email({
    message: `${t2.get("validations.auth.email.invalid_email")}`,
    invalid_type_error: `${t2.get("validations.invalid_type_error")}`
  }),
  password: z.string().min(6, {
    message: `${t2.get("validations.auth.password.min_char")}`,
    invalid_type_error: `${t2.get("validations.invalid_type_error")}`
  })
});
const resetValidationSchema = z.object({
  password: z.string().min(6, {
    message: `${t2.get("validations.reset.password.min_char")}`,
    invalid_type_error: `${t2.get("validations.invalid_type_error")}`
  })
});
const onboardingValidationSchema = {
  stepOne: z.object({
    fullname: z.string().min(5, { message: `${t2.get("validations.onboarding.step_one.full_name.min_char")}` })
    // orgName: getOrgNameValidation(),
    // siteName: getSiteNameValidation()
  }),
  stepTwo: z.object({
    goal: z.string({
      required_error: `${t2.get("validations.onboarding.step_two.goal.required")}`,
      invalid_type_error: `${t2.get("validations.onboarding.step_two.goal.required")}`
    }).min(1),
    source: z.string({
      required_error: `${t2.get("validations.onboarding.step_two.source.required")}`,
      invalid_type_error: `${t2.get("validations.onboarding.step_two.source.required")}`
    }).min(1)
  })
};
const saveCertificateSchema = z.object({
  description: z.string().max(200, "course.navItem.certificates.description_error"),
  is_certificate_downloadable: z.boolean(),
  certificate_theme: z.string()
});
const saveCertificateValidation = (fields = {}) => {
  const { error } = saveCertificateSchema.safeParse(fields);
  return processErrors(error);
};
const updateProfileValidationSchema = z.object({
  email: z.string().email({ message: "validations.user_profile.email" }),
  username: z.string().nonempty({ message: "validations.user_profile.username" }),
  fullname: z.string().min(5, { message: "validations.user_profile.fullname" })
});
const getConfirmPasswordError = ({ password, confirmPassword }) => {
  return password > 6 && confirmPassword > 6 && password !== confirmPassword ? `${t2.get("validations.confirm_password.not_match")}` : void 0;
};
const processErrors = (error, mapToId) => {
  const errors = {};
  if (Array.isArray(error?.issues)) {
    for (const issue of error.issues) {
      const { message, path } = issue;
      if (!path.length) {
        continue;
      }
      if (mapToId) {
        let value = "";
        path.forEach((p, i) => {
          const formatP = isNumber(p) ? `[${p}]` : p;
          value += !value ? formatP : `.${formatP}`;
        });
        const key = value.replace("label", "id");
        errors[key] = value;
      } else {
        errors[path[0]] = message;
      }
    }
  }
  return errors;
};
const authValidation = (fields = {}) => {
  const { error } = authValidationSchema.safeParse(fields);
  return processErrors(error);
};
const lessonValidation = (lesson = {}) => {
  const { error } = lessonSchema.safeParse(lesson);
  return processErrors(error);
};
const resetValidation = (fields = {}) => {
  const { error } = resetValidationSchema.safeParse(fields);
  return processErrors(error);
};
const forgotValidation = (fields = {}) => {
  const { error } = forgotValidationSchema.safeParse(fields);
  return processErrors(error);
};
const onboardingValidation = (fields = {}, step) => {
  const schema = step === 1 ? onboardingValidationSchema.stepOne : onboardingValidationSchema.stepTwo;
  const { error } = schema.safeParse(fields);
  return processErrors(error);
};
const updateProfileValidation = (fields = {}) => {
  const schema = updateProfileValidationSchema;
  const { error } = schema.safeParse(fields);
  return processErrors(error);
};
const createNewsfeedValidation = (newPost) => {
  const schema = z.object({
    newPost: getNewsfeedValidation()
  });
  const { error } = schema.safeParse({ newPost });
  return processErrors(error);
};
const updateOrgNameValidation = (orgName) => {
  const schema = z.object({
    orgName: getOrgNameValidation()
  });
  const { error } = schema.safeParse({ orgName });
  return processErrors(error);
};
const updateOrgSiteNameValidation = (siteName) => {
  const schema = z.object({
    siteName: getSiteNameValidation()
  });
  const { error } = schema.safeParse({ siteName });
  return processErrors(error);
};
const askCommunityValidation = (fields = {}) => {
  const { error } = askCommunityValidationSchema.safeParse(fields);
  return processErrors(error);
};
const getDisableSubmit = ({ password, confirmPassword }) => {
  return !!(password && confirmPassword && password !== confirmPassword);
};
const validateEmailInString = (emailsStr) => {
  let error = "";
  let hasError = false;
  if (!emailsStr) {
    return {
      hasError: true,
      error: "Enter an email",
      emails: []
    };
  }
  const emails = emailsStr.split(",").map((_email) => {
    const email = _email.trim();
    if (!validateEmail(email)) {
      hasError = true;
      error += !error.length ? `${t2.get("validations.email.not_valid")}: ${email}` : `, ${email}`;
    }
    return email;
  });
  return {
    hasError,
    error,
    emails
  };
};

export { authValidation as a, getDisableSubmit as b, createNewsfeedValidation as c, askCommunityValidation as d, updateOrgNameValidation as e, forgotValidation as f, getConfirmPasswordError as g, updateOrgSiteNameValidation as h, lessonValidation as l, onboardingValidation as o, processErrors as p, resetValidation as r, saveCertificateValidation as s, updateProfileValidation as u, validateEmailInString as v };
//# sourceMappingURL=validator-27ec1d5c.js.map
