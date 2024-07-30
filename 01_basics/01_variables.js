const accountId = 12345;
let accountEmail = "shahbaz@gmail.com";
var accountPassword = "123456"
accountCity = "Lahore"

// accountId = 111;  Not Allowed

accountEmail = "shakir@gmail.com";
accountPassword = "1111"
accountCity = "burewala"
var accountState;
console.log(accountId);
/*
 Prefer not to use var 
 because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);