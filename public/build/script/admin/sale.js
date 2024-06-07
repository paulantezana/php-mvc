let pSendWhatsAppValidator,pSendEmailValidator,pSaleImportValidator,pSaleCancelValidator,currentResultData=[],currentSaleId;document.addEventListener("DOMContentLoaded",()=>{pSendWhatsAppValidator=dynamicLoadFormValidate(pSendWhatsAppValidator,"sendWhatsAppModalForm"),pSendEmailValidator=dynamicLoadFormValidate(pSendEmailValidator,"sendEmailModalForm"),pSaleImportValidator=dynamicLoadFormValidate(pSaleImportValidator,"saleImportModalForm");const a=document.getElementById("sendWhatsAppModalForm"),t=(a.addEventListener("submit",function(e){e.preventDefault(),saleSendWhatsAppSubmit(a)}),document.getElementById("sendEmailModalForm")),n=(t.addEventListener("submit",function(e){e.preventDefault(),saleSendEmailSubmit(t)}),document.getElementById("saleImportModalForm"));n.addEventListener("submit",function(e){e.preventDefault(),saleImportSubmit(n)}),maintenanceTable=new SnTable({elementId:"drawSaleTable",entity:"sale",data:e=>snTableFetchData("/admin/processSale/table",e),actions:appMenuActions,selectable:!1,columns:[{title:"Tipo operacion",field:"operation_type_id_description",filterable:!0,sortable:!0,visible:!1},{title:"Fecha Registro",field:"register_datetime",filterable:!0,sortable:!0,type:"date"},{title:"Fecha Emisión",field:"date_of_issue",filterable:!0,sortable:!0,type:"date"},{title:"Fecha Vencimiento",field:"date_of_due",filterable:!0,sortable:!0,visible:!1,type:"date"},{title:"Tipo Doc.",field:"document_type_id_description",filterable:!0,sortable:!0},{title:"Documento",field:"document",filterable:!0,sortable:!0},{title:"RUC / DNI / ETC",field:"document_number",filterable:!0,sortable:!0},{title:"Denominación",field:"social_reason",filterable:!0,sortable:!0},{title:"Placa vehicular",field:"vehicle_plate",filterable:!0,sortable:!0,visible:!1},{title:"Orden compra",field:"purchase_order",filterable:!0,sortable:!0,visible:!1},{title:"Guia",field:"guide",filterable:!0,sortable:!0,visible:!1},{title:"Observación",field:"observation",filterable:!0,sortable:!0,visible:!1},{title:"Gratuita",field:"total_free",summaryOperator:"sum",type:"number",filterable:!0,sortable:!0,customRender:e=>e.currency_id_symbol+" "+e.total_free},{title:"Exportacion",field:"total_exportation",summaryOperator:"sum",type:"number",filterable:!0,sortable:!0,visible:!1,customRender:e=>e.currency_id_symbol+" "+e.total_exportation},{title:"Descuento",field:"total_discount",summaryOperator:"sum",type:"number",filterable:!0,sortable:!0,visible:!1,customRender:e=>e.currency_id_symbol+" "+e.total_discount},{title:"Exonerado",field:"total_exonerated",summaryOperator:"sum",type:"number",filterable:!0,sortable:!0,visible:!1,customRender:e=>e.currency_id_symbol+" "+e.total_exonerated},{title:"Inafecto",field:"total_unaffected",summaryOperator:"sum",type:"number",filterable:!0,sortable:!0,visible:!1,customRender:e=>e.currency_id_symbol+" "+e.total_unaffected},{title:"Gravada",field:"total_taxed",summaryOperator:"sum",type:"number",filterable:!0,sortable:!0,visible:!1,customRender:e=>e.currency_id_symbol+" "+e.total_taxed},{title:"Total IGV",field:"total_igv",summaryOperator:"sum",type:"number",filterable:!0,sortable:!0,visible:!1,customRender:e=>e.currency_id_symbol+" "+e.total_igv},{title:"IGV factor",field:"tax_factor",filterable:!0,sortable:!0,visible:!1,customRender:e=>""+parseFloat(e.tax_factor||0).toFixed(2)},{title:"Otros car.",field:"total_charge",summaryOperator:"sum",type:"number",filterable:!0,sortable:!0,visible:!1,customRender:e=>e.currency_id_symbol+" "+e.total_charge},{title:"ICBPER",field:"total_plastic_bag_tax",summaryOperator:"sum",type:"number",filterable:!0,sortable:!0,visible:!1,customRender:e=>e.currency_id_symbol+" "+e.total_plastic_bag_tax},{title:"Vuelto",field:"returned",summaryOperator:"sum",type:"number",filterable:!0,sortable:!0,visible:!1,customRender:e=>e.currency_id_symbol+" "+e.returned},{title:"Total",field:"total",type:"number",summaryOperator:"sum",filterable:!0,sortable:!0,customRender:e=>e.currency_id_symbol+" "+e.total},{title:"Correo",field:"email",filterable:!0,sortable:!0,visible:!1},{title:"Celular",field:"phone",filterable:!0,sortable:!0,visible:!1},{title:"Observación",field:"observation",filterable:!0,sortable:!0},{title:"Usuario",field:"user_id_user_name",filterable:!0,sortable:!0},{title:"Metodo",field:"summary_payment_method_id_description",filterable:!0,sortable:!0},{title:"Pago",field:"payment_form_id_description",filterable:!0,sortable:!0,customRender:e=>`<span><span class="SnBadge ${"1"==e.payment_form_id?"success":"warning"} SnMr-1"></span>${e.payment_form_id_description}</span>`},{title:"Estado",field:"sale_state_id_description",filterable:!0,sortable:!0,customRender:e=>{let a="";switch(""+e.sale_state_id){case"1":case"2":a="danger";break;case"3":a="primary";break;case"4":a="success";break;case"5":a="warning";break;case"6":case"8":a="danger";break;case"9":a="warning"}return`<span class="SnTag ${a} SnMr-1">${e.sale_state_id_description}</span>`}},{title:"",field:"-",filterable:!1,sortable:!1,customRender:e=>{var a=2<=e.document_type_id&&e.document_type_id<=5,t=/(https?:\/\/[^\s]+)/.test(e.xml_path),n=/(https?:\/\/[^\s]+)/.test(e.cdr_path);return`<div class="SnTable-action">
                                <button onclick="saleOpenPdf(${e.id})" title="Ver PDF" type="button" class="SnBtn sm icon ${""!=e.pdf_path?"error":"disabled"}" target="_blanck"><i class="fas fa-file-pdf"></i></button>
                                <a href="${t?e.xml_path:URL_PATH+e.xml_path}" title="Descargar XML" download="${e.xml_path.split("/").pop()}" class="SnBtn sm icon ${""!=e.xml_path?"primary":"disabled"}" target="_blanck"><i class="fas fa-file-code"></i></a>
                                <a href="${n?e.cdr_path:URL_PATH+e.cdr_path}" title="Descargar CDR" download="${e.cdr_path.split("/").pop()}" class="SnBtn sm icon ${""!=e.cdr_path?"success":"disabled"}" target="_blanck"><i class="fas fa-file-contract"></i></a>
                                ${saleRenderSunatStateBtn(a,e.sunat_state,e)}
                                <div class="SnBtn icon radio sm jsAction" title="Mas opciones" onclick="event.preventDefault(); event.stopPropagation(); saleOpenInvoiceMenu(${e.id},this)"><i class="fas fa-bars"></i></div>
                            </div>`}},...snTableAuditColumnRender()],rowRender:(e,a,t)=>`<tr class="${1==e.sale_state_id?"canceled":""}" key="${e.id}" data-params="${t}">
                        ${a._buildSelectColumn(e)}
                        ${a._buildDataRow(e)}
                    </tr>`,updated:e=>{SnDropdown(),currentResultData=e.result.data},filters:[...getUrlFilter(),...0===getUrlFilter().length?[{id:SnUniqueId(),logicalOperator:"AND",prefix:"DONDE",eval:[{id:SnUniqueId(),logicalOperator:"AND",prefix:"DONDE",operator:"se encuentra entre (incluye)",field:"register_datetime",type:"date",value1:dayjs().add(-1,"months").format("YYYY-MM-DD"),value2:dayjs().format("YYYY-MM-DD")}]}]:[]]})});const saleRenderSunatStateBtn=(e,a,t)=>{var n=`onclick="event.preventDefault(); event.stopPropagation(); saleOpenInvoiceInfoMenu(${t.id}, this)"`;switch(a){case"INFORMED":return`<div class="SnDropdown-toggle SnBtn icon radio sm success jsAction ${e?"":"disabled"}" ${n} title="Estado del comprobante"><i class="fas fa-check"></i></div>`;case"SENT":return`<div class="SnDropdown-toggle SnBtn icon radio sm warning jsAction ${e?"":"disabled"}" ${n} title="Estado del comprobante"><i class="fas fa-sync-alt"></i></div>`;case"GENERATED":return`<div class="SnDropdown-toggle SnBtn icon radio sm warning jsAction ${e?"":"disabled"}" ${n} title="Estado del comprobante"><i class="fas fa-redo"></i></div>`;default:return`<div class="SnDropdown-toggle SnBtn icon radio sm jsAction ${e?"primary":"disabled"}" ${n} title="Estado del comprobante"><i class="fas fa-save"></i></div>`}};function saleOpenInvoiceInfoMenu(a,e){var t=currentResultData.find(e=>e.id==a),t=`<ul class="SnList menu" style="min-width: 300px; max-width: 400px;">
                        <li class="SnList-item flex">${t.document_type_id_description}: <span class="SnMl-4">${t.document}</span></li>
                        <li class="SnList-item flex">ESTADO: <span class="SnMl-4">${t.sunat_state}</span></li>
                        <li class="SnList-item flex">CÓDIGO: <span class="SnMl-4">${t.sunat_response_code}</span></li>
                        <li class="SnList-item flex">FECHA ENVIO: <span class="SnMl-4">${t.date_of_issue}</span></li>
                        <li class="SnList-item flex">FECHA REGISTRO: <span class="SnMl-4">${t.date_of_issue}</span></li>
                        <li class="SnList-item flex" style="white-space: normal">Observación: <span class="SnMl-4">${t.sunat_message}</span></li>
                    </ul>`;maintenanceTable.renderMenuPortal(a,e,t,!0)}function saleOpenInvoiceMenu(a,e){var t=currentResultData.find(e=>e.id==a),n=2==t.document_type_id||3==t.document_type_id,s=2<=t.document_type_id&&t.document_type_id<=5,l=1==t.sale_state_id||5==t.sale_state_id,n=`<ul class="SnList menu">
                        ${n&&"INFORMED"===t.sunat_state?`<a class="SnList-item" key="1" href="${URL_PATH}/admin/processSale/edit/${t.id}/4"><i class="far fa-clipboard SnMr-2"></i>Emitir nota crédito</a>`:""}
                        ${n&&"INFORMED"===t.sunat_state?`<a class="SnList-item" key="2" href="${URL_PATH}/admin/processSale/edit/${t.id}/5"><i class="far fa-clipboard SnMr-2"></i>Emitir nota débito</a>`:""}
                        ${l?"":`<li class="SnList-item" key="3" onclick="saleCancel(${t.id})"><i class="fas fa-ban SnMr-2"></i>Anular Comprobante</li>`}
                        ${s&&"INFORMED"!=t.sunat_state?`<li class="SnList-item" key="4" onclick="saleResendSunat(${t.id})"><i class="fas fa-file-import SnMr-2"></i>Reenviar a SUNAT</li>`:""}
                        ${s&&"INFORMED"!=t.sunat_state?`<li class="SnDropdown-item" onclick="saleVerifySunat(${t.id})"><i class="fas fa-check-double SnMr-2"></i>Consultar estado SUNAT</li>`:""}
                        <li class="SnList-item" key="7" onclick="saleSendEmail(${t.id})"><i class="far fa-envelope SnMr-2"></i>Enviar CPE Via Email</li>
                        <li class="SnList-item" key="8" onclick="saleSendWhatsApp(${t.id})"><i class="fab fa-whatsapp SnMr-2"></i>Enviar WhatsApp</li>
                        ${s?`<li class="SnList-item" style="color: var(--green-6)" key="9" onclick="saleQuerySunat(${t.id})"><img src="${URL_PATH}/images/sunat_logo.png" style="width: 16px; height: 16px; display: inline-block; transform: translateY(4px);" class="SnMr-2" alt="icon">Verificar Estado en SUNAT</li>`:""}
                    </ul>`;maintenanceTable.renderMenuPortal(a,e,n,!0)}function saleDowloandExcel(e,a){var t=encodeURIComponent(JSON.stringify(maintenanceTable.filter.filters));window.open(URL_PATH+"/admin/processSale/dowloandExcel?filter="+t,"_blank")}function saleQuerySunat(e){SnLoadingState(!0,"jsAction"),RequestApi.fetch("/admin/processSale/querySunat",{method:"POST",body:{id:e}}).then(e=>{var a;e.success?(a=e.result,SnMessage.success({content:e.message}),a.success?SnModal.success({title:"RESPUESTA SUNAT",content:a.message}):SnModal.warning({title:"RESPUESTA SUNAT",content:a.message})):dynamicResponseErrorModalMessage(e)}).finally(e=>{SnLoadingState(!1,"jsAction")})}function saleCancel(e){currentSaleId=e,SnLoadingState(!0,"jsAction"),RequestApi.fetch("/admin/processSale/prepareCancel",{method:"POST",body:{id:e}}).then(e=>{if(e.success){document.getElementById("saleCancelContentWrapper").innerHTML=e.view,pSaleCancelValidator=dynamicLoadFormValidate(pSaleCancelValidator,"saleCancelModalForm");const a=document.getElementById("saleCancelModalForm");a.addEventListener("submit",function(e){e.preventDefault(),saleCancelModalFormSubmit(a)}),SnModal.open("saleCancelModal")}else dynamicResponseErrorModalMessage(e)}).finally(e=>{SnLoadingState(!1,"jsAction")})}function saleCancelModalFormSubmit(e){if(pSaleCancelValidator.validate()){let n={};n.id=currentSaleId,n.message=e.saleCancelObservation.value,n.payment=[],[...document.getElementById("saleCancelMethodTableBody").children].map((e,a)=>{var e=e.dataset.id,t=document.getElementById("saleCancelMethod_"+e).value;n.payment.push({paymentMethodId:e,total:t})}),SnModal.confirm({title:`¿Estás seguro de anular esta venta: ${currentSaleId}?`,okText:"Si",okClassNames:"danger",cancelText:"No",onOk(){SnLoadingState(!0,"jsAction","saleCancelModalFormSubmit"),RequestApi.fetch("/admin/processSale/cancel",{method:"POST",body:n}).then(e=>{e.success?(SnMessage.success({content:e.message}),2!=e.documentTypeId&&3!=e.documentTypeId&&4!=e.documentTypeId&&5!=e.documentTypeId||(e.result.sunat.success?SnMessage.success({content:e.result.sunat.message}):SnMessage.danger({content:e.result.sunat.message})),maintenanceTable.getData(),SnModal.close("saleCancelModal"),dynamicClearForm(pSaleCancelValidator,"saleCancelModalForm","saleCancelObservation")):dynamicResponseErrorModalMessage(e)}).finally(e=>{SnLoadingState(!1,"jsAction","saleCancelModalFormSubmit")})}})}else dynamicFormSubmitInvalidMessage()}function saleOpenPdf(e){saleReportPrint(e,void 0,!1)}function saleResendSunat(e){SnLoadingState(!0,"jsAction"),RequestApi.fetch("/admin/processSale/resendSunat",{method:"POST",body:{id:e}}).then(e=>{var a=e.result;SnMessage.success({content:e.message}),e.success?(a.sunat.success?(SnMessage.success({content:a.sunat.message}),iframePrintModal(a.document)):(SnModal.danger({title:"SUNAT ERROR",content:a.sunat.message}),SnMessage.danger({content:a.sunat.message})),maintenanceTable.getData()):dynamicResponseErrorModalMessage(e)}).finally(e=>{SnLoadingState(!1,"jsAction")})}function saleVerifySunat(e){SnLoadingState(!0,"jsAction"),RequestApi.fetch("/admin/processSale/verifySunat",{method:"POST",body:{id:e}}).then(e=>{var a=e.result;SnMessage.success({content:e.message}),e.success?(a.success?SnMessage.success({content:a.message}):(SnModal.danger({title:"SUNAT ERROR",content:a.message}),SnMessage.danger({content:a.message})),maintenanceTable.getData()):dynamicResponseErrorModalMessage(e)}).finally(e=>{SnLoadingState(!1,"jsAction")})}function saleSendEmail(e){currentSaleId=e,SnModal.open("sendEmailModal");e=currentResultData.find(e=>e.id==currentSaleId);document.getElementById("sendEmailEmail").value=e.email}function saleSendEmailSubmit(e){var a;pSendEmailValidator.validate()?((a={}).id=currentSaleId,a.email=e.sendEmailEmail.value,SnLoadingState(!0,"jsAction","sendEmailModalFormSubmit"),RequestApi.fetch("/admin/processSale/sendEmail",{method:"POST",body:a}).then(e=>{e.success?SnMessage.success({content:e.message}):dynamicResponseErrorModalMessage(e)}).finally(e=>{SnLoadingState(!1,"jsAction","sendEmailModalFormSubmit")})):dynamicFormSubmitInvalidMessage()}function saleSendWhatsApp(e){currentSaleId=e,SnModal.open("sendWhatsAppModal");e=currentResultData.find(e=>e.id==currentSaleId),e=9<e.phone.length?e.phone:"+51"+e.phone;document.getElementById("sendWhatsAppNumber").value=e,document.getElementById("sendWhatsAppMessage").value=`Te escribimos desde ${company.commercial_reason} (${company.document_number})
Descarga tu factura aqui
{{pdf_path}}
Descarga tu xml
{{xml_path}}
Descarga tu cdr
{{cdr_path}}`,saleSendWhatsAppRender()}function saleSendWhatsAppSubmit(e){var a,t,n;pSendWhatsAppValidator.validate()?(a=document.getElementById("sendWhatsAppNumber").value,t=encodeURIComponent(saleSendWhatsAppBuildMessage()),(n=document.createElement("a")).setAttribute("target","_blank"),n.setAttribute("href",`https://api.whatsapp.com/send/?phone=${a}&text=`+t),n.click()):dynamicFormSubmitInvalidMessage()}function saleSendWhatsAppAddPdf(){saleSendWhatsAppInsertText("sendWhatsAppMessage","{{pdf_path}}")}function saleSendWhatsAppAddXml(){saleSendWhatsAppInsertText("sendWhatsAppMessage","{{xml_path}}")}function saleSendWhatsAppAddCdr(){saleSendWhatsAppInsertText("sendWhatsAppMessage","{{cdr_path}}")}function saleSendWhatsAppInsertText(e,a){var e=document.getElementById(e),t=e.scrollTop;let n=0;var s=e.selectionStart||"0"==e.selectionStart?"ff":!!document.selection&&"ie",l=("ie"==s?(e.focus(),(l=document.selection.createRange()).moveStart("character",-e.value.length),n=l.text.length):"ff"==s&&(n=e.selectionStart),e.value.substring(0,n)),i=e.value.substring(n,e.value.length);e.value=l+a+i,n+=a.length,"ie"==s?(e.focus(),(l=document.selection.createRange()).moveStart("character",-e.value.length),l.moveStart("character",n),l.moveEnd("character",0),l.select()):"ff"==s&&(e.selectionStart=n,e.selectionEnd=n,e.focus()),e.scrollTop=t}function saleSendWhatsAppBuildMessage(){let e=document.getElementById("sendWhatsAppMessage").value;var a=currentResultData.find(e=>e.id==currentSaleId);return e=a?(e=(e=e.replaceAll("{{pdf_path}}",""+(location.origin+URL_PATH+a.pdf_path))).replaceAll("{{xml_path}}",""+(location.origin+URL_PATH+a.xml_path))).replaceAll("{{cdr_path}}",""+(location.origin+URL_PATH+a.cdr_path)):e}function saleSendWhatsAppRender(){document.getElementById("PhoneTextSend").innerHTML=saleSendWhatsAppBuildMessage()}function salePrint(e,a,[t]){saleReportPrint(t)}function salePrintA4(e,a,[t]){saleReportPrint(t,"A4")}function salePrintA5(e,a,[t]){saleReportPrint(t,"A5")}function salePrintTicket(e,a,[t]){saleReportPrint(t,"TICKET")}function saleReportPrint(a,e,t=!0){var n=currentResultData.find(e=>e.id==a);let s=location.origin+URL_PATH+n.pdf_path;1<(e||"").length&&(s+="/"+e),iframePrintModal(s,t)}function saleDetail(e,a,[t]){SnLoadingState(!0,"jsAction"),RequestApi.fetch("/admin/processSale/item",{method:"POST",body:{id:t}}).then(e=>{e.success?(document.getElementById("drawSaleItemTable").innerHTML=e.view,SnModal.open("saleItemModal")):dynamicResponseErrorModalMessage(e)}).finally(e=>{SnLoadingState(!1,"jsAction")})}function saleImport(e,a){SnModal.open("saleImportModal")}function saleImportSubmit(a){var e,t;pSaleImportValidator.validate()?null!=(e=document.getElementById("saleImportFile"))&&(void 0===e.files||null==(e=e.files[0])?SnModal.danger({title:"ALERTA USUARIO",content:"Por favor, selecciona al menos un archivo para continuar."}):validateFile(e,["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-excel"],3e3)&&((t=new FormData).append("excelFile",e),SnLoadingState(!0,"jsAction","saleImportModalFormSubmit"),RequestApi.fetch("/admin/processSale/import",{method:"POST",body:t}).then(e=>{e.success?(SnModal.success({title:"PROCESO COMPLETO",content:e.message}),SnModal.close("saleImportModal"),maintenanceTable.getData()):dynamicResponseErrorModalMessage(e),a.reset()}).finally(e=>{SnLoadingState(!1,"jsAction","saleImportModalFormSubmit")}))):dynamicFormSubmitInvalidMessage("No se especificó ningún archivo")}function saleSeeHistory(e,a,[t]){SnLoadingState(!0,"jsAction"),RequestApi.fetch("/admin/seeCommunication/log",{method:"POST",body:{id:t,from:"SALE"}}).then(e=>{e.success?(document.getElementById("drawSeeCommunicationTable").innerHTML=e.view,SnModal.open("seeCommunicationModal")):dynamicResponseErrorModalMessage(e)}).finally(e=>{SnLoadingState(!1,"jsAction")})}