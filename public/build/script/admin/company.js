let pValidator;function companyClearAllData(a){SnModal.confirm({title:"¿Estás seguro eliminar todos los datos?",content:"Esta acción borrara toda la información de la base de datos.",okText:"Si",okClassNames:"danger",cancelText:"No",onOk(){a.classList.add("loading"),RequestApi.fetch("/admin/appCompany/clearAllData",{method:"POST"}).then(e=>{e.success?SnMessage.success({content:e.message}):dynamicResponseErrorModalMessage(e)}).finally(e=>{a.classList.remove("loading")})}})}function clearAllOperations(a){SnModal.confirm({title:"¿Estás seguro de eliminar todos los movimientos?",content:"Esta acción borrara todos los movimientos de la base de datos y los stocks de los productos se resetearan a 0",okText:"Si",okClassNames:"danger",cancelText:"No",onOk(){a.classList.add("loading"),RequestApi.fetch("/admin/appCompany/clearAllOperations",{method:"POST"}).then(e=>{e.success?SnMessage.success({content:e.message}):dynamicResponseErrorModalMessage(e)}).finally(e=>{a.classList.remove("loading")})}})}function companySubmit(e){var a;pValidator.validate()?((a=new FormData).append("documentNumber",document.getElementById("companyDocumentNumber").value),a.append("socialReason",document.getElementById("companySocialReason").value),a.append("commercialReason",document.getElementById("companyCommercialReason").value),a.append("fiscalAddress",document.getElementById("companyFiscalAddress").value),a.append("email",document.getElementById("companyEmail").value),a.append("phone",document.getElementById("companyPhone").value),a.append("representative",document.getElementById("companyRepresentative").value),a.append("telephone",document.getElementById("companyTelephone").value),a.append("urlWeb",document.getElementById("companyUrlWeb").value),a.append("detractionAcount",document.getElementById("companyDetractionAcount").value),a.append("companyId",document.getElementById("companyId").value||0),SnLoadingState(!0,"jsAction","companyFormSubmit"),RequestApi.fetch("/admin/appCompany/update",{method:"POST",body:a}).then(e=>{e.success?(SnMessage.success({content:e.message}),location.reload()):dynamicResponseErrorModalMessage(e)}).finally(e=>{SnLoadingState(!1,"jsAction","companyFormSubmit")})):dynamicFormSubmitInvalidMessage()}function uploadLogoSquare(){let e=document.getElementById("companyLogoSquare");if(null!=e)if(void 0===e.files)SnModal.danger({title:"Error de usuario",content:"Por favor, selecciona al menos un archivo para continuar."});else{let a=e.files[0];null==a||null==a?SnModal.danger({title:"Error de usuario",content:"Por favor, selecciona al menos un archivo para continuar."}):validateFile(a,["image/png","image/jpeg","image/jpg"],100)&&SnModal.confirm({title:"¿Estás seguro de subir el logo?",content:"Logo cuadrada de la empresa",okText:"Si",okClassNames:"danger",cancelText:"No",onOk(){var e=new FormData;e.append("logo",a),e.append("companyId",document.getElementById("companyId").value),SnFreeze.freeze({selector:"#companyLogoSquareWrapper"}),RequestApi.fetch("/admin/appCompany/uploadLogoSquare",{method:"POST",body:e}).then(e=>{e.success?(SnMessage.success({content:e.message}),location.reload()):dynamicResponseErrorModalMessage(e)}).finally(e=>{SnFreeze.unFreeze("#companyLogoSquareWrapper")})},onCancel(){e.value=null}})}}function uploadLogoLarge(){let e=document.getElementById("companyLogoLarge");if(null!=e)if(void 0===e.files)SnModal.danger({title:"Error de usuario",content:"Por favor, selecciona al menos un archivo para continuar."});else{let a=e.files[0];null==a||null==a?SnModal.danger({title:"Error de usuario",content:"Por favor, selecciona al menos un archivo para continuar."}):validateFile(a,["image/png","image/jpeg","image/jpg"],100)&&SnModal.confirm({title:"¿Estás seguro de subir el logo?",content:"Logo largo de la empresa",okText:"Si",okClassNames:"danger",cancelText:"No",onOk(){var e=new FormData;e.append("logo",a),e.append("companyId",document.getElementById("companyId").value),SnFreeze.freeze({selector:"#companyLogoLargeWrapper"}),RequestApi.fetch("/admin/appCompany/uploadLogoLarge",{method:"POST",body:e}).then(e=>{e.success?(SnMessage.success({content:e.message}),location.reload()):dynamicResponseErrorModalMessage(e)}).finally(e=>{SnFreeze.unFreeze("#companyLogoLargeWrapper")})},onCancel(){e.value=null}})}}document.addEventListener("DOMContentLoaded",()=>{pValidator=new Pristine(document.getElementById("companyForm"));const a=document.getElementById("companyForm");a.addEventListener("submit",e=>{e.preventDefault(),companySubmit(a)});let n=document.getElementById("companyClearAllData"),o=(n.addEventListener("click",e=>{companyClearAllData(n)}),document.getElementById("clearAllOperations"));o.addEventListener("click",e=>{clearAllOperations(o)}),document.getElementById("companyLogoSquare").addEventListener("change",e=>{e.preventDefault(),uploadLogoSquare()}),document.getElementById("companyLogoLarge").addEventListener("change",e=>{e.preventDefault(),uploadLogoLarge()})});