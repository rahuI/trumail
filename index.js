'use strict';

let request = require('request-promise');

module.exports.isValidEmail = (email) => {

	let options = {
		method: 'GET',
		uri: 'https://trumail.io/json/' + email,
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

module.exports.getEmailInfo = (email) => {

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
