import {
  Builder,
  Command,
  CommandOptions,
  Network,
  NetworkBuilder,
  NodeMode,
  NodeModeBuilder,
  StringCommandParameter,
} from '@zodimo/cardano-cli-base';

export class SubmitOptions implements CommandOptions {
  private nodeMode?: NodeMode;
  private network?: Network;
  private txFile?: StringCommandParameter;

  withNodeMode(builder: Builder<NodeModeBuilder, NodeMode>): SubmitOptions;
  withNodeMode(value: NodeMode): SubmitOptions;
  withNodeMode(value: NodeMode | Builder<NodeModeBuilder, NodeMode>): SubmitOptions {
    if (typeof value !== 'function') {
      this.nodeMode = value;
      return this;
    }
    this.nodeMode = value(new NodeModeBuilder());
    return this;
  }

  withNetwork(builder: Builder<NetworkBuilder, Network>): SubmitOptions;
  withNetwork(value: Network): SubmitOptions;
  withNetwork(value: Network | Builder<NetworkBuilder, Network>): SubmitOptions {
    if (typeof value !== 'function') {
      this.network = value;
      return this;
    }

    this.network = value(new NetworkBuilder());
    return this;
  }

  withTxFile(value: string): SubmitOptions {
    this.txFile = StringCommandParameter.from('tx-file', value);
    return this;
  }

  toString(): string {
    const output: string[] = [];

    if (this.nodeMode) {
      output.push(this.nodeMode.toString());
    }
    if (this.network) {
      output.push(this.network.toString());
    }
    if (this.txFile) {
      output.push(this.txFile.toString());
    }

    return output.join(' ');
  }
}
export class Submit extends Command<SubmitOptions> {
  getCommandName(): string {
    return 'submit';
  }
}
