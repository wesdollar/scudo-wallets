export const setAlert = ({ type, message } = {}) => {
  // eslint-disable-next-line no-alert
  return alert(`${type} – ${message}`);
};
