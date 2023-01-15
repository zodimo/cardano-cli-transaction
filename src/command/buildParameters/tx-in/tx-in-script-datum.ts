import { BooleanCommandParameter, CompositeCommandParameter, StringCommandParameter } from '@zodimo/cardano-cli-base';

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
