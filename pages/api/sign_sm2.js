import formidable from "formidable";
import fs from "fs";

function sm2_sign(string, private_key) {
  const sm2 = require('sm-crypto').sm2
  return sm2.doSignature(string, private_key)
}

const post = async (req, res) => {
    let data = JSON.parse(req.body);
    console.log(data)
    let signature = sm2_sign(data.file_content,data.private_key);
    
    res.status(200).json({status: true, signature});
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
