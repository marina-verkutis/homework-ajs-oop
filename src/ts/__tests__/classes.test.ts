import {Bowerman, Swordsman, Magician, Daemon, Undead, Zombie} from '../classes';

describe('Character tests', () => {
  test('Create Bowerman character', () => {
      const bowerman = new Bowerman('Bow');
      expect(bowerman.name).toBe('Bow');
      expect(bowerman.type).toBe('Bowman');
      expect(bowerman.health).toBe(100);
      expect(bowerman.level).toBe(1);
      expect(bowerman.attack).toBe(25);
      expect(bowerman.defence).toBe(25);
  });

  test('Level up character', () => {
      const swordsman = new Swordsman('Swordy');
      swordsman.levelUp();
      expect(swordsman.level).toBe(2);
      expect(swordsman.attack).toBe(48); // 40 + 20% = 48
      expect(swordsman.defence).toBe(12); // 10 + 20% = 12
      expect(swordsman.health).toBe(100);
  });

  test('Damage character', () => {
      const magician = new Magician('Magic');
      magician.damage(20);
      expect(magician.health).toBe(88);
  });

  test('Damage character with zero health', () => {
      const daemon = new Daemon('Daemon');
      daemon.health = 0;
      expect(() => daemon.damage(10)).toThrow('Cannot damage a dead character.');
  });

  test('Level up character with zero health', () => {
      const undead = new Undead('Undeady');
      undead.health = 0;
      expect(() => undead.levelUp()).toThrow('Cannot level up a dead character.');
  });
});