import formidable from "formidable";
import fs from "fs";
const Redis = require("ioredis");

/**
 * @swagger
 * /api/all_in_sm2:
 *   get:
 *     description: Get all data in SM2
 *     responses:
 *       200:
 *         description: hello world
 */

function sm2_encrypt(string, public_key) {
    const cipherMode = 1 // 1 - C1C3C2，0 - C1C2C3
    const sm2 = require('sm-crypto').sm2
    return sm2.doEncrypt(string, public_key, cipherMode)
}

function sm2_sign(string, private_key) {
    const sm2 = require('sm-crypto').sm2
    return sm2.doSignature(string, private_key)
}

function sm3_digest(string) {
    const sm3 = require('sm-crypto').sm3
    return sm3(string)
}

const post = async (req, res) => {
    let data = JSON.parse(req.body);
    console.log(data)
    let hash = sm3_digest(data.file_content);
    let signature = sm2_sign(hash, data.private_key);
    let encrypted = sm2_encrypt(data.file_content,data.public_key);
    let encrypted_hash = sm3_digest(encrypted);
    let savedData = JSON.stringify({
        hash,
        encrypted_hash,
        algorithm: "SM2",
    });
    let client = new Redis("rediss://:8f81ecbca2e044529e9d3b13f5110f61@global-big-spider-30692.upstash.io:30692");
    client.set(Date.now(), savedData);
    res.status(200).json({status: true, hash, signature, encrypted});
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
