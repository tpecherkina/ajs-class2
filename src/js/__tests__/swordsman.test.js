import Swordsman from '../Swordsman';

test('проверка Swordsman', () => {
  const expectedSwordsman = {
    name: 'Vasya', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  };
  const received = new Swordsman('Vasya', 'Swordsman');
  expect(received).toEqual(expectedSwordsman);
});
