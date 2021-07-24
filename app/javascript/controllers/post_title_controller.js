import { Controller } from "stimulus"
import debounce from 'helpers/debounce'
import Rails from 'rails-ujs';

export default class extends Controller {
    static values = { url: String }

    initialize() {
        this.saveTitle = debounce(this.saveTitle, 750).bind(this);
    }

    saveTitle(event) {
        const title = event.target.textContent;
        const formData = new FormData();
        formData.append("post[title]", title);

        Rails.ajax({
          type: "PATCH",
          url: this.urlValue,
          data: formData,
          success: function(data) { console.log('success!') }
        })
    }
}