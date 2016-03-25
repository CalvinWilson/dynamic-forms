require('../css/styles.css');
require('font-awesome/css/font-awesome.min.css');
var formElements = require('../templates/formElements.html');

var $ = require('jquery');

$(document).ready(function(){
	$.get('http://json-data.herokuapp.com/forms', function (data) {
		var newDataSet = data.map(function(value){
			if (value.type==="select") {
				value.select = true;
			} else if (value.type==="textarea") {
				value.textarea = true;
			} else {
				value.input = true;
			}
			return value;
		});

		newDataSet = {data: newDataSet};

		console.log(newDataSet);

		$("#app").html(formElements(newDataSet));
	});










})
