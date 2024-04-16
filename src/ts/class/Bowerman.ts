import Character from './Character'

export default class Bowerman extends Character {
    constructor(name: string) {
        super(name, 'Bowman');
        this.attack = 25;
        this.defence = 25;
    }
}