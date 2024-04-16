export default class Character {
    readonly name: string;
    readonly type: string;
    health: number = 100;
    level: number = 1;
    attack: number | any;
    defence: number | any;

    constructor(name: string, type: string) {
        if (name.length < 2 || name.length > 10) {
            throw new Error('Invalid name length. Name must be between 2 and 10 characters.');
        }
        const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (!validTypes.includes(type)) {
            throw new Error('Invalid type. Type must be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie.');
        }

        this.name = name;
        this.type = type;

        this.attack = undefined;
        this.defence = undefined;
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('Cannot level up a dead character.');
        }
        this.level++;
        this.attack += Math.floor(this.attack * 0.2);
        this.defence += Math.floor(this.defence * 0.2);
        this.health = 100;
    }

    damage(points: number) {
        if (this.health === 0) {
            throw new Error('Cannot damage a dead character.');
        }
        const damageTaken = points * (1 - this.defence / 100);
        this.health -= damageTaken;
        if (this.health < 0) {
            this.health = 0;
        }
    }
}