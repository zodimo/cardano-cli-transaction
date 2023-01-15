import { StringCommandParameter } from '@zodimo/cardano-cli-base';

export class MintReferenceTxInRedeemerBuilder {
  cborFile(value: string): MintReferenceTxInRedeemer {
    return MintReferenceTxInRedeemer.cborFile(value);
  }
  jsonFile(value: string): MintReferenceTxInRedeemer {
    return MintReferenceTxInRedeemer.jsonFile(value);
  }
  jsonValue(value: string): MintReferenceTxInRedeemer {
    return MintReferenceTxInRedeemer.jsonValue(value);
  }
}

export class MintReferenceTxInRedeemer extends StringCommandParameter {
  static cborFile(value: string): MintReferenceTxInRedeemer {
    return MintReferenceTxInRedeemer.from('mint-reference-tx-in-redeemer-cbor-file', value);
  }
  static jsonFile(value: string): MintReferenceTxInRedeemer {
    return MintReferenceTxInRedeemer.from('mint-reference-tx-in-redeemer-file', value);
  }
  static jsonValue(value: string): MintReferenceTxInRedeemer {
    return MintReferenceTxInRedeemer.from('mint-reference-tx-in-redeemer-value', value, true);
  }
}
