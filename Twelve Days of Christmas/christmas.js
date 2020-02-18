let gifts = ["partridge in a pear tree", "turtle doves", "French hens", "calling birds", "gold rings", "geese a-laying", "swans a-swimming", "maids a-milking", "ladies dancing", "lords a-leaping", "pipers piping", "drummers drumming"]

// reverse gifts list for countdown
gifts = gifts.reverse()

// count which day of Christmas
for (i = 1; i < gifts.length +1; i++) {

    // determine the correct suffix
    let ordinalSuffix = "st"
    if (i == 2) {
        ordinalSuffix = "nd"
    } else if (i == 3) {
        ordinalSuffix = "rd"
    } else if (i >= 4) {
        ordinalSuffix = "th"
    }


    // print this day's intro verse
    console.log(`On the ${i}${ordinalSuffix} day of Christmas, my true love gave to me:`)


    // subtract # of today from total days to determine how many gifts to give
    let givenToday = gifts.slice(12 - i)


    // print total gifts given so far
    givenToday.forEach(gift => {

        // count how many gifts were given on today or past day (because the index of gifts will be counted from zero, this calculates correctly)
        let quantityOfThisGift = givenToday.length - givenToday.indexOf(gift)

        // format gift strings based on which day of christmas and how many of each gift are given
        if(quantityOfThisGift > 1) {
            // format gift as being not the final gift
            console.log(`${quantityOfThisGift} ${gift},`)

          // if the *day of Christmas* is not the first, format gift as final item in a list
        } else if(i != 1) {
            console.log(`and a ${gift}.\n`)

          // however, if we know it is the first *day of Christmas*, format gift as only one being given
        } else {
            console.log(`a ${gift}.\n`)
        }
    })
}