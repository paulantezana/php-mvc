document.addEventListener("DOMContentLoaded",()=>{maintenanceTable=new SnTable({elementId:"drawCategoryTable",entity:"category",data:e=>snTableFetchData("/admin/maintenanceCategory/table",e),actions:appMenuActions,selectable:!1,columns:[{title:"Descripción",field:"description",filterable:!0,sortable:!0},...snTableAuditColumnRender()],filters:[...getUrlFilter()]})});