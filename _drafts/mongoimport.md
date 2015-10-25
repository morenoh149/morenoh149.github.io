---
layout: post
title: mongoimport
---

connecting:
mongo foo.bar.net:27017/foobar -u root -p toor

collections:
categories
errors
messages
meteor_accounts_loginServiceConfiguration
orders
products
purveyors
recipes
stations
system.indexes
teams
users

Products:
{% highlight javascript %}
{
  '_id' : "Nouy8Ti9yfgRNdBDf",
  "name" : "Blue, Pt. Reyes bay",
  "description" : "",
  "price" : 0,
  "purveyors" : [
      "tWukAsZihv38Re3Lc",
      "fNfYD4fkqXC292Wnz"
  ],
  "amount" : 1,
  "unit" : "ea",
  "deleted" : false
}
{% endhighlight %}

Purveyors:
{% highlight javascript %}
{
  "_id" : "ttG2HFGRA6qoeGp94",
  "name" : "Cooks Co",
  "description" : "",
  "deleted" : false
}
{% endhighlight %}

Commands:
mongo subdomain.server.com:27017/foo -u username -p password <- connect to remote
mongo <- connect to locally running mongo
meteor mongo <- connect to a meteor project’s mongo instance
meteor reset <- nuke db
show dbs <- list dbs on db
use <dbname> <- sets the shell to use a particular database
show collections <- get all collections in db
db.products.findOne() <- inspect document structure

download csv from spreadsheet
pass csv filename as arg in below command
`mongoimport -h localhost:3001 --db meteor --collection products --type csv --headerline --upsertFields name,description,price,Purveyor1,Purveyor2,Purveyor3,amount,unit --file <filename-products.csv>`

run below command from a mongo shell to create the purveyors array
`db.products.find().forEach(function(p) { p.purveyors = []; p.deleted = false; if (p.Purveyor1 !== '') { p.purveyors.push(p.Purveyor1) }; if (p.Purveyor2 !== '') { p.purveyors.push(p.Purveyor2) }; if (p.Purveyor3 !== '') { p.purveyors.push(p.Purveyor3) }; db.products.save(p); });`

repeat for purveyors
> mongoimport -h localhost:3001 --db meteor --collection purveyors --type csv --headerline --upsertFields name,description --file <filename.csv>
> db.purveyors.find().forEach(function(p) { p.deleted = false; db.purveyors.save(p); });
TODO consolidate both scripts ^^^ into a single script that can be called from terminal
> mongo localhost:3001/meteor fixDocumentsProductsPurveyors.js
> mongo apollo.modulusmongo.net:27017/hipyH5ip -u root -p platformforchefs fixDocumentsProductsPurveyors.js
// fixDocumentsProductsPurveyors.js
db.products.find().forEach(function(p) { p.purveyors = []; p.deleted = false; if (p.Purveyor1 !== '') { p.purveyors.push(p.Purveyor1) }; if (p.Purveyor2 !== '') { p.purveyors.push(p.Purveyor2) }; if (p.Purveyor3 !== '') { p.purveyors.push(p.Purveyor3) }; db.products.save(p); });
db.purveyors.find().forEach(function(p) { p.deleted = false; db.purveyors.save(p); });
be wary though of dates as meteor’s defaults for this datatype differ from mongodb’s defaults
