/* tslint:disable variable-name */
import fairyJson from '../../data/fairy.json';
import { IFairy } from '../interface';
import { getFairyStats } from './fairy';

const fairyData = fairyJson as IFairy[];

describe('`getFairyStats()`', () => {
  // tslint:disable-next-line:variable-name
  const Sakura = (fairyData.find(({ codename }) => codename === 'Sakura') as IFairy);
  test('returns stats of `Sakura`', () => {
    const { stats, grow } = Sakura;
    expect(getFairyStats(stats, grow)).toMatchObject({
      pow: 26,
      dodge: 24,
      armor: 6,
      criticalHarmRate: 32,
    });
  });
  test('returns stats of `Sakura` when qualityLevel is 2', () => {
    const { stats, grow } = Sakura;
    expect(getFairyStats(stats, grow, { qualityLevel: 2 })).toMatchObject({
      pow: 13,
      dodge: 12,
      armor: 3,
      criticalHarmRate: 16,
    });
  });
  test('returns stats of `Sakura` when level is 80', () => {
    const { stats, grow } = Sakura;
    expect(getFairyStats(stats, grow, { level: 80 })).toMatchObject({
      pow: 24,
      dodge: 23,
      armor: 6,
      criticalHarmRate: 30,
    });
  });
});
