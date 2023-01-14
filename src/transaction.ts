import { Builder } from '@zodimo/cardano-cli-base';
import { assert } from 'console';
import { Sign, SignOptions } from './command/sign';

export class Transaction {
  public readonly commandPrefix: string;
  constructor(commandPrefix: string) {
    this.commandPrefix = `${commandPrefix} transaction`;
  }

  static createWithCardanoCliBin(cardniCliBinPath = 'cardano-cli'): Transaction {
    return new Transaction(cardniCliBinPath);
  }

  // build
  build() {
    throw new Error('Not yet implemented!');
  }
  // sign
  sign(builder: Builder<SignOptions, SignOptions>): Sign {
    assert(typeof builder == 'function');
    return new Sign(this.commandPrefix, builder(new SignOptions()));
  }
  // witness
  witness() {
    throw new Error('Not yet implemented!');
  }
  // assemble
  assemble() {
    throw new Error('Not yet implemented!');
  }
  // submit
  submit() {
    throw new Error('Not yet implemented!');
  }
  // policyid
  policyid() {
    throw new Error('Not yet implemented!');
  }
  // calculate-min-fee
  calculateMinFee() {
    throw new Error('Not yet implemented!');
  }
  // calculate-min-required-utxo
  calculateMinRequiredUtxo() {
    throw new Error('Not yet implemented!');
  }
  // hash-script-data
  hashScriptData() {
    throw new Error('Not yet implemented!');
  }
  // txid
  txid() {
    throw new Error('Not yet implemented!');
  }
  // view
  view() {
    throw new Error('Not yet implemented!');
  }
}
