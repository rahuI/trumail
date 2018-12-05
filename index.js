'use strict';


/**
 * @author Rahul Yadav
 */

/**
 * Direct dependency
 * Module request is used for https request to trumail.io
 */
let request = require('request-promise');


/**
 * isValidEmail - Uses trumail.io (which pings SMTP server for validation).
 *
 * @param  {String} email email address
 * @return {Promise}       Boolean - true if valid
 */
function isValidEmail(email) {

	let options = {
		method: 'GET',
		uri: `https://api.trumail.io/v2/lookups/json?email=${email}`,
		json: true
	};

	return request(options)
		.then(res => {
			if(res){
				return res.deliverable && res.hostExists ? true : false;
			}
			return false;
		})
		.catch(err => {
			return false;
		});
};

module.exports.isValidEmail = isValidEmail;


/**
 * getEmailInfo - Get Details for a email like is it exists or not, host, deliverable etc. Uses trumail.io.
 *
 * @param  {String} email email address
 * @return {Promise}       email details
 */
function getEmailInfo(email) {

	let options = {
		method: 'GET',
		uri: 'https://trumail.io/json/' + email,
		json: true
	};

	return request(options)
		.then(res => {
			return res;
		})
		.catch(err => {
			return err;
		});
};

module.exports.getEmailInfo = getEmailInfo;
