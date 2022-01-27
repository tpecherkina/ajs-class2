import Daemon from "../Daemon";

test('проверка Daemon', () => {
  const expectedDaemon = {
    name: 'Vasya', type: 'Daemon', health: 100, level: 1, attack: 10, defence:40,
  };
  const received = new Daemon('Vasya', 'Daemon');
  expect(received).toEqual(expectedDaemon);
});