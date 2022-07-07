import formidable from "formidable";
import fs from "fs";

function sm2_encrypt(string, public_key) {
    const cipherMode = 1 // 1 - C1C3C2，0 - C1C2C3
    const sm2 = require('sm-crypto').sm2
    return sm2.doEncrypt(string, public_key, cipherMode)
  }

const post = async (req, res) => {
    let data = JSON.parse(req.body);
    console.log(data)
    let encrypted = sm2_encrypt(data.file_content,data.public_key);
    
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
