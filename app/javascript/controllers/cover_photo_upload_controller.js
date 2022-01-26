import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = [ "form" ]

    upload(_event) {
        this.formTarget.submit();
    }
}