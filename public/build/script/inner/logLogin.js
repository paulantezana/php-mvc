let loginTable,appMenuActions=[];function loginReload(){loginTable.getData()}function loginTableToPdf(e){dynamicTableToPdf(e+"Table","Login")}function loginTableToExcel(e){dynamicTableToExcel(e+"Table","Login")}function loginOpenLogDetail(n){SnModal.open("loginLogDetailModal");var t=loginTable?.result?.data;if(t){t=t.find(e=>e.id==n);let e=t.stack,i=t.content;try{var l=JSON.parse(t.stack),a=(e=JSON.stringify(l,null,2),JSON.parse(t.content));i=JSON.stringify(a,null,2)}catch(e){}document.getElementById("loginLogDetailModalWrapper").innerHTML=`
          <div class="SnMb-5">
              <div><strong>Fecha Creación</strong></div>
              <div>${t.created_at}</div>
          </div>
          <div class="SnMb-5">
              <div><strong>Usuario</strong></div>
              <div>${t.created_user}</div>
          </div>
          <div class="SnMb-5">
              <div><strong>Codigo</strong></div>
              <div>${t.id}</div>
          </div>
          <div class="SnMb-5">
              <div><strong>Origen</strong></div>
              <div>${t.host}</div>
          </div>
          <div class="SnMb-5">
              <div><strong>Ruta</strong></div>
              <div>${t.path}</div>
          </div>
          <div class="SnMb-5">
              <div><strong>Mensaje</strong></div>
              <div>${t.message}</div>
          </div>
          <div class="SnMb-5">
              <div><strong>Contenido</strong></div>
              <div class="CodeViwer"><pre><code>${i}</code></pre></div>
          </div>
          <div class="SnMb-5">
              <div><strong>Stack</strong></div>
              <div class="CodeViwer"><pre><code>${e}</code></pre></div>
          </div>`}else document.getElementById("loginLogDetailModalWrapper").innerHTML=""}document.addEventListener("DOMContentLoaded",()=>{loginTable=new SnTable({elementId:"drawLoginTable",entity:"login",data:e=>snTableFetchData("/inner/logLogin/table",e),actions:appMenuActions,selectable:!1,columns:[{title:"CODIGO",field:"id",filterable:!0,sortable:!0},{title:"Fecha registro",field:"register_datetime",filterable:!0,sortable:!0},{title:"Origen",field:"origin",filterable:!0,sortable:!0},{title:"Usuario",field:"user_id_user_name",filterable:!0,sortable:!0},{title:"RUC. Empresa",field:"company_id_document_number",filterable:!0,sortable:!0},{title:"CR. Empresa",field:"company_id_commercial_reason",filterable:!0,sortable:!0},{title:"",field:"-",filterable:!1,sortable:!1,customRender:e=>`<button class="SnBtn radio sm icon" onclick="loginOpenLogDetail(${e.id})"><i class="fa-solid fa-up-right-from-square"></i></button>`},...snTableAuditColumnRender()]}),dynamicViewKeyboardListeners("login",appMenuActions)});