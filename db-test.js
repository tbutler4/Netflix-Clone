const db = require('./models')
// db.user.update({
//   email: 'testing@testing.com',
//   name: 'testing',
// },{
// where: {
//   id: 1
// }
// }).then(([user, created]) => {
//     console.log(user)
// });

db.user.findOne({
  where: {id: 1}
}).then(function(user) {
  console.log(user)
});