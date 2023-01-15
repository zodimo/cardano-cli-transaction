import {
  MintReferenceTxInRedeemer,
  MintReferenceTxInRedeemerBuilder,
} from '../../../../../src/command/buildParameters/mint/mint-reference-tx-in-redeemer';

describe('mint-reference-tx-in-redeemer', () => {
  /* 
    ( --mint-reference-tx-in-redeemer-cbor-file CBOR FILE
    | --mint-reference-tx-in-redeemer-file JSON FILE
    | --mint-reference-tx-in-redeemer-value JSON VALUE
    )
  */
  it('mint-reference-tx-in-redeemer-cbor-file', () => {
    const cborFile = 'some-cbor-file';
    expect(MintReferenceTxInRedeemer.cborFile(cborFile).toString()).toBe(
      `--mint-reference-tx-in-redeemer-cbor-file ${cborFile}`,
    );
    expect(new MintReferenceTxInRedeemerBuilder().cborFile(cborFile).toString()).toBe(
      `--mint-reference-tx-in-redeemer-cbor-file ${cborFile}`,
    );
  });

  it('mint-reference-tx-in-redeemer-file', () => {
    const jsonFile = 'some-json-file';
    expect(MintReferenceTxInRedeemer.jsonFile(jsonFile).toString()).toBe(
      `--mint-reference-tx-in-redeemer-file ${jsonFile}`,
    );
    expect(new MintReferenceTxInRedeemerBuilder().jsonFile(jsonFile).toString()).toBe(
      `--mint-reference-tx-in-redeemer-file ${jsonFile}`,
    );
  });

  it('mint-reference-tx-in-redeemer-value', () => {
    const jsonValue = 'some-json-file';
    expect(MintReferenceTxInRedeemer.jsonValue(jsonValue).toString()).toBe(
      `--mint-reference-tx-in-redeemer-value '${jsonValue}'`,
    );
    expect(new MintReferenceTxInRedeemerBuilder().jsonValue(jsonValue).toString()).toBe(
      `--mint-reference-tx-in-redeemer-value '${jsonValue}'`,
    );
  });
});
