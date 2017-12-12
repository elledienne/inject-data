Meteor.startup(function() {
  var dom = Array.prototype.slice.call(document.querySelectorAll('script[type="text/inject-data"]'));
  var injectedDataString = dom.map(tag => tag.text).join().trim();
  InjectData._data = InjectData._decode(injectedDataString) || {};
});

InjectData.getData = function(key, callback) {
  Meteor.startup(function() {
    callback(InjectData._data[key]);
  });
};
