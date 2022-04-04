const TELEGRAMBOTAPI = '5103823488:AAFMxMt2EfYp-mbJjO4w4obS84-7QPW0SBE';
const GROUPID = -649389448;

const telegramBot = text => {
  fetch(
    `https://api.telegram.org/bot${TELEGRAMBOTAPI}/sendMessage?chat_id=${GROUPID}&text=${text}`,
  );
};

export default telegramBot;
