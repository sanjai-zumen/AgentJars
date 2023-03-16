//Run using below Command
// mongo MONGOURL zumenagent.js
var db = connect('localhost/makethepart')
db.auth({ user: "USERNAME", pwd: "PASSWORD" })
db.orgFunctionality.drop()
db.orgFunctionality.insert({orgId:"buy4adad087f601",functionality:"PRICOLPARTSUPLOAD"});
db.orgFunctionality.insertOne({orgId: "buy2324950f126b",functionality:"ALT_REF_PART_COST"});
db.orgFunctionality.insert({orgId:"buy4adad087f601",functionality:"PRICOLQUOTESEND"});
db.orgFunctionality.insertOne({functionality: 'ECC_PO_FETCH', orgId: 'buy4adad087f601'});
