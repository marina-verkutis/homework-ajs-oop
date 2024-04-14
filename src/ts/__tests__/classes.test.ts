import {Bowerman, Swordsman, Magician, Daemon, Undead, Zombie} from '../classes';

// Bowerman
describe('Bowerman tests', () => {
  test('Create Bowerman character', () => {
    const bowerman = new Bowerman('Bow');
    expect(bowerman.name).toBe('Bow');
    expect(bowerman.type).toBe('Bowman');
    expect(bowerman.health).toBe(100);
    expect(bowerman.level).toBe(1);
    expect(bowerman.attack).toBe(25);
    expect(bowerman.defence).toBe(25);
  });

  test('Level up Bowerman character', () => {
    const bowerman = new Bowerman('Bow');
    bowerman.levelUp();
    expect(bowerman.level).toBe(2);
    expect(bowerman.attack).toBe(30); // 25 + 20% = 30
    expect(bowerman.defence).toBe(30); // 25 + 20% = 30
    expect(bowerman.health).toBe(100);
  });

  test('Damage Bowerman character', () => {
    const bowerman = new Bowerman('Bow');
    bowerman.damage(20);
    expect(bowerman.health).toBe(85); 
  });

  test('Damage Bowerman character with zero health', () => {
    const bowerman = new Bowerman('Bow');
    bowerman.health = 0;
    expect(() => bowerman.damage(10)).toThrow('Cannot damage a dead character.');
  });

  test('Level up Bowerman character with zero health', () => {
    const bowerman = new Bowerman('Bow');
    bowerman.health = 0;
    expect(() => bowerman.levelUp()).toThrow('Cannot level up a dead character.');
  });
});

// Swordsman
describe('Swordsman tests', () => {
  test('Create Swordsman character', () => {
    const swordsman = new Swordsman('Swordy');
    expect(swordsman.name).toBe('Swordy');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.health).toBe(100);
    expect(swordsman.level).toBe(1);
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });

  test('Level up Swordsman character', () => {
    const swordsman = new Swordsman('Swordy');
    swordsman.levelUp();
    expect(swordsman.level).toBe(2);
    expect(swordsman.attack).toBe(48); // 40 + 20% = 48
    expect(swordsman.defence).toBe(12); // 10 + 20% = 12
    expect(swordsman.health).toBe(100);
  });

  test('Damage Swordsman character', () => {
    const swordsman = new Swordsman('Swordy');
    swordsman.damage(20);
    expect(swordsman.health).toBe(82); 
  });

  test('Damage Swordsman character with zero health', () => {
    const swordsman = new Swordsman('Swordy');
    swordsman.health = 0;
    expect(() => swordsman.damage(10)).toThrow('Cannot damage a dead character.');
  });

  test('Level up Swordsman character with zero health', () => {
    const swordsman = new Swordsman('Swordy');
    swordsman.health = 0;
    expect(() => swordsman.levelUp()).toThrow('Cannot level up a dead character.');
  });
});

// Magician
describe('Magician tests', () => {
  test('Create Magician character', () => {
    const magician = new Magician('Magic');
    expect(magician.name).toBe('Magic');
    expect(magician.type).toBe('Magician');
    expect(magician.health).toBe(100);
    expect(magician.level).toBe(1);
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });

  test('Level up Magician character', () => {
    const magician = new Magician('Magic');
    magician.levelUp();
    expect(magician.level).toBe(2);
    expect(magician.attack).toBe(12); // 10 + 20% = 12
    expect(magician.defence).toBe(48); // 40 + 20% = 48
    expect(magician.health).toBe(100);
  });

  test('Damage Magician character', () => {
    const magician = new Magician('Magic');
    magician.damage(20);
    expect(magician.health).toBe(88); 
  });

  test('Damage Magician character with zero health', () => {
    const magician = new Magician('Magic');
    magician.health = 0;
    expect(() => magician.damage(10)).toThrow('Cannot damage a dead character.');
  });

  test('Level up Magician character with zero health', () => {
    const magician = new Magician('Magic');
    magician.health = 0;
    expect(() => magician.levelUp()).toThrow('Cannot level up a dead character.');
  });
});

//Daemon
describe('Daemon tests', () => {
  test('Create Daemon character', () => {
    const daemon = new Daemon('Daemon');
    expect(daemon.name).toBe('Daemon');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.health).toBe(100);
    expect(daemon.level).toBe(1);
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });

  test('Level up Daemon character', () => {
    const daemon = new Daemon('Daemon');
    daemon.levelUp();
    expect(daemon.level).toBe(2);
    expect(daemon.attack).toBe(12); // 10 + 20% = 12
    expect(daemon.defence).toBe(48); // 40 + 20% = 48
    expect(daemon.health).toBe(100);
  });

  test('Damage Daemon character', () => {
    const daemon = new Daemon('Daemon');
    daemon.damage(20);
    expect(daemon.health).toBe(88); 
  });

  test('Damage Daemon character with zero health', () => {
    const daemon = new Daemon('Daemon');
    daemon.health = 0;
    expect(() => daemon.damage(10)).toThrow('Cannot damage a dead character.');
  });

  test('Level up Daemon character with zero health', () => {
    const daemon = new Daemon('Daemon');
    daemon.health = 0;
    expect(() => daemon.levelUp()).toThrow('Cannot level up a dead character.');
  });
});

//Undead
describe('Undead tests', () => {
  test('Create Undead character', () => {
    const undead = new Undead('Undead');
    expect(undead.name).toBe('Undead');
    expect(undead.type).toBe('Undead');
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(1);
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });

  test('Level up Undead character', () => {
    const undead = new Undead('Undead');
    undead.levelUp();
    expect(undead.level).toBe(2);
    expect(undead.attack).toBe(30); // 25 + 20% = 30
    expect(undead.defence).toBe(30); // 25 + 20% = 30
    expect(undead.health).toBe(100);
  });

  test('Damage Undead character', () => {
    const undead = new Undead('Undead');
    undead.damage(20);
    expect(undead.health).toBe(85); 
  });

  test('Damage Undead character with zero health', () => {
    const undead = new Undead('Undead');
    undead.health = 0;
    expect(() => undead.damage(10)).toThrow('Cannot damage a dead character.');
  });

  test('Level up Undead character with zero health', () => {
    const undead = new Undead('Undead');
    undead.health = 0;
    expect(() => undead.levelUp()).toThrow('Cannot level up a dead character.');
  });
});

//Zombie
describe('Zombie tests', () => {
  test('Create Zombie character', () => {
    const zombie = new Zombie('Zombie');
    expect(zombie.name).toBe('Zombie');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.health).toBe(100);
    expect(zombie.level).toBe(1);
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });

  test('Level up Zombie character', () => {
    const zombie = new Zombie('Zombie');
    zombie.levelUp();
    expect(zombie.level).toBe(2);
    expect(zombie.attack).toBe(48); // 40 + 20% = 48
    expect(zombie.defence).toBe(12); // 10 + 20% = 12
    expect(zombie.health).toBe(100);
  });

  test('Damage Zombie character', () => {
    const zombie = new Zombie('Zombie');
    zombie.damage(20);
    expect(zombie.health).toBe(82); 
  });

  test('Damage Zombie character with zero health', () => {
    const zombie = new Zombie('Zombie');
    zombie.health = 0;
    expect(() => zombie.damage(10)).toThrow('Cannot damage a dead character.');
  });

  test('Level up Zombie character with zero health', () => {
    const zombie = new Zombie('Zombie');
    zombie.health = 0;
    expect(() => zombie.levelUp()).toThrow('Cannot level up a dead character.');
  });
});