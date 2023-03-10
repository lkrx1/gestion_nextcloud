import "@nextcloud/dialogs/dist/index.css";
import "datatables.net-dt/css/jquery.dataTables.css";
import "../css/mycss.css";

import DataTable from "datatables.net";
import { globalConfiguration, optionDatatable } from "./modules/mainFunction.mjs";
import { Devis } from "./objects/devis.mjs";
import "./listener/main_listener";
// import { Client } from './objects/client.mjs';

window.addEventListener("DOMContentLoaded", function () {
    globalConfiguration();
    var dt = new DataTable(".tabledt",optionDatatable);
    Devis.loadDevisDT(dt);
});