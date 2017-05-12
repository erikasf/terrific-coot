'use strict';
////////////////////////////////////////////
//Watson API//
const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
const fs = require('fs');

const personality_insights = new PersonalityInsightsV3({
  username: '5cd1b0ee-5846-43c5-9c97-b898d49dca4d',
  password: 'm6JlocmCSTzT',
  version_date: '2016-10-19'
});

/*
 * English example:
 *   'text' parameter contains the input text.
 */
personality_insights.profile(
  {
    text: 'I am entering in even more stuff here to try and test this damn thing. hopefully it will work but i have no idea why it wont Enter more than 100 unique words here it will work but i have no idea why it wont Enterit will work but i have no idea why it wont Enterit will work but i have no idea why it wont Enterit will work but i have no idea why it wont Enterit will work but i have no idea why it wont Enterit will work but i have no idea why it wont Enterit will work but i have no idea why it wont Enterit will work but i have no idea why it wont Enter loremipsum it will work but i have no idea why it wont Enterit will work but i have no idea why it wont Enterit will work but i have no idea why it wont Enterit will work but i have no idea why it wont Enterit will work but i have no idea why it wont Enterit will work but i have no idea why it wont Enterit will work but i have no idea why it wont Enterit will work but i have no idea why it wont Enterv...',
      consumption_preferences: true
  },
  function(err, response) {
    if (err) {
      console.log('error:', err);
    } else {
      console.log(JSON.stringify(response.personality[0].name , null, 2));
      console.log(JSON.stringify(response.personality[0].percentile , null, 2));
      var person1 = response.personality.map(function(x){
        return { name: x.name,
                percentile: x.percentile
              }
      })
      console.log(person1)
    }

  }
);


///HOORNO Algo
// arr = [.8, .1, .8, .8, .1]
//
// function callback(arr) {
//     let newArr = []
//     for (index = 0; index < arr.length; index++) {
//         if (index === 1 || index === 4) {
//             newArr.push(arr[index] * -1 * 100)
//
//         } else {
//             newArr.push(arr[index] * 100)
//  )       }
//     }
//     return newArr
//
// }
// callback(arr).reduce(function(acc, val) {
//     debugger
//     return acc + val;
// }, 0
/*
 * CSV output example:
 * https://www.ibm.com/watson/developercloud/doc/personality-insights/output.shtml#outputCSV
 */
personality_insights
  .profile({
    text: 'Enter more than 100 unique words here...',
    csv_headers: true,
    headers: { Accept: 'text/csv' }
  })
  .pipe(fs.createWriteStream('./data.json'));
