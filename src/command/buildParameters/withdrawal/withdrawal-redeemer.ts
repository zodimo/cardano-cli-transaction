import { StringCommandParameter } from '@zodimo/cardano-cli-base';

export class WithdrawalRedeemerBuilder {
  cborFile(value: string): WithdrawalRedeemer {
    return WithdrawalRedeemer.cborFile(value);
  }
  jsonFile(value: string): WithdrawalRedeemer {
    return WithdrawalRedeemer.jsonFile(value);
  }
  jsonValue(value: string): WithdrawalRedeemer {
    return WithdrawalRedeemer.jsonValue(value);
  }
}

export class WithdrawalRedeemer extends StringCommandParameter {
  static cborFile(value: string): WithdrawalRedeemer {
    return WithdrawalRedeemer.from('withdrawal-redeemer-cbor-file', value);
  }
  static jsonFile(value: string): WithdrawalRedeemer {
    return WithdrawalRedeemer.from('withdrawal-redeemer-file', value);
  }
  static jsonValue(value: string): WithdrawalRedeemer {
    return WithdrawalRedeemer.from('withdrawal-redeemer-value', value, true);
  }
}
