locationOdds = 1 / 2.1
toughOdds = 1 / 5
freeDrink = name: 'Drink of your choice', chance: null

drinks = [
    name: 'Pickleback at BCC'
    chance: locationOdds
  ,
    name: 'Sparkling Rose at Burnside'
    chance: locationOdds
  ,
    name: 'Campfire Song at Huckleberry Bar'
    chance: locationOdds
  ,
    name: 'Willie\'s Frozen Coffee at Skinny Dennis/Rocka Rolla'
    chance: locationOdds
  ,
    name: 'Glass of punch from The Drink'
    chance: locationOdds
  ,
    name: 'Irish Car Bomb'
    chance: toughOdds
  ,
    name: 'Jello Shot'
    chance: toughOdds
  ,
    name: 'Long Island Iced Tea'
    chance: toughOdds
  ,
    name: 'Whiskey Soda'
    chance: null
  ,
    name: 'Pint of Brooklyn Lager'
    chance: null
  ,
    name: 'Pint of Beer'
    chance: null
  ,
    name: 'Whiskey, neat'
    chance: null
  ,
    name: 'Whiskey, rocks'
    chance: null
  ,
    name: 'Vodka Soda'
    chance: null
  ,
    name: 'Margarita'
    chance: null
  ,
    name: 'Michelada'
    chance: null
  ,
    name: 'Beer and Shot special'
    chance: null
  ,
    name: 'Shot of Whiskey'
    chance: null
  ,
    name: 'Shot of Tequila'
    chance: null
  ,
    name: 'Shot of Vodka'
    chance: null
  ,
    name: 'Sangria'
    chance: null
  ,
    name: 'Red Wine Spritzer'
    chance: null
  ,
    name: 'Martini'
    chance: null
  ,
    name: 'Gin and Tonic'
    chance: null
  ,
    name: 'Vodka Soda, splash of cranberry'
    chance: null
  ,
    name: 'Manhattan'
    chance: null
  ,
    name: 'Old Fashioned'
    chance: null
  ,
    name: 'Glass of Red Wine'
    chance: null
  ,
    name: 'Glass of White Wine'
    chance: null
  ,
    name: 'Whiskey Ginger'
    chance: null
  ,
    name: 'Mimosa'
    chance: null
  ,
    name: 'Bloody Mary'
    chance: null
  ,
    name: 'Can of PBR'
    chance: null
  ,
    name: 'Firefly and Water'
    chance: null
]

board = [
  [1, 1, 1, 1, 1]
  [1, 1, 1, 1, 1]
  [1, 1, 0, 1, 1]
  [1, 1, 1, 1, 1]
  [1, 1, 1, 1, 1]
]

shuffle = (array) ->
  i = array.length

  while --i > 0
    j = ~~(Math.random() * (i + 1))
    temp = array[j]
    array[j] = array[i]
    array[i] = temp
      
  return array
  
getDrink = (drinks) ->
  rand = Math.random()
  
  for drink in drinks
    if drink.chance
      if drink.chance > rand
        return drink
      else
        continue
    
    if .5 > rand
      return drink
    else
      continue
  
  return getDrink drinks

shuffled = shuffle drinks
data = []

for row, rowIndex in board
  data.push []
  
  for column, colIndex in row
    if column > 0
      drink = getDrink shuffled
      shuffled.splice shuffled.indexOf(drink), 1
    else
      drink = freeDrink

    data[rowIndex].push drink

generate = ->
  results = document.querySelector '.results'
  
  for row in data
    r = document.createElement 'div'
    r.classList.add 'row'
      
    for column in row
      c = document.createElement 'span'
      c.classList.add 'column'
      c.textContent = column.name
      r.appendChild c
      
    results.appendChild r
  
document.addEventListener 'DOMContentLoaded', generate, false