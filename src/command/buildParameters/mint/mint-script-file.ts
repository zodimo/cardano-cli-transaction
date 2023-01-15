import { Builder, CompositeCommandParameter, StringCommandParameter } from '@zodimo/cardano-cli-base';
import { MintRedeemer, MintRedeemerBuilder } from './mint-redeemer';

export class MintScriptFileBuilder {
  fromScriptFile(value: string): MintScriptFile {
    return MintScriptFile.fromScriptFile(value);
  }
}

export class MintScriptFile extends CompositeCommandParameter {
  static fromScriptFile(value: string): MintScriptFile {
    return new MintScriptFile(StringCommandParameter.from('mint-script-file', value));
  }

  withRedeemer(builder: Builder<MintRedeemerBuilder, MintRedeemer>): MintScriptFile {
    this.withParameter(builder(new MintRedeemerBuilder()));
    return this;
  }
}
