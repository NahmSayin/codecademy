// Race Day
// You have been hired to write a program that will register runners for the race and give them instructions on race day.
let raceNumber = Math.floor(Math.random() * 1000);

let preNineThirty = true

let runnerAge = 25

if (runnerAge >= 18 && preNineThirty){
  raceNumber += 1000
}

if (runnerAge >= 18 && preNineThirty){
  console.log('You will race at 9:30am, this is your race number: ' + raceNumber)
}else if
  (runnerAge >= 18 && !preNineThirty){
  console.log('You will race at 11:00am, this is your race number: ' + raceNumber)
}else{
  console.log('You will race at 12:30pm, this is your race number: ' + raceNumber)
}



