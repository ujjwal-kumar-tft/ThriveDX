import moment from 'moment';

export const toLocalDate = (date) => {
  if (date) {
    return moment(date).format('DD/MM/YYYY');
  }
};
