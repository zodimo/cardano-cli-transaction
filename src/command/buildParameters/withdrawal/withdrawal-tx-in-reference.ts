import {
  BooleanCommandParameter,
  Builder,
  CompositeCommandParameter,
  StringCommandParameter,
} from '@zodimo/cardano-cli-base';
import {
  WithdrawalReferenceTxInRedeemer,
  WithdrawalReferenceTxInRedeemerBuilder,
} from './withdrawal-reference-tx-in-redeemer';

export class WithdrawalTxInReferenceBuilder {
  withTxInReference(value: string): WithdrawalTxInReference {
    return WithdrawalTxInReference.fromTxInReference(value);
  }
}

export class WithdrawalTxInReference extends CompositeCommandParameter {
  static fromTxInReference(value: string): WithdrawalTxInReference {
    return new WithdrawalTxInReference(StringCommandParameter.from('withdrawal-tx-in-reference', value));
  }

  withWithdrawalPlutusScriptV2(): WithdrawalTxInReference {
    this.withParameter(BooleanCommandParameter.from('withdrawal-plutus-script-v2'));
    return this;
  }

  withRedeemer(
    builder: Builder<WithdrawalReferenceTxInRedeemerBuilder, WithdrawalReferenceTxInRedeemer>,
  ): WithdrawalTxInReference {
    this.withParameter(builder(new WithdrawalReferenceTxInRedeemerBuilder()));
    return this;
  }
}
