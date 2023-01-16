import { Builder, CompositeCommandParameter, StringCommandParameter } from '@zodimo/cardano-cli-base';
import { WithdrawalRedeemer, WithdrawalRedeemerBuilder } from './withdrawal-redeemer';

export class WithdrawalScriptFileBuilder {
  withScriptFile(value: string): WithdrawalScriptFile {
    return WithdrawalScriptFile.fromScriptFile(value);
  }
}

export class WithdrawalScriptFile extends CompositeCommandParameter {
  static fromScriptFile(value: string): WithdrawalScriptFile {
    return new WithdrawalScriptFile(StringCommandParameter.from('withdrawal-script-file', value));
  }
  withRedeemer(builder: Builder<WithdrawalRedeemerBuilder, WithdrawalRedeemer>): WithdrawalScriptFile {
    this.withParameter(builder(new WithdrawalRedeemerBuilder()));
    return this;
  }
}
