import {
  BooleanCommandParameter,
  Builder,
  Command,
  CommandOptions,
  CompositeCommandParameter,
  Era,
  EraBuilder,
  Network,
  NetworkBuilder,
  NodeMode,
  NodeModeBuilder,
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

export class TxInParameterBuilder {
  withTxIn(value: string): TxInParameter {
    return TxInParameter.fromTxIn(value);
  }
}

export class SpendingReferenceTxInDatumBuilder {
  cborFile(value: string): SpendingReferenceTxInDatum {
    return SpendingReferenceTxInDatum.cborFile(value);
  }
  jsonFile(value: string): SpendingReferenceTxInDatum {
    return SpendingReferenceTxInDatum.jsonFile(value);
  }
  jsonValue(value: string): SpendingReferenceTxInDatum {
    return SpendingReferenceTxInDatum.jsonValue(value);
  }
  inlineDatumIsPresent(): SpendingReferenceTxInDatum {
    return SpendingReferenceTxInDatum.inlineDatumIsPresent();
  }
}

export class SpendingReferenceTxInDatum extends CompositeCommandParameter {
  static cborFile(value: string): SpendingReferenceTxInDatum {
    const param = 'spending-reference-tx-in-datum-cbor-file';
    return SpendingReferenceTxInDatum.from(StringCommandParameter.from(param, value));
  }
  static jsonFile(value: string): SpendingReferenceTxInDatum {
    const param = 'spending-reference-tx-in-datum-file';
    return SpendingReferenceTxInDatum.from(StringCommandParameter.from(param, value));
  }
  static jsonValue(value: string): SpendingReferenceTxInDatum {
    const param = 'spending-reference-tx-in-datum-value';
    return SpendingReferenceTxInDatum.from(StringCommandParameter.from(param, value, true));
  }
  static inlineDatumIsPresent(): SpendingReferenceTxInDatum {
    const param = 'spending-reference-tx-in-inline-datum-present';
    return SpendingReferenceTxInDatum.from(BooleanCommandParameter.from(param));
  }
}

export class SpendingReferenceTxInRedeemerBuilder {
  // this is a factory instance not a builder
  cborFile(value: string): SpendingReferenceTxInRedeemer {
    return SpendingReferenceTxInRedeemer.cborFile(value);
  }
  jsonFile(value: string): SpendingReferenceTxInRedeemer {
    return SpendingReferenceTxInRedeemer.jsonFile(value);
  }
  jsonValue(value: string): SpendingReferenceTxInRedeemer {
    return SpendingReferenceTxInRedeemer.jsonValue(value);
  }
}

export class SpendingReferenceTxInRedeemer extends CompositeCommandParameter {
  // this is a factory class not a builder
  static cborFile(value: string): SpendingReferenceTxInRedeemer {
    const param = 'spending-reference-tx-in-redeemer-cbor-file';
    return SpendingReferenceTxInRedeemer.from(StringCommandParameter.from(param, value));
  }
  static jsonFile(value: string): SpendingReferenceTxInRedeemer {
    const param = 'spending-reference-tx-in-redeemer-file';
    return SpendingReferenceTxInRedeemer.from(StringCommandParameter.from(param, value));
  }
  static jsonValue(value: string): SpendingReferenceTxInRedeemer {
    const param = 'spending-reference-tx-in-redeemer-value';
    return SpendingReferenceTxInRedeemer.from(StringCommandParameter.from(param, value));
  }
}
export class TxInScriptDatumBuilder {
  cborFile(value: string): TxInScriptDatum {
    return TxInScriptDatum.cborFile(value);
  }
  jsonFile(value: string): TxInScriptDatum {
    return TxInScriptDatum.jsonFile(value);
  }
  jsonValue(value: string): TxInScriptDatum {
    return TxInScriptDatum.jsonValue(value);
  }
  inlineDatumIsPresent(): TxInScriptDatum {
    return TxInScriptDatum.inlineDatumIsPresent();
  }
}

export class TxInScriptDatum extends CompositeCommandParameter {
  static cborFile(value: string): TxInScriptDatum {
    const param = 'tx-in-datum-cbor-file';
    return TxInScriptDatum.from(StringCommandParameter.from(param, value));
  }
  static jsonFile(value: string): TxInScriptDatum {
    const param = 'tx-in-datum-file';
    return TxInScriptDatum.from(StringCommandParameter.from(param, value));
  }
  static jsonValue(value: string): TxInScriptDatum {
    const param = 'tx-in-datum-value';
    return TxInScriptDatum.from(StringCommandParameter.from(param, value, true));
  }
  static inlineDatumIsPresent(): TxInScriptDatum {
    const param = 'tx-in-inline-datum-present';
    return TxInScriptDatum.from(BooleanCommandParameter.from(param));
  }
}

export class TxInScriptRedeemerBuilder {
  cborFile(value: string): TxInScriptRedeemer {
    return TxInScriptRedeemer.cborFile(value);
  }
  jsonFile(value: string): TxInScriptRedeemer {
    return TxInScriptRedeemer.jsonFile(value);
  }
  jsonValue(value: string): TxInScriptRedeemer {
    return TxInScriptRedeemer.jsonValue(value);
  }
}

export class TxInScriptRedeemer extends CompositeCommandParameter {
  static cborFile(value: string): TxInScriptRedeemer {
    const param = 'tx-in-redeemer-cbor-file';
    return TxInScriptRedeemer.from(StringCommandParameter.from(param, value));
  }
  static jsonFile(value: string): TxInScriptRedeemer {
    const param = 'tx-in-redeemer-file';
    return TxInScriptRedeemer.from(StringCommandParameter.from(param, value));
  }
  static jsonValue(value: string): TxInScriptRedeemer {
    const param = 'tx-in-redeemer-value';
    return TxInScriptRedeemer.from(StringCommandParameter.from(param, value, true));
  }
}

export class TxInScript extends CompositeCommandParameter {
  withScriptFile(value: string): TxInScript {
    this.withParameter(StringCommandParameter.from('tx-in-script-file', value));
    return this;
  }
  withDatum(builder: Builder<TxInScriptDatumBuilder, TxInScriptDatum>): TxInScript {
    this.withParameter(builder(new TxInScriptDatumBuilder()));
    return this;
  }
  withRedeemer(builder: Builder<TxInScriptRedeemerBuilder, TxInScriptRedeemer>): TxInScript {
    this.withParameter(builder(new TxInScriptRedeemerBuilder()));
    return this;
  }
}

export class TxInAlternativeBuilder {
  txInSpending(builder: Builder<TxInSpending, TxInSpending>): TxInAlternative {
    return TxInAlternative.txInSpending(builder);
  }

  simpleScriptTxInReference(value: string): TxInAlternative {
    return TxInAlternative.simpleScriptTxInReference(value);
  }
  txInScript(builder: Builder<TxInScript, TxInScript>): TxInAlternative {
    return TxInAlternative.txInScript(builder);
  }
}

export class TxInSpending extends CompositeCommandParameter {
  withspendingTxInReference(value: string): TxInSpending {
    this.withParameter(StringCommandParameter.from('spending-tx-in-reference', value));
    return this;
  }
  withSpendingPlutusScriptV2(): TxInSpending {
    this.withParameter(BooleanCommandParameter.from('spending-plutus-script-v2'));
    return this;
  }
  withSpendingReferenceTxInDatum(
    builder: Builder<SpendingReferenceTxInDatumBuilder, SpendingReferenceTxInDatum>,
  ): TxInSpending {
    this.withParameter(builder(new SpendingReferenceTxInDatumBuilder()));
    return this;
  }

  withSpendingReferenceTxInRedeemer(
    builder: Builder<SpendingReferenceTxInRedeemerBuilder, SpendingReferenceTxInRedeemer>,
  ): TxInSpending {
    this.withParameter(builder(new SpendingReferenceTxInRedeemerBuilder()));
    return this;
  }
}

export class TxInAlternative extends CompositeCommandParameter {
  static txInSpending(builder: Builder<TxInSpending, TxInSpending>): TxInAlternative {
    return TxInAlternative.from(builder(new TxInSpending()));
  }

  static simpleScriptTxInReference(value: string): TxInAlternative {
    return TxInAlternative.from(StringCommandParameter.from('simple-script-tx-in-reference', value));
  }

  static txInScript(builder: Builder<TxInScript, TxInScript>): TxInAlternative {
    return TxInAlternative.from(builder(new TxInScript()));
  }
}

export class TxInParameter extends CompositeCommandParameter {
  static fromTxIn(value: string): TxInParameter {
    return new TxInParameter(new StringCommandParameter('tx-in', value));
  }

  withAlternative(builder: Builder<TxInAlternativeBuilder, TxInAlternative>): TxInParameter {
    this.withParameter(builder(new TxInAlternativeBuilder()));
    return this;
  }
}

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

  withTxIn(builder: Builder<TxInParameterBuilder, TxInParameter>): BuildOptions {
    assert(typeof builder == 'function');
    this.txIns.push(builder(new TxInParameterBuilder()));
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
