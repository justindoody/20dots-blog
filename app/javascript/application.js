// Entry point for the build script in your package.json

import Turbolinks from "turbolinks"

require("rails-ujs").start()

import "trix"
import "@rails/actiontext"

Turbolinks.start()

import "./controllers"
