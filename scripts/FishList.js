// Import the function that returns a copy of the fish array

import { getFish } from "./database.js"

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishCard">
            <div class="fish__species fishText">${fish.species}</div>
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name fishText">${fish.name}</div>
            <div class="fish__diet fishText">${fish.food}</div>
            <div class="fish__length fishText">${fish.length}</div>
            <div class="fish__region fishText">${fish.region}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}