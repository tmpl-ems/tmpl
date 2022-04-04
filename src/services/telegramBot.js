const TELEGRAM_BOT_ID = process.env.GATSBY_TELEGRAM_BOT_ID;
const TELEGRAM_GROUP_ID = process.env.GATSBY_TELEGRAM_GROUP_ID;

const BASE_URL = 'https://api.telegram.org';

const telegramBot = text => {
  fetch(
    `${BASE_URL}/bot${TELEGRAM_BOT_ID}/sendMessage?chat_id=${TELEGRAM_GROUP_ID}&parse_mode=HTML&text=${text}`,
  );
  // fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_ID}/getUpdates`);
};

export default telegramBot;
