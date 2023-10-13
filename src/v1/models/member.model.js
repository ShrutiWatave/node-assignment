const mongoose = require("mongoose");
const User = require("./user.model");
const Community = require('./community.model')
const Role = require("./role.model")

const Schema = mongoose.Schema;

const memberSchema = new Schema({
  _id: String,
  community: [
    {
      type: String,
      ref: "Community",
    },
  ],
  user: [
    {
      type: String,
      ref: "User",
    },
  ],
  role: [
    {
      type: String,
      ref: "Role",
    },
  ],
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
