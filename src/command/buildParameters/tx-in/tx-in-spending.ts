import {
  BooleanCommandParameter,
  Builder,
  CompositeCommandParameter,
  StringCommandParameter,
} from '@zodimo/cardano-cli-base';
import { SpendingReferenceTxInDatum, SpendingReferenceTxInDatumBuilder } from './spending-reference-tx-in-datum';
import {
  SpendingReferenceTxInRedeemer,
  SpendingReferenceTxInRedeemerBuilder,
} from './spending-reference-tx-in-redeemer';

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
