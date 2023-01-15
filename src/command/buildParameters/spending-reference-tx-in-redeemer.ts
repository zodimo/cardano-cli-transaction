import { CompositeCommandParameter, StringCommandParameter } from '@zodimo/cardano-cli-base';

export class SpendingReferenceTxInRedeemerBuilder {
  // this is a factory instance not a builder
  cborFile(value: string): SpendingReferenceTxInRedeemer {
    return SpendingReferenceTxInRedeemer.cborFile(value);
  }
  jsonFile(value: string): SpendingReferenceTxInRedeemer {
    return SpendingReferenceTxInRedeemer.jsonFile(value);
  }
  jsonValue(value: string): SpendingReferenceTxInRedeemer {
    return SpendingReferenceTxInRedeemer.jsonValue(value);
  }
}

export class SpendingReferenceTxInRedeemer extends CompositeCommandParameter {
  // this is a factory class not a builder
  static cborFile(value: string): SpendingReferenceTxInRedeemer {
    const param = 'spending-reference-tx-in-redeemer-cbor-file';
    return SpendingReferenceTxInRedeemer.from(StringCommandParameter.from(param, value));
  }
  static jsonFile(value: string): SpendingReferenceTxInRedeemer {
    const param = 'spending-reference-tx-in-redeemer-file';
    return SpendingReferenceTxInRedeemer.from(StringCommandParameter.from(param, value));
  }
  static jsonValue(value: string): SpendingReferenceTxInRedeemer {
    const param = 'spending-reference-tx-in-redeemer-value';
    return SpendingReferenceTxInRedeemer.from(StringCommandParameter.from(param, value));
  }
}
