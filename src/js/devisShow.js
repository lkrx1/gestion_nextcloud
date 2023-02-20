import "@nextcloud/dialogs/dist/index.css";
import "datatables.net-dt/css/jquery.dataTables.css";
import "../css/mycss.css";

import { getMailServerFrom, getProduitsById, saveNextcloud} from "./modules/ajaxRequest.mjs";
import { globalConfiguration } from "./modules/mainFunction.mjs";
import "./listener/main_listener";
import { Client } from "./objects/client.mjs";
import { capture, sendMail, captureDevisFacture } from "./pdf";

window.addEventListener("DOMContentLoaded", function () {
    globalConfiguration();

    Client.getClientByIdDevis($("#devisid").data("id"));
    getProduitsById();

    var pdf = document.getElementById("pdf");
    pdf.addEventListener("click",function(){
        captureDevisFacture(saveNextcloud, document.getElementById("dateContext").innerText, {nom: document.getElementById("nomcli").innerText, id: document.getElementById("idcli").innerText}, document.getElementById("etp").innerText);
    });
    
    var mail = document.getElementById("mailGestion");
    mail.addEventListener("click", function(){
        document.getElementById("to").value = document.getElementById("mail").innerText;
        getMailServerFrom(document.getElementById("from"));
        (document.getElementById("modalMail")).style.display = "block";
    });
    
    var sendmail = document.getElementById("sendmail");
    sendmail.addEventListener("click", function () {
        capture(sendMail);
        (document.getElementById("modalMail")).style.display = "none";
    });
});