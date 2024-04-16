import Character from '../class/Character'

describe('Character tests', () => {
    test('Short character name', () => {
        expect(() => {
            new Character('C', 'Magician');
        }).toThrow('Invalid name length. Name must be between 2 and 10 characters.');
    });
    test('Long character name', () => {
        expect(() => {
            new Character('Character11111111111111111', 'Magician');
        }).toThrow('Invalid name length. Name must be between 2 and 10 characters.');
    });
    test('Wrong character type', () => {
        expect(() => {
            new Character('Character1', 'MagiciaWrong');
        }).toThrow('Invalid type. Type must be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie.');
    });
});