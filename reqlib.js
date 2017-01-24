// var request = require('request');
//
// function getQuote() {
//     var quote;
//
//     request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function(error, response, body) {
//         quote = body;console.log(quote);
//     });
//
//     console.log(quote);
//     return quote;
// }
//
// function main() {
//     var quote = getQuote();
// }
//
// main();

var request = require('request');

function getQuote() {
    var quote;

    return new Promise(function(resolve, reject) {
        request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function(error, response, body) {
            quote = body;

            resolve(quote);
        });
    });
}

// async function main() {
//     try {
//         var quote = await getQuote();
//         console.log(quote);
//     } catch(error) {
//         console.error(error);
//     }
// }

main();
console.log('Ron once said,');