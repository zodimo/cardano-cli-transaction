import { Builder } from '@zodimo/cardano-cli-base';
import { Build, BuildOptions } from './command/build';
import { CalculateMinFee, CalculateMinFeeOptions } from './command/calculate-min-fee';
import { PolicyId, PolicyIdOptions } from './command/policy-id';
import { Sign, SignOptions } from './command/sign';
import { Submit, SubmitOptions } from './command/submit';
import { TxId, TxIdOptions } from './command/tx-id';

export class Transaction {
  public readonly commandPrefix: string;
  constructor(commandPrefix: string) {
    this.commandPrefix = `${commandPrefix} transaction`;
  }

  static createWithCardanoCliBin(cardniCliBinPath = 'cardano-cli'): Transaction {
    return new Transaction(cardniCliBinPath);
  }

  // build

  build(builder: Builder<BuildOptions, BuildOptions>): Sign;
  build(options: BuildOptions): Sign;
  build(value: BuildOptions | Builder<BuildOptions, BuildOptions>): Build {
    if (typeof value !== 'function') {
      return new Build(this.commandPrefix, value);
    }

    const options = value(new BuildOptions());
    return this.build(options);
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

  policyId(builder: Builder<PolicyIdOptions, PolicyIdOptions>): PolicyId;
  policyId(options: PolicyIdOptions): PolicyId;
  policyId(value: PolicyIdOptions | Builder<PolicyIdOptions, PolicyIdOptions>): PolicyId {
    if (typeof value !== 'function') {
      return new PolicyId(this.commandPrefix, value);
    }

    const options = value(new PolicyIdOptions());
    return this.policyId(options);
  }

  // calculate-min-fee

  calculateMinFee(builder: Builder<CalculateMinFeeOptions, CalculateMinFeeOptions>): CalculateMinFee;
  calculateMinFee(options: CalculateMinFeeOptions): CalculateMinFee;
  calculateMinFee(
    value: CalculateMinFeeOptions | Builder<CalculateMinFeeOptions, CalculateMinFeeOptions>,
  ): CalculateMinFee {
    if (typeof value !== 'function') {
      return new CalculateMinFee(this.commandPrefix, value);
    }

    const options = value(new CalculateMinFeeOptions());
    return this.calculateMinFee(options);
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

  txId(builder: Builder<TxIdOptions, TxIdOptions>): TxId;
  txId(options: TxIdOptions): TxId;
  txId(value: TxIdOptions | Builder<TxIdOptions, TxIdOptions>): TxId {
    if (typeof value !== 'function') {
      return new TxId(this.commandPrefix, value);
    }

    const options = value(new TxIdOptions());
    return this.txId(options);
  }
  // view
  view() {
    throw new Error('Not yet implemented!');
  }
}
