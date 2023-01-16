import { StringCommandParameter } from '@zodimo/cardano-cli-base';

export class CertificateRedeemerBuilder {
  cborFile(value: string): CertificateRedeemer {
    return CertificateRedeemer.cborFile(value);
  }
  jsonFile(value: string): CertificateRedeemer {
    return CertificateRedeemer.jsonFile(value);
  }
  jsonValue(value: string): CertificateRedeemer {
    return CertificateRedeemer.jsonValue(value);
  }
}
export class CertificateRedeemer extends StringCommandParameter {
  static cborFile(value: string): CertificateRedeemer {
    return CertificateRedeemer.from('certificate-redeemer-cbor-file', value);
  }
  static jsonFile(value: string): CertificateRedeemer {
    return CertificateRedeemer.from('certificate-redeemer-file', value);
  }
  static jsonValue(value: string): CertificateRedeemer {
    return CertificateRedeemer.from('certificate-redeemer-value', value, true);
  }
}
