import { Builder } from '@zodimo/cardano-cli-base';
import { Sign, SignOptions } from './command/sign';
import { Submit, SubmitOptions } from './command/submit';

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
  sign(builder: Builder<SignOptions, SignOptions>): Sign;
  sign(options: SignOptions): Sign;
  sign(value: SignOptions | Builder<SignOptions, SignOptions>): Sign {
    if (typeof value !== 'function') {
      return new Sign(this.commandPrefix, value);
    }

    const options = value(new SignOptions());
    return this.sign(options);
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

  submit(builder: Builder<SubmitOptions, SubmitOptions>): Submit;
  submit(options: SubmitOptions): Submit;
  submit(value: SubmitOptions | Builder<SubmitOptions, SubmitOptions>): Submit {
    if (typeof value !== 'function') {
      return new Submit(this.commandPrefix, value);
    }

    const options = value(new SubmitOptions());
    return this.submit(options);
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
