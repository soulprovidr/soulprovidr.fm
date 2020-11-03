const mailchimp = require('@mailchimp/mailchimp_marketing');

const apiKey = process.env.MAILCHIMP_API_KEY;
const listId = process.env.MAILCHIMP_LIST_ID;
const server = process.env.MAILCHIMP_API_SERVER;

mailchimp.setConfig({ apiKey, server });

exports.handler = async function (event) {
  const {
    queryStringParameters: { email = '' }
  } = event;
  if (!email.length) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid email.' })
    };
  }
  try {
    await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: 'subscribed'
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `${email} successfully subscribed.` })
    };
  } catch (e) {
    if (e.response) {
      const { status: statusCode, title: message } = e.response.body;
      return {
        statusCode,
        body: JSON.stringify({ message })
      };
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Something sinister happened.' })
      };
    }
  }
};
