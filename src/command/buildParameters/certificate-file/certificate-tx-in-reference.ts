import {
  BooleanCommandParameter,
  Builder,
  CompositeCommandParameter,
  StringCommandParameter,
} from '@zodimo/cardano-cli-base';
import {
  CertificateReferenceTxInRedeemer,
  CertificateReferenceTxInRedeemerBuilder,
} from './certificate-reference-tx-in-redeemer';
export class CertificateTxInReferenceBuilder {
  withTxInReference(value: string): CertificateTxInReference {
    return CertificateTxInReference.fromTxInReference(value);
  }
}
export class CertificateTxInReference extends CompositeCommandParameter {
  static fromTxInReference(value: string): CertificateTxInReference {
    return new CertificateTxInReference(StringCommandParameter.from('certificate-tx-in-reference', value));
  }
  withCertificatePlutusScriptV2(): CertificateTxInReference {
    this.withParameter(BooleanCommandParameter.from('certificate-plutus-script-v2'));
    return this;
  }

  withRedeemer(
    builder: Builder<CertificateReferenceTxInRedeemerBuilder, CertificateReferenceTxInRedeemer>,
  ): CertificateTxInReference {
    this.withParameter(builder(new CertificateReferenceTxInRedeemerBuilder()));
    return this;
  }
}
