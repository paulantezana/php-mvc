let pReportItemFormValidator,currentResultData,filter;function getColumns(){const t=document.getElementById("reportItemParentId").value,n=document.getElementById("currentParentId");SnLoadingState(!0,"jsAction"),RequestApi.fetch("/admin/maintenanceReportItem/columns",{method:"POST",body:{parentId:t}}).then(e=>{e.success?(t!=n.value&&(filter.filters=[]),filter.options.columns=e.result,filter._render(),n.value=t):dynamicResponseErrorModalMessage(e)}).finally(e=>{SnLoadingState(!1,"jsAction")})}function newReportItemFormSubmit(){if(pReportItemFormValidator.validate()){var e={};e.id=document.getElementById("reportItemId").value,e.reportId=document.getElementById("reportItemReportId").value,e.parentId=document.getElementById("reportItemParentId").value,e.description=document.getElementById("reportItemDescription").value,e.filter=JSON.stringify(filter.filters)||"[]";const t=e.id&&!["","0"].includes(e.id.toString());SnLoadingState(!0,"jsAction","newReportItemFormSubmit"),RequestApi.fetch("/admin/maintenanceReportItem/"+(t?"update":"create"),{method:"POST",body:e}).then(e=>{e.success?dynamicResponseSuccess(t,e.message,()=>{t?window.location.href=URL_PATH+"/admin/maintenanceReportItem/edit/"+e.result.report_code+"/"+e.result.id:dynamicClearForm(pValidator,"newReportItemForm","reportItemDescription")},()=>window.location.href=URL_PATH+"/admin/maintenanceReportItem/list/"+e.result.report_code):dynamicResponseErrorModalMessage(e)}).finally(e=>{SnLoadingState(!1,"jsAction","newReportItemFormSubmit")})}else dynamicFormSubmitInvalidMessage()}function maintenanceToolbarViewReport(e,t){var n={};n.id=document.getElementById("reportItemId").value,n.reportId=document.getElementById("reportItemReportId").value,n.parentId=document.getElementById("reportItemParentId").value,n.filter=JSON.stringify(filter.filters)||"[]",SnLoadingState(!0,"jsAction"),RequestApi.fetch("/admin/maintenanceReportItem/pdf",{method:"POST",body:n}).then(e=>{e.success?iframePrintModal(e.result.document):dynamicResponseErrorModalMessage(e)}).finally(e=>{SnLoadingState(!1,"jsAction")})}document.addEventListener("DOMContentLoaded",()=>{pReportItemFormValidator=dynamicLoadFormValidate(pReportItemFormValidator,"newReportItemForm"),document.getElementById("newReportItemForm").addEventListener("submit",function(e){e.preventDefault(),newReportItemFormSubmit()}),document.getElementById("reportItemParentId").addEventListener("change",function(e){e.preventDefault(),getColumns()}),filter=new SnFilter({elementId:"reportItemNewCustomFilter",columns:[],filters:reportItemFilter}),getColumns()});