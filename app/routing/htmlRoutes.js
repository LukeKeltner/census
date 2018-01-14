var express = require("express");
var path = require("path");
var router = express.Router();

router.get("/:location?", function(req, res)
{
	const chosen = req.params.location;
	res.sendFile(path.join(__dirname, "..", "public", "index.html"));
})

module.exports = router;