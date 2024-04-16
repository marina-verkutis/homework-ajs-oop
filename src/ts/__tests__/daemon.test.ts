import Daemon from '../class/Daemon'


describe('Daemon tests', () => {
    test('Create Daemon character', () => {
        const bowerman = new Daemon('Daemon1');
        const correct = {
            attack: 10,
            defence: 40,
            health: 100,
            level: 1,
            name: 'Daemon1',
            type: 'Daemon'
        }
        expect(bowerman).toEqual(correct);
    });
});
