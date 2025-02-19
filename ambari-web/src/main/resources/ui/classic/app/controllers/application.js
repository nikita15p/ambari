App.ApplicationController = Ember.Controller.extend({
  // ... existing code ...

  actions: {
    switchToLatest: function() {
      window.location.href = '/latest';
    }
  }
}); 