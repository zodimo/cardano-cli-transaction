import {
  SpendingReferenceTxInDatum,
  SpendingReferenceTxInDatumBuilder,
} from '../../../../../src/command/buildParameters/tx-in/spending-reference-tx-in-datum';

describe('spending-reference-tx-in-datum', () => {
  /* 
  ( 
    --spending-reference-tx-in-datum-cbor-file CBOR FILE 
    | --spending-reference-tx-in-datum-file JSON FILE 
    | --spending-reference-tx-in-datum-value JSON VALUE 
    | --spending-reference-tx-in-inline-datum-present 
  )
  */

  it('--spending-reference-tx-in-datum-cbor-file CBOR FILE', () => {
    const cborFile = 'my-cbor-file';
    expect(SpendingReferenceTxInDatum.cborFile(cborFile).toString()).toBe(
      `--spending-reference-tx-in-datum-cbor-file ${cborFile}`,
    );
    expect(new SpendingReferenceTxInDatumBuilder().cborFile(cborFile).toString()).toBe(
      `--spending-reference-tx-in-datum-cbor-file ${cborFile}`,
    );
  });

  it('--spending-reference-tx-in-datum-file JSON FILE', () => {
    const jsonFile = 'my-json-file';
    expect(SpendingReferenceTxInDatum.jsonFile(jsonFile).toString()).toBe(
      `--spending-reference-tx-in-datum-file ${jsonFile}`,
    );
    expect(new SpendingReferenceTxInDatumBuilder().jsonFile(jsonFile).toString()).toBe(
      `--spending-reference-tx-in-datum-file ${jsonFile}`,
    );
  });

  it('--spending-reference-tx-in-datum-value JSON VALUE', () => {
    const jsonValue = 'my-json-value';
    expect(SpendingReferenceTxInDatum.jsonValue(jsonValue).toString()).toBe(
      `--spending-reference-tx-in-datum-value '${jsonValue}'`,
    );
    expect(new SpendingReferenceTxInDatumBuilder().jsonValue(jsonValue).toString()).toBe(
      `--spending-reference-tx-in-datum-value '${jsonValue}'`,
    );
  });

  it('--spending-reference-tx-in-inline-datum-present ', () => {
    expect(SpendingReferenceTxInDatum.inlineDatumIsPresent().toString()).toBe(
      `--spending-reference-tx-in-inline-datum-present`,
    );
    expect(new SpendingReferenceTxInDatumBuilder().inlineDatumIsPresent().toString()).toBe(
      `--spending-reference-tx-in-inline-datum-present`,
    );
  });
});
