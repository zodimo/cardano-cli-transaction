import {
  CertificateRedeemer,
  CertificateRedeemerBuilder,
} from '../../../../../src/command/buildParameters/certificate-file/certificate-redeemer';

describe('certificate-redeemer', () => {
  /* 
    [ --certificate-redeemer-cbor-file CBOR FILE
    | --certificate-redeemer-file JSON FILE
    | --certificate-redeemer-value JSON VALUE
    ]
  */

  it('certificate-redeemer-cbor-file', () => {
    const cborFile = 'some-cbor-file';
    expect(CertificateRedeemer.cborFile(cborFile).toString()).toBe(`--certificate-redeemer-cbor-file ${cborFile}`);
    expect(new CertificateRedeemerBuilder().cborFile(cborFile).toString()).toBe(
      `--certificate-redeemer-cbor-file ${cborFile}`,
    );
  });

  it('certificate-redeemer-file', () => {
    const jsonFile = 'some-json-file';
    expect(CertificateRedeemer.jsonFile(jsonFile).toString()).toBe(`--certificate-redeemer-file ${jsonFile}`);
    expect(new CertificateRedeemerBuilder().jsonFile(jsonFile).toString()).toBe(
      `--certificate-redeemer-file ${jsonFile}`,
    );
  });

  it('certificate-redeemer-value', () => {
    const jsonValue = 'some-json-value';
    expect(CertificateRedeemer.jsonValue(jsonValue).toString()).toBe(`--certificate-redeemer-value '${jsonValue}'`);
    expect(new CertificateRedeemerBuilder().jsonValue(jsonValue).toString()).toBe(
      `--certificate-redeemer-value '${jsonValue}'`,
    );
  });
});
