import Undead from "../Undead";

test('проверка Undead', () => {
  const expectedUndead = {
    name: 'Vasya', type: 'Undead', health: 100, level: 1, attack: 40, defence: 10,
  };
  const received = new Undead('Vasya', 'Undead');
  expect(received).toEqual(expectedUndead);
});