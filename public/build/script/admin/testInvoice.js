let currentInvoices=[];function getAllTest(){SnLoadingState(!0,"jsAction"),RequestApi.fetch("/admin/appTest/getAllTest").then(t=>{t.success?buildTestItems(t.result):dynamicResponseErrorModalMessage(t)}).finally(t=>{SnLoadingState(!1,"jsAction")})}function buildTestItems(t){currentInvoices=t;let e=document.getElementById("SnTestWrapper");t.map(t=>{t=`<div class="SnCard SnMb-2 SnTest" id="testRow_${t.id}">
                            <div class="SnCard-body SnTestRow" >
                                <div class="SnAvatar SnTestRow-state SnMr-2">
                                    <div class="SnAvatar-text" id="testRowIcon_${t.id}"><i class="fa-solid fa-info"></i></div>
                                </div>
                                <div class="SnTestRow-content">
                                    <strong>${t.title}</strong>
                                    <div id="testRowDescription_${t.id}">${t.descripcion}</div>
                                </div>
                                <div class="SnTestRow-actions">
                                    <button type="button" title="enviar documento" class="SnBtn radio icon" id="testRowRunBtn_${t.id}" onclick="runTest(${t.id})"><i class="fa-solid fa-paper-plane"></i></button>
                                </div>
                            </div>
                        </div>`;e.insertAdjacentHTML("beforeend",t)})}function runTest(i){var t=currentInvoices.find(t=>t.id==i);SnLoadingState(!0,"jsAction","testRowRunBtn_"+i),RequestApi.fetch("/admin/appTest/runTest",{method:"POST",body:t}).then(t=>{var e,s,n;t.success?(e=document.getElementById("testRowDescription_"+i),s=document.getElementById("testRowIcon_"+i),n=document.getElementById("testRow_"+i),t.result.clientSunatSuccess?(n.classList.remove("danger"),n.classList.add("success"),s.innerHTML='<i class="fa-solid fa-check"></i>'):(n.classList.add("danger"),n.classList.remove("success"),s.innerHTML='<i class="fa-solid fa-triangle-exclamation"></i>'),e.innerText=t.result.clientSunatMessage):dynamicResponseErrorModalMessage(t)}).finally(t=>{SnLoadingState(!1,"jsAction","testRowRunBtn_"+i)})}document.addEventListener("DOMContentLoaded",()=>{getAllTest()});