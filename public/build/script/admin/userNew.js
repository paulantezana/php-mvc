let pValidator;function userNewList(e,t){window.location.href=URL_PATH+"/admin/"+t}function userSubmit(e){if(pValidator.validate()){SnLoadingState(!0,"jsAction","userFormSubmit");var t={};t.id=document.getElementById("userId").value||0,t.email=document.getElementById("userEmail").value,t.userName=document.getElementById("userUserName").value,t.fullName=document.getElementById("userFullName").value,t.identityDocumentId=document.getElementById("userIdentityDocumentId").value,t.identityDocumentNumber=document.getElementById("userIdentityDocumentNumber").value,t.lastName=document.getElementById("userLastName").value,t.state=document.getElementById("userState").checked||!1,t.userRoleId=document.getElementById("userUserRoleId").value,t.commission=document.getElementById("userCommission").value,t.password=document.getElementById("userPassword").value,t.passwordConfirm=document.getElementById("userPasswordConfirm").value,t.pinCode=document.getElementById("userPinCode").value;const n=t.id&&!["","0"].includes(t.id.toString());RequestApi.fetch("/admin/appUser/"+(n?"update":"create"),{method:"POST",body:t}).then(e=>{e.success?dynamicResponseSuccess(n,e.message,()=>{n?window.location.href=URL_PATH+"/admin/appUser/edit/"+e.result.id:dynamicClearForm(pValidator,"userForm","userEmail")},()=>window.location.href=URL_PATH+"/admin/appUser"):dynamicResponseErrorModalMessage(e)}).finally(e=>{SnLoadingState(!1,"jsAction","userFormSubmit")})}else dynamicFormSubmitInvalidMessage()}function getIdentityDocumentNumber(){var e=document.getElementById("userIdentityDocumentNumber"),t=document.getElementById("userIdentityDocumentId");let n=document.getElementById("userSearchIdentityDocumentNumber");n.classList.add("loading"),RequestApi.fetch("/page/queryDocument",{method:"POST",body:{documentNumber:e.value,documentTypeId:t.value}}).then(e=>{e.success?(document.getElementById("userFullName").value=e.result.full_name,document.getElementById("userLastName").value=e.result.father_last_name+" "+e.result.mother_last_name):SnModal.danger({title:"Algo salió mal",content:e.message})}).finally(e=>{n.classList.remove("loading")})}function uerVerifyRole(){var e=document.getElementById("userUserRoleId").value,t=document.getElementById("userUserRoleIdAlert");1==e?t.classList.remove("hidden"):t.classList.add("hidden")}document.addEventListener("DOMContentLoaded",()=>{pValidator=new Pristine(document.getElementById("userForm"));const t=document.getElementById("userForm");t.addEventListener("submit",e=>{e.preventDefault(),userSubmit(t)});var e=document.getElementById("userIdentityDocumentNumber");e.addEventListener("keypress",function(e){"Enter"===e.key&&e.preventDefault()}),e.addEventListener("keyup",function(e){"Enter"===e.key&&(e.preventDefault(),getIdentityDocumentNumber())})});