import {
  Builder,
  Command,
  CommandOptions,
  CompositeCommandParameter,
  Network,
  NetworkBuilder,
  StringCommandParameter,
} from '@zodimo/cardano-cli-base';
import assert from 'assert';

enum BuildOutputTypes {
  OUT_FILE = 'out-file',
  CALCULATE_PLUTUS_SCRIPT_COST = 'calculate-plutus-script-cost',
}

export class BuildOutputBuilder {
  outFile(value: string): BuildOutput {
    return BuildOutput.outFile(value);
  }
  calculatePlutusScriptCost(value: string): BuildOutput {
    return BuildOutput.calculatePlutusScriptCost(value);
  }
}
export class BuildOutput extends StringCommandParameter {
  constructor(paramKey: BuildOutputTypes, paramValue: string) {
    super(paramKey, paramValue);
  }
  static outFile(value: string): BuildOutput {
    return BuildOutput.from(BuildOutputTypes.OUT_FILE, value);
  }
  static calculatePlutusScriptCost(value: string): BuildOutput {
    return BuildOutput.from(BuildOutputTypes.CALCULATE_PLUTUS_SCRIPT_COST, value);
  }
}

export class TxInParameter extends CompositeCommandParameter {
  withTxIn(value: string): TxInParameter {
    this.withParameter(new StringCommandParameter('tx-in', value));
    return this;
  }
}

export class BuildOptions implements CommandOptions {
  private network?: Network;
  private txIns: TxInParameter[];
  private changeAddress?: StringCommandParameter;
  private output?: BuildOutput;

  constructor() {
    this.txIns = [];
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

  withTxIn(builder: Builder<TxInParameter, TxInParameter>): BuildOptions {
    assert(typeof builder == 'function');
    this.txIns.push(builder(new TxInParameter()));
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
