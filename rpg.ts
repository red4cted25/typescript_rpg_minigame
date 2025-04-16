interface CharacterStats { 
    strength: number; 
    agility: number; 
    intelligence: number; 
}

abstract class GameCharacter implements CharacterStats {
    strength: number;
    agility: number;
    intelligence: number;

    name: string;
    protected level: number;
    private _health: number;
    readonly id: number;
    static maxLevel: number = 100;
    constructor(name: string, level: number, health: number, strength: number, agility: number, intelligence: number) {
        this.name = name;
        this.level = level;
        this._health = health;
        this.id = Math.floor(Math.random() * 10000);
        this.strength = strength;
        this.agility = agility;
        this.intelligence = intelligence;
    }

    get health(): number {
        return this._health;
    }

    set health(value: number) {
        if (value < 0) {
            this._health = 0;
        } else if (value > 100) {
            this._health = 100;
        } else {
            this._health = value;
        }
    }

    levelUp(): void {
        if (this.level < GameCharacter.maxLevel) {
            this.level++;
        } else {
            console.log(`${this.name} has reached the maximum level!`);
        }
    }

    abstract attack(): string;
}

class Warrior extends GameCharacter {
    constructor(name: string, level: number, health: number) {
        super(name, level, health, 90, 40, 20);
    }

    attack(): string {
        return `${this.name} swings a sword!`;
    }

    getStats(): string {
        return `----------- ${this.name} ----------- \nLevel: ${this.level} \nHealth: ${this.health} \nStrength: ${this.strength} \nAgility: ${this.agility} \nIntelligence: ${this.intelligence}`;
    }
}

class Mage extends GameCharacter {
    constructor(name: string, level: number, health: number) {
        super(name, level, health, 20, 40, 90);
    }

    attack(): string {
        return `${this.name} casts a fireball!`;
    }

    getStats(): string {
        return `----------- ${this.name} ----------- \nLevel: ${this.level} \nHealth: ${this.health} \nStrength: ${this.strength} \nAgility: ${this.agility} \nIntelligence: ${this.intelligence}`;
    }
}

class Necromancer extends Mage {
    constructor(name: string, level: number, health: number) {
        super(name, level, health);
    }

    attack(): string {
        return `${this.name} raises the dead!`;
    }

    castCurse(): string {
        return `${this.name} casts a curse that lowers attack!`;
    }

    getStats(): string {
        return `----------- ${this.name} ----------- \nLevel: ${this.level} \nHealth: ${this.health} \nStrength: ${this.strength} \nAgility: ${this.agility} \nIntelligence: ${this.intelligence}`;
    }
}

class Archer extends GameCharacter {
    constructor(name: string, level: number, health: number) {
        super(name, level, health, 50, 70, 30);
    }

    attack(): string {
        return `${this.name} shoots an arrow!`;
    }

    getStats(): string {
        return `----------- ${this.name} ----------- \nLevel: ${this.level} \nHealth: ${this.health} \nStrength: ${this.strength} \nAgility: ${this.agility} \nIntelligence: ${this.intelligence}`;
    }
}

let warrior = new Warrior("Conan", 1, 100);
console.log(warrior.attack());
warrior.levelUp();
console.log(warrior.getStats());

let mage = new Mage("Gandalf", 1, 80);
console.log(mage.attack());
console.log(mage.getStats());