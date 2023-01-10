//Run using below Command
// mongo MONGOURL zumenagent.js
var db = connect('localhost/zumenAgentDB')
db.auth({ user: "USERNAME", pwd: "PASSWORD" })
db.OrgFunctionality.drop()
db.OrgFunctionality.insert({orgId:"buy2324950f126b",functionality:"PRICOLPARTSUPLOAD"});
db.OrgFunctionality.insert({orgId:"buy2324950f126b",functionality:"PRICOLQUOTESEND"});
