import Swordsman from '../class/Swordsman'

describe('Swordsman tests', () => {
    test('Create Swordsman character', () => {
        const bowerman = new Swordsman('Swordsman1');
        const correct = {
            attack: 40,
            defence: 10,
            health: 100,
            level: 1,
            name: 'Swordsman1',
            type: 'Swordsman'
        }
        expect(bowerman).toEqual(correct);
    });
});