import Character from './Character'

export default class Daemon extends Character {
    constructor(name: string) {
        super(name, 'Daemon');
        this.attack = 10;
        this.defence = 40;
    }
}