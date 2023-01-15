import {
  Builder,
  Command,
  CommandOptions,
  Era,
  EraBuilder,
  Network,
  NetworkBuilder,
  NodeMode,
  NodeModeBuilder,
  StringCommandParameter,
} from '@zodimo/cardano-cli-base';
import { BuildOutput, BuildOutputBuilder } from './buildParameters/build-output';
import { TxInParameter, TxInParameterBuilder } from './buildParameters/tx-in-parameter';

export class BuildOptions implements CommandOptions {
  private era?: Era;
  private nodeMode?: NodeMode;
  private network?: Network;
  private txIns: TxInParameter[];
  private changeAddress?: StringCommandParameter;
  private output?: BuildOutput;

  constructor() {
    this.txIns = [];
  }

  withEra(builder: Builder<EraBuilder, Era>): BuildOptions;
  withEra(value: Era): BuildOptions;
  withEra(value: Era | Builder<EraBuilder, Era>): BuildOptions {
    if (typeof value !== 'function') {
      this.era = value;
      return this;
    }
    this.era = value(new EraBuilder());
    return this;
  }

  withNodeMode(builder: Builder<NodeModeBuilder, NodeMode>): BuildOptions;
  withNodeMode(value: NodeMode): BuildOptions;
  withNodeMode(value: NodeMode | Builder<NodeModeBuilder, NodeMode>): BuildOptions {
    if (typeof value !== 'function') {
      this.nodeMode = value;
      return this;
    }
    this.nodeMode = value(new NodeModeBuilder());
    return this;
  }

  withNetwork(builder: Builder<NetworkBuilder, Network>): BuildOptions;
  withNetwork(value: Network): BuildOptions;
  withNetwork(value: Network | Builder<NetworkBuilder, Network>): BuildOptions {
    if (typeof value !== 'function') {
      this.network = value;
      return this;
    }

    this.network = value(new NetworkBuilder());
    return this;
  }

  withTxIn(builder: Builder<TxInParameterBuilder, TxInParameter>): BuildOptions;
  withTxIn(value: TxInParameter): BuildOptions;
  withTxIn(value: TxInParameter | Builder<TxInParameterBuilder, TxInParameter>): BuildOptions {
    if (typeof value !== 'function') {
      this.txIns.push(value);
      return this;
    }
    this.txIns.push(value(new TxInParameterBuilder()));
    return this;
  }

  withChangeAddress(value: string): BuildOptions {
    this.changeAddress = StringCommandParameter.from('change-address', value);
    return this;
  }

  withOutput(builder: Builder<BuildOutputBuilder, BuildOutput>): BuildOptions;
  withOutput(value: BuildOutput): BuildOptions;
  withOutput(value: BuildOutput | Builder<BuildOutputBuilder, BuildOutput>): BuildOptions {
    if (typeof value !== 'function') {
      this.output = value;
      return this;
    }

    this.output = value(new BuildOutputBuilder());
    return this;
  }

  toString(): string {
    const output: string[] = [];
    if (this.era) {
      output.push(this.era.toString());
    }
    if (this.nodeMode) {
      output.push(this.nodeMode.toString());
    }
    if (this.network) {
      output.push(this.network.toString());
    }

    this.txIns.forEach((txInParameter) => output.push(txInParameter.toString()));

    if (this.changeAddress) {
      output.push(this.changeAddress.toString());
    }

    if (this.output) {
      output.push(this.output.toString());
    }
    return output.join(' ');
  }
}
export class Build extends Command<BuildOptions> {
  getCommandName(): string {
    return 'build';
  }
}
