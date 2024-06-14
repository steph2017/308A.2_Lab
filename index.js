// Part 1

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         companion: {
//             name: "Frank",
//             type: "Flea",
//             inventory: ["small_hat", "sunglasses"]
//         }
//     },
//     roll(mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`)
//     }
// }

// //logs inventory
// adventurer.inventory.forEach((item) => {
//     console.log(item);
// });

// //dice roll
// adventurer.roll();

//Part 2

class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
        return result;
    }
    printInventory() {
        this.inventory.forEach((item) => {
            console.log(item);
        });
    }
    //static property
    static MAX_HEALTH = 100;
}

//Part 3

class Adventurer extends Character {
    constructor(name, role = "unassigned") {
        super(name);
        // Adventurers have specialized roles.
        if (role != "Mage" && role != "Healer" && role != "Warrior" && role != "unassigned") {
            this.role = "unassigned"
            console.log("You provided an invalid role. Assigning the \"unassigned\"role as a default.");
        }
        this.role = role;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
    duel(oppAdventurer) {
        let round = 1;
        let myRoll = 0;
        let theirRoll = 0;
        while (this.health > 50 && oppAdventurer.health > 50) {
            console.log("Round " + round + ": ");
            myRoll = this.roll();
            theirRoll = oppAdventurer.roll();
            if (myRoll > theirRoll) {
                oppAdventurer.health--;
                console.log(`${this.name} won! ${this.name}'s health is ${this.health} & ${oppAdventurer.name}'s health is ${oppAdventurer.health}.`);
            }
            else if (theirRoll > myRoll) {
                this.health--;
                console.log(`${oppAdventurer.name} won! ${this.name}'s health is ${this.health} & ${oppAdventurer.name}'s health is ${oppAdventurer.health}.`);
            }
            else {
                console.log(`Tie Roll! ${this.name}'s health is ${this.health} & ${oppAdventurer.name}'s health is ${oppAdventurer.health}.`);
            }
            round++;
        }
        this.health > 50 ? console.log(`${this.name} won the duel!!!!`) : console.log(`${oppAdventurer.name} won the duel!!!!`);
        return;
    }
    //Static property
    static ROLES = ["Mage", "Healer", "Warrior", "unassigned"];
}

class Companion extends Character {
    constructor(name, type) {
        super(name);
        this.type = type;
    }
}

//redeclare robin thru classes

const adventurer1 = new Adventurer("Robin", "Mage");
adventurer1.inventory.push(["sword", "potion", "artifact"]);
adventurer1.companion = new Companion("Leo", "Cat");
adventurer1.companion.companion = new Companion("Frank", "Flea");
adventurer1.companion.companion.inventory.push(["small_hat", "sunglasses"]);

// Part 4 static classes (see above)
// Part 5 nothing needed
// Part 6 Duel Method (see above)

const adventurer2 = new Adventurer("Harold", "Warrior");

adventurer1.duel(adventurer2);