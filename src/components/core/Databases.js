
import { database } from '../../firebaseInit';
import moment from 'moment';

export const currentDate = moment().format('YYYYMMDD');


export const currentTime = moment().format('HHmmss');
export const creation = moment().format('YYYY-MM-DD HH:mm:ss');
export const timestamp = moment().unix();

export const refSettings = database.ref().child(`thirdj/${currentDate}/settings`);
export const refTime = database.ref().child(`thirdj/${currentDate}/${currentTime}`);
