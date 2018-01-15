var key = "78cc287ce36b44676e357af5c8fd8569925c437d";

$.ajax(
{
	url: "https://api.census.gov/data/2016/acs/acs5?get=NAME,B01001_001E&for=county:035&in=state:39&key="+key,
	type: "GET"
}).done(function(result)
{
	console.log(result)
})