import Bowerman from "../bowerman";
import Character from "../character";

test('Create Random Character', () => {
    const name = 'Vasya';
    const type = 'Bowman';

    const expected = {
        name,
        type,
        health: 100,
        level: 1,
    };
       
    const recevied = new Character(name, type);

    expect(recevied).toEqual(expected);
});

test('проверка levelUp', () => {
    const received = new Bowerman('Vasya', 'Bowman');
    const expectedLevelUp = {
      name: 'Vasya', type: 'Bowman', health: 100, level: 2, attack: 30, defence: 30,
    };
    received.levelUp();
    expect(received).toEqual(expectedLevelUp);
  });
  
  test('проверка levelUp в случае ошибки', () => {
    const testObj = new Bowerman('Vasya', 'Bowman');
    testObj.health = -1;
    expect(() => testObj.levelUp()).toThrow('level повысить уже нельзя');
  });
  
  test('проверка damage(points)', () => {
    const received = new Bowerman('Vasya', 'Bowman');
    const expectedDamage = {
      name: 'Vasya', type: 'Bowman', health: 25, level: 1, attack: 25, defence: 25,
    };
    received.damage(100);
    expect(received).toEqual(expectedDamage);
  });
  
  test('проверка damage(points) при health <= 0', () => {
    const received = new Bowerman('Vasya', 'Bowman');
    received.health = -1;
      expect(() => received.damage(10)).toThrow("Персонаж умер");
  });
  