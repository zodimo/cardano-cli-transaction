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
  NumericCommandParameter,
  StringCommandParameter,
} from '@zodimo/cardano-cli-base';
import { BuildOutput, BuildOutputBuilder } from './buildParameters/build-output';
import { RequiredSigner, RequiredSignerBuilder } from './buildParameters/required-signer';
import { ScriptValid, ScriptValidBuilder } from './buildParameters/script-valid';
import { TxInParameter, TxInParameterBuilder } from './buildParameters/tx-in-parameter';
import { TxOutParameter, TxOutParameterBuilder } from './buildParameters/tx-out-parameter';

export class BuildOptions implements CommandOptions {
  private era?: Era;
  private nodeMode?: NodeMode;
  private network?: Network;
  private scriptValid?: ScriptValid;
  private witnessOverride?: StringCommandParameter;
  private txIns: TxInParameter[];
  private readOnlyTxInReference?: StringCommandParameter;
  private requiredSigner?: RequiredSigner;
  private txInCollateral?: StringCommandParameter;
  private txOutReturnCollateral?: StringCommandParameter;
  private txTotalCollateral?: NumericCommandParameter;
  private txOuts: TxOutParameter[];
  private changeAddress?: StringCommandParameter;
  private output?: BuildOutput;

  constructor() {
    this.txIns = [];
    this.txOuts = [];
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

  withScriptValid(builder: Builder<ScriptValidBuilder, ScriptValid>): BuildOptions;
  withScriptValid(value: ScriptValid): BuildOptions;
  withScriptValid(value: ScriptValid | Builder<ScriptValidBuilder, ScriptValid>): BuildOptions {
    if (typeof value !== 'function') {
      this.scriptValid = value;
      return this;
    }

    this.scriptValid = value(new ScriptValidBuilder());
    return this;
  }

  withWitnessOverride(value: string): BuildOptions {
    this.witnessOverride = StringCommandParameter.from('witness-override', value);
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

  withReadOnlyTxInReference(value: string): BuildOptions {
    this.readOnlyTxInReference = StringCommandParameter.from('read-only-tx-in-reference', value);
    return this;
  }

  withRequiredSigner(builder: Builder<RequiredSignerBuilder, RequiredSigner>): BuildOptions;
  withRequiredSigner(value: RequiredSigner): BuildOptions;
  withRequiredSigner(value: RequiredSigner | Builder<RequiredSignerBuilder, RequiredSigner>): BuildOptions {
    if (typeof value !== 'function') {
      this.requiredSigner = value;
      return this;
    }

    this.requiredSigner = value(new RequiredSignerBuilder());
    return this;
  }

  withTxInCollateral(value: string): BuildOptions {
    this.txInCollateral = StringCommandParameter.from('tx-in-collateral', value);
    return this;
  }

  withTxOutReturnCollateral(value: string): BuildOptions {
    this.txOutReturnCollateral = StringCommandParameter.from('tx-out-return-collateral', value);
    return this;
  }
  withTxTotalCollateral(value: number): BuildOptions {
    this.txTotalCollateral = NumericCommandParameter.from('tx-total-collateral', value);
    return this;
  }

  withTxOut(builder: Builder<TxOutParameterBuilder, TxOutParameter>): BuildOptions;
  withTxOut(value: TxOutParameter): BuildOptions;
  withTxOut(value: TxOutParameter | Builder<TxOutParameterBuilder, TxOutParameter>): BuildOptions {
    if (typeof value !== 'function') {
      this.txOuts.push(value);
      return this;
    }

    this.txOuts.push(value(new TxOutParameterBuilder()));
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
    if (this.witnessOverride) {
      output.push(this.witnessOverride.toString());
    }

    this.txIns.forEach((txInParameter) => output.push(txInParameter.toString()));

    if (this.readOnlyTxInReference) {
      output.push(this.readOnlyTxInReference.toString());
    }
    if (this.txInCollateral) {
      output.push(this.txInCollateral.toString());
    }
    if (this.txOutReturnCollateral) {
      output.push(this.txOutReturnCollateral.toString());
    }
    if (this.txTotalCollateral) {
      output.push(this.txTotalCollateral.toString());
    }

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
