const PokemonList = {
    /*grass type*/
    grass: [

        {
            number: 1,
            name: "Bulbasaur",
            image: "../../images/A1_001_EN.jpeg",
            attacks: [
                {
                    name: "Vine Whip",
                    score: 40,
                    energy: [
                        { type: "grass", amount: 1 },
                        { type: "any", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 70,
            stage: "basic",
            rarity:1

        },


        {
            number: 2,
            name: "Ivysaur",
            image: "../../images/A1_002_EN.jpeg",
            attacks: [
                {
                    name: "Razor Leaf",
                    score: 60,
                    energy: [
                        { type: "grass", amount: 1 },
                        { type: "any", amount: 2 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 90,
            stage: "stage 1",
            rarity:2
        },



        {
            number: 3,
            name: "Venusaur",
            image: "../../images/A1_003_EN.jpeg",
            attacks: [
                {
                    name: "Mega Drain",
                    score: 80,
                    energy: [
                        { type: "grass", amount: 2 },
                        { type: "any", amount: 2 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 160,
            stage: "stage 2",
            rarity:3
        },



        {
            number: 4,
            name: "Venusaur EX",
            image: "../../images/A1_004_EN.jpeg",
            attacks: [
                {
                    name: "Razor Leaf",
                    score: 60,
                    energy: [
                        { type: "grass", amount: 1 },
                        { type: "any", amount: 2 }
                    ]
                },
                {
                    name: "Giant Bloom",
                    score: 100,
                    energy: [
                        { type: "grass", amount: 2 },
                        { type: "any", amount: 2 }
                    ],
                    effect: {
                        type: "heal",
                        target: "self",
                        amount: 30
                    }
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 190,
            stage: "stage 2",
            rarity:4
        },



        {
            number: 5,
            name: "Caterpie",
            image: "../../images/A1_005_EN.jpeg",
            attacks: [
                {
                    name: "Tackle",
                    score: 10,
                    energy: [
                        { type: "any", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            rarity:1
        },



        {
            number: 6,
            name: "Metapod",
            image: "../../images/A1_006_EN.jpeg",
            attacks: [
                {
                    name: "Bug bite",
                    score: 30,
                    energy: [
                        { type: "any", amount: 2 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 80,
            stage: "stage 1",
            rarity:1
        },


        {
            number: 7,
            name: "Butterfree",
            image: "../../images/A1_007_EN.jpeg",
            attacks: [
                {
                    name: "Gust",
                    score: 60,
                    energy: [
                        { type: "grass", amount: 1 },
                        { type: "any", amount: 2 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 120,
            stage: "stage 2",
            rarity:3
        },

        {
            number: 8,
            name: "Weedle",
            image: "../../images/A1_008_EN.jpeg",
            attacks: [
                {
                    name: "Sting",
                    score: 20,
                    energy: [
                        { type: "grass", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 50,
            stage: "basic",
            rarity:1
        },



        {
            number: 9,
            name: "Kakuna",
            image: "../../images/A1_009_EN.jpeg",
            attacks: [
                {
                    name: "Bug Bite",
                    score: 30,
                    energy: [
                        { type: "grass", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 80,
            stage: "stage 1",
            rarity:1
        },


        {
            number: 10,
            name: "Beedrill",
            image: "../../images/A1_010_EN.jpeg",
            attacks: [
                {
                    name: "Sharp Sting",
                    score: 70,
                    energy: [
                        { type: "grass", amount: 1 },
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 120,
            stage: "stage 2",
            rarity:3
        },



        {
            number: 11,
            name: "Oddish",
            image: "../../images/A1_011_EN.jpeg",
            attacks: [
                {
                    name: "Ram",
                    score: 20,
                    energy: [
                        { type: "grass", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 60,
            stage: "basic",
            rarity:1
        },



        {
            number: 12,
            name: "Gloom",
            image: "../../images/A1_012_EN.jpeg",
            attacks: [
                {
                    name: "Drool",
                    score: 40,
                    energy: [
                        { type: "grass", amount: 1 },
                        { type: "any", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 80,
            stage: "stage 1",
            rarity:2
        },



        {
            number: 13,
            name: "Vileplume",
            image: "../../images/A1_013_EN.jpeg", 
            attacks: [
                {
                    name: "soothing Scent",
                    score: 80,
                    energy: [
                        { type: "grass", amount: 2 },
                        { type: "any", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 3 }
            ],
            hp: 140,
            stage: "stage 2",
            rarity:3
        },


        {
            number: 14,
            name: "Paras",
            image: "../../images/A1_014_EN.jpeg",
            attacks: [
                {
                    name: "Bug Bite",
                    score: 30,
                    energy: [
                        { type: "grass", amount: 1 },
                        { type: "any", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 70,
            stage: "basic",
            rarity:1
        },


        {
            number: 15,
            name: "Parasect",
            image: "../../images/A1_015_EN.jpeg",
            attacks: [
                {
                    name: "Slash",
                    score: 80,
                    energy: [
                        { type: "grass", amount: 2 },
                        { type: "any", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 2 }  
            ],
            hp: 120,
            stage: "stage 1",
            rarity:2
        },



        {
            number: 16,
            name: "Venonat",
            image: "../../images/A1_016_EN.jpeg",
            attacks: [
                {
                    name: "Tackle",
                    score: 20,
                    energy: [
                        { type: "grass", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 60,
            stage: "basic",
            rarity:1
        },


        {
            number: 17,
            name: "Venomoth",
            image: "../../images/A1_017_EN.jpeg",
            attacks: [
                {
                    name: "Poison Powder",
                    score: 30,
                    energy: [
                        { type: "grass", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 80,
            stage: "stage 1",
            rarity:2
        },


        {
            number: 18,
            name: "Bellsprout",
            image: "../../images/A1_018_EN.jpeg",
            attacks: [
                {
                    name: "Vine Whip",
                    score: 20,
                    energy: [
                        { type: "grass", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 60,
            stage: "basic",
            rarity:1
        },



        {
            number: 19,
            name: "Weepinbell",
            image: "../../images/A1_019_EN.jpeg",
            attacks: [
                {
                    name: "Razor Leaf",
                    score: 40,
                    energy: [
                        { type: "grass", amount: 1 },
                        { type: "any", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 90,
            stage: "stage 1",
            rarity:2
        },



        {
            number: 20,
            name: "Victreebel",
            image: "../../images/A1_020_EN.jpeg",
            attacks: [
                {
                    name: "Vine Whip",
                    score: 60,
                    energy: [
                        { type: "grass", amount: 1 },
                        { type: "any", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 140,
            stage: "stage 2",
            rarity:3
        },


        {
            number: 21,
            name: "Exeggcute",
            image: "../../images/A1_021_EN.jpeg",
            attacks: [
                {
                    name: "Seed Bomb",
                    score: 20,
                    energy: [
                        { type: "grass", amount: 1 }
                    ]
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 50,
            stage: "basic",
            rarity:1
        },


        {
            number: 22,
            name: "Exeggutor",
            image: "../../images/A1_022_EN.jpeg",
            attacks: [
                {
                    name: "Stomp",
                    score: 30,
                    energy: [
                        { type: "grass", amount: 1 }
                    ],
                    effect: {
                        type: "coinFlip",
                        result: "heads",
                        action: {
                            type: "damage",
                            amount: 30
                        }
                    }
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 3 }
            ],
            hp: 130,
            stage: "stage 1",
            rarity:3
        },
        {
            number: 23,
            name: "Exeggutor EX",
            image: "../../images/A1_023_EN.jpeg",
            attacks: [
                {
                    name: "Tropical Swing",
                    score: 40,
                    energy: [
                        { type: "grass", amount: 1 },
                    ],
                    effect: {
                        type: "coinFlip",
                        target: "self",
                        amount: 40
                    }
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 3 }
            ],
            hp: 160,
            stage: "stage 1",
            rarity:4
        },



        {
            number: 24,
            name: "Tangela",
            image: "../../images/A1_024_EN.jpeg",
            attacks: [
                {
                    name: "Absorb",
                    score: 40,
                    energy: [
                        { type: "grass", amount: 1 },
                        { type: "any", amount: 1 }
                    ],
                    effect: {
                        type: "heal",
                        target: "self",
                        amount: 10
                    }
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 80,
            stage: "basic",
            rarity:1
        },


        {
            number: 25,
            name: "scyther",
            image: "../../images/A1_025_EN.jpeg",
            attacks: [
                {
                    name: "Sharp Scythe",
                    score: 30,
                    energy: [
                        { type: "grass", amount: 1 },
                    ],
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 70,
            stage: "basic",
            rarity:1
        },


        {
            number: 26,
            name: "Pinsir",
            image: "../../images/A1_026_EN.jpeg",
            attacks: [
                {
                    name: "Double Horn",
                    score: 50,
                    energy: [
                        { type: "grass", amount: 1 },
                        { type: "any", amount: 1 }
                    ],
                    effect: {
                        type: "coinflip",
                        target: "self",
                        amount: 50
                    }
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 90,
            stage: "basic",
            rarity:2
        },


        {
            number: 27,
            name: "Cottonee",
            image: "../../images/A1_027_EN.jpeg",
            attacks: [
                {
                    name: "attach",
                    score: 10,
                    energy: [
                        { type: "any", amount: 1 }
                    ],
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 50,
            stage: "basic",
            rarity:1
        },



        {
            number: 28,
            name: "Whimsicott",
            image: "../../images/A1_028_EN.jpeg",
            attacks: [
                {
                    name: "rolling Tackle ",
                    score: 40,
                    energy: [
                        { type: "any", amount: 1 }
                    ],
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 80,
            stage: "stage 1",
            rarity:2
        },

        {
            number: 29,
            name: "Petilil",
            image: "../../images/A1_029_EN.jpeg",
            attacks: [
                {
                    name: "Blot",
                    score: 10,
                    energy: [
                        { type: "grass", amount: 1 },
                    ],
                    effect: {
                        type: "heal",
                        target: "self",
                        amount: 10
                    }
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 60,
            stage: "basic",
            rarity:1
        },


        {
            number: 30,
            name: "Lilligant",
            image: "../../images/A1_030_EN.jpeg",
            attacks: [
                {
                    name: "Leaf supply",
                    score: 50,
                    energy: [
                        { type: "grass", amount: 2 },
                    ],
                    effect: {
                        type: "energy",
                        target: "benched",
                        amount: 1
                    }
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 100,
            stage: "stage 1",
            rarity:2
        },


        {
            number: 31,
            name: "Skiddo",
            image: "../../images/A1_031_EN.jpeg",
            attacks: [
                {
                    name: "Surprise Attack",
                    score: 40,
                    energy: [
                        { type: "any", amount: 1 }
                    ],
                    effect: {
                        type: "coinFlip",
                        result: "tails",
                        action: {
                            type: "cancel",
                            description: "This attack does nothing"
                        }
                    }
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 70,
            stage: "basic",
            rarity:1
        },


        {
            number: 32,
            name: "Gogoat",
            image: "../../images/A1_032_EN.jpeg",
            attacks: [
                {
                    name: "Razor Leaf",
                    score: 70,
                    energy: [
                        { type: "grass", amount: 1 },
                        { type: "any", amount: 2 }
                    ],
                }
            ],
            weakness: "fire",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 120,
            stage: "stage 1",
            rarity:1
        }
    ],
    /*fire type*/
    fire: [
        {
            number: 33,
            name: "Charmander",
            image: "../../images/A1_033_EN.jpeg",
            attacks: [
                {
                    name: "Ember",
                    score: 30,
                    energy: [
                        { type: "fire", amount: 1 },
                    ],
                    effect: {
                        type: "energy loss",
                        target: "self",
                        amount: 1
                    }
                }
            ],
            weakness: "water",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 60,
            stage: "basic",
            rarity:1
        },

        {
            number: 34,
            name: "Charmeleon", 
            image: "../../images/A1_034_EN.jpeg",
            attacks: [
                {
                    name: "Fire Claws",
                    score: 60,
                    energy: [
                        { type: "fire", amount: 1 },
                        { type: "any", amount: 2}
                    ]
                }
            ],
            weakness: "water",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 90,
            stage: "stage 1",
            rarity:2
        },

        {
            number: 35,
            name: "Charizard", 
            image: "../../images/A1_035_EN.jpeg",
            attacks: [
                {
                    name: "Fire Spin",
                    score: 150,
                    energy: [
                        { type: "fire", amount:2 },
                        { type: "any", amount: 2}
                    ]
                }
            ],
            weakness: "water",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 150,
            stage: "stage 2",
            rarity:3
        },

        {
            number: 36,
            name: "Charizard EX", 
            image: "../../images/A1_036_EN.jpeg",
            attacks: [
                {
                    name: "Slash",
                    score: 60,
                    energy: [
                        { type: "fire", amount: 1 },
                        { type: "any", amount: 2 }
                    ]
                },
                {
                    name: "Crimson Storm",
                    score: 200,
                    energy: [
                        { type: "fire", amount: 2 },
                        { type: "any", amount: 2 }
                    ],
                    effect: {
                        type: "energy loss",
                        target: "self",
                        amount: 2
                    }
                }
            ],
            weakness: "water",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 180,
            stage: "stage 2",
            rarity:4
        },

        {
            number: 37,
            name: "Vulpix", 
            image: "../../images/A1_037_EN.jpeg",
            attacks: [
                {
                    name: "Tail Whip",
                    score: 0,
                    energy: [
                        { type: "any", amount: 1 }
                    ],
                    effect: {
                        type: "coinFlip",
                        result: "heads",
                        action: {
                            type: "prevent_attack",
                            target: "opponent",
                            duration: "next_turn"
                        }
                    }
                }
            ],
            weakness: "water",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 50,
            stage: "basic",
            rarity:1
        },

        {
            number: 38,
            name: "Ninetales", 
            image: "../../images/A1_038_EN.jpeg",
            attacks: [
                {
                    name: "Flamethower",
                    score: 90,
                    energy: [
                        { type: "fire", amount: 2 }
                    ],
                    effect: {
                        type: "energy loss",
                        target: "self",
                        amount: 1
                    }
                }
            ],
            weakness: "water",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 90,
            stage: "stage 1",
            rarity:2
        },

        {
            number: 39,
            name: "Growlithe", 
            image: "../../images/A1_039_EN.jpeg",
            attacks: [
                {
                    name: "Bite",
                    score: 20,
                    energy: [
                        { type: "any", amount: 2 }
                    ]
                }
            ],
            weakness: "water",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 70,
            stage: "basic",
            rarity:1
        },

        {
            number: 40,
            name: "Arcanine", 
            image: "../../images/A1_040_EN.jpeg",
            attacks: [
                {
                    name: "Heat Tackle",
                    score: 100,
                    energy: [
                        { type: "fire", amount: 2 },
                        { type: "any", amount: 1 }
                    ],
                }
            ],
            weakness: "water",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 130,
            stage: "stage 1",
            rarity:3
        },

        {
            number: 41,
            name: "Arcanine EX", 
            image: "../../images/A1_041_EN.jpeg",
            attacks: [
                {
                    name: "Inferno Onrush",
                    score: 120,
                    energy: [
                        { type: "fire", amount: 2 },
                        { type: "any", amount: 1 }
                    ],
                }
            ],
            weakness: "water",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 150,
            stage: "stage 1",
            rarity:4
        },

        {
            number: 42,
            name: "Ponyta", 
            image: "../../images/A1_042_EN.jpeg",
            attacks: [
                {
                    name: "Flare",
                    score: 20,
                    energy: [
                        { type: "fire", amount: 1 },
                    ],
                }
            ],
            weakness: "water",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 60,
            stage: "basic",
            rarity:1
        },

        {
            number: 43,
            name: "Rapidash", 
            image: "../../images/A1_043_EN.jpeg",
            attacks: [
                {
                    name: "Fire Mane",
                    score: 40,
                    energy: [
                        { type: "fire", amount: 1 },
                    ],
                }
            ],
            weakness: "water",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 100,
            stage: "stage 1",
            rarity:2
        },

        {
            number: 44,
            name: "Magmar", 
            image: "../../images/A1_044_EN.jpeg",
            attacks: [
                {
                    name: "Magma Punch",
                    score: 50,
                    energy: [
                        { type: "fire", amount: 2 },
                    ],
                }
            ],
            weakness: "water",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 80,
            stage: "basic",
            rarity:1
        },

        {
            number: 45,
            name: "Flareon", 
            image: "../../images/A1_045_EN.jpeg",
            attacks: [
                {
                    name: "Flamethrower",
                    score: 110,
                    energy: [
                        { type: "fire", amount: 1 },
                        { type: "any", amount: 2 }
                    ],
                }
            ],
            weakness: "water",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 120,
            stage: "stage 1",
            rarity:3
        },

        {
            number: 46,
            name: "Moltres", 
            image: "../../images/A1_046_EN.jpeg",
            attacks: [
                {
                    name: "Sky Attack",
                    score: 130,
                    energy: [
                        { type: "fire", amount: 1 },
                        { type: "any", amount: 2 }
                    ],
                }
            ],
            weakness: "water",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 100,
            stage: "basic",
            rarity:3
        },

        {
            number: 47,
            name: "Moltres EX", 
            image: "../../images/A1_047_EN.jpeg",
            attacks: [
                {
                    name: "Inferno Dance",
                    score: 70,
                    energy: [
                        { type: "fire", amount: 2 },
                        { type: "any", amount: 1 }
                    ],
                    effect: {
                        type: "coinFlip",
                        amount: 3,
                        action: {
                            type: "energy_transfer",
                            description: "Take Fire Energy from your Energy Zone equal to heads count and attach to your Benched Pokémon"
                        }
                    }
                },
                {
                    name: "Heat Blast",
                    score: 70,
                    energy: [
                        { type: "fire", amount: 2 },
                        { type: "any", amount: 1 }
                    ]
                }
            ],
            weakness: "water",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 140,
            stage: "basic",
            rarity:4
        },

        {
            number: 48,
            name: "Heatmor", 
            image: "../../images/A1_048_EN.jpeg",
            attacks: [
                {
                    name: "Combustion",
                    score: 30,
                    energy: [
                        { type: "fire", amount: 1 },
 
                    ],
                }
            ],
            weakness: "water",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 80,
            stage: "basic",
            rarity:1
        },


        {
            number: 49,
            name: "Salandit", 
            image: "../../images/A1_049_EN.jpeg",
            attacks: [
                {
                    name: "Scratch",
                    score: 20,
                    energy: [
                        { type: "fire", amount: 1 },
                    ],
                }
            ],
            weakness: "water",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 60,
            stage: "basic",
            rarity:1
        },

        {
            number: 50,
            name: "Salazzle", 
            image: "../../images/A1_050_EN.jpeg",
            attacks: [
                {
                    name: "Fire Claws ",
                    score: 60,
                    energy: [
                        { type: "fire", amount: 1 },
                        { type: "any", amount: 1 }
                    ],
                }
            ],
            weakness: "water",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 90,
            stage: "stage 1",
            rarity:1
        },

        {
            number: 51,
            name: "Sizzlipede", 
            image: "../../images/A1_051_EN.jpeg",
            attacks: [
                {
                    name: "Gnaw",
                    score: 10,
                    energy: [
                        { type: "any", amount: 1 }
                    ],
                }
            ],
            weakness: "water",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 60,
            stage: "basic",
            rarity:1
        },

        {
            number: 52,
            name: "Centiskorch", 
            image: "../../images/A1_052_EN.jpeg",
            attacks: [
                {
                    name: "Fire Blast",
                    score: 130,
                    energy: [
                        { type: "fire", amount: 1 },
                        { type: "any", amount: 3 }
                    ],
                }
            ],
            weakness: "water",
            retreatCost: [
                { type: "any", amount: 3 }
            ],
            hp: 130,
            stage: "stage 1",
            rarity:2
        }
    ],
    /*water type*/
    water: [
        {
            number: 53,
            name: "Squirtle", 
            image: "../../images/A1_053_EN.jpeg",
            attacks: [
                {
                    name: "Water Gun",
                    score: 20,
                    energy: [
                        { type: "water", amount: 1 },
                    ],
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 60,
            stage: "basic",
            rarity:1
        },


        {
            number: 54,
            name: "Wartortle", 
            image: "../../images/A1_054_EN.jpeg",
            attacks: [
                {
                    name: "Wave Splash",
                    score: 40,
                    energy: [
                        { type: "water", amount: 1 },
                        { type: "any", amount: 1 }
                    ],
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 80,
            stage: "stage 1",
            rarity:2
        },

        {
            number: 55,
            name: "Blastoise", 
            image: "../../images/A1_055_EN.jpeg",
            attacks: [
                {
                    name: "Hydro Pump",
                    score: 80,
                    energy: [
                        { type: "water", amount: 3 },
                        { type: "any", amount: 1 }
                    ],
                    effect: {
                        type: "extra_damage",
                        condition: "extra_water_energy",
                        amount: 60
                    }
                }
            ],
            weakness: "grass",
            retreatCost: [
                { type: "any", amount: 3 }
            ],
            hp: 150,
            stage: "stage 2",
            rarity:3
        },

        {
            number: 56,
            name: "Blastoise EX",
            image: "../../images/A1_056_EN.jpeg",
            attacks: [
                {
                    name: "Surf",
                    score: 40,
                    energy: [
                        { type: "water", amount: 1 },
                        { type: "any", amount: 1 }
                    ]
                },
                {
                    name: "Hydro Bazooka",
                    score: 100,
                    energy: [
                        { type: "water", amount: 2 },
                        { type: "any", amount: 1 }
                    ],
                    effect: {
                        type: "extra_damage",
                        condition: "extra_water_energy",
                        amount: 60,
                        description: "If this Pokémon has at least 2 extra Water Energy attached, this attack does 60 more damage"
                    }
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 3 }
            ],
            hp: 180,
            stage: "stage 2",
            rarity: 4
        },

        {
            number: 57,
            name: "Psyduck", 
            image: "../../images/A1_057_EN.jpeg",
            attacks: [
                {
                    name: "Headache",
                    score: 10,
                    energy: [
                        { type: "any", amount: 1 }
                    ],
                    effect: {
                        type: "prevent_supporter",
                        target: "opponent",
                        duration: "next_turn",
                        description: "Your opponent can't use any Supporter cards from their hand during their next turn"
                    }
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 60,
            stage: "basic",
            rarity: 1
        },

        {
            number: 58,
            name: "Golduck", 
            image: "../../images/A1_058_EN.jpeg",
            attacks: [
                {
                    name: "Aqua Edge",
                    score: 70,
                    energy: [
                        { type: "water", amount: 2 },
                    ],
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 90,
            stage: "stage 1",
            rarity:2
        },

        {
            number: 59,
            name: "Piliwag", 
            image: "../../images/A1_059_EN.jpeg",
            attacks: [
                {
                    name: "Razor Fin",
                    score: 10,
                    energy: [
                        { type: "any", amount: 1 }
                    ],
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 60,
            stage: "basic",
            rarity:1
        },


        {
            number: 60,
            name: "Poliwhirl", 
            image: "../../images/A1_060_EN.jpeg",
            attacks: [
                {
                    name: "Knuckle Punch",
                    score: 40,
                    energy: [
                        { type: "any", amount: 2 }
                    ],
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 90,
            stage: "stage 1",
            rarity:2
        },

        {
            number: 61,
            name: "Poliwrath", 
            image: "../../images/A1_061_EN.jpeg",
            attacks: [
                {
                    name: "Mega Punch",
                    score: 80,
                    energy: [
                        { type: "water", amount: 1 },
                        { type: "any", amount: 2 }
                    ],
                }
            ],
            ability: {
                name: "Counterattack",
                description: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, do 20 damage to the Attacking Pokémon."
            },
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 150,
            stage: "stage 2",
            rarity: 3
        },

        {
            number: 62,
            name: "Tentacool", 
            image: "../../images/A1_062_EN.jpeg",
            attacks: [
                {
                    name: "Gentle Slap",
                    score: 20,
                    energy: [
                        { type: "water", amount: 1 },
                    ],
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 60,
            stage: "basic",
            rarity: 1
        },

        {
            number: 63,
            name: "Tentacruel", 
            image: "../../images/A1_063_EN.jpeg",
            attacks: [
                {
                    name: "Poison Tentacles",
                    score: 50,
                    energy: [
                        { type: "water", amount: 1 },
                        { type: "any", amount: 1 }
                    ],
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 110,
            stage: "stage 1",
            rarity: 2
        },

        {
            number: 64,
            name: "Seel", 
            image: "../../images/A1_064_EN.jpeg",
            attacks: [
                {
                    name: "Headbutt",
                    score: 30,
                    energy: [
                        { type: "any", amount: 2 }
                    ],
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 80,
            stage: "basic",
            rarity: 1
        },

        {
            number: 65,
            name: "Dewgong", 
            image: "../../images/A1_065_EN.jpeg",
            attacks: [
                {
                    name: "Surf",
                    score: 50,
                    energy: [
                        { type: "water", amount: 3 },
                    ],
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 3 }
            ],
            hp: 120,
            stage: "stage 1",
            rarity: 2
        },

        {
            number: 66,
            name: "Shellder", 
            image: "../../images/A1_066_EN.jpeg",
            attacks: [
                {
                    name: "Ptongue Slap",
                    score: 20,
                    energy: [
                        { type: "water", amount: 1 },
                    ],
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 150,
            stage: "basic",
            rarity: 1
        },
        {
            number: 67,
            name: "Cloyster", 
            image: "../../images/A1_067_EN.jpeg",
            attacks: [
                {
                    name: "Surf",
                    score: 70,
                    energy: [
                        { type: "water", amount: 2 },
                        { type: "any", amount: 1 }
                    ]
                }
            ],
            ability: {
                name: "Shell Armor",
                description: "This Pokémon takes -10 damage from attacks."
            },
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 120,
            stage: "stage 1",
            rarity: 2
        },


        {
            number: 68,
            name: "Krabby", 
            image: "../../images/A1_068_EN.jpeg",
            attacks: [
                {
                    name: "Vise Grip",
                    score: 40,
                    energy: [
                        { type: "water", amount: 1 },
                        { type: "any", amount: 1 }
                    ],
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 70,
            stage: "basic",
            rarity: 1
        },

        {
            number: 69,
            name: "Kingler", 
            image: "../../images/A1_069_EN.jpeg",
            attacks: [
                {
                    name: "KO Crab",
                    score: 80,
                    energy: [
                        { type: "water", amount: 2 },
                        { type: "any", amount: 1 }
                    ],
                    effect: {
                        type: "coinFlip",
                        amount: 2,
                        condition: "both_heads",
                        extraDamage: 80
                    }
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 3 }
            ],
            hp: 120,
            stage: "stage 1",
            rarity: 2
        },

        {
            number: 70,
            name: "Horsea", 
            image: "../../images/A1_070_EN.jpeg",
            attacks: [
                {
                    name: "Water Gun",
                    score: 20,
                    energy: [
                        { type: "water", amount: 1 },
                    ],
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 60,
            stage: "basic",
            rarity: 1
        },

        {
            number: 71,
            name: "Seadra", 
            image: "../../images/A1_071_EN.jpeg",
            attacks: [
                {
                    name: "Water Arrow",
                    score: 50,
                    energy: [
                        { type: "water", amount: 3 },
                    ],
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 70,
            stage: "stage 1",
            rarity: 2
        },

        
    ]



        
}

const cardposibility = {
    1: [1.0, 0.0, 0.0],
    2: [0.0, 0.9, 0.6],
    3: [0.0, 0.05, 0.2],
    4: [0.0, 0.01666, 0.06664],
    5: [0.0, 0.02572, 0.10288],
    6: [0.0, 0.005, 0.02],
    7: [0.0, 0.00222, 0.00888],
    8: [0.0, 0.0004, 0.0016],
}

export { PokemonList, cardposibility };