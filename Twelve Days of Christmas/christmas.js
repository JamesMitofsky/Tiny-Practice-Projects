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
        let quantityOfGift = givenToday.length - givenToday.indexOf(gift)

        // format gift strings based on patridge gift
        if(quantityOfGift > 1) {
            // format as item in list
            console.log(`${quantityOfGift} ${gift},`)

          // if the day is not the first, format as adendum after other items
        } else if(i != 1) {
            console.log(`and a ${gift}.\n`)

          // if first day, format as only gift given
        } else {
            console.log(`a ${gift}.\n`)
        }
    })
}