let saleStatisticGeneralChart,includeList=[],saleStatisticChartSetting={type:"line",data:{},options:{responsive:!0,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}}}};function maintenanceTableReload(){statisticSaleReload()}function statisticSaleExportImage(t){var e=document.getElementById("saleStatisticChart").toDataURL("image/png").replace("image/png","image/octet-stream"),a=document.createElement("a");a.setAttribute("href",e),a.setAttribute("download","estadistica.png"),a.click()}function statisticSaleTableToPdf(t){dynamicTableToPdf("saleStatisticTable","Estadística ventas")}function statisticSaleTableToExcel(t){dynamicTableToExcel("saleStatisticTable","Estadística ventas")}function statisticSaleReload(){let e={};e.startDate=document.getElementById("saleStatisticStartDate").value,e.endDate=document.getElementById("saleStatisticEndDate").value,e.currencyId=document.getElementById("saleStatisticCurrencyId").value,e.group=document.getElementById("saleStatisticGroup").value,e.chart=document.getElementById("saleStatisticChartType").value,e.report=document.getElementById("saleStatisticReport").value,e.includeList=includeList.map(t=>t.id),SnLoadingState(!0,"jsAction"),RequestApi.fetch("/admin/statistic/saleStatistic",{method:"POST",body:e}).then(t=>{t.success?statisticSaleBuild(t.result,e):dynamicResponseErrorModalMessage(t)}).finally(t=>{SnLoadingState(!1,"jsAction")})}function statisticSaleBuild(t,a){const l=(t,e)=>t+Math.floor(Math.random()*(e-t+1)),r="GENERAL"!=a.report,i=["radar","polarArea","doughnut"].includes(a.chart);let e="",o="",s=[],d={},n=[];switch(a.group){case"HOUR":d.label="Dia",d.borderColor="#3379B7",d.backgroundColor="line"===a.chart?"rgba(51, 121, 183, .3)":"#3379B7",d.data=[],t.forEach(t=>{o+=`<tr>
                            <td>${t.g_hour}</td>
                            ${r?`<td>${t.g_description}</td>`:""}
                            <td>${t.total}</td>
                        </tr>`,i?d.data.push(parseFloat(t.total)):d.data.push({x:t.g_hour,y:parseFloat(t.total)}),n.push(t.g_hour)}),s.push(d),e=`<table class="SnTable">
                            <thead>
                                <th>Hora</th>
                                ${r?"<th>Nombre</th>":""}
                                <th>Total</th>
                            </thead>
                            <tbody>${o}</tbody>
                        </table>`;break;case"DAY":n=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],t.forEach(t=>{var e=l(0,360);(d={}).label=(`${t.g_description||""} `+t.g_weeks).trim(),d.borderColor=`hsl(${e}deg, 56%, 46%)`,d.backgroundColor="line"===a.chart?`hsla(${e}deg, 56%, 46%, 0.3)`:`hsl(${e}deg, 56%, 46%)`,i?d.data=[parseFloat(t.weekday_7),parseFloat(t.weekday_1),parseFloat(t.weekday_2),parseFloat(t.weekday_3),parseFloat(t.weekday_4),parseFloat(t.weekday_5),parseFloat(t.weekday_6)]:d.data=[{x:"Domingo",y:parseFloat(t.weekday_7)},{x:"Lunes",y:parseFloat(t.weekday_1)},{x:"Martes",y:parseFloat(t.weekday_2)},{x:"Miércoles",y:parseFloat(t.weekday_3)},{x:"Jueves",y:parseFloat(t.weekday_4)},{x:"Viernes",y:parseFloat(t.weekday_5)},{x:"Sábado",y:parseFloat(t.weekday_6)}],s.push(d),o+=`<tr>
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
                        </tr>`}),e=`<table class="SnTable">
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
                            <tbody>${o}</tbody>
                        </table>`;break;case"MONTH":t.forEach(t=>{var e=l(0,360);(d={}).label=(`${t.g_description||""} `+t.g_year).trim(),d.borderColor=`hsl(${e}deg, 56%, 46%)`,d.backgroundColor="line"===a.chart?`hsla(${e}deg, 56%, 46%, 0.3)`:`hsl(${e}deg, 56%, 46%)`,i?d.data=[parseFloat(t.month_1),parseFloat(t.month_2),parseFloat(t.month_3),parseFloat(t.month_4),parseFloat(t.month_5),parseFloat(t.month_6),parseFloat(t.month_7),parseFloat(t.month_8),parseFloat(t.month_9),parseFloat(t.month_10),parseFloat(t.month_11),parseFloat(t.month_12)]:d.data=[{x:"Enero",y:parseFloat(t.month_1)},{x:"Febrero",y:parseFloat(t.month_2)},{x:"Marzo",y:parseFloat(t.month_3)},{x:"Abril",y:parseFloat(t.month_4)},{x:"Mayo",y:parseFloat(t.month_5)},{x:"Junio",y:parseFloat(t.month_6)},{x:"Julio",y:parseFloat(t.month_7)},{x:"Agosto",y:parseFloat(t.month_8)},{x:"Septiembre",y:parseFloat(t.month_9)},{x:"Octubre",y:parseFloat(t.month_10)},{x:"Noviembre",y:parseFloat(t.month_11)},{x:"Diciembre",y:parseFloat(t.month_12)}],s.push(d),o+=`<tr>
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
                        </tr>`}),e=`<table class="SnTable">
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
                            <tbody>${o}</tbody>
                        </table>`;break;case"BIMESTER":t.forEach(t=>{var e=l(0,360);(d={}).label=(`${t.g_description||""} `+t.g_year).trim(),d.borderColor=`hsl(${e}deg, 56%, 46%)`,d.backgroundColor="line"===a.chart?`hsla(${e}deg, 56%, 46%, 0.3)`:`hsl(${e}deg, 56%, 46%)`,i?d.data=[parseFloat(t.bimester_1),parseFloat(t.bimester_2),parseFloat(t.bimester_3),parseFloat(t.bimester_4),parseFloat(t.bimester_5),parseFloat(t.bimester_6)]:d.data=[{x:"Primer",y:parseFloat(t.bimester_1)},{x:"Segundo",y:parseFloat(t.bimester_2)},{x:"Tercer",y:parseFloat(t.bimester_3)},{x:"Cuarto",y:parseFloat(t.bimester_4)},{x:"Quinto",y:parseFloat(t.bimester_5)},{x:"Sexto",y:parseFloat(t.bimester_6)}],s.push(d),o+=`<tr>
                            <td>${t.g_year}</td>
                            ${r?`<td>${t.g_description}</td>`:""}
                            <td>${t.bimester_1}</td>
                            <td>${t.bimester_2}</td>
                            <td>${t.bimester_3}</td>
                            <td>${t.bimester_4}</td>
                            <td>${t.bimester_5}</td>
                            <td>${t.bimester_6}</td>
                            <td>${t.total}</td>
                        </tr>`}),e=`<table class="SnTable">
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
                            <tbody>${o}</tbody>
                        </table>`;break;case"QUARTER":t.forEach(t=>{var e=l(0,360);(d={}).label=(`${t.g_description||""} `+t.g_year).trim(),d.borderColor=`hsl(${e}deg, 56%, 46%)`,d.backgroundColor="line"===a.chart?`hsla(${e}deg, 56%, 46%, 0.3)`:`hsl(${e}deg, 56%, 46%)`,i?d.data=[parseFloat(t.quarter_1),parseFloat(t.quarter_2),parseFloat(t.quarter_3),parseFloat(t.quarter_4)]:d.data=[{x:"Primer",y:parseFloat(t.quarter_1)},{x:"Segundo",y:parseFloat(t.quarter_2)},{x:"Tercer",y:parseFloat(t.quarter_3)},{x:"Cuarto",y:parseFloat(t.quarter_4)}],s.push(d),o+=`<tr>
                            <td>${t.g_year}</td>
                            ${r?`<td>${t.g_description}</td>`:""}
                            <td>${t.quarter_1}</td>
                            <td>${t.quarter_2}</td>
                            <td>${t.quarter_3}</td>
                            <td>${t.quarter_4}</td>
                            <td>${t.total}</td>
                        </tr>`}),e=`<table class="SnTable">
                            <thead>
                                <th>Año</th>
                                ${r?"<th>Nombre</th>":""}
                                <th>Primer</th>
                                <th>Segundo</th>
                                <th>Tercer</th>
                                <th>Cuarto</th>
                                <th>Total</th>
                            </thead>
                            <tbody>${o}</tbody>
                        </table>`;break;case"SEMESTER":t.forEach(t=>{var e=l(0,360);(d={}).label=(`${t.g_description||""} `+t.g_year).trim(),d.borderColor=`hsl(${e}deg, 56%, 46%)`,d.backgroundColor="line"===a.chart?`hsla(${e}deg, 56%, 46%, 0.3)`:`hsl(${e}deg, 56%, 46%)`,i?d.data=[parseFloat(t.semester_1),parseFloat(t.semester_2)]:d.data=[{x:"Primer",y:parseFloat(t.semester_1)},{x:"Segundo",y:parseFloat(t.semester_2)}],s.push(d),o+=`<tr>
                            <td>${t.g_year}</td>
                            ${r?`<td>${t.g_description}</td>`:""}
                            <td>${t.semester_1}</td>
                            <td>${t.semester_2}</td>
                            <td>${t.total}</td>
                        </tr>`}),e=`<table class="SnTable">
                            <thead>
                                <th>Año</th>
                                ${r?"<th>Nombre</th>":""}
                                <th>Primer</th>
                                <th>Segundo</th>
                                <th>Total</th>
                            </thead>
                            <tbody>${o}</tbody>
                        </table>`;break;case"YEAR":d.label="Año",d.borderColor="#3379B7",d.backgroundColor="rgba(51, 121, 183, .3)",d.backgroundColor="line"===a.chart?"rgba(51, 121, 183, .3)":"#3379B7",d.data=[],t.forEach(t=>{i?d.data.push(parseFloat(t.total)):d.data.push({x:t.g_year,y:parseFloat(t.total)}),n.push(t.g_year),o+=`<tr>
                            <td>${t.g_year}</td>
                            ${r?`<td>${t.g_description}</td>`:""}
                            <td>${t.total}</td>
                        </tr>`}),s.push(d),e=`<table class="SnTable">
                            <thead>
                                <th>Año</th>
                                ${r?"<th>Nombre</th>":""}
                                <th>Total</th>
                            </thead>
                            <tbody>${o}</tbody>
                        </table>`}saleStatisticChart.destroy(),saleStatisticChartSetting.type=a.chart,saleStatisticChartSetting.data.labels=n,saleStatisticChartSetting.data.datasets=s,saleStatisticChart=new Chart(document.getElementById("saleStatisticChart"),saleStatisticChartSetting),document.getElementById("saleStatisticTable").innerHTML=e}function statisticSaleClearIncludeList(){includeList=[],statisticSaleRenderIncludeList()}function statisticSaleAddIncludeList(){switch(document.getElementById("saleStatisticReport").value){case"PRODUCT":statisticSaleSearchProduct();break;case"USER":statisticSaleSearchUser();break;case"CUSTOMER":statisticSaleChangeCustomer()}}function statisticSaleRenderIncludeList(){let e=document.getElementById("saleStatisticTableBodySelected");e.innerHTML="",includeList.forEach(t=>{e.insertAdjacentHTML("beforeend",`<tr>
                                                        <td>${t.id}</td>
                                                        <td>${t.description}</td>
                                                        <td>
                                                            <button class="SnBtn icon radio sm jsAction" title="Eliminar" onclick="statisticSaleDeleteIncludeList(${t.id})">
                                                                <i class="fas fa-trash-alt"></i>
                                                            </button>
                                                        </td>
                                                    </tr>`)})}function statisticSaleDeleteIncludeList(e){includeList=includeList.filterable(t=>t.id!=e),statisticSaleRenderIncludeList()}document.addEventListener("DOMContentLoaded",()=>{document.getElementById("saleStatisticStartDate").addEventListener("change",t=>{t.preventDefault(),statisticSaleReload()}),document.getElementById("saleStatisticEndDate").addEventListener("change",t=>{t.preventDefault(),statisticSaleReload()}),document.getElementById("saleStatisticCurrencyId").addEventListener("change",t=>{t.preventDefault(),statisticSaleReload()}),document.getElementById("saleStatisticGroup").addEventListener("change",t=>{t.preventDefault(),statisticSaleReload()}),document.getElementById("saleStatisticChartType").addEventListener("change",t=>{t.preventDefault(),statisticSaleReload()}),document.getElementById("saleStatisticReport").addEventListener("change",t=>{t.preventDefault(),includeList=[],statisticSaleRenderIncludeList(),statisticSaleReload()}),saleStatisticChart=new Chart(document.getElementById("saleStatisticChart"),saleStatisticChartSetting),statisticSaleReload(),dynamicViewKeyboardListeners(screenName,appMenuActions)});let pProductSearchTable;function statisticSaleSearchProduct(){SnModal.open("productSearchModal"),pProductSearchTable=new SnTable({elementId:"drawSearchProductTable",entity:"product",data:t=>snTableFetchData("/admin/maintenanceProduct/tableSearch",t),actions:[],columns:[{title:"Código",field:"barcode",filterable:!0,sortable:!0},{title:"Descripción",field:"description",filterable:!0,sortable:!0},{title:"Precio 1",field:"sale_price_1",filterable:!0,sortable:!0},{title:"Precio 2",field:"sale_price_2",filterable:!0,sortable:!0},{title:"Precio 3",field:"sale_price_3",filterable:!0,sortable:!0},{title:"Unidad medida",field:"sale_unit_measure_id_description",filterable:!0,sortable:!0},{title:"Stock",field:"stock",filterable:!0,sortable:!0}],rowRender:(t,e)=>`<tr ondblclick="statisticSaleSelectRowProduct(${t.id},'${t.description}')">
                        ${e._buildSelectColumn(t)}
                        ${e._buildDataRow(t)}
                    </tr>`})}function statisticSaleSelectRowProduct(e,t){SnModal.close("productSearchModal"),null==includeList.find(t=>t.id==e)&&includeList.push({id:e,description:t}),statisticSaleRenderIncludeList()}function statisticSaleProductSearchReload(){pProductSearchTable.getData()}let pCustomerSearchTable;function statisticSaleChangeCustomer(){SnModal.open("customerSearchModal"),pCustomerSearchTable=new SnTable({elementId:"drawSearchCustomerTable",entity:"customer",url:"/admin/maintenanceCustomer/tableSearch",actions:[],columns:[{title:"Tipo documento",field:"identity_document_id_description",filterable:!0,sortable:!0},{title:"Nº documento",field:"document_number",filterable:!0,sortable:!0},{title:"Razón social",field:"social_reason",filterable:!0,sortable:!0},{title:"Razón comercial",field:"commercial_reason",filterable:!0,sortable:!0},{title:"Dirección",field:"fiscal_address",filterable:!0,sortable:!0},{title:"Email",field:"email",filterable:!0,sortable:!0},{title:"Telefono",field:"telephone",filterable:!0,sortable:!0}],rowRender:(t,e)=>`<tr ondblclick="statisticSaleSelectRowCustomer(${t.id},'${t.social_reason}')">
                        ${e._buildSelectColumn(t)}
                        ${e._buildDataRow(t)}
                    </tr>`})}function statisticSaleSelectRowCustomer(e,t){SnModal.close("customerSearchModal"),null==includeList.find(t=>t.id==e)&&includeList.push({id:e,description:t}),statisticSaleRenderIncludeList()}function statisticSaleCustomerSearchReload(){pCustomerSearchTable.getData()}let pUserSearchTable;function statisticSaleSearchUser(){SnModal.open("userSearchModal"),pUserSearchTable=new SnTable({elementId:"drawSearchUserTable",entity:"user",url:"/admin/appUser/tableSearch",actions:[],columns:[{title:"Usuario",field:"user_name",filterable:!0,sortable:!0},{title:"Tipo documento",field:"identity_document_id_description",filterable:!0,sortable:!0},{title:"N° de documento",field:"identity_document_number",filterable:!0,sortable:!0},{title:"Nombres",field:"full_name",filterable:!0,sortable:!0},{title:"Apellidos",field:"last_name",filterable:!0,sortable:!0},{title:"Email",field:"email",filterable:!0,sortable:!0},{title:"Rol",field:"user_role_id_description",filterable:!0,sortable:!0}],rowRender:(t,e)=>`<tr ondblclick="statisticSaleSelectRowUser(${t.id},'${t.user_name}')">
                        ${e._buildSelectColumn(t)}
                        ${e._buildDataRow(t)}
                    </tr>`})}function statisticSaleSelectRowUser(e,t){SnModal.close("userSearchModal"),null==includeList.find(t=>t.id==e)&&includeList.push({id:e,description:t}),statisticSaleRenderIncludeList()}function statisticSaleUserSearchReload(){pUserSearchTable.getData()}