import {
  TxInScriptRedeemer,
  TxInScriptRedeemerBuilder,
} from '../../../../../src/command/buildParameters/tx-in/tx-in-script-redeemer';

describe('tx-in-script-redeemer', () => {
  /* 
   ( 
    --tx-in-redeemer-cbor-file CBOR FILE 
    | --tx-in-redeemer-file JSON FILE 
    | --tx-in-redeemer-value JSON VALUE 
    )
  */

  it('tx-in-redeemer-cbor-file CBOR FILE', () => {
    const cborFile = 'my-cbor-file';
    expect(TxInScriptRedeemer.cborFile(cborFile).toString()).toBe(`--tx-in-redeemer-cbor-file ${cborFile}`);
    expect(new TxInScriptRedeemerBuilder().cborFile(cborFile).toString()).toBe(
      `--tx-in-redeemer-cbor-file ${cborFile}`,
    );
  });

  it('tx-in-redeemer-file JSON FILE', () => {
    const jsonFile = 'my-json-file';
    expect(TxInScriptRedeemer.jsonFile(jsonFile).toString()).toBe(`--tx-in-redeemer-file ${jsonFile}`);
    expect(new TxInScriptRedeemerBuilder().jsonFile(jsonFile).toString()).toBe(`--tx-in-redeemer-file ${jsonFile}`);
  });

  it('tx-in-redeemer-value JSON VALUE', () => {
    const jsonValue = 'my-json-value';
    expect(TxInScriptRedeemer.jsonValue(jsonValue).toString()).toBe(`--tx-in-redeemer-value '${jsonValue}'`);
    expect(new TxInScriptRedeemerBuilder().jsonValue(jsonValue).toString()).toBe(
      `--tx-in-redeemer-value '${jsonValue}'`,
    );
  });
});
