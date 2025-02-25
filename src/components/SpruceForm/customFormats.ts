import { validators } from "utils";

const {
  validateDuration,
  validateEmail,
  validateJira,
  validateJiraURL,
  validateNoSpecialCharacters,
  validatePercentage,
  validateRegexp,
  validateSlack,
  validateURL,
  validateURLTemplate,
} = validators;

export const customFormats = (jiraHost: string) => ({
  noSpecialCharacters: validateNoSpecialCharacters,
  // Permit empty string but disallow whitespace
  noSpaces: /^$|^\S+$/,
  validDuration: validateDuration,
  validEmail: validateEmail,
  validJiraTicket: validateJira,
  validJiraURL: (url: string) => validateJiraURL(jiraHost, url),
  validPercentage: validatePercentage,
  validRegex: validateRegexp,
  validSlack: validateSlack,
  validURL: validateURL,
  validURLTemplate: validateURLTemplate,
});
