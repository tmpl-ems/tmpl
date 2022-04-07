const TELEGRAM_BOT_ID = process.env.GATSBY_TELEGRAM_BOT_ID;
const TELEGRAM_GROUP_ID = process.env.GATSBY_TELEGRAM_GROUP_ID;

const BASE_URL = 'https://api.telegram.org';

const sendMessage = async text => {
  const res = await fetch(
    `${BASE_URL}/bot${TELEGRAM_BOT_ID}/sendMessage?chat_coffee_id=${TELEGRAM_GROUP_ID}&parse_mode=HTML&text=${text}`,
  );
  return res.ok ? res.json() : Promise.reject(new Error());
  // fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_ID}/getUpdates`);
};

const getTelegramMessage = ({
  orderMsg,
  orderPlace,
  language,
  hashTag = 'tmplorder',
  nameTitle,
  name,
  phoneTitle,
  number,
  programTitle,
  program,
  programDefault,
}) => {
  const order = `<b>${orderMsg.toUpperCase()}</b>`;

  const tag = `%0A%23${hashTag}`;

  const lang = `%0A<b>${orderPlace}</b>: ${language}`;

  const clientInfo = `%0A%0A<b>${nameTitle}</b>: ${name} %0A<b>${phoneTitle}</b>: %2B${number}`;

  const programInfo = `%0A%0A<b>${programTitle}</b>: ${
    program ? program : programDefault
  }`;

  return order + tag + lang + clientInfo + programInfo;
};

export { sendMessage, getTelegramMessage };
