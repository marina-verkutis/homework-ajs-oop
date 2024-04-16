import Magician from '../class/Magician'

describe('Magician tests', () => {
    test('Create Magician character', () => {
        const bowerman = new Magician('Magician1');
        const correct = {
            attack: 10,
            defence: 40,
            health: 100,
            level: 1,
            name: 'Magician1',
            type: 'Magician'
        }
        expect(bowerman).toEqual(correct);
    });
});