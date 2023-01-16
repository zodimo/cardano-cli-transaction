import { StringCommandParameter } from '@zodimo/cardano-cli-base';

export class CertificateReferenceTxInRedeemerBuilder {
  cborFile(value: string): CertificateReferenceTxInRedeemer {
    return CertificateReferenceTxInRedeemer.cborFile(value);
  }
  jsonFile(value: string): CertificateReferenceTxInRedeemer {
    return CertificateReferenceTxInRedeemer.jsonFile(value);
  }
  jsonValue(value: string): CertificateReferenceTxInRedeemer {
    return CertificateReferenceTxInRedeemer.jsonValue(value);
  }
}

export class CertificateReferenceTxInRedeemer extends StringCommandParameter {
  static cborFile(value: string): CertificateReferenceTxInRedeemer {
    return StringCommandParameter.from('certificate-reference-tx-in-redeemer-cbor-file', value);
  }
  static jsonFile(value: string): CertificateReferenceTxInRedeemer {
    return StringCommandParameter.from('certificate-reference-tx-in-redeemer-file', value);
  }
  static jsonValue(value: string): CertificateReferenceTxInRedeemer {
    return StringCommandParameter.from('certificate-reference-tx-in-redeemer-value', value, true);
  }
}
