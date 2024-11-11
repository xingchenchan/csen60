// function shaowData(){
//     // lots of code
//     console.log("showData function running")
// }
// synchronous


async function getRandomFact(){
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
    // console.log(response)
    const data = await response.json()
    console.log(data.text, "/n")
    console.log("getData finished")
    

}``


// asynchrouns, we use asynchrouns because we are conserving the time spend to get data from the interent

async function getTodaysFact(){
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/today")
    // console.log(response)
    const data = await response.json()
    console.log(data.text)
    console.log("getData finished")
    

}

getRandomFact()
getTodaysFact()

// getData()
// shaowData()

// async: if there's data promised in the future, wait for it
// body: where the data comes from
// json: store data and share in java, provides access to recieving data in body

// basically: fetch makes a promise, response wait for fetch and display the data ones fetch find it
// asyncronous: compensate for the delai, I will display the data once you finished getting it.  Thereofre, although getdata() might be before showdata(), showdata() runs first because getdata() has await in it and is asynchronous