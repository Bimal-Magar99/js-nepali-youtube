const accountId  = 144553
let accountEmail = "bimalpun09@gmail.com"
var accountPassword = "12345"
accountCity = "ktm"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "2121212121"
accountCity = "Pkr"

console.log(accountId); 

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
