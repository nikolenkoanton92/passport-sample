var user = {
  id: 1,
  username: 'anton',
  password: '123321',
  email: 'anton@anton.com'
};

var err = 'User not found';

exports.findByUsername = function(username, cb) {
  if (username === 'anton') {
    cb(null, user);
  } else {
    cb(err);
  }
};

exports.findById = function(id, cb) {
  if (user.id === id) {
    cb(null, user.id);
  } else {
    cb(err);
  }
};
