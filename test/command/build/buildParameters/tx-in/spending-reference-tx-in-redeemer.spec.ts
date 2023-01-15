import {
  SpendingReferenceTxInRedeemer,
  SpendingReferenceTxInRedeemerBuilder,
} from '../../../../../src/command/buildParameters/tx-in/spending-reference-tx-in-redeemer';

describe('spending-reference-tx-in-redeemer', () => {
  /* 
   ( 
    --spending-reference-tx-in-redeemer-cbor-file CBOR FILE 
    | --spending-reference-tx-in-redeemer-file JSON FILE 
    | --spending-reference-tx-in-redeemer-value JSON VALUE 
    ) 
  */

  it('--spending-reference-tx-in-redeemer-cbor-file CBOR FILE', () => {
    const cborFile = 'my-cbor-file';
    expect(SpendingReferenceTxInRedeemer.cborFile(cborFile).toString()).toBe(
      `--spending-reference-tx-in-redeemer-cbor-file ${cborFile}`,
    );
    expect(new SpendingReferenceTxInRedeemerBuilder().cborFile(cborFile).toString()).toBe(
      `--spending-reference-tx-in-redeemer-cbor-file ${cborFile}`,
    );
  });

  it('--spending-reference-tx-in-redeemer-file JSON FILE', () => {
    const jsonFile = 'my-json-file';
    expect(SpendingReferenceTxInRedeemer.jsonFile(jsonFile).toString()).toBe(
      `--spending-reference-tx-in-redeemer-file ${jsonFile}`,
    );
    expect(new SpendingReferenceTxInRedeemerBuilder().jsonFile(jsonFile).toString()).toBe(
      `--spending-reference-tx-in-redeemer-file ${jsonFile}`,
    );
  });

  it('--spending-reference-tx-in-redeemer-value JSON VALUE', () => {
    const jsonValue = 'my-json-value';
    expect(SpendingReferenceTxInRedeemer.jsonValue(jsonValue).toString()).toBe(
      `--spending-reference-tx-in-redeemer-value '${jsonValue}'`,
    );
    expect(new SpendingReferenceTxInRedeemerBuilder().jsonValue(jsonValue).toString()).toBe(
      `--spending-reference-tx-in-redeemer-value '${jsonValue}'`,
    );
  });
});
