Meteor.startup(function() {
  // var dom = $('script[type="text/inject-data"]', document);
  var dom = document.querySelectorAll('script[type="text/inject-data"]');
  // var injectedDataString = $.trim(dom.text());
  var injectedDataString = dom.map(tag => tag.text).join().trim();
  InjectData._data = InjectData._decode(injectedDataString) || {};
});

InjectData.getData = function(key, callback) {
  Meteor.startup(function() {
    callback(InjectData._data[key]);
  });
};
