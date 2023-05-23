const bcrypt = require("bcrypt");
async function genPassword(password) {
  const salt = await bcrypt.genSalt();
  password = await bcrypt.hash(password, salt);
  console.log(password);
}
const password = "test1234";
genPassword(password);

//$2b$10$NrcFTnld2R8BxGCNRuMiWu23kuQhVveBROoCYwfOzIVvu17BwJGPC
// 0EutGOLhLZv1OsEO

//$2b$10$gzNwtUuOzgcL1RWkeEdc3O2/TCVYmV7xDMs3sisnebXP43Dwt1PwO
//$2b$10$UluIyHx2RbFDwkK9a5ls6egAvXeMRZZnpB.PplU68O3h6nMEwo/yi

//latest

//$2b$10$3/qHZFt7EraXbPrJBUoize0eOxEgsPBWiM.s4HkclNcF/KZD3jzmm
