//Run using below Command
// mongo MONGOURL zumenagent.js
var db = connect('localhost/makethepart')
db.auth({ user: "USERNAME", pwd: "PASSWORD" })
db.OrgFunctionality.drop()
db.OrgFunctionality.insert({orgId:"buy4adad087f601",functionality:"PRICOLPARTSUPLOAD"});
db.orgFunctionality.insertOne({orgId: "buy2324950f126b",functionality:"ALT_REF_PART_COST"});
db.OrgFunctionality.insert({orgId:"buy4adad087f601",functionality:"PRICOLQUOTESEND"});
