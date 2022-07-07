export default function handler(req, res) {
    const sm2 = require('sm-crypto').sm2

    let keypair = sm2.generateKeyPairHex()
  
    let public_key = keypair.publicKey // 公钥
    let private_key = keypair.privateKey // 私钥

    res.status(200).json({
        status: sm2.verifyPublicKey(public_key),
        public_key,
        private_key,
      })
  }
  