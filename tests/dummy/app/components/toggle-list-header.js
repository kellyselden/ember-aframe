import Component from '@ember/component';

export default Component.extend({
  actions: {
    toggle(isExpanded) {
      this.toggle(!isExpanded);
    }
  }
});
