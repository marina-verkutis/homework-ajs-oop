import Bowerman from '../class/Bowerman'

describe('Bowerman tests', () => {
    test('Create Bowerman character', () => {
        const bowerman = new Bowerman('Bow');
        const correct = {
            attack: 25,
            defence: 25,
            health: 100,
            level: 1,
            name: 'Bow',
            type: 'Bowman'
        }
        expect(bowerman).toEqual(correct);
    });
});