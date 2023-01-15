import { StringCommandParameter } from '@zodimo/cardano-cli-base';

export class MintRedeemerBuilder {
  cborFile(value: string): MintRedeemer {
    return MintRedeemer.cborFile(value);
  }
  jsonFile(value: string): MintRedeemer {
    return MintRedeemer.jsonFile(value);
  }
  jsonValue(value: string): MintRedeemer {
    return MintRedeemer.jsonValue(value);
  }
}
export class MintRedeemer extends StringCommandParameter {
  static cborFile(value: string): MintRedeemer {
    return MintRedeemer.from('mint-redeemer-cbor-file', value);
  }
  static jsonFile(value: string): MintRedeemer {
    return MintRedeemer.from('mint-redeemer-file', value);
  }
  static jsonValue(value: string): MintRedeemer {
    return MintRedeemer.from('mint-redeemer-value', value, true);
  }
}
