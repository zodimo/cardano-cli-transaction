import {
  Builder,
  Command,
  CommandOptions,
  Network,
  NetworkBuilder,
  NumericCommandParameter,
  StringCommandParameter,
} from '@zodimo/cardano-cli-base';

export class CalculateMinFeeOptions implements CommandOptions {
  private txBodyFile?: StringCommandParameter;
  private network?: Network;
  private protocolParamsFile?: StringCommandParameter;
  private txInCount?: NumericCommandParameter;
  private txOutCount?: NumericCommandParameter;
  private witnessCount?: NumericCommandParameter;
  private byronWitnessCount?: NumericCommandParameter;

  withTxBodyFile(value: string): CalculateMinFeeOptions {
    this.txBodyFile = StringCommandParameter.from('tx-body-file', value);
    return this;
  }

  withNetwork(builder: Builder<NetworkBuilder, Network>): CalculateMinFeeOptions;
  withNetwork(value: Network): CalculateMinFeeOptions;
  withNetwork(value: Network | Builder<NetworkBuilder, Network>): CalculateMinFeeOptions {
    if (typeof value !== 'function') {
      this.network = value;
      return this;
    }

    this.network = value(new NetworkBuilder());
    return this;
  }

  withProtocolParamsFile(value: string): CalculateMinFeeOptions {
    this.protocolParamsFile = StringCommandParameter.from('protocol-params-file', value);
    return this;
  }

  withTxInCount(value: number): CalculateMinFeeOptions {
    this.txInCount = NumericCommandParameter.from('tx-in-count', value);
    return this;
  }
  withTxOutCount(value: number): CalculateMinFeeOptions {
    this.txOutCount = NumericCommandParameter.from('tx-out-count', value);
    return this;
  }

  withWitnessCount(value: number): CalculateMinFeeOptions {
    this.witnessCount = NumericCommandParameter.from('witness-count', value);
    return this;
  }

  withByronWitnessCount(value: number): CalculateMinFeeOptions {
    this.byronWitnessCount = NumericCommandParameter.from('byron-witness-count', value);
    return this;
  }

  toString(): string {
    const output: string[] = [];

    if (this.txBodyFile) {
      output.push(this.txBodyFile.toString());
    }
    if (this.network) {
      output.push(this.network.toString());
    }
    if (this.protocolParamsFile) {
      output.push(this.protocolParamsFile.toString());
    }
    if (this.txInCount) {
      output.push(this.txInCount.toString());
    }
    if (this.txOutCount) {
      output.push(this.txOutCount.toString());
    }
    if (this.witnessCount) {
      output.push(this.witnessCount.toString());
    }
    if (this.byronWitnessCount) {
      output.push(this.byronWitnessCount.toString());
    }

    return output.join(' ');
  }
}

export class CalculateMinFee extends Command<CalculateMinFeeOptions> {
  getCommandName(): string {
    return 'calculate-min-fee';
  }
}
