function reportGlobalViewPDF(){var e={};e.startDate=document.getElementById("startDate").value,e.endDate=document.getElementById("endDate").value,e.currencyId=document.getElementById("currencyId").value,SnLoadingState(!0,"jsAction"),RequestApi.fetch("/admin/report/globalView",{method:"POST",body:e}).then(e=>{e.success?iframePrintModal(e.result.document):dynamicResponseErrorModalMessage(e)}).finally(e=>{SnLoadingState(!1,"jsAction")})}