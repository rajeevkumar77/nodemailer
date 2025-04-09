const mongoose = require("mongoose");

const users = new mongoose.Schema(
	{
		phone: {
			type: String,
			required: true,
		},
		siteId: {
			type: mongoose.Schema.ObjectId,
			ref: 'sites'
		},
		roleId: {
			type: mongoose.Schema.ObjectId,
     		ref: 'roles'
    	},
		userAddressId: {
			type: mongoose.Schema.ObjectId,
     		ref: 'addresses'
    	},
		firstName: {
			type: String,
		},
		lastName: {
			type: String,
		},
		description: {
			type: String,
		},
		gender: {
			type: String,
    	},
		profileImage: {
			type: String,
			default: ''
    	},
		designation: {
			type: String,
			default: ''
    	},
		email: {
			type: String,
			default: ''
    	},
		lastActive:{
			type: Date,
		},
		isActive: {
			type: Boolean,
			default: true,
		},
		deviceToken:{
			type: String,
			default: '', 
		},
		tmpId:{
			type: String,
			default: '', 
		 }
	},
	{ timestamps: true }
);

exports.User = mongoose.model("users", users);
