import { Builder, CompositeCommandParameter, StringCommandParameter } from '@zodimo/cardano-cli-base';
import { TxInScriptDatum, TxInScriptDatumBuilder } from './tx-in-script-datum';
import { TxInScriptRedeemer, TxInScriptRedeemerBuilder } from './tx-in-script-redeemer';

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
