let pValidator,slimProductProductCatalogCode;function productNewList(e,t){window.location.href=URL_PATH+"/admin/"+t}function productSubmit(e){if(pValidator.validate()){SnLoadingState(!0,"jsAction","productFormSubmit");var t={};t.id=e.productId.value||0,t.description=e.productDescription.value,t.barcode=e.productBarcode.value,t.stockMin=e.productStockMin.value,t.stockMax=e.productStockMax.value,t.purchasePrice=e.productPurchasePrice.value,t.lot=e.productLot.checked?1:0,t.recipe=e.productRecipe.checked?1:0,t.salePrice1=e.productSalePrice1.value,t.salePrice2=e.productSalePrice2.value,t.salePrice3=e.productSalePrice3.value,t.wholeSale2=e.productWholeSale2.value,t.wholeSale3=e.productWholeSale3.value,t.purchaseUnitMeasureId=e.productPurchaseUnitMeasureId.value,t.saleUnitMeasureId=e.productSaleUnitMeasureId.value,t.factor=e.productFactor.value,t.categoryId=e.productCategoryId.value,t.productCatalogCode=e.productProductCatalogCode.value,8!==t.productCatalogCode.length&&(t.productCatalogCode="10000000");const o=t.id&&!["","0"].includes(t.id.toString());RequestApi.fetch("/admin/maintenanceProduct/"+(o?"update":"create"),{method:"POST",body:t}).then(e=>{e.success?dynamicResponseSuccess(o,e.message,()=>{o?window.location.href=URL_PATH+"/admin/maintenanceProduct/edit/"+e.result.id:dynamicClearForm(pValidator,"productForm","productBarcode")},()=>window.location.href=URL_PATH+"/admin/maintenanceProduct"):dynamicResponseErrorModalMessage(e)}).finally(e=>{SnLoadingState(!1,"jsAction","productFormSubmit")})}else dynamicFormSubmitInvalidMessage()}function productLotOnChange(){const a=document.getElementById("productId").value;SnLoadingState(!0,"jsAction"),RequestApi.fetch("/admin/maintenanceProduct/idSearch",{method:"POST",body:{id:a}}).then(e=>{if(e.success){const t=e.result.product,o=parseFloat(t.stock);"1"==t.lot?0<o&&SnModal.confirm({title:"¿Este articulo aun contiene lotes vinculados a él desea eliminarlos?",content:"Esta operación es irreversible",okText:"Si",okClassNames:"danger",cancelText:"No",onOk(){SnLoadingState(!0,"jsAction"),RequestApi.fetch("/admin/maintenanceLot/migrateToStock",{method:"POST",body:{productId:a,stock:o}}).then(e=>{e.success?(SnMessage.success({content:e.message}),document.getElementById("productLot").checked=!1):(dynamicResponseErrorModalMessage(e),document.getElementById("productLot").checked=1==t.lot)}).finally(e=>{SnLoadingState(!1,"jsAction")})},onCancel(){document.getElementById("productLot").checked=1==t.lot}}):0<o?(document.getElementById("lotProcessProductId").value=t.id,document.getElementById("lotProcessProduct").value=t.description,document.getElementById("lotProcessQuantity").value=o,lotProcessCalculate(),SnModal.open("lotProcessModal")):o<0&&(SnModal.warning({title:"VALIDACIÓN",content:"No se puede marcar un articulo para su manejo por lotes cuando su existencia es negativa"}),document.getElementById("productLot").checked=!1)}else dynamicResponseErrorModalMessage(e)}).finally(e=>{SnLoadingState(!1,"jsAction")})}function lotProcessModalSubmit(){let m=[],p=document.getElementById("lotProcessProductId").value;[...document.getElementById("lotProcessTableBody").children].map((e,t)=>{var o=e.dataset.delete,e=e.dataset.id,a=document.getElementById("lotProcessTableBodyRowNumber"+e).innerHTML,c=document.getElementById("lotProcessTableBodyRowInitialStock"+e).innerHTML,n=document.getElementById("lotProcessTableBodyRowCurrentStock"+e).innerHTML,d=document.getElementById("lotProcessTableBodyRowManufacturingDate"+e).innerHTML,s=document.getElementById("lotProcessTableBodyRowExpirationDate"+e).innerHTML,r=document.getElementById("lotProcessTableBodyRowCustomsName"+e).innerHTML,l=document.getElementById("lotProcessTableBodyRowCustomsDocumentDate"+e).innerHTML,i=document.getElementById("lotProcessTableBodyRowPetition"+e).innerHTML,u={};u.id=e,u.delete=1==o,u.number=a,u.initialStock=c,u.currentStock=n,u.manufacturingDate=d,u.expirationDate=s,u.productId=p,u.customsName=r,u.customsDocumentDate=l,u.petition=i,m.push(u)});var e=lotProcessCalculate();0!=e?SnModal.warning({title:"ALERTA USUARIO",content:"La existencia actual en lote es "+(0<e?"mayor":"menor")+" a la existencia captura, no se puede continuar así"}):(SnLoadingState(!0,"jsAction","lotProcessModalSubmit"),RequestApi.fetch("/admin/maintenanceLot/migrateToLot",{method:"POST",body:{productId:p,lots:m}}).then(e=>{e.success?(SnMessage.success({content:e.message}),document.getElementById("productLot").checked=!0,SnModal.close("lotProcessModal")):(dynamicResponseErrorModalMessage(e),document.getElementById("productLot").checked=!1)}).finally(e=>{SnLoadingState(!1,"jsAction","lotProcessModalSubmit")}))}document.addEventListener("DOMContentLoaded",()=>{pValidator=dynamicLoadFormValidate(pValidator,"productForm"),new SlimSelect({select:"#productCategoryId",settings:{searchingText:"Buscando...",allowDeselect:!0},events:{search:(e,t)=>new Promise((o,a)=>{if(e.length<2)return a("Escriba almenos 2 caracteres");RequestApi.fetch("/admin/maintenanceCategory/autocomplete",{method:"POST",body:{search:e}}).then(e=>{var t;e.success?(t=e.result.map(e=>({text:e.description,value:e.id})),o(t)):a(e.message)}).catch(e=>{a(e)})})}}),new SlimSelect({select:"#productPurchaseUnitMeasureId"}),new SlimSelect({select:"#productSaleUnitMeasureId"}),slimProductProductCatalogCode=new SlimSelect({select:"#productProductCatalogCode",settings:{searchingText:"Buscando...",allowDeselect:!0},events:{search:(e,t)=>new Promise((o,a)=>{if(e.length<2)return a("Escriba almenos 2 caracteres");RequestApi.fetch("/admin/sunatProductCatalog/autocomplete",{method:"POST",body:{search:e}}).then(e=>{var t;e.success?(t=e.result.map(e=>({text:e.code+" "+e.description,value:e.code})),o(t)):a(e.message)}).catch(e=>{a(e)})})}});const t=document.getElementById("productForm");t.addEventListener("submit",e=>{e.preventDefault(),productSubmit(t)}),dynamicViewKeyboardListeners(screenName,appMenuActions)});