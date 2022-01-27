export default class Character {
  constructor(name, type) {
    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Неверное имя');
    }
    const typesOf = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (typesOf.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Неверный тип');
    }
    this.health = 100;
    this.level = 1;
  }
  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('level повысить уже нельзя');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
  } else {
    throw new Error('Персонаж умер')
}
};
}
