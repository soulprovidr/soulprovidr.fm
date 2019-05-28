import axios from 'axios';
import { TRACKS_URL } from '../constants';

export default async function getTracks() {
  try {
    const { data } = await axios.get(TRACKS_URL);
    return data;
  } catch (e) {
    throw e;
  }
}