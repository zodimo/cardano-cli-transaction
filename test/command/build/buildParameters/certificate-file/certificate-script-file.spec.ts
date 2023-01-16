import { CertificateRedeemerBuilder } from '../../../../../src/command/buildParameters/certificate-file/certificate-redeemer';
import {
  CertificateScriptFile,
  CertificateScriptFileBuilder,
} from '../../../../../src/command/buildParameters/certificate-file/certificate-script-file';

describe('certificate-script-file', () => {
  /* 
    [ --certificate-script-file FILE
      [ --certificate-redeemer-cbor-file CBOR FILE
      | --certificate-redeemer-file JSON FILE
      | --certificate-redeemer-value JSON VALUE
    ]
  */
  it('certificate-script-file', () => {
    const scriptFile = 'some-script-file';
    expect(CertificateScriptFile.fromsScriptFile(scriptFile).toString()).toBe(
      `--certificate-script-file ${scriptFile}`,
    );
    expect(new CertificateScriptFileBuilder().withScriptFile(scriptFile).toString()).toBe(
      `--certificate-script-file ${scriptFile}`,
    );
  });

  it('certificate-script-file , redemer', () => {
    const scriptFile = 'some-script-file';
    CertificateScriptFile.fromsScriptFile(scriptFile).withRedeemer((builder) => {
      expect(builder).toBeInstanceOf(CertificateRedeemerBuilder);
      //return is not tested here.
      return builder.cborFile('not-important');
    });
  });
});
