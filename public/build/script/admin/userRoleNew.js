let pValidator;function userRoleSearchScreen(e){const a=e.toLocaleLowerCase();var e=document.querySelectorAll('[class*="jsScreenTitle_"]'),t=document.querySelectorAll('[class*="jsScreenActionContainer_"]');0<a?.length||([...e].forEach(e=>e.parentElement.parentElement.parentElement.classList.remove("hidden")),[...t].forEach(e=>e.classList.remove("hidden"))),[...e].forEach(e=>{var t=e.textContent,n=e.dataset.id;const o=t.toLocaleLowerCase().includes(a);[...document.querySelectorAll(".jsScreenActionContainer_"+n)].forEach(e=>{o?e.classList.remove("hidden"):e.classList.add("hidden")}),e.parentElement.parentElement.parentElement.classList.toggle("hidden",!o)})}function userRoleNewList(e,t){window.location.href=URL_PATH+"/admin/"+t}function userRoleSubmit(e){if(pValidator.validate()){let n={};n.id=document.getElementById("userRoleId").value||0,n.description=e.userRoleDescription.value,n.menuActionIds=[],document.querySelectorAll('#userRoleActionAuthTableBody [id*="userRoleAutState"]').forEach(e=>{var t=e.dataset.id;e.checked&&n.menuActionIds.push(parseInt(t))});const t=n.id&&!["","0"].includes(n.id.toString());SnLoadingState(!0,"jsAction","userRoleFormSubmit"),RequestApi.fetch("/admin/appUserRole/"+(t?"update":"create"),{method:"POST",body:n}).then(e=>{e.success?dynamicResponseSuccess(t,e.message,()=>{t?window.location.href=URL_PATH+"/admin/appUserRole/edit/"+e.result.id:dynamicClearForm(pValidator,"userRoleForm","userRoleDescription")},()=>window.location.href=URL_PATH+"/admin/appUserRole"):dynamicResponseErrorModalMessage(e)}).finally(e=>{SnLoadingState(!1,"jsAction","userRoleFormSubmit")})}else dynamicFormSubmitInvalidMessage()}document.addEventListener("DOMContentLoaded",()=>{pValidator=dynamicLoadFormValidate(pValidator,"userRoleForm");const t=document.getElementById("userRoleForm"),n=(t.addEventListener("submit",e=>{e.preventDefault(),userRoleSubmit(t)}),document.getElementById("userRoleSearch"));n.addEventListener("input",e=>{e.preventDefault(),userRoleSearchScreen(n.value)}),dynamicViewKeyboardListeners(screenName,appMenuActions)});