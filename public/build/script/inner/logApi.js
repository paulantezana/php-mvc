let apiTable;function formatExecutionTime(e){e=Number(e);let i;return i=e<3600?e.toFixed(3)+" seconds":(e/3600).toFixed(3)+" hours",console.log("data"),i}let appMenuActions=[];function apiReload(){apiTable.getData()}function apiTableToPdf(e){dynamicTableToPdf(e+"Table","Api")}function apiTableToExcel(e){dynamicTableToExcel(e+"Table","Api")}function apiOpenLogDetail(i){SnModal.open("apiLogDetailModal");var t=apiTable?.result?.data;if(t){t=t.find(e=>e.id==i);let e=t.content;try{var a=JSON.parse(t.content);e=JSON.stringify(a,null,2)}catch(e){}document.getElementById("apiLogDetailModalWrapper").innerHTML=`
          <div class="SnMb-5">
              <div><strong>Accion</strong></div>
              <div>${t.action}</div>
          </div>
          <div class="SnMb-5">
              <div><strong>Documento</strong></div>
              <div>${t.document}</div>
          </div>
          <div class="SnMb-5">
              <div><strong>Duración</strong></div>
              <div>${formatExecutionTime(t.duration)}</div>
          </div>
          <div class="SnMb-5">
                <div><strong>Origen</strong></div>
                <div class="CodeViwer">${t.origin}</div>
          </div>
          <div class="SnMb-5">
              <div><strong>Observation</strong></div>
              <div>${t.observation}</div>
          </div>
          <div class="SnMb-5">
              <div><strong>Contenido</strong></div>
              <div class="CodeViwer"><pre><code>${e}</code></pre></div>
          </div>`}else document.getElementById("apiLogDetailModalWrapper").innerHTML=""}document.addEventListener("DOMContentLoaded",()=>{apiTable=new SnTable({elementId:"drawApiTable",entity:"api",data:e=>snTableFetchData("/inner/logApi/table",e),actions:appMenuActions,selectable:!1,columns:[{title:"Fecha",field:"register_datetime",filterable:!0,sortable:!0},{title:"Documento",field:"document",filterable:!0,sortable:!0},{title:"Empresa RUC",field:"company_id_document_number",filterable:!0,sortable:!0},{title:"Empresa",field:"company_id_commercial_reason",filterable:!0,sortable:!0},{title:"Local",field:"ware_house_id_commercial_reason",filterable:!0,sortable:!0},{title:"Acción",field:"action",filterable:!0,sortable:!0},{title:"Duracion",field:"duration",filterable:!0,sortable:!0,customRender:e=>formatExecutionTime(e.duration)},{title:"Observatión",field:"observation",filterable:!0,sortable:!0},{title:"Estado",field:"state",filterable:!0,sortable:!0},{title:"",field:"-",filterable:!1,sortable:!1,customRender:e=>`<button class="SnBtn radio sm icon" onclick="apiOpenLogDetail(${e.id})"><i class="fa-solid fa-up-right-from-square"></i></button>`},...snTableAuditColumnRender()]}),dynamicViewKeyboardListeners("api",appMenuActions)});