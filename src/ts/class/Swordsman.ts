import Character from './Character'

export default class Swordsman extends Character {
    constructor(name: string) {
        super(name, 'Swordsman');
        this.attack = 40;
        this.defence = 10;
    }
}