function saleSummaryNewList(e,a){window.location.href=URL_PATH+"/admin/"+a}function saleSummaryNewSearchDocument(){SnLoadingState(!0,"jsAction");var e={};e.dateOfIssue=document.getElementById("saleSummaryNewDateOfIssue").value,RequestApi.fetch("/admin/processSaleSummary/isNotInSumary",{method:"POST",body:e}).then(e=>{e.success?(document.getElementById("saleSummaryNewTableBody").innerHTML="",e.result.forEach(e=>{saleSummaryAddItem(e)})):dynamicResponseErrorModalMessage(e)}).finally(e=>{SnLoadingState(!1,"jsAction")})}function saleSummaryAddItem(e){var a=document.getElementById("saleSummaryNewTableBody"),t=a.childNodes.length,a=(a.insertAdjacentHTML("beforeend",`<tr key="${t}" id="saleSummaryNewRow${t}" data-saleid="${e.sale_id}" data-avoidanceid="${e.avoidance_id}">
                                                                    <td>${e.date_of_issue}</td>
                                                                    <td>${e.document_type_id_description}</td>
                                                                    <td>${e.serie}</td>
                                                                    <td>${e.number}</td>
                                                                    <td>${e.currency_id_symbol}</td>
                                                                    <td>${e.total}</td>
                                                                    <td>
                                                                        <select class="SnForm-control" id="saleSummaryNewStateId${t}">
                                                                            <option value="1">Adicionar</option>
                                                                            <option value="2">Modificar</option>
                                                                            <option value="3">Anulado</option>
                                                                        </select>
                                                                    </td>
                                                                </tr>`),document.getElementById("saleSummaryNewStateId"+t));0<e.sale_id&&(a.value=1),0<e.avoidance_id&&(a.value=3)}function saleSummaryNewSubmit(){var e=document.getElementById("saleSummaryNewTableBody"),a={};a.dateOfIssue=document.getElementById("saleSummaryNewDateOfIssue").value,a.item=[...e.children].map(e=>{var e=e.getAttribute("key"),a=document.getElementById("saleSummaryNewRow"+e),e=document.getElementById("saleSummaryNewStateId"+e).value;return{saleId:a.dataset.saleid,stateId:e,avoidanceId:a.dataset.avoidanceid}}),SnLoadingState(!0,"jsAction","saleSummaryNewFormSubmit"),RequestApi.fetch("/admin/processSaleSummary/save",{method:"POST",body:a}).then(e=>{var a=e.result;SnMessage.success({content:e.message}),e.success?(a.success?SnMessage.success({content:a.message}):SnModal.danger({title:"SUNAT ERROR",content:a.message}),document.getElementById("saleSummaryNewTableBody").innerHTML=""):dynamicResponseErrorModalMessage(e)}).finally(e=>{SnLoadingState(!1,"jsAction","saleSummaryNewFormSubmit")})}document.addEventListener("DOMContentLoaded",()=>{document.getElementById("saleSummaryNewForm").addEventListener("submit",function(e){e.preventDefault(),saleSummaryNewSubmit()}),SnLiveList({elem:"#saleSummaryNewManualFinder",data:(e,t)=>{var a;e.length<3?t("Escriba almenos 3 caracteres"):(t("Cargando..."),(a={}).document=e,a.dateOfIssue=document.getElementById("saleSummaryNewDateOfIssue").value,SnLoadingState(!0,"jsAction"),RequestApi.fetch("/admin/processSaleSummary/isNotInformatedAutocomplete",{method:"POST",body:a}).then(e=>{var a;e.success?(a=e.result.map(e=>({...e,text:`<div>${e.document}</div><small>(${0<e.avoidance_id?"anulacion":"venta"}) - Fecha: ${e.date_of_issue} - Monto: ${e.total} - SUNAT: ${e.sunat_state}</small>`,value:e.sale_id})),t(a)):t(e.message)}).finally(e=>{SnLoadingState(!1,"jsAction")}))},onSelect:(e,a)=>{saleSummaryAddItem(a),document.getElementById("saleSummaryNewManualFinder").value=""}}),dynamicViewKeyboardListeners(screenName,appMenuActions)});