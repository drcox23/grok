var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("grok");
  var myobj = [{
      user_id: "A100001001",
      data: {
        company_name: "Grok",
        name: "Wymin Chan",
        title: "Software Developer",
        address: "Box Jelly Street",
        phone: "808-123-4567",
        email: "fake@gmail.com"
      },
      css: {
        front: "{\"backgroundImage\":\"url('https://st2.depositphotos.com/1098803/11208/v/950/depositphotos_112082970-stock-illustration-subtle-grain-texture-overlay-vector.jpg')\",\"backgroundRepeat\":\"no-repeat\",\"backgroundSize\":\"cover\"}",
        company: "{\"color\":\"black\",\"fontWeight\":\"bold\",\"fontSize\":\"24px\"}",
        back: "{\"backgroundImage\":\"url('https://st2.depositphotos.com/1098803/11208/v/950/depositphotos_112082970-stock-illustration-subtle-grain-texture-overlay-vector.jpg')\",\"backgroundRepeat\":\"no-repeat\",\"backgroundSize\":\"cover\",\"textAlign\":\"center\"}",
        info: "{\"color\":\"black\",\"fontWeight\":\"bold\",\"fontSize\":\"14px\"}"
      },
      users: ["A100001002", "A100001003", "A100001004"],
      is_deleted: false
    },
    {
      user_id: "A100001002",
      data: {
        company_name: "Grok",
        name: "Sarah Yamashige",
        title: "Software Developer",
        address: "Box Jelly Street",
        phone: "808-123-4567",
        email: "fake@gmail.com"
      },
      css: {
        front: "{\"backgroundImage\":\"url('https://st2.depositphotos.com/1098803/11208/v/950/depositphotos_112082970-stock-illustration-subtle-grain-texture-overlay-vector.jpg')\",\"backgroundRepeat\":\"no-repeat\",\"backgroundSize\":\"cover\"}",
        company: "{\"color\":\"black\",\"fontWeight\":\"bold\",\"fontSize\":\"24px\"}",
        back: "{\"backgroundImage\":\"url('https://st2.depositphotos.com/1098803/11208/v/950/depositphotos_112082970-stock-illustration-subtle-grain-texture-overlay-vector.jpg')\",\"backgroundRepeat\":\"no-repeat\",\"backgroundSize\":\"cover\",\"textAlign\":\"center\"}",
        info: "{\"color\":\"black\",\"fontWeight\":\"bold\",\"fontSize\":\"14px\"}"
      },
      users: ["A100001001", "A100001003", "A100001004"],
      is_deleted: false
    }, {
      user_id: "A100001003",
      data: {
        company_name: "Grok",
        name: "Harsh Kotak",
        title: "Software Developer",
        address: "Box Jelly Street",
        phone: "808-123-4567",
        email: "fake@gmail.com"
      },
      css: {
        front: "{\"backgroundImage\":\"url('https://st2.depositphotos.com/1098803/11208/v/950/depositphotos_112082970-stock-illustration-subtle-grain-texture-overlay-vector.jpg')\",\"backgroundRepeat\":\"no-repeat\",\"backgroundSize\":\"cover\"}",
        company: "{\"color\":\"black\",\"fontWeight\":\"bold\",\"fontSize\":\"24px\"}",
        back: "{\"backgroundImage\":\"url('https://st2.depositphotos.com/1098803/11208/v/950/depositphotos_112082970-stock-illustration-subtle-grain-texture-overlay-vector.jpg')\",\"backgroundRepeat\":\"no-repeat\",\"backgroundSize\":\"cover\",\"textAlign\":\"center\"}",
        info: "{\"color\":\"black\",\"fontWeight\":\"bold\",\"fontSize\":\"14px\"}"
      },
      users: ["A100001001", "A100001002", "A100001004"],
      is_deleted: false
    }, {
      user_id: "A100001004",
      data: {
        company_name: "Grok",
        name: "Douglas Cox",
        title: "Software Developer",
        address: "Box Jelly Street",
        phone: "808-123-4567",
        email: "fake@gmail.com"
      },
      css: {
        front: "{\"backgroundImage\":\"url('https://st2.depositphotos.com/1098803/11208/v/950/depositphotos_112082970-stock-illustration-subtle-grain-texture-overlay-vector.jpg')\",\"backgroundRepeat\":\"no-repeat\",\"backgroundSize\":\"cover\"}",
        company: "{\"color\":\"black\",\"fontWeight\":\"bold\",\"fontSize\":\"24px\"}",
        back: "{\"backgroundImage\":\"url('https://st2.depositphotos.com/1098803/11208/v/950/depositphotos_112082970-stock-illustration-subtle-grain-texture-overlay-vector.jpg')\",\"backgroundRepeat\":\"no-repeat\",\"backgroundSize\":\"cover\",\"textAlign\":\"center\"}",
        info: "{\"color\":\"black\",\"fontWeight\":\"bold\",\"fontSize\":\"14px\"}"
      },
      users: ["A100001001", "A100001002", "A100001003"],
      is_deleted: false
    }
  ];
  dbo.collection("cards").insertMany(myobj, function (err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});