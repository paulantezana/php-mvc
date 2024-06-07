let currentStatisticTab="GENERAL",utilityStatisticGeneralChart,includeList=[],utilityStatisticChartSetting={type:"line",data:{},options:{responsive:!0,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}}}};function maintenanceTableReload(){statisticUtilityReload()}function statisticUtilityExportImage(t){var e=document.getElementById("utilityStatisticChart").toDataURL("image/png").replace("image/png","image/octet-stream"),i=document.createElement("a");i.setAttribute("href",e),i.setAttribute("download","estadistica.png"),i.click()}function statisticUtilityTableToPdf(t){dynamicTableToPdf("utilityStatisticTable","Estadística ventas")}function statisticUtilityTableToExcel(t){dynamicTableToExcel("utilityStatisticTable","Estadística ventas")}function statisticUtilityReload(){let e={};e.startDate=document.getElementById("utilityStatisticStartDate").value,e.endDate=document.getElementById("utilityStatisticEndDate").value,e.currencyId=document.getElementById("utilityStatisticCurrencyId").value,e.group=document.getElementById("utilityStatisticGroup").value,e.chart=document.getElementById("utilityStatisticChartType").value,e.report=document.getElementById("utilityStatisticReport").value,e.includeList=includeList.map(t=>t.id),SnLoadingState(!0,"jsAction"),RequestApi.fetch("/admin/statistic/utilityStatistic",{method:"POST",body:e}).then(t=>{t.success?statisticUtilityBuild(t.result,e):dynamicResponseErrorModalMessage(t)}).finally(t=>{SnLoadingState(!1,"jsAction")})}function statisticUtilityBuild(t,e){const i=(t,e)=>t+Math.floor(Math.random()*(e-t+1)),a="GENERAL"!=e.report;let l="",d="",r=[],o={},s=[];switch(e.group){case"HOUR":o.label="Dia",o.borderColor="#3379B7",o.backgroundColor="rgba(51, 121, 183, .3)",o.data=[],t.forEach(t=>{d+=`<tr>
                            <td>${t.g_hour}</td>
                            ${a?`<td>${t.g_description}</td>`:""}
                            <td>${t.total}</td>
                        </tr>`,o.data.push({x:t.g_hour,y:parseFloat(t.total)}),s.push(t.g_hour)}),r.push(o),l=`<table class="SnTable">
                            <thead>
                                <th>Hora</th>
                                ${a?"<th>Nombre</th>":""}
                                <th>Utilidad</th>
                            </thead>
                            <tbody>${d}</tbody>
                        </table>`;break;case"DAY":s=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],t.forEach(t=>{var e=i(0,360);(o={}).label=t.g_weeks,o.borderColor=`hsl(${e}deg, 56%, 46%)`,o.backgroundColor=`hsla(${e}deg, 56%, 46%, 0.3)`,o.data=[{x:"Domingo",y:parseFloat(t.weekday_7)},{x:"Lunes",y:parseFloat(t.weekday_1)},{x:"Martes",y:parseFloat(t.weekday_2)},{x:"Miércoles",y:parseFloat(t.weekday_3)},{x:"Jueves",y:parseFloat(t.weekday_4)},{x:"Viernes",y:parseFloat(t.weekday_5)},{x:"Sábado",y:parseFloat(t.weekday_6)}],r.push(o),d+=`<tr>
                            <td>${t.g_weeks}</td>
                            ${a?`<td>${t.g_description}</td>`:""}
                            <td>${t.weekday_7}</td>
                            <td>${t.weekday_1}</td>
                            <td>${t.weekday_2}</td>
                            <td>${t.weekday_3}</td>
                            <td>${t.weekday_4}</td>
                            <td>${t.weekday_5}</td>
                            <td>${t.weekday_6}</td>
                            <td>${t.total}</td>
                        </tr>`}),l=`<table class="SnTable">
                            <thead>
                                <th>Fecha</th>
                                ${a?"<th>Nombre</th>":""}
                                <th>Domingo</th>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miércoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                                <th>Sábado</th>
                                <th>Utilidad</th>
                            </thead>
                            <tbody>${d}</tbody>
                        </table>`;break;case"MONTH":t.forEach(t=>{var e=i(0,360);(o={}).label=t.g_year,o.borderColor=`hsl(${e}deg, 56%, 46%)`,o.backgroundColor=`hsla(${e}deg, 56%, 46%, 0.3)`,o.data=[{x:"Enero",y:parseFloat(t.month_1)},{x:"Febrero",y:parseFloat(t.month_2)},{x:"Marzo",y:parseFloat(t.month_3)},{x:"Abril",y:parseFloat(t.month_4)},{x:"Mayo",y:parseFloat(t.month_5)},{x:"Junio",y:parseFloat(t.month_6)},{x:"Julio",y:parseFloat(t.month_7)},{x:"Agosto",y:parseFloat(t.month_8)},{x:"Septiembre",y:parseFloat(t.month_9)},{x:"Octubre",y:parseFloat(t.month_10)},{x:"Noviembre",y:parseFloat(t.month_11)},{x:"Diciembre",y:parseFloat(t.month_12)}],r.push(o),d+=`<tr>
                            <td>${t.g_year}</td>
                            ${a?`<td>${t.g_description}</td>`:""}
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
                        </tr>`}),l=`<table class="SnTable">
                            <thead>
                                <th>Año</th>
                                ${a?"<th>Nombre</th>":""}
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
                                <th>Utilidad</th>
                            </thead>
                            <tbody>${d}</tbody>
                        </table>`;break;case"BIMESTER":t.forEach(t=>{var e=i(0,360);(o={}).label=t.g_year,o.borderColor=`hsl(${e}deg, 56%, 46%)`,o.backgroundColor=`hsla(${e}deg, 56%, 46%, 0.3)`,o.data=[{x:"Primer",y:parseFloat(t.bimester_1)},{x:"Segundo",y:parseFloat(t.bimester_2)},{x:"Tercer",y:parseFloat(t.bimester_3)},{x:"Cuarto",y:parseFloat(t.bimester_4)},{x:"Quinto",y:parseFloat(t.bimester_5)},{x:"Sexto",y:parseFloat(t.bimester_6)}],r.push(o),d+=`<tr>
                            <td>${t.g_year}</td>
                            ${a?`<td>${t.g_description}</td>`:""}
                            <td>${t.bimester_1}</td>
                            <td>${t.bimester_2}</td>
                            <td>${t.bimester_3}</td>
                            <td>${t.bimester_4}</td>
                            <td>${t.bimester_5}</td>
                            <td>${t.bimester_6}</td>
                            <td>${t.total}</td>
                        </tr>`}),l=`<table class="SnTable">
                            <thead>
                                <th>Año</th>
                                ${a?"<th>Nombre</th>":""}
                                <th>Primer</th>
                                <th>Segundo</th>
                                <th>Tercer</th>
                                <th>Cuarto</th>
                                <th>Quinto</th>
                                <th>Sexto</th>
                                <th>Utilidad</th>
                            </thead>
                            <tbody>${d}</tbody>
                        </table>`;break;case"QUARTER":t.forEach(t=>{var e=i(0,360);(o={}).label=t.g_year,o.borderColor=`hsl(${e}deg, 56%, 46%)`,o.backgroundColor=`hsla(${e}deg, 56%, 46%, 0.3)`,o.data=[{x:"Primer",y:parseFloat(t.quarter_1)},{x:"Segundo",y:parseFloat(t.quarter_2)},{x:"Tercer",y:parseFloat(t.quarter_3)},{x:"Cuarto",y:parseFloat(t.quarter_4)}],r.push(o),d+=`<tr>
                            <td>${t.g_year}</td>
                            ${a?`<td>${t.g_description}</td>`:""}
                            <td>${t.quarter_1}</td>
                            <td>${t.quarter_2}</td>
                            <td>${t.quarter_3}</td>
                            <td>${t.quarter_4}</td>
                            <td>${t.total}</td>
                        </tr>`}),l=`<table class="SnTable">
                            <thead>
                                <th>Año</th>
                                ${a?"<th>Nombre</th>":""}
                                <th>Primer</th>
                                <th>Segundo</th>
                                <th>Tercer</th>
                                <th>Cuarto</th>
                                <th>Utilidad</th>
                            </thead>
                            <tbody>${d}</tbody>
                        </table>`;break;case"SEMESTER":t.forEach(t=>{var e=i(0,360);(o={}).label=t.g_year,o.borderColor=`hsl(${e}deg, 56%, 46%)`,o.backgroundColor=`hsla(${e}deg, 56%, 46%, 0.3)`,o.data=[{x:"Primer",y:parseFloat(t.semester_1)},{x:"Segundo",y:parseFloat(t.semester_2)}],r.push(o),d+=`<tr>
                            <td>${t.g_year}</td>
                            ${a?`<td>${t.g_description}</td>`:""}
                            <td>${t.semester_1}</td>
                            <td>${t.semester_2}</td>
                            <td>${t.total}</td>
                        </tr>`}),l=`<table class="SnTable">
                            <thead>
                                <th>Año</th>
                                ${a?"<th>Nombre</th>":""}
                                <th>Primer</th>
                                <th>Segundo</th>
                                <th>Utilidad</th>
                            </thead>
                            <tbody>${d}</tbody>
                        </table>`;break;case"YEAR":o.label="Año",o.borderColor="#3379B7",o.backgroundColor="rgba(51, 121, 183, .3)",o.data=[],t.forEach(t=>{o.data.push({x:t.g_year,y:parseFloat(t.total)}),s.push(t.g_year),d+=`<tr>
                            <td>${t.g_year}</td>
                            ${a?`<td>${t.g_description}</td>`:""}
                            <td>${t.total}</td>
                        </tr>`}),r.push(o),l=`<table class="SnTable">
                            <thead>
                                <th>Año</th>
                                ${a?"<th>Nombre</th>":""}
                                <th>Utilidad</th>
                            </thead>
                            <tbody>${d}</tbody>
                        </table>`}utilityStatisticChart.destroy(),utilityStatisticChartSetting.type=e.chart,utilityStatisticChartSetting.data.labels=s,utilityStatisticChartSetting.data.datasets=r,utilityStatisticChart=new Chart(document.getElementById("utilityStatisticChart"),utilityStatisticChartSetting),document.getElementById("utilityStatisticTable").innerHTML=l}function statisticUtilityClearIncludeList(){includeList=[],statisticUtilityRenderIncludeList()}function statisticUtilityAddIncludeList(){switch(document.getElementById("utilityStatisticReport").value){case"PRODUCT":statisticUtilitySearchProduct();break;case"USER":statisticUtilitySearchUser();break;case"CUSTOMER":statisticUtilityChangeCustomer()}}function statisticUtilityRenderIncludeList(){let e=document.getElementById("utilityStatisticTableBodySelected");e.innerHTML="",includeList.forEach(t=>{e.insertAdjacentHTML("beforeend",`<tr>
                                                        <td>${t.id}</td>
                                                        <td>${t.description}</td>
                                                        <td>
                                                            <button class="SnBtn icon radio sm jsAction" title="Eliminar" onclick="statisticUtilityDeleteIncludeList(${t.id})">
                                                                <i class="fas fa-trash-alt"></i>
                                                            </button>
                                                        </td>
                                                    </tr>`)})}function statisticUtilityDeleteIncludeList(e){includeList=includeList.filterable(t=>t.id!=e),statisticUtilityRenderIncludeList()}document.addEventListener("DOMContentLoaded",()=>{document.getElementById("utilityStatisticStartDate").addEventListener("change",t=>{t.preventDefault(),statisticUtilityReload()}),document.getElementById("utilityStatisticEndDate").addEventListener("change",t=>{t.preventDefault(),statisticUtilityReload()}),document.getElementById("utilityStatisticCurrencyId").addEventListener("change",t=>{t.preventDefault(),statisticUtilityReload()}),document.getElementById("utilityStatisticGroup").addEventListener("change",t=>{t.preventDefault(),statisticUtilityReload()}),document.getElementById("utilityStatisticChartType").addEventListener("change",t=>{t.preventDefault(),statisticUtilityReload()}),document.getElementById("utilityStatisticReport").addEventListener("change",t=>{t.preventDefault(),includeList=[],statisticUtilityRenderIncludeList(),statisticUtilityReload()}),utilityStatisticChart=new Chart(document.getElementById("utilityStatisticChart"),utilityStatisticChartSetting),statisticUtilityReload(),dynamicViewKeyboardListeners(screenName,appMenuActions)});let pProductSearchTable;function statisticUtilitySearchProduct(){SnModal.open("productSearchModal"),pProductSearchTable=new SnTable({elementId:"drawSearchProductTable",entity:"product",data:t=>snTableFetchData("/admin/maintenanceProduct/tableSearch",t),actions:[],columns:[{title:"Código",field:"barcode",filterable:!0,sortable:!0},{title:"Descripción",field:"description",filterable:!0,sortable:!0},{title:"Precio 1",field:"utility_price_1",filterable:!0,sortable:!0},{title:"Precio 2",field:"utility_price_2",filterable:!0,sortable:!0},{title:"Precio 3",field:"utility_price_3",filterable:!0,sortable:!0},{title:"Unidad medida",field:"utility_unit_measure_id_description",filterable:!0,sortable:!0},{title:"Stock",field:"stock",filterable:!0,sortable:!0}],rowRender:(t,e)=>`<tr ondblclick="statisticUtilitySelectRowProduct(${t.id},'${t.description}')">
                        ${e._buildSelectColumn(t)}
                        ${e._buildDataRow(t)}
                    </tr>`})}function statisticUtilitySelectRowProduct(e,t){SnModal.close("productSearchModal"),null==includeList.find(t=>t.id==e)&&includeList.push({id:e,description:t}),statisticUtilityRenderIncludeList()}function statisticUtilityProductSearchReload(){pProductSearchTable.getData()}let pCustomerSearchTable;function statisticUtilityChangeCustomer(){SnModal.open("customerSearchModal"),pCustomerSearchTable=new SnTable({elementId:"drawSearchCustomerTable",entity:"customer",url:"/admin/maintenanceCustomer/tableSearch",actions:[],columns:[{title:"Tipo documento",field:"identity_document_id_description",filterable:!0,sortable:!0},{title:"Nº documento",field:"document_number",filterable:!0,sortable:!0},{title:"Razón social",field:"social_reason",filterable:!0,sortable:!0},{title:"Razón comercial",field:"commercial_reason",filterable:!0,sortable:!0},{title:"Dirección",field:"fiscal_address",filterable:!0,sortable:!0},{title:"Email",field:"email",filterable:!0,sortable:!0},{title:"Telefono",field:"telephone",filterable:!0,sortable:!0}],rowRender:(t,e)=>`<tr ondblclick="statisticUtilitySelectRowCustomer(${t.id},'${t.social_reason}')">
                        ${e._buildSelectColumn(t)}
                        ${e._buildDataRow(t)}
                    </tr>`})}function statisticUtilitySelectRowCustomer(e,t){SnModal.close("customerSearchModal"),null==includeList.find(t=>t.id==e)&&includeList.push({id:e,description:t}),statisticUtilityRenderIncludeList()}function statisticUtilityCustomerSearchReload(){pCustomerSearchTable.getData()}let pUserSearchTable;function statisticUtilitySearchUser(){SnModal.open("userSearchModal"),pUserSearchTable=new SnTable({elementId:"drawSearchUserTable",entity:"user",url:"/admin/appUser/tableSearch",actions:[],columns:[{title:"Usuario",field:"user_name",filterable:!0,sortable:!0},{title:"Tipo documento",field:"identity_document_id_description",filterable:!0,sortable:!0},{title:"N° de documento",field:"identity_document_number",filterable:!0,sortable:!0},{title:"Nombres",field:"full_name",filterable:!0,sortable:!0},{title:"Apellidos",field:"last_name",filterable:!0,sortable:!0},{title:"Email",field:"email",filterable:!0,sortable:!0},{title:"Rol",field:"user_role_id_description",filterable:!0,sortable:!0}],rowRender:(t,e)=>`<tr ondblclick="statisticUtilitySelectRowUser(${t.id},'${t.user_name}')">
                        ${e._buildSelectColumn(t)}
                        ${e._buildDataRow(t)}
                    </tr>`})}function statisticUtilitySelectRowUser(e,t){SnModal.close("userSearchModal"),null==includeList.find(t=>t.id==e)&&includeList.push({id:e,description:t}),statisticUtilityRenderIncludeList()}function statisticUtilityUserSearchReload(){pUserSearchTable.getData()}