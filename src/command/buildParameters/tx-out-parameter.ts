import { Builder, CompositeCommandParameter, StringCommandParameter } from '@zodimo/cardano-cli-base';
import { TxOutDatum, TxOutDatumBuilder } from './tx-out/tx-out-datum';

export class TxOutParameterBuilder {
  withTxOut(value: string): TxOutParameter {
    return TxOutParameter.fromTxOut(value);
  }
}

export class TxOutParameter extends CompositeCommandParameter {
  static fromTxOut(value: string): TxOutParameter {
    return new TxOutParameter(new StringCommandParameter('tx-out', value));
  }

  withDatum(builder: Builder<TxOutDatumBuilder, TxOutDatum>): TxOutParameter {
    this.withParameter(builder(new TxOutDatumBuilder()));
    return this;
  }
  withReferenceScriptFile(value: string): TxOutParameter {
    this.withParameter(new StringCommandParameter('tx-out-reference-script-file', value));
    return this;
  }
}
