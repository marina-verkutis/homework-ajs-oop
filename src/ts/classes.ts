class Character {
    readonly name: string;
    readonly type: string;
    health: number = 100;
    level: number = 1;
    attack!: number;
    defence!: number;

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

        switch (type) {
            case 'Bowman':
                this.attack = 25;
                this.defence = 25;
                break;
            case 'Swordsman':
                this.attack = 40;
                this.defence = 10;
                break;
            case 'Magician':
                this.attack = 10;
                this.defence = 40;
                break;
            case 'Undead':
                this.attack = 25;
                this.defence = 25;
                break;
            case 'Zombie':
                this.attack = 40;
                this.defence = 10;
                break;
            case 'Daemon':
                this.attack = 10;
                this.defence = 40;
                break;
        }
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

export class Bowerman extends Character {
    constructor(name: string) {
        super(name, 'Bowman');
    }
}

export class Swordsman extends Character {
    constructor(name: string) {
        super(name, 'Swordsman');
    }
}

export class Magician extends Character {
    constructor(name: string) {
        super(name, 'Magician');
    }
}

export class Daemon extends Character {
    constructor(name: string) {
        super(name, 'Daemon');
    }
}

export class Undead extends Character {
    constructor(name: string) {
        super(name, 'Undead');
    }
}

export class Zombie extends Character {
    constructor(name: string) {
        super(name, 'Zombie');
    }
}