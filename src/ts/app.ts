import {Bowerman, Swordsman, Magician, Daemon, Undead, Zombie} from './classes';

const bowerman = new Bowerman('bowerman_1');
bowerman.levelUp()
console.log(bowerman.level);