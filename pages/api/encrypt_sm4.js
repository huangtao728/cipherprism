import formidable from "formidable";
import fs from "fs";

function sm4_encrypt(string, key) {
  // To discuss: where to convert key to hex string?
  // current: cf workers
  // option: client side
  const sm4 = require('sm-crypto').sm4
  let keyHexString = string_to_hex(key)
  return sm4.encrypt(string, keyHexString.slice(0,32).padEnd(32, '0'))
}

function string_to_hex(string) {
  var result = '';
  for (var i=0; i<string.length; i++) {
    result += string.charCodeAt(i).toString(16);
  }
  return result;
}

const post = async (req, res) => {
    let data = JSON.parse(req.body);
    console.log(data)
    let encrypted = sm4_encrypt(data.file_content,data.key);
    
    res.status(200).json({status: true, encrypted});
};

export default (req, res) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
    ? console.log("PUT")
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? console.log("GET")
    : res.status(404).send("");
};
