// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

// If you would like to take a look at the inputs that are passed into these functions, please
// feel free to check out the data.js file.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function (numbers) {
  var iterated = [];
  _.each(numbers, function(element) {
    if (element % 5 === 0) {
      iterated.push(element);
    }
  });
  return iterated.length;
};

// use _.each to build an array containing only tweets belonging to a specified user.
var getUserTweets = function(tweets, userName) {
  var userTweets = [];
  _.each(tweets, function(item, index, tweets) {
    if (item.user === userName) {
      userTweets.push(tweets[index]);
    }
  });
  return userTweets;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function (fruits, targetFruit) {
  var desiredFruit = _.filter(fruits, function(currentFruit) {
    if (currentFruit === targetFruit) {
      return currentFruit;
    }
  });
  return desiredFruit;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function (fruits, letter) {
  var pFruits = _.filter(fruits, function(currentFruit) {
    if (currentFruit[0] === letter) {
      return currentFruit;
    }
  });
  return pFruits;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function (desserts) {
  var cookies = _.filter(desserts, function (item) {
    if (item.type === 'cookie') {
      return item;
    }
  });
  return cookies;
};

// rebuild the getUserTweets function from above with _.filter instead
// use _.each to build an array containing only tweets belonging to a specified user.
var filterUserTweets = function(tweets, user) {
  var userTweets = _.filter(tweets, function (tweet) {
    if (tweet.user === user) {
      return tweet;
    }
  });
  return userTweets;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function (fruits) {
  var mappedFruits = _.map(fruits, function(item) {
    return item.toUpperCase();
  });
  return mappedFruits;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function (desserts) {
  var noGluten = _.filter(desserts, function(dessertItem) {
    if (dessertItem.ingredients.indexOf('flour') === -1) {
      return dessertItem;
    }
  });
  var mappedGlutenFree = _.map(noGluten, function(glutenFreeItem) {
    glutenFreeItem.glutenFree = true;
    return glutenFreeItem;
  });
  return mappedGlutenFree;
};

// given an array of tweet objects, return a new array of strings
// containing only the message properties.
var allUserMessages = function(tweets) {
  return messages = _.map(tweets, function(tweet) {
    return tweet.message;
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function (groceries, coupon) {
  var onSaleGroceries = _.map(groceries, function(item) {
    var itemPriceNum = Number(item.price.substring(1, 6));
    item.salePrice = '$' + (itemPriceNum * (1 - coupon)).toFixed(2);
    return item;
  });
  return onSaleGroceries;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function (products) {
  var pricesAsNums = _.map(products, function(item) {
    return itemPriceNum = Number(item.price.substring(1, 6));
  });
  var totalPrice = _.reduce(pricesAsNums, function(memo, item) {
    memo = memo + item;
    return memo;
  });
  return Number(totalPrice.toFixed(2));
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function (desserts) {
  // create memo as empty object
  var memo = {};
  // create dessertCounter as iterator function
    // if dessert type does not exist in memo
      // create dessert type key in memo with a value of 1
    // if dessert type exists in memo
      // increment dessert type by 1
    // return memo
  var dessertCounter = function(memo, item, index, list) {
    if (memo[item['type']] === undefined) {
      memo[item['type']] = 1;
    } else {
      memo[item['type']]++;
    }
    return memo;
  };

  // use reduce with desserts array, iterator, and memo
  return _.reduce(desserts, dessertCounter, memo);

};

// return an object with the proper count of all user messages
/*
 example output:
  var tweetCountPerUser = countMessagesPerUser(tweets);
  {
    "douglascalhoun": 5,
    "mracus": 6,
    "shawndrost": 5,
    "sharksforcheap": 3
  }
*/
var countMessagesPerUser = function(tweets) {
  var memo = {};

  var messageCounter = function(memo, tweet, index, list) {
    if (memo[tweet['user']] === undefined) {
      memo[tweet['user']] = 1;
    } else {
      memo[tweet['user']]++;
    }
    return memo;
  };

  return _.reduce(tweets, messageCounter, memo);
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function (movies) {
  return _.reduce(movies, function(accumulator, movie) {
    var movieTitle = movie.title;
    if (movie['releaseYear'] >= 1990 && movie['releaseYear'] <= 2000) {
      accumulator.push(movieTitle);
    }
    return accumulator;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function (movies, timeLimit) {
  // var isShorterThanTimeLimit = false;

  return _.reduce(movies, function(accumulator, movie) {
    if (movie.runtime < timeLimit) {
      return true;
    }
    return accumulator;
  }, false);

};

