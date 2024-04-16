import Zombie from '../class/Zombie'

describe('Zombie tests', () => {
    test('Create Undead character', () => {
        const bowerman = new Zombie('Zombie1');
        const correct = {
            attack: 40,
            defence: 10,
            health: 100,
            level: 1,
            name: 'Zombie1',
            type: 'Zombie'
        }
        expect(bowerman).toEqual(correct);
    });
});