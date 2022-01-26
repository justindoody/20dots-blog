import { Controller } from "@hotwired/stimulus"
import debounce from '../helpers/debounce'
import Rails from 'rails-ujs';

export default class extends Controller {
    static values = { url: String }
    static targets = [ "saveMessage" ]
    static classes = [ "fadeIn", "fadeOut" ]

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
            success: (_data) => {
                this.saveMessageTarget.classList.remove(this.fadeOutClass);
                this.saveMessageTarget.classList.add(this.fadeInClass);

                setTimeout(() => {
                    this.saveMessageTarget.classList.remove(this.fadeInClass);
                    this.saveMessageTarget.classList.add(this.fadeOutClass);
                }, 2000);
            }
        })
    }
}