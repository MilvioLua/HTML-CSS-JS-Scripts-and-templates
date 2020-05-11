class BitcoinWallet {
 constructor(bitcoin) {
  this.bitcoin = bitcoin;
 }

 addBitcoins(bitcoin) {
  bitcoin = this.bitcoin + bitcoin;
  console.log(bitcoin + "bc added");
 }
}

var wallet = new BitcoinWallet(0);
 wallet.addBitcoins(1);
