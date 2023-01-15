import { Builder, CompositeCommandParameter, StringCommandParameter } from '@zodimo/cardano-cli-base';
import { TxInAlternative, TxInAlternativeBuilder } from './tx-in/tx-in-alternative';

export class TxInParameterBuilder {
  withTxIn(value: string): TxInParameter {
    return TxInParameter.fromTxIn(value);
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
