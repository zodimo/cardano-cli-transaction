import {
  WithdrawalRedeemer,
  WithdrawalRedeemerBuilder,
} from '../../../../../src/command/buildParameters/withdrawal/withdrawal-redeemer';
describe('withdrawal-redeemer', () => {
  /* 
    [ --withdrawal-redeemer-cbor-file CBOR FILE
    | --withdrawal-redeemer-file JSON FILE
    | --withdrawal-redeemer-value JSON VALUE
    ]
  */
  it('withdrawal-redeemer-cbor-file', () => {
    const cborFile = 'some-cbor-file';
    expect(WithdrawalRedeemer.cborFile(cborFile).toString()).toBe(`--withdrawal-redeemer-cbor-file ${cborFile}`);
    expect(new WithdrawalRedeemerBuilder().cborFile(cborFile).toString()).toBe(
      `--withdrawal-redeemer-cbor-file ${cborFile}`,
    );
  });
  it('withdrawal-redeemer-file', () => {
    const jsonFile = 'some-json-file';
    expect(WithdrawalRedeemer.jsonFile(jsonFile).toString()).toBe(`--withdrawal-redeemer-file ${jsonFile}`);
    expect(new WithdrawalRedeemerBuilder().jsonFile(jsonFile).toString()).toBe(
      `--withdrawal-redeemer-file ${jsonFile}`,
    );
  });
  it('withdrawal-redeemer-value', () => {
    const jsonValue = 'some-json-file';
    expect(WithdrawalRedeemer.jsonValue(jsonValue).toString()).toBe(`--withdrawal-redeemer-value '${jsonValue}'`);
    expect(new WithdrawalRedeemerBuilder().jsonValue(jsonValue).toString()).toBe(
      `--withdrawal-redeemer-value '${jsonValue}'`,
    );
  });
});
