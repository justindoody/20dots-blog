import { Controller } from "stimulus"
import debounce from 'helpers/debounce'
import Rails from 'rails-ujs';

export default class extends Controller {
    static targets = [ "form", "saveMessage" ]
    static classes = [ "fadeIn", "fadeOut" ]

    initialize() {
        this.saveMe = debounce(this.saveMe, 750).bind(this);
    }

    saveMe(event) {
        // Triggering via a .submit() on the form won't
        // respect remote: true
        Rails.fire(this.formTarget, 'submit');

        this.saveMessageTarget.classList.remove(this.fadeOutClass);
        this.saveMessageTarget.classList.add(this.fadeInClass);

        setTimeout(() => {
            this.saveMessageTarget.classList.remove(this.fadeInClass);
            this.saveMessageTarget.classList.add(this.fadeOutClass);
        }, 2000);
    }
}