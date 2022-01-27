import Magician from "../Magician";

test('проверка Magician', () => {
  const expectedMagician = {
    name: 'Vasya', type: 'Magician', health: 100, level: 1, attack: 10, defence:40,
  };
  const received = new Magician('Vasya', 'Magician');
  expect(received).toEqual(expectedMagician);
});