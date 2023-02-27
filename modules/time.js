import { DateTime } from './luxon.js';

const updateTime = () => {
  const now = DateTime.now();
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  const date = now.toLocaleString(options);
  const time = now.toLocaleString(DateTime.TIME_WITH_SECONDS);
  document.getElementById('datetime').innerHTML = `${date} , ${time}`;
};

setInterval(updateTime, 1000);

export default updateTime;
