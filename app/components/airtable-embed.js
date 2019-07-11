import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    embedSrc: computed('id', function() {
        return `https://airtable.com/embed/${this.get('id')}?backgroundColor=purple&viewControls=on`;
    }),

    tableHref: computed('tableID', function() {
        return `https://airtable.com/${this.tableID}?blocks=hide`
    })
});
