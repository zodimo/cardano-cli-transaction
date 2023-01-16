import {
  CertificateReferenceTxInRedeemer,
  CertificateReferenceTxInRedeemerBuilder,
} from '../../../../../src/command/buildParameters/certificate-file/certificate-reference-tx-in-redeemer';
describe('certificate-reference-tx-in-redeemer', () => {
  /* 
  ( --certificate-reference-tx-in-redeemer-cbor-file CBOR FILE
    | --certificate-reference-tx-in-redeemer-file JSON FILE
    | --certificate-reference-tx-in-redeemer-value JSON VALUE
    )
  */
  it('certificate-reference-tx-in-redeemer-cbor-file', () => {
    const cborFile = 'some-cbor-file';
    expect(CertificateReferenceTxInRedeemer.cborFile(cborFile).toString()).toBe(
      `--certificate-reference-tx-in-redeemer-cbor-file ${cborFile}`,
    );
    expect(new CertificateReferenceTxInRedeemerBuilder().cborFile(cborFile).toString()).toBe(
      `--certificate-reference-tx-in-redeemer-cbor-file ${cborFile}`,
    );
  });
  it('certificate-reference-tx-in-redeemer-file', () => {
    const jsonFile = 'some-json-file';
    expect(CertificateReferenceTxInRedeemer.jsonFile(jsonFile).toString()).toBe(
      `--certificate-reference-tx-in-redeemer-file ${jsonFile}`,
    );
    expect(new CertificateReferenceTxInRedeemerBuilder().jsonFile(jsonFile).toString()).toBe(
      `--certificate-reference-tx-in-redeemer-file ${jsonFile}`,
    );
  });
  it('certificate-reference-tx-in-redeemer-value', () => {
    const jsonValue = 'some-json-value';
    expect(CertificateReferenceTxInRedeemer.jsonValue(jsonValue).toString()).toBe(
      `--certificate-reference-tx-in-redeemer-value '${jsonValue}'`,
    );
    expect(new CertificateReferenceTxInRedeemerBuilder().jsonValue(jsonValue).toString()).toBe(
      `--certificate-reference-tx-in-redeemer-value '${jsonValue}'`,
    );
  });
});
