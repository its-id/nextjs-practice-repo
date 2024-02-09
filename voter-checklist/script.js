//write a script to add the key "status" to each voter in the array with value as an empty string if and only if the key is not present in the object.
//update the data.json file with the new data.
//we get the data from ./lib/data.json file

const fs = require('fs');
const path = require('path');
const data = require('./lib/data.json');

const updatedData = data.map((voter) => {
  // if (voter.hasOwnProperty('status')) {
    voter.status = 'Not Voted';
  // }
  // if (!voter.hasOwnProperty('remarks')) {
    voter.remarks = '';
  // }

  //also convert the phone number, membership_no, tower_no, flat_no, contact_no to string
  // voter.membership_no = voter.membership_no.toString();
  // voter.tower_no = voter.tower_no.toString();
  // voter.flat_no = voter.flat_no.toString();
  // voter.contact_no = voter.contact_no.toString();

  return voter;
});

fs.writeFileSync(
  path.join(__dirname, 'lib', 'data.json'),
  // convert back to original format
  JSON.stringify(updatedData, null, 2)
);
console.log('Data updated successfully');
