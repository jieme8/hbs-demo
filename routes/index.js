var express = require("express");
var router = express.Router();

router.get("/",function(req,res){
	var json = {
		"title":"hbs demo",
		"pageData":"pageData",
		"demoArr":["a1","a2","a3","a4","a5"],
		"buer":"true"
	}

  res.render('index', json);
})



module.exports = router;