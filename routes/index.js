/*
 * GET home page.
 */

var cv = require('../node_modules/cloudcv/build/Release/cloudcv');

exports.index = function(req, res)
{
  res.render('index', 
  	{ title: 'Express', 
  	  opencv_info: cv.buildInformation()
  	});
};