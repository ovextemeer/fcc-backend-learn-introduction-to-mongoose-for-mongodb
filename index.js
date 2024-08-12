let database = require('./src/database');
let EmailModel = require('./src/models/email');
let UserModel = require('./src/models/user');

database._connect();

let em = new EmailModel({
    email: "ADA.LOVELACE@GMAIL.COM"
});

/*
em
    .save()
    .then((doc) => {
        console.log(doc);
    })
    .catch((err) => {
        console.error(err);
    });
*/

/*
EmailModel.find({
    email: 'ada.lovelace@gmail.com'
})
    .then((doc) => {
        console.log(doc);
    })
    .catch((err) => {
        console.error(err);
    });
*/

/*
EmailModel.findOneAndUpdate(
    {
        email: 'ada.lovelace@gmail.com'
    },
    {
        email: 'theoutlander@live.com'
    },
    {
        new: true,
        runValidators: true
    }
)
    .then((doc) => {
        console.log(doc);
    })
    .catch((err) => {
        console.error(err);
    });
*/

EmailModel.findOneAndDelete(
    {
        email: 'theoutlander@live.com'
    }
)
    .then((doc) => {
        console.log(doc);
    })
    .catch((err) => {
        console.error(err);
    });

let usr = new UserModel();
usr.fullName = 'Thomas Anderson';
console.log(usr.toJSON());
console.log(usr.getInitials());
usr.save()
    .then(docs => console.log(docs))
    .catch(err => console.error(err));
UserModel.getUsers()
    .then((docs) => {
        console.log(docs);
    })
    .catch((err) => {
        console.error(err);
    });

/*
UserModel.find()               // find all users
  .skip(100)                   // skip the first 100 items
  .limit(10)                   // limit to 10 items
  .sort({ firstName: 1 })      // sort ascending by firstName
  .select({ firstName: true }) // select firstName only
  .exec()                      // execute the query
  .then((docs) => {
    console.log(docs);
  })
  .catch((err) => {
    console.error(err);
  });
*/