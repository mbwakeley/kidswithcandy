//Instructions: n children have m pieces of candy. They want to eat as much candy as they can, 
//but each child must eat the exact same amount of candy as every other child. 
//Determine how many pieces of candy will be eaten by all the children together. Candies cannot be split. 
//EX: candies(n=3, m=10) => 9 (each child will eat 3)

function kidsWithCandy(n, m){
  let candies = n/m
  return candies.toFixed(0)
}
kidsWithCandy(3, 16)
