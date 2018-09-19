import dollJson from '../data/doll.json';
import equipJson from '../data/equip.json';
import fairyJson from '../data/fairy.json';
import * as api from './api';
import Doll from './doll';
import Equip from './equip';
import Fairy from './fairy';
import i18next, { init } from './i18next';
import { IDoll, IEquip, IFairy } from './interface';

const dollData = dollJson as IDoll[];
const equipData = equipJson as IEquip[];
const fairyData = fairyJson as IFairy[];

const dolls = dollData.map(data => new Doll(data));
const equips = equipData.map(data => new Equip(data));
const fairies = fairyData.map(data => new Fairy(data));

const gfcore = { init, i18next, dolls, equips, fairies, api };
export { init, i18next, dolls, equips, fairies, api };
export default gfcore;
