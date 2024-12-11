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


        {
            number: 72,
            name: "Goldeen", 
            image: "../../images/A1_072_EN.jpeg",
            attacks: [
                {
                    name: "Flop",
                    score: 10,
                    energy: [
                        { type: "any", amount: 1 },
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
            number: 73,
            name: "Seaking", 
            image: "../../images/A1_073_EN.jpeg",
            attacks: [
                {
                    name: "Horn Hazard",
                    score: 80,
                    energy: [
                        { type: "water", amount: 1 },
                    ],
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 100,
            stage: "stage 1",
            rarity: 1
        },

        {
            number: 74,
            name: "Staryu", 
            image: "../../images/A1_074_EN.jpeg",
            attacks: [
                {
                    name: "Smack",
                    score: 20,
                    energy: [
                        { type: "any", amount: 1 },
                    ],
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 50,
            stage: "basic",
            rarity: 1
        },

        {
            number: 75,
            name: "Starmie", 
            image: "../../images/A1_075_EN.jpeg",
            attacks: [
                {
                    name: "Wave Splash",
                    score: 40,
                    energy: [
                        { type: "water", amount: 1 },
                    ],
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 0 }
            ],
            hp: 90,
            stage: "stage 1",
            rarity: 2
        },

        {
            number: 76,
            name: "Starmie EX", 
            image: "../../images/A1_076_EN.jpeg",
            attacks: [
                {
                    name: "Hydro Splash",
                    score: 90,
                    energy: [
                        { type: "water", amount: 2 },
                    ],
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 0 }
            ],
            hp: 130,
            stage: "stage 1",
            rarity: 4
        },


        {
            number: 77,
            name: "Magikarp", 
            image: "../../images/A1_077_EN.jpeg",
            attacks: [
                {
                    name: "Splash",
                    score: 10,
                    energy: [
                        { type: "any", amount: 1 },
                    ],
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 30,
            stage: "basic",
            rarity: 1
        },

        {
            number: 78,
            name: "Gyarados", 
            image: "../../images/A1_078_EN.jpeg",
            attacks: [
                {
                    name: "Hyper Beam",
                    score: 100,
                    energy: [
                        { type: "water", amount: 4 },
                    ],
                    effect: {
                        type: "discard_energy",
                        target: "opponent_active",
                        amount: 1,
                        description: "Discard a random Energy from your opponent's Active Pokémon"
                    }
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 3 }
            ],
            hp: 150,
            stage: "stage 1",
            rarity: 3
        },


        {
            number: 79,
            name: "Lapras", 
            image: "../../images/A1_079_EN.jpeg",
            attacks: [
                {
                    name: "Hydro Pump",
                    score: 20,
                    energy: [
                        { type: "water", amount: 1 },
                    ],
                    effect: {
                        type: "extra_damage",
                        condition: "extra_water_energy",
                        amount: 70,
                        description: "If this Pokémon has at least 3 extra Water Energy attached, this attack does 70 more damage"
                    }
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 100,
            stage: "basic",
            rarity: 3
        },

        {
            number: 80,
            name: "Vaporeon", 
            image: "../../images/A1_080_EN.jpeg",
            attacks: [
                {
                    name: "Bubble Drain",
                    score: 60,
                    energy: [
                        { type: "water", amount: 1 },
                        { type: "any", amount: 2 },
                    ],
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 130,
            stage: "stage 1",
            rarity: 3
        },

        {
            number: 81,
            name: "Omanyte", 
            image: "../../images/A1_081_EN.jpeg",
            attacks: [
                {
                    name: "Water Gun",
                    score: 40,
                    energy: [
                        { type: "water", amount: 1 },
                    ],
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 90,
            stage: "stage 1",
            rarity: 2
        },


        {
            number: 82,
            name: "Omastar", 
            image: "../../images/A1_082_EN.jpeg",
            attacks: [
                {
                    name: "Ancient Whirlpool",
                    score: 70,
                    energy: [
                        { type: "water", amount: 1 },
                        { type: "any", amount: 2 },
                    ],
                    effect: {
                        type: "prevent_attack",
                        target: "opponent_active",
                        duration: "next_turn",
                        description: "During your opponent's next turn, the Defending Pokemon can't attack."
                    }
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 140,
            stage: "stage 2",
            rarity: 3
        },
        {
            number: 83,
            name: "Articuno", 
            image: "../../images/A1_083_EN.jpeg",
            attacks: [
                {
                    name: "Ice Beam",
                    score: 60,
                    energy: [
                        { type: "water", amount: 2 },
                        { type: "any", amount: 1 }
                    ],
                    effect: {
                        type: "coinFlip",
                        result: "heads",
                        action: {
                            type: "status",
                            condition: "paralyzed",
                            target: "opponent_active"
                        }
                    }
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 100,
            stage: "basic",
            rarity: 3
        },


        {
            number: 84,
            name: "Articuno EX", 
            image: "../../images/A1_084_EN.jpeg",
            attacks: [
                {
                    name: "Ice Wing",
                    score: 40,
                    energy: [
                        { type: "water", amount: 1 },
                        { type: "any", amount: 1 }
                    ]
                },
                {
                    name: "Blizzard",
                    score: 80,
                    energy: [
                        { type: "water", amount: 3 }
                    ],
                    effect: {
                        type: "spread_damage",
                        target: "opponent_bench",
                        amount: 10,
                        description: "This attack also does 10 damage to each of your opponent's Benched Pokémon"
                    }
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 140,
            stage: "basic",
            rarity: 4
        },

        {
            number: 85,
            name: "Ducklett", 
            image: "../../images/A1_085_EN.jpeg",
            attacks: [
                {
                    name: "Flap",
                    score: 30,
                    energy: [
                        { type: "any", amount: 2 },
                    ],
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 50,
            stage: "basic",
            rarity: 1
        },

        {
            number: 86,
            name: "Swanna", 
            image: "../../images/A1_086_EN.jpeg",
            attacks: [
                {
                    name: "Wing Attack",
                    score: 70,
                    energy: [
                        { type: "any", amount: 3 },
                    ],
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 90,
            stage: "stage 1",
            rarity: 2
        },


        {
            number: 87,
            name: "Froakie", 
            image: "../../images/A1_087_EN.jpeg",
            attacks: [
                {
                    name: "flop",
                    score: 10,
                    energy: [
                        { type: "any", amount: 1 },
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
            number: 88,
            name: "Frogadier", 
            image: "../../images/A1_088_EN.jpeg",
            attacks: [
                {
                    name: "Water Drip",
                    score: 30,
                    energy: [
                        { type: "any", amount: 1 },
                    ],
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 80,
            stage: "stage 1",
            rarity: 2
        },

        {
            number: 89,
            name: "Greninja", 
            image: "../../images/A1_089_EN.jpeg",
            attacks: [
                {
                    name: "Mist Slash",
                    score: 60,
                    energy: [
                        { type: "water", amount: 1 },
                        { type: "any", amount: 1 }
                    ],
                }
            ],
            ability: {
                name: "Water Shuriken",
                description: "Once during your turn, you may do 20 damage to 1 of your opponent's Pokémon."
            },
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 0 }
            ],
            hp: 120,
            stage: "stage 2",
            rarity: 3
        },


        {
            number: 90,
            name: "Pyukumuku", 
            image: "../../images/A1_090_EN.jpeg",
            attacks: [
                {
                    name: "Rain Splash",
                    score: 30,
                    energy: [
                        { type: "water", amount: 1 },
                    ],
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount:1 }
            ],
            hp: 70,
            stage: "basic",
            rarity: 1
        },
        {
            number: 91,
            name: "Bruxish", 
            image: "../../images/A1_091_EN.jpeg",
            attacks: [
                {
                    name: "Second Strike",
                    score: 10,
                    energy: [
                        { type: "water", amount: 2 },
                    ],
                    effect: {
                        type: "conditional_damage",
                        condition: "opponent_damaged",
                        extraDamage: 60,
                        description: "If your opponent's Active Pokémon has damage on it, this attack does 60 more damage"
                    }
                }
            ],
            weakness: "electric",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 90,
            stage: "basic",
            rarity: 2
        },

        {
            number: 92,
            name: "Snom", 
            image: "../../images/A1_092_EN.jpeg",
            attacks: [
                {
                    name: "Ram",
                    score: 10,
                    energy: [
                        { type: "any", amount: 1 },
                    ],
                }
            ],
            weakness: "steel",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 50,
            stage: "basic",
            rarity: 1
        },


        {
            number: 93,
            name: "Frosmoth", 
            image: "../../images/A1_093_EN.jpeg",
            attacks: [
                {
                    name: "Powder Snow",
                    score: 40,
                    energy: [
                        { type: "water", amount: 1 },
                        { type: "any", amount: 1 }
                    ],
                    effect: {
                        type: "status",
                        condition: "asleep",
                        target: "opponent_active"
                    }
                }
            ],
            weakness: "steel",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 90,
            stage: "stage 1",
            rarity: 2
        },

        {
            number: 94,
            name: "Pikachu",
            image: "../../images/A1_094_EN.jpeg",
            attacks: [
                {
                    name: "Gnaw",
                    score: 20,
                    energy: [
                        { type: "electric", amount: 1 },
                    ]
                }
            ],
            weakness: "fighting",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 60,
            stage: "basic",
            rarity:1

        },

        {
            number: 95,
            name: "Raichu",
            image: "../../images/A1_095_EN.jpeg",
            attacks: [
                {
                    name: "Thunderbolt",
                    score: 140,
                    energy: [
                        { type: "electric", amount: 3 },
                    ]
                }
            ],
            weakness: "fighting",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 100,
            stage: "basic",
            rarity:3

        },

        {
            number: 96,
            name: "Pikachu EX",
            image: "../../images/A1_096_EN.jpeg",
            attacks: [
                {
                    name: "Circle Circuit",
                    score: 30,
                    energy: [
                        { type: "electric", amount: 2 },
                    ],
                    effect: {
                        type: "multiply_bench",
                        description: "This attack does 30 damage for each of your Benched Pokémon"
                    }
                }
            ],
            weakness: "fighting",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 120,
            stage: "basic",
            rarity: 4
        },

        {
            number: 97,
            name: "Magnemite",
            image: "../../images/A1_097_EN.jpeg",
            attacks: [
                {
                    name: "Lighting Ball",
                    score: 20,
                    energy: [
                        { type: "electric", amount: 1 },
                    ]
                }
            ],
            weakness: "fighting",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 60,
            stage: "basic",
            rarity:1
        },

        {
            number: 98,
            name: "Magneton",
            image: "../../images/A1_098_EN.jpeg",
            attacks: [
                {
                    name: "Spinning Attack",
                    score: 60,
                    energy: [
                        { type: "electric", amount: 2 },
                        { type: "any", amount: 2 }
                    ]
                }
            ],
            ability: {
                name: "Volt Charge",
                description: "Once during your turn, you may take a Lightning Energy from your Energy Zone and attach it to this Pokémon."
            },
            weakness: "fighting",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 80,
            stage: "stage 1",
            rarity: 3
        },

        {
            number: 99,
            name: "Voltorb",
            image: "../../images/A1_099_EN.jpeg",
            attacks: [
                {
                    name: "Tackle",
                    score: 20,
                    energy: [
                        { type: "electric", amount: 1 }
                    ]
                }
            ],
            weakness: "fighting",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 60,
            stage: "basic",
            rarity: 1
        },
        {
            number: 100,
            name: "Electrode",
            image: "../../images/A1_100_EN.jpeg",
            attacks: [
                {
                    name: "Electro Ball",
                    score: 70,
                    energy: [
                        { type: "electric", amount: 2 }
                    ]
                }
            ],
            weakness: "fighting",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 80,
            stage: "stage 1",
            rarity: 2
        },
        {
            number: 101,
            name: "Electabuzz",
            image: "../../images/A1_101_EN.jpeg",
            attacks: [
                {
                    name: "Thunder Punch",
                    score: 40,
                    effect: {
                        type: "coinFlip",
                        description: "If heads, this attack does 40 more damage. If tails, this Pokémon also does 20 damage to itself."
                    },
                    energy: [
                        { type: "electric", amount: 1 }
                    ]
                }
            ],
            weakness: "fighting",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 70,
            stage: "basic",
            rarity: 1
        },
        {
            number: 102,
            name: "Jolteon",
            image: "../../images/A1_102_EN.jpeg",
            attacks: [
                {
                    name: "Pin Missile",
                    score: 40,
                    effect: {
                        type: "coinFlip",
                        description: "Flip 4 coins. This attack does 40 damage for each heads."
                    },
                    energy: [
                        { type: "electric", amount: 2 }
                    ]
                }
            ],
            weakness: "fighting",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 90,
            stage: "stage 1",
            rarity: 3
        },
        {
            number: 103,
            name: "Zapdos",
            image: "../../images/A1_103_EN.jpeg",
            attacks: [
                {
                    name: "Raging Thunder",
                    score: 100,
                    effect: {
                        type: "additional_damage",
                        description: "This attack also does 30 damage to 1 of your Benched Pokémon."
                    },
                    energy: [
                        { type: "electric", amount: 2 }
                    ]
                }
            ],
            weakness: "fighting",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 100,
            stage: "basic",
            rarity: 3
        },
        {
            number: 104,
            name: "Zapdos EX",
            image: "../../images/A1_104_EN.jpeg",
            attacks: [
                {
                    name: "Peck",
                    score: 20,
                    energy: [
                        { type: "any", amount: 1 }
                    ]
                },
                {
                    name: "Thundering Hurricane",
                    score: 50,
                    effect: {
                        type: "coinFlip",
                        description: "Flip 4 coins. This attack does 50 damage for each heads."
                    },
                    energy: [
                        { type: "electric", amount: 3 }
                    ]
                }
            ],
            weakness: "fighting",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 130,
            stage: "basic",
            rarity: 4
        },
        {
            number: 105,
            name: "Blitzle",
            image: "../../images/A1_105_EN.jpeg",
            attacks: [
                {
                    name: "Zap Kick",
                    score: 20,
                    energy: [
                        { type: "electric", amount: 1 }
                    ]
                }
            ],
            weakness: "fighting",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 60,
            stage: "basic",
            rarity: 1
        },
        {
            number: 106,
            name: "Zebstrika",
            image: "../../images/A1_106_EN.jpeg",
            attacks: [
                {
                    name: "Thunder Spear",
                    score: 30,
                    effect: {
                        type: "additional_damage",
                        description: "This attack does 30 damage to 1 of your opponent's Pokémon."
                    },
                    energy: [
                        { type: "electric", amount: 2 }
                    ]
                }
            ],
            weakness: "fighting",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 90,
            stage: "stage 1",
            rarity: 2
        },
        {
            number: 107,
            name: "Tynamo",
            image: "../../images/A1_107_EN.jpeg",
            attacks: [
                {
                    name: "Tiny Charge",
                    score: 30,
                    energy: [
                        { type: "electric", amount: 1 }
                    ]
                }
            ],
            weakness: "fighting",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 30,
            stage: "basic",
            rarity: 1
        },
        {
            number: 108,
            name: "Eelektrik",
            image: "../../images/A1_108_EN.jpeg",
            attacks: [
                {
                    name: "Head Bolt",
                    score: 40,
                    energy: [
                        { type: "electric", amount: 1 }
                    ]
                }
            ],
            weakness: "fighting",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 80,
            stage: "stage 1",
            rarity: 2
        },
        {
            number: 109,
            name: "Eelektross",
            image: "../../images/A1_109_EN.jpeg",
            attacks: [
                {
                    name: "Thunder Fang",
                    score: 80,
                    effect: {
                        type: "coinFlip",
                        description: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
                    },
                    energy: [
                        { type: "electric", amount: 2 },
                        { type: "any", amount: 1 }
                    ]
                }
            ],
            weakness: "fighting",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 140,
            stage: "stage 2",
            rarity: 3
        },
        {
            number: 110,
            name: "Helioptile",
            image: "../../images/A1_110_EN.jpeg",
            attacks: [
                {
                    name: "Tail Whap",
                    score: 20,
                    energy: [
                        { type: "electric", amount: 1 }
                    ]
                }
            ],
            weakness: "fighting",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 60,
            stage: "basic",
            rarity: 1
        },
        {
            number: 111,
            name: "Heliolisk",
            image: "../../images/A1_111_EN.jpeg",
            attacks: [
                {
                    name: "Quick Attack",
                    score: 40,
                    effect: {
                        type: "coinFlip",
                        description: "Flip a coin. If heads, this attack does 40 more damage."
                    },
                    energy: [
                        { type: "electric", amount: 2 }
                    ]
                }
            ],
            weakness: "fighting",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 90,
            stage: "stage 1",
            rarity: 2
        },
        {
            number: 112,
            name: "Pincurchin",
            image: "../../images/A1_112_EN.jpeg",
            attacks: [
                {
                    name: "Thunder Shock",
                    score: 30,
                    effect: {
                        type: "coinFlip",
                        description: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
                    },
                    energy: [
                        { type: "electric", amount: 1 }
                    ]
                }
            ],
            weakness: "fighting",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 70,
            stage: "basic",
            rarity: 1
        },
    ],
    pcychic:[
        {
            number: 113,
            name: "Clefairy",
            image: "../../images/A1_113_EN.jpeg",
            attacks: [
                {
                    name: "Slap",
                    score: 20,
                    energy: [
                        { type: "psychic", amount: 1 }
                    ]
                }
            ],
            weakness: "metal",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 60,
            stage: "basic",
            rarity: 1
        },
        {
            number: 114,
            name: "Clefable",
            image: "../../images/A1_114_EN.jpeg",
            attacks: [
                {
                    name: "Magical Shot",
                    score: 40,
                    energy: [
                        { type: "psychic", amount: 1 }
                    ]
                }
            ],
            weakness: "metal",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 100,
            stage: "stage 1",
            rarity: 2
        },
        {
            number: 115,
            name: "Abra",
            image: "../../images/A1_113_EN.jpeg",
            attacks: [
                {
                    name: "Teleport",
                    score: 0,
                    energy: [
                        { type: "psychic", amount: 1 }
                    ],
                    effect: {
                        type: "switch",
                        description: "Switch this Pokémon with 1 of your Benched Pokémon."
                    }
                }
            ],
            weakness: "darkness",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 60,
            stage: "basic",
            rarity: 1
        },
        {
            number: 116,
            name: "Kadabra",
            image: "../../images/A1_116_EN.jpeg", // Update the image path as needed
            attacks: [
                {
                    name: "Super Psy Bolt",
                    score: 60,
                    energy: [
                        { type: "psychic", amount: 1 },
                        { type: "any", amount: 2 }
                    ]
                }
            ],
            weakness: "darkness",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 80,
            stage: "stage 1",
            rarity: 2 
        },
        {
            number: 117,
            name: "Alakazam",
            image: "../../images/A1_117_EN.jpeg", // Update the image path as needed
            attacks: [
                {
                    name: "Psychic",
                    score: 60,
                    energy: [
                        { type: "psychic", amount: 2 },
                        { type: "any", amount: 1 }
                    ],
                    effect: {
                        type: "extra_damage",
                        description: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon."
                    }
                }
            ],
            weakness: "darkness",
            retreatCost: [
                { type: "any", amount: 2 }
            ],
            hp: 130,
            stage: "stage 2",
            rarity: 3 // Adjust rarity as needed
        },
        {
            number: 118,
            name: "Slowpoke",
            image: "../../images/A1_118_EN.jpeg", // Update the image path as needed
            attacks: [
                {
                    name: "Tail Whap",
                    score: 30,
                    energy: [
                        { type: "psychic", amount: 1 },
                        { type: "any", amount: 1 }
                    ]
                }
            ],
            weakness: "darkness",
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 70,
            stage: "basic",
            rarity: 1 // Adjust rarity as needed
        },
        {
            number: 119,
            name: "Slowbro",
            image: "../../images/A1_119_EN.jpeg", // Update the image path as needed
            attacks: [
                {
                    name: "Super Psy Bolt",
                    score: 80,
                    energy: [
                        { type: "psychic", amount: 2 },
                        { type: "any", amount: 1 }
                    ]
                }
            ],
            weakness: "darkness", // Set weakness to darkness
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 130,
            stage: "stage 1",
            rarity: 2 // Adjust rarity as needed
        },
        {
            number: 120,
            name: "Gastly",
            image: "../../images/A1_120_EN.jpeg", // Update the image path as needed
            attacks: [
                {
                    name: "Suffocating Gas",
                    score: 20,
                    energy: [
                        { type: "psychic", amount: 1 },
                    ]
                }
            ],
            weakness: "darkness", // Set weakness to darkness
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 60,
            stage: "basic",
            rarity: 1 // Adjust rarity as needed
        },
        {
            number: 121,
            name: "Haunter",
            image: "../../images/A1_121_EN.jpeg", // Update the image path as needed
            attacks: [
                {
                    name: "Will-O-Wisp",
                    score: 30,
                    energy: [
                        { type: "psychic", amount: 1 },
                        { type: "any", amount: 1 }
                    ]
                }
            ],
            weakness: "darkness", // Set weakness to darkness
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 80,
            stage: "stage 1",
            rarity: 2 // Adjust rarity as needed
        },
        {
            number: 122,
            name: "Gengar",
            image: "../../images/A1_122_EN.jpeg", // Update the image path as needed
            attacks: [
                {
                    name: "Bother",
                    score: 50,
                    energy: [
                        { type: "psychic", amount: 1 },
                    ],
                    effect: {
                        type: "prevent_supporter",
                        description: "Your opponent can’t use any Supporter cards from their hand during their next turn."
                    }
                }
            ],
            weakness: "darkness", // Set weakness to darkness
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 130,
            stage: "stage 2",
            rarity: 3 // Adjust rarity as needed
        },
        {
            number: 123,
            name: "Gengar EX",
            image: "../../images/A1_123_EN.jpeg", // Update the image path as needed
            ability: {
                name: "Shadowy Spellbind",
                description: "As long as this Pokémon is in the Active Spot, your opponent can’t use any Supporter cards from their hand."
            },
            attacks: [
                {
                    name: "Spooky Shot",
                    score: 100,
                    energy: [
                        { type: "psychic", amount: 2 },
                        { type: "any", amount: 1 }
                    ]
                }
            ],
            weakness: "darkness", // Set weakness to darkness
            retreatCost: [
                { type: "any", amount: 1 }
            ],
            hp: 170,
            stage: "stage 2",
            rarity: 4 // Adjust rarity as needed
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
