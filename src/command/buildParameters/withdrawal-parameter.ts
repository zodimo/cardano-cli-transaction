import { Builder, CompositeCommandParameter, StringCommandParameter } from '@zodimo/cardano-cli-base';
import { WithdrawalScriptFile, WithdrawalScriptFileBuilder } from './withdrawal/withdrawal-script-file';
import { WithdrawalTxInReference, WithdrawalTxInReferenceBuilder } from './withdrawal/withdrawal-tx-in-reference';

export class WithdrawalParameterBuilder {
  withWithdrawal(value: string): WithdrawalParameter {
    return WithdrawalParameter.fromWithdrawal(value);
  }
}

export class WithdrawalParameter extends CompositeCommandParameter {
  static fromWithdrawal(value: string): WithdrawalParameter {
    return new WithdrawalParameter(StringCommandParameter.from('withdrawal', value));
  }

  withWithdrawalScriptFile(builder: Builder<WithdrawalScriptFileBuilder, WithdrawalScriptFile>): WithdrawalParameter {
    this.withParameter(builder(new WithdrawalScriptFileBuilder()));
    return this;
  }

  withWithdrawalTxInReference(
    builder: Builder<WithdrawalTxInReferenceBuilder, WithdrawalTxInReference>,
  ): WithdrawalParameter {
    this.withParameter(builder(new WithdrawalTxInReferenceBuilder()));
    return this;
  }
}
