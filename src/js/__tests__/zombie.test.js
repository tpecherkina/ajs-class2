import Zombie from "../Zombie";

test('проверка Zombie', () => {
  const expectedZombie = {
    name: 'Vasya', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  };
  const received = new Zombie('Vasya', 'Zombie');
  expect(received).toEqual(expectedZombie);
});