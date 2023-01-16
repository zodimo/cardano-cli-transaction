import { CertificateFile } from '../../../../src/command/buildParameters/certificate-file';
import { CertificateScriptFileBuilder } from '../../../../src/command/buildParameters/certificate-file/certificate-script-file';
import { CertificateTxInReferenceBuilder } from '../../../../src/command/buildParameters/certificate-file/certificate-tx-in-reference';
describe('certificate-file', () => {
  /*
  [--certificate-file CERTIFICATEFILE

  [ --certificate-script-file FILE
    [ --certificate-redeemer-cbor-file CBOR FILE
    | --certificate-redeemer-file JSON FILE
    | --certificate-redeemer-value JSON VALUE
    ]

  | --certificate-tx-in-reference TX-IN
    --certificate-plutus-script-v2
    ( --certificate-reference-tx-in-redeemer-cbor-file CBOR FILE
    | --certificate-reference-tx-in-redeemer-file JSON FILE
    | --certificate-reference-tx-in-redeemer-value JSON VALUE
    )

  ]]
  */
  it('certificate-file', () => {
    const certificateFile = 'some-cert-file';
    expect(CertificateFile.fromCertificateFile(certificateFile).toString()).toBe(
      `--certificate-file ${certificateFile}`,
    );
  });

  it('certificate-file certificate-script-file', () => {
    const certificateFile = 'some-cert-file';
    CertificateFile.fromCertificateFile(certificateFile).withCertificateScriptFile((builder) => {
      expect(builder).toBeInstanceOf(CertificateScriptFileBuilder);
      //output is not tested here
      return builder.withScriptFile('not-important');
    });
  });

  it('certificate-file certificate-tx-in-reference', () => {
    const certificateFile = 'some-cert-file';
    CertificateFile.fromCertificateFile(certificateFile).withCertificateTxInReference((builder) => {
      expect(builder).toBeInstanceOf(CertificateTxInReferenceBuilder);
      //output is not tested here
      return builder.withTxInReference('not-important');
    });
  });
});
