import { MintRedeemer, MintRedeemerBuilder } from '../../../../../src/command/buildParameters/mint/mint-redeemer';

describe('mint-redeemer', () => {
  /*
     [ --mint-redeemer-cbor-file CBOR FILE
    | --mint-redeemer-file JSON FILE
    | --mint-redeemer-value JSON VALUE
    ]
 */
  it('mint-redeemer-cbor-file', () => {
    const cborFile = 'some-cbor-file';
    expect(MintRedeemer.cborFile(cborFile).toString()).toBe(`--mint-redeemer-cbor-file ${cborFile}`);
    expect(new MintRedeemerBuilder().cborFile(cborFile).toString()).toBe(`--mint-redeemer-cbor-file ${cborFile}`);
  });
  it('mint-redeemer-file', () => {
    const jsonFile = 'some-json-file';
    expect(MintRedeemer.jsonFile(jsonFile).toString()).toBe(`--mint-redeemer-file ${jsonFile}`);
    expect(new MintRedeemerBuilder().jsonFile(jsonFile).toString()).toBe(`--mint-redeemer-file ${jsonFile}`);
  });
  it('mint-redeemer-value', () => {
    const jsonValue = 'some-json-value';
    expect(MintRedeemer.jsonValue(jsonValue).toString()).toBe(`--mint-redeemer-value '${jsonValue}'`);
    expect(new MintRedeemerBuilder().jsonValue(jsonValue).toString()).toBe(`--mint-redeemer-value '${jsonValue}'`);
  });
});
