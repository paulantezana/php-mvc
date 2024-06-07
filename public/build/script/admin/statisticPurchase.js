let currentStatisticTab="GENERAL",purchaseStatisticGeneralChart,includeList=[],purchaseStatisticChartSetting={type:"line",data:{},options:{responsive:!0,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}}}};function maintenanceTableReload(){statisticPurchaseReload()}function statisticPurchaseExportImage(t){var e=document.getElementById("purchaseStatisticChart").toDataURL("image/png").replace("image/png","image/octet-stream"),a=document.createElement("a");a.setAttribute("href",e),a.setAttribute("download","estadistica.png"),a.click()}function statisticPurchaseTableToPdf(t){dynamicTableToPdf("purchaseStatisticTable","Estadística ventas")}function statisticPurchaseTableToExcel(t){dynamicTableToExcel("purchaseStatisticTable","Estadística ventas")}function statisticPurchaseReload(){let e={};e.startDate=document.getElementById("purchaseStatisticStartDate").value,e.endDate=document.getElementById("purchaseStatisticEndDate").value,e.currencyId=document.getElementById("purchaseStatisticCurrencyId").value,e.group=document.getElementById("purchaseStatisticGroup").value,e.chart=document.getElementById("purchaseStatisticChartType").value,e.report=document.getElementById("purchaseStatisticReport").value,e.includeList=includeList.map(t=>t.id),SnLoadingState(!0,"jsAction"),RequestApi.fetch("/admin/statistic/purchaseStatistic",{method:"POST",body:e}).then(t=>{t.success?statisticPurchaseBuild(t.result,e):dynamicResponseErrorModalMessage(t)}).finally(t=>{SnLoadingState(!1,"jsAction")})}function statisticPurchaseBuild(t,e){const a=(t,e)=>t+Math.floor(Math.random()*(e-t+1)),r="GENERAL"!=e.report;let i="",d="",s=[],o={},l=[];switch(e.group){case"HOUR":o.label="Dia",o.borderColor="#3379B7",o.backgroundColor="rgba(51, 121, 183, .3)",o.data=[],t.forEach(t=>{d+=`<tr>
                            <td>${t.g_hour}</td>
                            ${r?`<td>${t.g_description}</td>`:""}
                            <td>${t.total}</td>
                        </tr>`,o.data.push({x:t.g_hour,y:parseFloat(t.total)}),l.push(t.g_hour)}),s.push(o),i=`<table class="SnTable">
                            <thead>
                                <th>Hora</th>
                                ${r?"<th>Nombre</th>":""}
                                <th>Total</th>
                            </thead>
                            <tbody>${d}</tbody>
                        </table>`;break;case"DAY":l=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],t.forEach(t=>{var e=a(0,360);(o={}).label=t.g_weeks,o.borderColor=`hsl(${e}deg, 56%, 46%)`,o.backgroundColor=`hsla(${e}deg, 56%, 46%, 0.3)`,o.data=[{x:"Domingo",y:parseFloat(t.weekday_7)},{x:"Lunes",y:parseFloat(t.weekday_1)},{x:"Martes",y:parseFloat(t.weekday_2)},{x:"Miércoles",y:parseFloat(t.weekday_3)},{x:"Jueves",y:parseFloat(t.weekday_4)},{x:"Viernes",y:parseFloat(t.weekday_5)},{x:"Sábado",y:parseFloat(t.weekday_6)}],s.push(o),d+=`<tr>
                            <td>${t.g_weeks}</td>
                            ${r?`<td>${t.g_description}</td>`:""}
                            <td>${t.weekday_7}</td>
                            <td>${t.weekday_1}</td>
                            <td>${t.weekday_2}</td>
                            <td>${t.weekday_3}</td>
                            <td>${t.weekday_4}</td>
                            <td>${t.weekday_5}</td>
                            <td>${t.weekday_6}</td>
                            <td>${t.total}</td>
                        </tr>`}),i=`<table class="SnTable">
                            <thead>
                                <th>Fecha</th>
                                ${r?"<th>Nombre</th>":""}
                                <th>Domingo</th>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miércoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                                <th>Sábado</th>
                                <th>Total</th>
                            </thead>
                            <tbody>${d}</tbody>
                        </table>`;break;case"MONTH":t.forEach(t=>{var e=a(0,360);(o={}).label=t.g_year,o.borderColor=`hsl(${e}deg, 56%, 46%)`,o.backgroundColor=`hsla(${e}deg, 56%, 46%, 0.3)`,o.data=[{x:"Enero",y:parseFloat(t.month_1)},{x:"Febrero",y:parseFloat(t.month_2)},{x:"Marzo",y:parseFloat(t.month_3)},{x:"Abril",y:parseFloat(t.month_4)},{x:"Mayo",y:parseFloat(t.month_5)},{x:"Junio",y:parseFloat(t.month_6)},{x:"Julio",y:parseFloat(t.month_7)},{x:"Agosto",y:parseFloat(t.month_8)},{x:"Septiembre",y:parseFloat(t.month_9)},{x:"Octubre",y:parseFloat(t.month_10)},{x:"Noviembre",y:parseFloat(t.month_11)},{x:"Diciembre",y:parseFloat(t.month_12)}],s.push(o),d+=`<tr>
                            <td>${t.g_year}</td>
                            ${r?`<td>${t.g_description}</td>`:""}
                            <td>${t.month_1}</td>
                            <td>${t.month_2}</td>
                            <td>${t.month_3}</td>
                            <td>${t.month_4}</td>
                            <td>${t.month_5}</td>
                            <td>${t.month_6}</td>
                            <td>${t.month_7}</td>
                            <td>${t.month_8}</td>
                            <td>${t.month_9}</td>
                            <td>${t.month_10}</td>
                            <td>${t.month_11}</td>
                            <td>${t.month_12}</td>
                            <td>${t.total}</td>
                        </tr>`}),i=`<table class="SnTable">
                            <thead>
                                <th>Año</th>
                                ${r?"<th>Nombre</th>":""}
                                <th>Enero</th>
                                <th>Febrero</th>
                                <th>Marzo</th>
                                <th>Abril</th>
                                <th>Mayo</th>
                                <th>Junio</th>
                                <th>Julio</th>
                                <th>Agosto</th>
                                <th>Septiembre</th>
                                <th>Octubre</th>
                                <th>Noviembre</th>
                                <th>Diciembre</th>
                                <th>Total</th>
                            </thead>
                            <tbody>${d}</tbody>
                        </table>`;break;case"BIMESTER":t.forEach(t=>{var e=a(0,360);(o={}).label=t.g_year,o.borderColor=`hsl(${e}deg, 56%, 46%)`,o.backgroundColor=`hsla(${e}deg, 56%, 46%, 0.3)`,o.data=[{x:"Primer",y:parseFloat(t.bimester_1)},{x:"Segundo",y:parseFloat(t.bimester_2)},{x:"Tercer",y:parseFloat(t.bimester_3)},{x:"Cuarto",y:parseFloat(t.bimester_4)},{x:"Quinto",y:parseFloat(t.bimester_5)},{x:"Sexto",y:parseFloat(t.bimester_6)}],s.push(o),d+=`<tr>
                            <td>${t.g_year}</td>
                            ${r?`<td>${t.g_description}</td>`:""}
                            <td>${t.bimester_1}</td>
                            <td>${t.bimester_2}</td>
                            <td>${t.bimester_3}</td>
                            <td>${t.bimester_4}</td>
                            <td>${t.bimester_5}</td>
                            <td>${t.bimester_6}</td>
                            <td>${t.total}</td>
                        </tr>`}),i=`<table class="SnTable">
                            <thead>
                                <th>Año</th>
                                ${r?"<th>Nombre</th>":""}
                                <th>Primer</th>
                                <th>Segundo</th>
                                <th>Tercer</th>
                                <th>Cuarto</th>
                                <th>Quinto</th>
                                <th>Sexto</th>
                                <th>Total</th>
                            </thead>
                            <tbody>${d}</tbody>
                        </table>`;break;case"QUARTER":t.forEach(t=>{var e=a(0,360);(o={}).label=t.g_year,o.borderColor=`hsl(${e}deg, 56%, 46%)`,o.backgroundColor=`hsla(${e}deg, 56%, 46%, 0.3)`,o.data=[{x:"Primer",y:parseFloat(t.quarter_1)},{x:"Segundo",y:parseFloat(t.quarter_2)},{x:"Tercer",y:parseFloat(t.quarter_3)},{x:"Cuarto",y:parseFloat(t.quarter_4)}],s.push(o),d+=`<tr>
                            <td>${t.g_year}</td>
                            ${r?`<td>${t.g_description}</td>`:""}
                            <td>${t.quarter_1}</td>
                            <td>${t.quarter_2}</td>
                            <td>${t.quarter_3}</td>
                            <td>${t.quarter_4}</td>
                            <td>${t.total}</td>
                        </tr>`}),i=`<table class="SnTable">
                            <thead>
                                <th>Año</th>
                                ${r?"<th>Nombre</th>":""}
                                <th>Primer</th>
                                <th>Segundo</th>
                                <th>Tercer</th>
                                <th>Cuarto</th>
                                <th>Total</th>
                            </thead>
                            <tbody>${d}</tbody>
                        </table>`;break;case"SEMESTER":t.forEach(t=>{var e=a(0,360);(o={}).label=t.g_year,o.borderColor=`hsl(${e}deg, 56%, 46%)`,o.backgroundColor=`hsla(${e}deg, 56%, 46%, 0.3)`,o.data=[{x:"Primer",y:parseFloat(t.semester_1)},{x:"Segundo",y:parseFloat(t.semester_2)}],s.push(o),d+=`<tr>
                            <td>${t.g_year}</td>
                            ${r?`<td>${t.g_description}</td>`:""}
                            <td>${t.semester_1}</td>
                            <td>${t.semester_2}</td>
                            <td>${t.total}</td>
                        </tr>`}),i=`<table class="SnTable">
                            <thead>
                                <th>Año</th>
                                ${r?"<th>Nombre</th>":""}
                                <th>Primer</th>
                                <th>Segundo</th>
                                <th>Total</th>
                            </thead>
                            <tbody>${d}</tbody>
                        </table>`;break;case"YEAR":o.label="Año",o.borderColor="#3379B7",o.backgroundColor="rgba(51, 121, 183, .3)",o.data=[],t.forEach(t=>{o.data.push({x:t.g_year,y:parseFloat(t.total)}),l.push(t.g_year),d+=`<tr>
                            <td>${t.g_year}</td>
                            ${r?`<td>${t.g_description}</td>`:""}
                            <td>${t.total}</td>
                        </tr>`}),s.push(o),i=`<table class="SnTable">
                            <thead>
                                <th>Año</th>
                                ${r?"<th>Nombre</th>":""}
                                <th>Total</th>
                            </thead>
                            <tbody>${d}</tbody>
                        </table>`}purchaseStatisticChart.destroy(),purchaseStatisticChartSetting.type=e.chart,purchaseStatisticChartSetting.data.labels=l,purchaseStatisticChartSetting.data.datasets=s,purchaseStatisticChart=new Chart(document.getElementById("purchaseStatisticChart"),purchaseStatisticChartSetting),document.getElementById("purchaseStatisticTable").innerHTML=i}function statisticPurchaseClearIncludeList(){includeList=[],statisticPurchaseRenderIncludeList()}function statisticPurchaseAddIncludeList(){switch(document.getElementById("purchaseStatisticReport").value){case"PRODUCT":statisticPurchaseSearchProduct();break;case"USER":statisticPurchaseSearchUser();break;case"PROVIDER":statisticPurchaseChangeProvider()}}function statisticPurchaseRenderIncludeList(){let e=document.getElementById("purchaseStatisticTableBodySelected");e.innerHTML="",includeList.forEach(t=>{e.insertAdjacentHTML("beforeend",`<tr>
                                                        <td>${t.id}</td>
                                                        <td>${t.description}</td>
                                                        <td>
                                                            <button class="SnBtn icon radio sm jsAction" title="Eliminar" onclick="statisticPurchaseDeleteIncludeList(${t.id})">
                                                                <i class="fas fa-trash-alt"></i>
                                                            </button>
                                                        </td>
                                                    </tr>`)})}function statisticPurchaseDeleteIncludeList(e){includeList=includeList.filterable(t=>t.id!=e),statisticPurchaseRenderIncludeList()}document.addEventListener("DOMContentLoaded",()=>{document.getElementById("purchaseStatisticStartDate").addEventListener("change",t=>{t.preventDefault(),statisticPurchaseReload()}),document.getElementById("purchaseStatisticEndDate").addEventListener("change",t=>{t.preventDefault(),statisticPurchaseReload()}),document.getElementById("purchaseStatisticCurrencyId").addEventListener("change",t=>{t.preventDefault(),statisticPurchaseReload()}),document.getElementById("purchaseStatisticGroup").addEventListener("change",t=>{t.preventDefault(),statisticPurchaseReload()}),document.getElementById("purchaseStatisticChartType").addEventListener("change",t=>{t.preventDefault(),statisticPurchaseReload()}),document.getElementById("purchaseStatisticReport").addEventListener("change",t=>{t.preventDefault(),includeList=[],statisticPurchaseRenderIncludeList(),statisticPurchaseReload()}),purchaseStatisticChart=new Chart(document.getElementById("purchaseStatisticChart"),purchaseStatisticChartSetting),statisticPurchaseReload(),dynamicViewKeyboardListeners(screenName,appMenuActions)});let pProductSearchTable;function statisticPurchaseSearchProduct(){SnModal.open("productSearchModal"),pProductSearchTable=new SnTable({elementId:"drawSearchProductTable",entity:"product",data:t=>snTableFetchData("/admin/maintenanceProduct/tableSearch",t),actions:[],columns:[{title:"Código",field:"barcode",filterable:!0,sortable:!0},{title:"Descripción",field:"description",filterable:!0,sortable:!0},{title:"Precio 1",field:"purchase_price_1",filterable:!0,sortable:!0},{title:"Precio 2",field:"purchase_price_2",filterable:!0,sortable:!0},{title:"Precio 3",field:"purchase_price_3",filterable:!0,sortable:!0},{title:"Unidad medida",field:"purchase_unit_measure_id_description",filterable:!0,sortable:!0},{title:"Stock",field:"stock",filterable:!0,sortable:!0}],rowRender:(t,e)=>`<tr ondblclick="statisticPurchaseSelectRowProduct(${t.id},'${t.description}')">
                        ${e._buildSelectColumn(t)}
                        ${e._buildDataRow(t)}
                    </tr>`})}function statisticPurchaseSelectRowProduct(e,t){SnModal.close("productSearchModal"),null==includeList.find(t=>t.id==e)&&includeList.push({id:e,description:t}),statisticPurchaseRenderIncludeList()}function statisticPurchaseProductSearchReload(){pProductSearchTable.getData()}let pProviderSearchTable;function statisticPurchaseChangeProvider(){SnModal.open("providerSearchModal"),pProviderSearchTable=new SnTable({elementId:"drawSearchProviderTable",entity:"provider",url:"/admin/maintenanceProvider/tableSearch",actions:[],columns:[{title:"Tipo documento",field:"identity_document_id_description",filterable:!0,sortable:!0},{title:"Nº documento",field:"document_number",filterable:!0,sortable:!0},{title:"Razón social",field:"social_reason",filterable:!0,sortable:!0},{title:"Razón comercial",field:"commercial_reason",filterable:!0,sortable:!0},{title:"Dirección",field:"fiscal_address",filterable:!0,sortable:!0},{title:"Email",field:"email",filterable:!0,sortable:!0},{title:"Telefono",field:"telephone",filterable:!0,sortable:!0}],rowRender:(t,e)=>`<tr ondblclick="statisticPurchaseSelectRowProvider(${t.id},'${t.social_reason}')">
                        ${e._buildSelectColumn(t)}
                        ${e._buildDataRow(t)}
                    </tr>`})}function statisticPurchaseSelectRowProvider(e,t){SnModal.close("providerSearchModal"),null==includeList.find(t=>t.id==e)&&includeList.push({id:e,description:t}),statisticPurchaseRenderIncludeList()}function statisticPurchaseProviderSearchReload(){pProviderSearchTable.getData()}let pUserSearchTable;function statisticPurchaseSearchUser(){SnModal.open("userSearchModal"),pUserSearchTable=new SnTable({elementId:"drawSearchUserTable",entity:"user",url:"/admin/appUser/tableSearch",actions:[],columns:[{title:"Usuario",field:"user_name",filterable:!0,sortable:!0},{title:"Tipo documento",field:"identity_document_id_description",filterable:!0,sortable:!0},{title:"N° de documento",field:"identity_document_number",filterable:!0,sortable:!0},{title:"Nombres",field:"full_name",filterable:!0,sortable:!0},{title:"Apellidos",field:"last_name",filterable:!0,sortable:!0},{title:"Email",field:"email",filterable:!0,sortable:!0},{title:"Rol",field:"user_role_id_description",filterable:!0,sortable:!0}],rowRender:(t,e)=>`<tr ondblclick="statisticPurchaseSelectRowUser(${t.id},'${t.user_name}')">
                        ${e._buildSelectColumn(t)}
                        ${e._buildDataRow(t)}
                    </tr>`})}function statisticPurchaseSelectRowUser(e,t){SnModal.close("userSearchModal"),null==includeList.find(t=>t.id==e)&&includeList.push({id:e,description:t}),statisticPurchaseRenderIncludeList()}function statisticPurchaseUserSearchReload(){pUserSearchTable.getData()}