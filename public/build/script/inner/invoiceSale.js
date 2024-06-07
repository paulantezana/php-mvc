let invoiceSaleTable,currentResultData=[];document.addEventListener("DOMContentLoaded",()=>{invoiceSaleTable=new SnTable({elementId:"drawInvoiceSaleTable",entity:"sale",data:e=>snTableFetchData("/inner/invoice/saleTable",e),actions:[{id:"57",title:"See Historial",description:"See Historial",icon:"fa-solid fa-timeline",event_name:"SeeHistory",event_name_prefix:null,parent_id:"0",sort_order:"50",position:"TABLE",class_names:"",type:"button",keyboard_key:"",state:"1",updated_at:null,created_at:null,created_user:"",updated_user:"",screen_id_controller:"processSale"}],selectable:!1,columns:[{title:"Empresa",field:"company_id_commercial_reason",filterable:!0,sortable:!0},{title:"Fecha R.",field:"created_at",filterable:!0,sortable:!0},{title:"Fecha E.",field:"date_of_issue",filterable:!0,sortable:!0},{title:"Tipo Doc.",field:"document_type_id_description",filterable:!0,sortable:!0},{title:"Documento",field:"document",filterable:!0,sortable:!0},{title:"RUC / DNI / ETC",field:"document_number",filterable:!0,sortable:!0},{title:"Denominación",field:"social_reason",filterable:!0,sortable:!0},{title:"Gratuita",field:"total_free",summaryOperator:"sum",type:"number",filterable:!0,sortable:!0,customRender:e=>e.currency_id_symbol+" "+e.total_free},{title:"Total",field:"total",type:"number",summaryOperator:"sum",filterable:!0,sortable:!0,customRender:e=>e.currency_id_symbol+" "+e.total},{title:"Observación",field:"observation",filterable:!0,sortable:!0},{title:"Usuario",field:"user_id_user_name",filterable:!0,sortable:!0},{title:"Pago",field:"payment_form_id_description",filterable:!0,sortable:!0,customRender:e=>`<span><span class="SnBadge ${"1"==e.payment_form_id?"success":"warning"} SnMr-1"></span>${e.payment_form_id_description}</span>`},{title:"Estado",field:"sale_state_id_description",filterable:!0,sortable:!0,customRender:e=>{let a="";switch(e.sale_state_id){case"1":a="danger";break;case"4":a="success";break;case"3":a="warning"}return`<span class="SnTag ${a} SnMr-1">${e.sale_state_id_description}</span>`}},{title:"Estado",field:"sunat_state",filterable:!0,sortable:!0,customRender:e=>{var a=2<=e.document_type_id&&e.document_type_id<=5;return`<div class="SnTable-action">
                                <button onclick="saleOpenPdf(${e.id})" title="Ver PDF" type="button" class="SnBtn sm icon ${""!=e.pdf_path?"error":"disabled"}" target="_blanck"><i class="fas fa-file-pdf"></i></button>
                                <a href="${URL_PATH+e.xml_path}" title="Descargar XML" download="${e.xml_path.split("/").pop()}" class="SnBtn sm icon ${""!=e.xml_path?"primary":"disabled"}" target="_blanck"><i class="fas fa-file-code"></i></a>
                                <a href="${URL_PATH+e.cdr_path}" title="Descargar CDR" download="${e.cdr_path.split("/").pop()}" class="SnBtn sm icon ${""!=e.cdr_path?"success":"disabled"}" target="_blanck"><i class="fas fa-file-contract"></i></a>
                                ${saleRenderSunatStateBtn(a,e.sunat_state,e)}
                                <div class="SnBtn icon radio sm jsAction" title="Mas opciones" onclick="event.preventDefault(); event.stopPropagation(); saleOpenInvoiceMenu(${e.id},this)"><i class="fas fa-bars"></i></div>
                            </div>`}}],rowRender:(e,a,t)=>`<tr class="${1==e.sale_state_id?"canceled":""}" key="${e.id}" data-params="${t}">
                        ${a._buildSelectColumn(e)}
                        ${a._buildDataRow(e)}
                    </tr>`,updated:e=>{SnDropdown(),currentResultData=e.result.data},filters:[{id:SnUniqueId(),logicalOperator:"AND",prefix:"DONDE",eval:[{id:SnUniqueId(),logicalOperator:"AND",prefix:"DONDE",operator:"se encuentra entre (incluye)",field:"date_of_issue",type:"date",value1:dayjs().add(-1,"months").format("YYYY-MM-DD"),value2:dayjs().add(-1,"days").format("YYYY-MM-DD")},{id:SnUniqueId(),logicalOperator:"and",prefix:"DONDE",operator:"no es",field:"sunat_state",value1:"INFORMED",value2:""}]}]})});const saleRenderSunatStateBtn=(e,a,t)=>{var s=`onclick="event.preventDefault(); event.stopPropagation(); saleOpenInvoiceInfoMenu(${t.id}, this)"`;switch(a){case"INFORMED":return`<div class="SnDropdown-toggle SnBtn icon radio sm success jsAction ${e?"":"disabled"}" ${s} title="Estado del comprobante"><i class="fas fa-check"></i></div>`;case"SENT":return`<div class="SnDropdown-toggle SnBtn icon radio sm warning jsAction ${e?"":"disabled"}" ${s} title="Estado del comprobante"><i class="fas fa-sync-alt"></i></div>`;case"GENERATED":return`<div class="SnDropdown-toggle SnBtn icon radio sm warning jsAction ${e?"":"disabled"}" ${s} title="Estado del comprobante"><i class="fas fa-redo"></i></div>`;default:return`<div class="SnDropdown-toggle SnBtn icon radio sm jsAction ${e?"primary":"disabled"}" ${s} title="Estado del comprobante"><i class="fas fa-save"></i></div>`}};function saleOpenInvoiceInfoMenu(a,e){var t=currentResultData.find(e=>e.id==a),t=`<ul class="SnList menu" style="min-width: 300px; max-width: 400px;">
                        <li class="SnList-item flex">${t.document_type_id_description}: <span class="SnMl-4">${t.document}</span></li>
                        <li class="SnList-item flex">ESTADO: <span class="SnMl-4">${t.sunat_state}</span></li>
                        <li class="SnList-item flex">CÓDIGO: <span class="SnMl-4">${t.sunat_response_code}</span></li>
                        <li class="SnList-item flex">FECHA ENVIO: <span class="SnMl-4">${t.date_of_issue}</span></li>
                        <li class="SnList-item flex">FECHA REGISTRO: <span class="SnMl-4">${t.date_of_issue}</span></li>
                        <li class="SnList-item flex" style="white-space: normal">Observación: <span class="SnMl-4">${t.sunat_message}</span></li>
                    </ul>`;invoiceSaleTable.renderMenuPortal(a,e,t,!0)}function saleSeeHistory(e,a,[t]){SnLoadingState(!0,"jsAction"),RequestApi.fetch("/admin/seeCommunication/log",{method:"POST",body:{id:t,from:"SALE"}}).then(e=>{e.success?(document.getElementById("drawSeeCommunicationTable").innerHTML=e.view,SnModal.open("seeCommunicationModal")):dynamicResponseErrorModalMessage(e)}).finally(e=>{SnLoadingState(!1,"jsAction")})}