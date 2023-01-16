import {
  WithdrawalReferenceTxInRedeemer,
  WithdrawalReferenceTxInRedeemerBuilder,
} from '../../../../../src/command/buildParameters/withdrawal/withdrawal-reference-tx-in-redeemer';
describe('withdrawal-reference-tx-in-redeemer', () => {
  /* 
  ( --withdrawal-reference-tx-in-redeemer-cbor-file CBOR FILE
    | --withdrawal-reference-tx-in-redeemer-file JSON FILE
    | --withdrawal-reference-tx-in-redeemer-value JSON VALUE
    )
  */
  it('withdrawal-reference-tx-in-redeemer-cbor-file', () => {
    const cborFile = 'some-cbor-file';
    expect(WithdrawalReferenceTxInRedeemer.cborFile(cborFile).toString()).toBe(
      `--withdrawal-reference-tx-in-redeemer-cbor-file ${cborFile}`,
    );
    expect(new WithdrawalReferenceTxInRedeemerBuilder().cborFile(cborFile).toString()).toBe(
      `--withdrawal-reference-tx-in-redeemer-cbor-file ${cborFile}`,
    );
  });

  it('withdrawal-reference-tx-in-redeemer-file', () => {
    const jsonFile = 'some-json-file';
    expect(WithdrawalReferenceTxInRedeemer.jsonFile(jsonFile).toString()).toBe(
      `--withdrawal-reference-tx-in-redeemer-file ${jsonFile}`,
    );
    expect(new WithdrawalReferenceTxInRedeemerBuilder().jsonFile(jsonFile).toString()).toBe(
      `--withdrawal-reference-tx-in-redeemer-file ${jsonFile}`,
    );
  });

  it('withdrawal-reference-tx-in-redeemer-value', () => {
    const jsonValue = 'some-json-value';
    expect(WithdrawalReferenceTxInRedeemer.jsonValue(jsonValue).toString()).toBe(
      `--withdrawal-reference-tx-in-redeemer-value '${jsonValue}'`,
    );
    expect(new WithdrawalReferenceTxInRedeemerBuilder().jsonValue(jsonValue).toString()).toBe(
      `--withdrawal-reference-tx-in-redeemer-value '${jsonValue}'`,
    );
  });
});
