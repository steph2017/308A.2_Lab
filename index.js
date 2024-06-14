// Part 1

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["small_hat", "sunglasses"]
        }
    }
}

//logs inventory
adventurer.inventory.forEach((item) => {
    console.log(item);
});
