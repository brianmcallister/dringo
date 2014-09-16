(function() {
  var bind, board, colIndex, column, data, drink, drinks, freeDrink, generate, getDrink, locationOdds, render, row, rowIndex, shuffle, shuffled, toggleDoneState, toughOdds, _i, _j, _len, _len1;

  locationOdds = 1 / 2.1;

  toughOdds = 1 / 5;

  freeDrink = {
    name: 'Drink of your choice',
    chance: null
  };

  drinks = [
    {
      name: 'Pickleback at BCC',
      chance: locationOdds
    }, {
      name: 'Sparkling Rose at Burnside',
      chance: locationOdds
    }, {
      name: 'Campfire Song at Huckleberry Bar',
      chance: locationOdds
    }, {
      name: 'Willie\'s Frozen Coffee at Skinny Dennis/Rocka Rolla',
      chance: locationOdds
    }, {
      name: 'Glass of punch from The Drink',
      chance: locationOdds
    }, {
      name: 'Irish Car Bomb',
      chance: toughOdds
    }, {
      name: 'Jello Shot',
      chance: toughOdds
    }, {
      name: 'Long Island Iced Tea',
      chance: toughOdds
    }, {
      name: 'Whiskey Soda',
      chance: null
    }, {
      name: 'Pint of Brooklyn Lager',
      chance: null
    }, {
      name: 'Pint of Beer',
      chance: null
    }, {
      name: 'Whiskey, neat',
      chance: null
    }, {
      name: 'Whiskey, rocks',
      chance: null
    }, {
      name: 'Vodka Soda',
      chance: null
    }, {
      name: 'Margarita',
      chance: null
    }, {
      name: 'Michelada',
      chance: null
    }, {
      name: 'Beer and Shot special',
      chance: null
    }, {
      name: 'Shot of Whiskey',
      chance: null
    }, {
      name: 'Shot of Tequila',
      chance: null
    }, {
      name: 'Shot of Vodka',
      chance: null
    }, {
      name: 'Sangria',
      chance: null
    }, {
      name: 'Red Wine Spritzer',
      chance: null
    }, {
      name: 'Martini',
      chance: null
    }, {
      name: 'Gin and Tonic',
      chance: null
    }, {
      name: 'Vodka Soda, splash of cranberry',
      chance: null
    }, {
      name: 'Manhattan',
      chance: null
    }, {
      name: 'Old Fashioned',
      chance: null
    }, {
      name: 'Glass of Red Wine',
      chance: null
    }, {
      name: 'Glass of White Wine',
      chance: null
    }, {
      name: 'Whiskey Ginger',
      chance: null
    }, {
      name: 'Mimosa',
      chance: null
    }, {
      name: 'Bloody Mary',
      chance: null
    }, {
      name: 'Can of PBR',
      chance: null
    }, {
      name: 'Firefly and Water',
      chance: null
    }
  ];

  board = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 0, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]];

  shuffle = function(array) {
    var i, j, temp;
    i = array.length;
    while (--i > 0) {
      j = ~~(Math.random() * (i + 1));
      temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
    return array;
  };

  getDrink = function(drinks) {
    var drink, rand, _i, _len;
    rand = Math.random();
    for (_i = 0, _len = drinks.length; _i < _len; _i++) {
      drink = drinks[_i];
      if (drink.chance) {
        if (drink.chance > rand) {
          return drink;
        } else {
          continue;
        }
      }
      if (.5 > rand) {
        return drink;
      } else {
        continue;
      }
    }
    return getDrink(drinks);
  };

  shuffled = shuffle(drinks);

  data = [];

  for (rowIndex = _i = 0, _len = board.length; _i < _len; rowIndex = ++_i) {
    row = board[rowIndex];
    data.push([]);
    for (colIndex = _j = 0, _len1 = row.length; _j < _len1; colIndex = ++_j) {
      column = row[colIndex];
      if (column > 0) {
        drink = getDrink(shuffled);
        shuffled.splice(shuffled.indexOf(drink), 1);
      } else {
        drink = freeDrink;
      }
      data[rowIndex].push(drink);
    }
  }

  generate = function() {
    var c, r, results, _k, _l, _len2, _len3, _results;
    results = document.querySelector('.results');
    _results = [];
    for (_k = 0, _len2 = data.length; _k < _len2; _k++) {
      row = data[_k];
      r = document.createElement('div');
      r.classList.add('row');
      for (_l = 0, _len3 = row.length; _l < _len3; _l++) {
        column = row[_l];
        c = document.createElement('span');
        c.classList.add('column');
        c.textContent = column.name;
        r.appendChild(c);
      }
      _results.push(results.appendChild(r));
    }
    return _results;
  };

  bind = function() {
    document.body.addEventListener('click', toggleDoneState, false);
    return document.body.addEventListener('touchstart', toggleDoneState, false);
  };

  toggleDoneState = function(event) {
    var el;
    el = event.target;
    return el.classList.toggle('done');
  };

  render = function() {
    generate();
    return bind();
  };

  document.addEventListener('DOMContentLoaded', render, false);

}).call(this);
