let exceptionTable,appMenuActions=[];function exceptionReload(){exceptionTable.getData()}function exceptionTableToPdf(e){dynamicTableToPdf(e+"Table","Exception")}function exceptionTableToExcel(e){dynamicTableToExcel(e+"Table","Exception")}function exceptionOpenLogDetail(t){SnModal.open("exceptionLogDetailModal");var n=exceptionTable?.result?.data;if(n){n=n.find(e=>e.id==t);let e=n.stack,i=n.content;try{var a=JSON.parse(n.stack),d=(e=JSON.stringify(a,null,2),JSON.parse(n.content));i=JSON.stringify(d,null,2)}catch(e){}document.getElementById("exceptionLogDetailModalWrapper").innerHTML=`
          <div class="SnMb-5">
              <div><strong>Fecha Creación</strong></div>
              <div>${n.created_at}</div>
          </div>
          <div class="SnMb-5">
              <div><strong>Usuario</strong></div>
              <div>${n.created_user}</div>
          </div>
          <div class="SnMb-5">
              <div><strong>Codigo</strong></div>
              <div>${n.id}</div>
          </div>
          <div class="SnMb-5">
              <div><strong>Origen</strong></div>
              <div>${n.host}</div>
          </div>
          <div class="SnMb-5">
              <div><strong>Ruta</strong></div>
              <div>${n.path}</div>
          </div>
          <div class="SnMb-5">
              <div><strong>Mensaje</strong></div>
              <div>${n.message}</div>
          </div>
          <div class="SnMb-5">
              <div><strong>Contenido</strong></div>
              <div class="CodeViwer"><pre><code>${i}</code></pre></div>
          </div>
          <div class="SnMb-5">
              <div><strong>Stack</strong></div>
              <div class="CodeViwer"><pre><code>${e}</code></pre></div>
          </div>`}else document.getElementById("exceptionLogDetailModalWrapper").innerHTML=""}document.addEventListener("DOMContentLoaded",()=>{exceptionTable=new SnTable({elementId:"drawExceptionTable",entity:"exception",data:e=>snTableFetchData("/inner/logException/table",e),actions:appMenuActions,selectable:!1,columns:[{title:"CODIGO",field:"id",filterable:!0,sortable:!0},{title:"Fecha creación",field:"created_at",filterable:!0,sortable:!0},{title:"Usuario",field:"created_user",filterable:!0,sortable:!0},{title:"Ruta",field:"path",filterable:!0,sortable:!0},{title:"Mensaje",field:"message",filterable:!0,sortable:!0},{title:"",field:"-",filterable:!1,sortable:!1,customRender:e=>`<button class="SnBtn radio sm icon" onclick="exceptionOpenLogDetail(${e.id})"><i class="fa-solid fa-up-right-from-square"></i></button>`},...snTableAuditColumnRender()]}),dynamicViewKeyboardListeners("exception",appMenuActions)});