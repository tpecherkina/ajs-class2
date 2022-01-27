import Bowerman from '../Bowerman';

test('проверка Bowerman', () => {
  const expectedBowerman = {
    name: 'Vasya', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  };
  const received = new Bowerman('Vasya', 'Bowman');
  expect(received).toEqual(expectedBowerman);
});

