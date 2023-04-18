//run like this
//mongo mongodb://zumenadmin:USERNAME:PASSWORD@127.0.0.1:8560 zumenAgentConfigScripts.js
var db = connect("mongodb://USERNAME:PASSWORD@127.0.0.1:8560/zumenAgentDB?authSource=admin");
db.user_connection_detail.insert({connection:"WINDCHILL",
connectionType:"PRODUCT_LIFECYCLE_MANAGEMENT",baseUrl:"http://90.10.150.123:80",
orgId:"buy4adad087f601",userName:"ZUMEN",password:"ZUMEN",language:"EN"})

const connectiondetails =  db.user_connection_detail.find({orgId:"buy4adad087f601",connection:"WINDCHILL",
connectionType:"PRODUCT_LIFECYCLE_MANAGEMENT"}).forEach(function(conn){
    let  x = conn._id.toString();
    x = x.replace("ObjectId","")
    x = x.replace("(","")
    x = x.replace(")","")
    x = x.replace("\"","")
    x = x.replace("\"","")

    //parts
    db.endpointsmappingstore.insert({orgId:"buy4adad087f601",connectionId:x,zumenEndPoint:"/product",zumenAgentEndpoint:"/windchill/v1/parts",httpOperation:"GET"})
    let sappartsschema = JSON.stringify([{ID: "string",Name: "string",Number: "string",ObjectType: "string",Revision: "string",State: "string"}])
    db.url_meta_data.insert({orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/product",httpOperation:"GET",responseMetaData:sappartsschema})

    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/product",httpOperation:"GET",outputField:"ID",inputField:"id"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/product",httpOperation:"GET",outputField:"Name",inputField:"name"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/product",httpOperation:"GET",outputField:"Number",inputField:"number"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/product",httpOperation:"GET",outputField:"ObjectType",inputField:"objectType"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/product",httpOperation:"GET",outputField:"Revision",inputField:"revision"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/product",httpOperation:"GET",outputField:"State",inputField:"state"}])



    db.endpointsmappingstore.insert({orgId:"buy4adad087f601",connectionId:x,zumenEndPoint:"/drawing",zumenAgentEndpoint:"/windchill/v1/drawing",httpOperation:"GET"})
     sappartsschema = JSON.stringify({name: "string",type: "string",image: "string"})
    db.url_meta_data.insert({orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/drawing",httpOperation:"GET",responseMetaData:sappartsschema})

    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/drawing",httpOperation:"GET",outputField:"name",inputField:"name"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/drawing",httpOperation:"GET",outputField:"type",inputField:"type"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/drawing",httpOperation:"GET",outputField:"image",inputField:"image"}])


    //BillsOfMaterial

    db.endpointsmappingstore.insert({orgId:"buy4adad087f601",connectionId:x,zumenEndPoint:"/bom",zumenAgentEndpoint:"/windchill/v1/bom",httpOperation:"GET"})
     sappartsschema = JSON.stringify({PartId:"string",PartUseId:"string",PartName:"string",PartNumber:"string",
    Part:{ID:"string",Name:"string",Number:"string",ObjectType:"string",Revision:"string"
    ,State:{Display:"string"},DefaultUnit:{Display:"string"}},Components:[{PartId:"string",PartUseId:"string",PartName:"string",PartNumber:"string",Part:{ID: "string",Name: "string",
    Number: "string",ObjectType: "string",Revision: "string",State: {Display: "string"},DefaultUnit: {Display: "string"}},Components:[]}]})

    db.url_meta_data.insert({orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",responseMetaData:sappartsschema})
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"PartId",inputField:"partid"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"PartUseId",inputField:"partUseId"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"PartName",inputField:"partName"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"PartNumber",inputField:"partNumber"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"Part",inputField:"part"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"Part.ID",inputField:"part.ID"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"Part.Name",inputField:"part.Name"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"Part.Number",inputField:"part.Number"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"Part.ObjectType",inputField:"part.ObjectType"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"Part.Revision",inputField:"part.Revision"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"Part.State",inputField:"part.State"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"Part.DefaultUnit",inputField:"part.DefaultUnit"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"Part.State.Display",inputField:"part.State.Display"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"Part.DefaultUnit.Display",inputField:"part.DefaultUnit.Display"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"Components",inputField:"Components"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"Components.PartId",inputField:"Components.PartId"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"Components.PartUseId",inputField:"Components.PartUseId"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"Components.PartName",inputField:"Components.PartName"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"Components.PartNumber",inputField:"Components.PartNumber"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"Components.Part",inputField:"Components.Part"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"Components.Part.ID",inputField:"Components.Part.ID"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"Components.Part.Name",inputField:"Components.Part.Name"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"Components.Part.Number",inputField:"Components.Part.Number"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"Components.Part.ObjectType",inputField:"Components.Part.ObjectType"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"Components.Part.Revision",inputField:"Components.Part.Revision"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"Components.Part.State",inputField:"Components.Part.State"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"Components.Part.DefaultUnit",inputField:"Components.Part.DefaultUnit"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"Components.Part.State.Display",inputField:"Components.Part.State.Display"}])
    db.mappingstore.insert([{orgId:"buy4adad087f601",connectionId:x,zumenEndpoint:"/bom",httpOperation:"GET",outputField:"Components.Part.DefaultUnit.Display",inputField:"Components.Part.DefaultUnit.Display"}])












});
