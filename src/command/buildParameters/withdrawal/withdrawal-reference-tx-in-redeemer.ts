import { StringCommandParameter } from '@zodimo/cardano-cli-base';

export class WithdrawalReferenceTxInRedeemerBuilder {
  cborFile(value: string): WithdrawalReferenceTxInRedeemer {
    return WithdrawalReferenceTxInRedeemer.cborFile(value);
  }
  jsonFile(value: string): WithdrawalReferenceTxInRedeemer {
    return WithdrawalReferenceTxInRedeemer.jsonFile(value);
  }
  jsonValue(value: string): WithdrawalReferenceTxInRedeemer {
    return WithdrawalReferenceTxInRedeemer.jsonValue(value);
  }
}

export class WithdrawalReferenceTxInRedeemer extends StringCommandParameter {
  static cborFile(value: string): WithdrawalReferenceTxInRedeemer {
    return WithdrawalReferenceTxInRedeemer.from('withdrawal-reference-tx-in-redeemer-cbor-file', value);
  }
  static jsonFile(value: string): WithdrawalReferenceTxInRedeemer {
    return WithdrawalReferenceTxInRedeemer.from('withdrawal-reference-tx-in-redeemer-file', value);
  }
  static jsonValue(value: string): WithdrawalReferenceTxInRedeemer {
    return WithdrawalReferenceTxInRedeemer.from('withdrawal-reference-tx-in-redeemer-value', value, true);
  }
}
