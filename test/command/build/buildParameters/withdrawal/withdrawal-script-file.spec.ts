import { WithdrawalRedeemerBuilder } from '../../../../../src/command/buildParameters/withdrawal/withdrawal-redeemer';
import {
  WithdrawalScriptFile,
  WithdrawalScriptFileBuilder,
} from '../../../../../src/command/buildParameters/withdrawal/withdrawal-script-file';
describe('withdrawal-script-file', () => {
  /* 
    --withdrawal-script-file FILE
    [ --withdrawal-redeemer-cbor-file CBOR FILE
    | --withdrawal-redeemer-file JSON FILE
    | --withdrawal-redeemer-value JSON VALUE
    ]
  */
  it('withdrawal-script-file', () => {
    const scriptFile = 'some-script-file';
    expect(WithdrawalScriptFile.fromScriptFile(scriptFile).toString()).toBe(`--withdrawal-script-file ${scriptFile}`);
    expect(new WithdrawalScriptFileBuilder().withScriptFile(scriptFile).toString()).toBe(
      `--withdrawal-script-file ${scriptFile}`,
    );
  });

  it('withdrawal-script-file Redeemer', () => {
    const scriptFile = 'some-script-file';
    WithdrawalScriptFile.fromScriptFile(scriptFile).withRedeemer((builder) => {
      expect(builder).toBeInstanceOf(WithdrawalRedeemerBuilder);
      //return is not tested here.
      return builder.cborFile('not-important');
    });
  });
});
