import Character from './Character'

export default class Zombie extends Character {
    constructor(name: string) {
        super(name, 'Zombie');
        this.attack = 40;
        this.defence = 10;
    }
}