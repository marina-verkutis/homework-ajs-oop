import Undead from '../class/Undead'

describe('Undead tests', () => {
    test('Create Undead character', () => {
        const bowerman = new Undead('Undead1');
        const correct = {
            attack: 25,
            defence: 25,
            health: 100,
            level: 1,
            name: 'Undead1',
            type: 'Undead'
        }
        expect(bowerman).toEqual(correct);
    });
});