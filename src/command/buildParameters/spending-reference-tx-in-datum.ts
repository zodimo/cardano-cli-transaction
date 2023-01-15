import { BooleanCommandParameter, CompositeCommandParameter, StringCommandParameter } from '@zodimo/cardano-cli-base';

export class SpendingReferenceTxInDatumBuilder {
  cborFile(value: string): SpendingReferenceTxInDatum {
    return SpendingReferenceTxInDatum.cborFile(value);
  }
  jsonFile(value: string): SpendingReferenceTxInDatum {
    return SpendingReferenceTxInDatum.jsonFile(value);
  }
  jsonValue(value: string): SpendingReferenceTxInDatum {
    return SpendingReferenceTxInDatum.jsonValue(value);
  }
  inlineDatumIsPresent(): SpendingReferenceTxInDatum {
    return SpendingReferenceTxInDatum.inlineDatumIsPresent();
  }
}

export class SpendingReferenceTxInDatum extends CompositeCommandParameter {
  static cborFile(value: string): SpendingReferenceTxInDatum {
    const param = 'spending-reference-tx-in-datum-cbor-file';
    return SpendingReferenceTxInDatum.from(StringCommandParameter.from(param, value));
  }
  static jsonFile(value: string): SpendingReferenceTxInDatum {
    const param = 'spending-reference-tx-in-datum-file';
    return SpendingReferenceTxInDatum.from(StringCommandParameter.from(param, value));
  }
  static jsonValue(value: string): SpendingReferenceTxInDatum {
    const param = 'spending-reference-tx-in-datum-value';
    return SpendingReferenceTxInDatum.from(StringCommandParameter.from(param, value, true));
  }
  static inlineDatumIsPresent(): SpendingReferenceTxInDatum {
    const param = 'spending-reference-tx-in-inline-datum-present';
    return SpendingReferenceTxInDatum.from(BooleanCommandParameter.from(param));
  }
}
