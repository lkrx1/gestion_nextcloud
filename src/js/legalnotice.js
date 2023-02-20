import "@nextcloud/dialogs/dist/index.css";
import "../css/mycss.css";
import { globalConfiguration } from "./modules/mainFunction.mjs";
import "./listener/main_listener";

window.addEventListener("DOMContentLoaded", function () {
    globalConfiguration();
});