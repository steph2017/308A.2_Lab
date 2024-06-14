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
    }
    printInventory() {
        this.inventory.forEach((item) => {
            console.log(item);
        });
    }
}

//Part 3

class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        // Adventurers have specialized roles.
        this.role = role;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
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