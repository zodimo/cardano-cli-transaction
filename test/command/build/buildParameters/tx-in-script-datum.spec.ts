import { TxInScriptDatum, TxInScriptDatumBuilder } from '../../../../src/command/buildParameters/tx-in-script-datum';

describe('tx-in-script-datum', () => {
  /* 
  ( 
    --tx-in-datum-cbor-file CBOR FILE 
    | --tx-in-datum-file JSON FILE 
    | --tx-in-datum-value JSON VALUE 
    | --tx-in-inline-datum-present 
  )
  */
  it('tx-in-datum-cbor-file CBOR FILE', () => {
    const cborFile = 'my-cbor-file';
    expect(TxInScriptDatum.cborFile(cborFile).toString()).toBe(`--tx-in-datum-cbor-file ${cborFile}`);
    expect(new TxInScriptDatumBuilder().cborFile(cborFile).toString()).toBe(`--tx-in-datum-cbor-file ${cborFile}`);
  });

  it('tx-in-datum-file JSON FILE', () => {
    const jsonFile = 'my-json-file';
    expect(TxInScriptDatum.jsonFile(jsonFile).toString()).toBe(`--tx-in-datum-file ${jsonFile}`);
    expect(new TxInScriptDatumBuilder().jsonFile(jsonFile).toString()).toBe(`--tx-in-datum-file ${jsonFile}`);
  });

  it('tx-in-datum-value JSON VALUE', () => {
    const jsonValue = 'my-json-value';
    expect(TxInScriptDatum.jsonValue(jsonValue).toString()).toBe(`--tx-in-datum-value '${jsonValue}'`);
    expect(new TxInScriptDatumBuilder().jsonValue(jsonValue).toString()).toBe(`--tx-in-datum-value '${jsonValue}'`);
  });

  it('tx-in-inline-datum-present', () => {
    expect(TxInScriptDatum.inlineDatumIsPresent().toString()).toBe(`--tx-in-inline-datum-present`);
    expect(new TxInScriptDatumBuilder().inlineDatumIsPresent().toString()).toBe(`--tx-in-inline-datum-present`);
  });
});
