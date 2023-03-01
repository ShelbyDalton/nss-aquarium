export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}
/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            species: "Queen Angelfish",
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Queen_Angelfish.jpg/640px-Queen_Angelfish.jpg',
            name: "Bart",
            food: "The queen angelfish feeds on a variety of marine invertebrates including sponges, tunicates, jellyfish, and corals as well as plankton and algae",
            length: "18 inches",
            region: "Windward Islands"
        },
        {
            species: "Humpback Anglerfish",
            image: 'https://news.cgtn.com/news/3d3d414d3559444f7a457a6333566d54/img/c1cfcd7fd2a54188b00a159994fe3254/c1cfcd7fd2a54188b00a159994fe3254.jpg',
            name: "Fluffy",
            food: "The main diet of the deep sea angler consists mainly of small fish, shrimp, like the Mantis Shrimp, small squid, turtle, and in some cases sea birds (creatures of the deep)",
            length: "7 inches",
            region: "This fish lives in the bathypelagic zone of the open ocean. Living at depths of at least 6600 feet (2000 m), this species lives its life in the complete absence of sunlight."
        },
        {
            species: "Great Barracuda",
            image: 'https://www.anglersjournal.com/.image/t_share/MTc5ODUxMjcxNTMwODgzMDYx/_i5a6526pf---version-2.jpg',
            name: "Wiggles",
            food: "Barracudas are opportunistic feeders and will eat a variety of fish throughout the water column, feeding on fishes such as grunts, groupers, snappers, small tunas, herrings, and other prey like shrimp and cephalopods.",
            length: "5.5 feet",
            region: "The Great Barrier Reef (Australia)"
        },
        {
            species: "Ocean Sunfish",
            image: 'https://cdn.shopify.com/s/files/1/0996/1022/articles/Ocean-Sunfish-Image-1200x800_1.webp?v=1665162724',
            name: "Tiny Tina",
            food: "Ocean sunfish are foraging predators that will eat a variety of food, but their preferred prey are jellyfishes.",
            length: "11 feet",
            region: "Maldives"
        },
        {
            species: "Macropinna (Barreleye)",
            image: 'https://www.mbari.org/wp-content/uploads/2016/01/barreleye2-350.jpg',
            name: "Bobby",
            food: "Stomach contents include cnidarian remains, however, its visceral anatomy suggests diets of mixed zooplankton, including both gelatinous and crustacean prey and siphonophore tentacles and nematocysts.",
            length: "6 inches",
            region: "Mariana Trench"
        }
    ]
}

