var db = connect('172.31.58.231:8560/zumenAgentDB')

db.user_connection_detail.drop()
db.endpointsmappingstore.drop()
db.url_meta_data.drop()
db.mappingstore.drop()

//One time connection configuration
db.user_connection_detail.insert({connection:"SAP_ON_PREMISE_ECC",
connectionType:"ENTERPRISE_RESOURCE_PLANNING",ipAddress:"/H/90.10.150.238/S/3300",
orgId:"buy2324950f126b",userName:"zumen",password:"Zumen@1234",systemNR:"00",clientNR:"900",language:"EN"})



//Mapping configuration
const connectiondetails =  db.user_connection_detail.find({orgId:"buy2324950f126b"}).forEach(function(conn){
   let  x = conn._id.toString();
   x = x.replace("ObjectId","")
   x = x.replace("(","")
   x = x.replace(")","")
   x = x.replace("\"","")
   x = x.replace("\"","")
   db.endpointsmappingstore.insert({orgId:"buy2324950f126b",connectionId:x,zumenEndPoint:"/parts",zumenAgentEndpoint:"/sap/ecc/v1/material",httpOperation:"GET"})
   let sappartsschema = JSON.stringify({partNumber:"string",partDescription:"string",partLocation:"string",partReference:"string",makeBuy:"string",uom:"string",makePrice:"float",buyPrice:"float"})
   db.url_meta_data.insert({orgId:"buy2324950f126b",connectionId:x,zumenEndpoint:"/parts",httpOperation:"GET",responseMetaData:sappartsschema})
   db.mappingstore.insert([{orgId:"buy2324950f126b",connectionId:x,zumenEndpoint:"/parts",httpOperation:"GET",outputField:"partNumber",inputField:"materialNumber"}])
   db.mappingstore.insert([{orgId:"buy2324950f126b",connectionId:x,zumenEndpoint:"/parts",httpOperation:"GET",outputField:"partDescription",inputField:"materialDescription"}])
   db.mappingstore.insert([{orgId:"buy2324950f126b",connectionId:x,zumenEndpoint:"/parts",httpOperation:"GET",outputField:"erpPartRef",inputField:"oldMaterialNumber"}])
   db.mappingstore.insert([{orgId:"buy2324950f126b",connectionId:x,zumenEndpoint:"/parts",httpOperation:"GET",outputField:"makeBuy",inputField:"procurementType"}])
   db.mappingstore.insert([{orgId:"buy2324950f126b",connectionId:x,zumenEndpoint:"/parts",httpOperation:"GET",outputField:"uom",inputField:"unitOfMeasure"}])
   db.mappingstore.insert([{orgId:"buy2324950f126b",connectionId:x,zumenEndpoint:"/parts",httpOperation:"GET",outputField:"makePrice",inputField:"materialPriceControl.makePrice"}])
   db.mappingstore.insert([{orgId:"buy2324950f126b",connectionId:x,zumenEndpoint:"/parts",httpOperation:"GET",outputField:"buyPrice",inputField:"materialPriceControl.buyPrice"}])
   db.mappingstore.insert([{orgId:"buy2324950f126b",connectionId:x,zumenEndpoint:"/parts",httpOperation:"GET",outputField:"partLocation",inputField:"plant"}])
  

   db.endpointsmappingstore.insert({orgId:"buy2324950f126b",connectionId:x,zumenEndPoint:"/parts/location",zumenAgentEndpoint:"/sap/ecc/v1/material/plant",httpOperation:"GET"})
   sappartsschema = JSON.stringify([{partNumber:"string",partLocation:"string"}])
   db.url_meta_data.insert({orgId:"buy2324950f126b",connectionId:x,zumenEndpoint:"/parts/location",httpOperation:"GET",responseMetaData:sappartsschema})
  db.mappingstore.insert([{orgId:"buy2324950f126b",connectionId:x,zumenEndpoint:"/parts/location",httpOperation:"GET",outputField:"partNumber",inputField:"materialNumber"}])
  db.mappingstore.insert([{orgId:"buy2324950f126b",connectionId:x,zumenEndpoint:"/parts/location",httpOperation:"GET",outputField:"partLocation",inputField:"plant"}])

   db.endpointsmappingstore.insert({orgId:"buy2324950f126b",connectionId:x,zumenEndPoint:"/parts/partrate",zumenAgentEndpoint:"/sap/ecc/v1/material/rate",httpOperation:"GET"})
    sappartsschema = JSON.stringify({partNumber:"string",partDescription:"string",unitCost:"float",currency:"string"})
   db.url_meta_data.insert({orgId:"buy2324950f126b",connectionId:x,zumenEndpoint:"/parts/partrate",httpOperation:"GET",responseMetaData:sappartsschema})

   db.mappingstore.insert([{orgId:"buy2324950f126b",connectionId:x,zumenEndpoint:"/parts/partrate",httpOperation:"GET",outputField:"partNumber",inputField:"materialNumber"}])
   db.mappingstore.insert([{orgId:"buy2324950f126b",connectionId:x,zumenEndpoint:"/parts/partrate",httpOperation:"GET",outputField:"partDescription",inputField:"materialDescription"}])
   db.mappingstore.insert([{orgId:"buy2324950f126b",connectionId:x,zumenEndpoint:"/parts/partrate",httpOperation:"GET",outputField:"unitCost",inputField:"targetPrice"}])
   db.mappingstore.insert([{orgId:"buy2324950f126b",connectionId:x,zumenEndpoint:"/parts/partrate",httpOperation:"GET",outputField:"currency",inputField:"currencyKey"}])


})
