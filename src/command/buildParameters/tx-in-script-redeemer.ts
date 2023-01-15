import { CompositeCommandParameter, StringCommandParameter } from '@zodimo/cardano-cli-base';

export class TxInScriptRedeemerBuilder {
  cborFile(value: string): TxInScriptRedeemer {
    return TxInScriptRedeemer.cborFile(value);
  }
  jsonFile(value: string): TxInScriptRedeemer {
    return TxInScriptRedeemer.jsonFile(value);
  }
  jsonValue(value: string): TxInScriptRedeemer {
    return TxInScriptRedeemer.jsonValue(value);
  }
}

export class TxInScriptRedeemer extends CompositeCommandParameter {
  static cborFile(value: string): TxInScriptRedeemer {
    const param = 'tx-in-redeemer-cbor-file';
    return TxInScriptRedeemer.from(StringCommandParameter.from(param, value));
  }
  static jsonFile(value: string): TxInScriptRedeemer {
    const param = 'tx-in-redeemer-file';
    return TxInScriptRedeemer.from(StringCommandParameter.from(param, value));
  }
  static jsonValue(value: string): TxInScriptRedeemer {
    const param = 'tx-in-redeemer-value';
    return TxInScriptRedeemer.from(StringCommandParameter.from(param, value, true));
  }
}
