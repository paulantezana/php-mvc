let pLotProcessDetailValidator;function lotProcessAddRow(){SnModal.open("lotProcessDetailModal"),dynamicClearForm(pLotProcessDetailValidator,"lotProcessDetailModalForm","lotProcessDetailNumber"),document.getElementById("lotProcessDetailQuantity").value=document.getElementById("lotProcessWanting").value}function lotProcessCalculate(){var e=document.getElementById("lotProcessQuantity").value;let a=0;[...document.getElementById("lotProcessTableBody").children].map((e,t)=>{var o=e.dataset.delete,e=e.dataset.id;"0"==o&&(o=document.getElementById("lotProcessTableBodyRowCurrentStock"+e).innerHTML,a+=parseFloat(o))});var e=parseFloat(e)-parseFloat(a),t=(document.getElementById("lotProcessWanting").value=e,document.getElementById("lotProcessWantingContainer")),o=document.getElementById("lotProcessWantingHelp");return t.classList.remove("has-success"),t.classList.remove("has-warning"),0==e?(t.classList.add("has-success"),o.innerHTML=""):0<e?(t.classList.add("has-warning"),o.innerHTML="Artículos por agregar"):e<0&&(t.classList.add("has-warning"),o.innerHTML="Artículos en exceso"),e}function lotProcessTableBodyAdd(e){document.getElementById("lotProcessTableBody").insertAdjacentHTML("beforeend",`<tr id="lotProcessTableBodyRow${e.id}" data-delete="0" data-id="${e.id}">
                                                            <td id="lotProcessTableBodyRowNumber${e.id}">${e.number}</td>
                                                            <td id="lotProcessTableBodyRowInitialStock${e.id}">${e.initialStock}</td>
                                                            <td id="lotProcessTableBodyRowCurrentStock${e.id}">${e.currentStock}</td>
                                                            <td id="lotProcessTableBodyRowManufacturingDate${e.id}">${e.manufacturingDate}</td>
                                                            <td id="lotProcessTableBodyRowExpirationDate${e.id}">${e.expirationDate}</td>
                                                            <td id="lotProcessTableBodyRowCustomsName${e.id}" class="hidden">${e.customsName}</td>
                                                            <td id="lotProcessTableBodyRowCustomsDocumentDate${e.id}" class="hidden">${e.customsDocumentDate}</td>
                                                            <td id="lotProcessTableBodyRowPetition${e.id}" class="hidden">${e.petition}</td>
                                                            <td><button class="SnBtn danger icon radio" onClick="lotProcessTableBodyRemove(${e.id})"><i class="fa-solid fa-trash-can"></i></button></td>
                                                        </tr>`),lotProcessCalculate()}function lotProcessTableBodyRemove(e){const t=document.getElementById("lotProcessTableBodyRow"+e);e<=0?(t.remove(),lotProcessCalculate()):SnModal.confirm({title:"¿Realmente desea marcar este lote para ser eliminado?",content:"Esta operación es irreversible",okText:"Si",okClassNames:"danger",cancelText:"No",onOk(){t.setAttribute("data-delete","1"),t.classList.add("disabled"),t.classList.add("deleted"),lotProcessCalculate()}})}function lotProcessDetailModalFormSubmit(e){var t,o=document.getElementById("lotProcessTableBody");pLotProcessDetailValidator.validate()?((t={}).id=-1*o.children.length,t.number=e.lotProcessDetailNumber.value||0,t.initialStock=e.lotProcessDetailQuantity.value,t.currentStock=e.lotProcessDetailQuantity.value,t.manufacturingDate=e.lotProcessDetailManufacturingDate.value,t.expirationDate=e.lotProcessDetailExpirationDate.value,t.customsName=e.lotProcessDetailCustomsName.value,t.customsDocumentDate=e.lotProcessDetailCustomsDocumentDate.value,t.petition=e.lotProcessDetailPetition.value,0<dayjs(t.manufacturingDate).diff(dayjs(t.expirationDate))?SnModal.warning({title:"ALERTA USUARIO",content:"La fecha de expiración no puede ser menor a la fecha de fabricación"}):0<t.currentStock?(lotProcessTableBodyAdd(t),SnModal.close("lotProcessDetailModal")):SnModal.warning({title:"ALERTA USUARIO",content:"La cantidad no puede ser menor o igual a cero"})):dynamicFormSubmitInvalidMessage()}document.addEventListener("DOMContentLoaded",()=>{pLotProcessDetailValidator=dynamicLoadFormValidate(pLotProcessDetailValidator,"lotProcessDetailModalForm");const t=document.getElementById("lotProcessDetailModalForm");t.addEventListener("submit",e=>{e.preventDefault(),lotProcessDetailModalFormSubmit(t)})});