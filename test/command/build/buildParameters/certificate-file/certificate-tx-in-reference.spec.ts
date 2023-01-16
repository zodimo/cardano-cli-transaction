import { CertificateReferenceTxInRedeemerBuilder } from '../../../../../src/command/buildParameters/certificate-file/certificate-reference-tx-in-redeemer';
import {
  CertificateTxInReference,
  CertificateTxInReferenceBuilder,
} from '../../../../../src/command/buildParameters/certificate-file/certificate-tx-in-reference';

describe('certificate-tx-in-reference', () => {
  /* 
    | --certificate-tx-in-reference TX-IN
    --certificate-plutus-script-v2
    ( --certificate-reference-tx-in-redeemer-cbor-file CBOR FILE
    | --certificate-reference-tx-in-redeemer-file JSON FILE
    | --certificate-reference-tx-in-redeemer-value JSON VALUE
    )
  */
  it('certificate-tx-in-reference', () => {
    const txInReference = '234523#2';
    expect(CertificateTxInReference.fromTxInReference(txInReference).toString()).toBe(
      `--certificate-tx-in-reference ${txInReference}`,
    );
    expect(new CertificateTxInReferenceBuilder().withTxInReference(txInReference).toString()).toBe(
      `--certificate-tx-in-reference ${txInReference}`,
    );
  });

  it('certificate-tx-in-reference, certificate-plutus-script-v2', () => {
    const txInReference = '234523#2';
    expect(CertificateTxInReference.fromTxInReference(txInReference).withCertificatePlutusScriptV2().toString()).toBe(
      `--certificate-tx-in-reference ${txInReference} --certificate-plutus-script-v2`,
    );
  });

  it('certificate-tx-in-reference, redeemer', () => {
    const txInReference = '234523#2';
    CertificateTxInReference.fromTxInReference(txInReference).withRedeemer((builder) => {
      expect(builder).toBeInstanceOf(CertificateReferenceTxInRedeemerBuilder);
      //return not tested here.
      return builder.cborFile('not-important');
    });
  });
});
