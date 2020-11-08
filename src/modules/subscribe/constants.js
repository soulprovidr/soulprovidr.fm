export const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
export const MAILCHIMP_API_SERVER = process.env.MAILCHIMP_API_SERVER;
export const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
export const MAILCHIMP_LIST_API_URL = `https://${MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;
