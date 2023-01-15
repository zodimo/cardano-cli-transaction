import { MintRedeemerBuilder } from '../../../../../src/command/buildParameters/mint/mint-redeemer';
import { MintScriptFile } from '../../../../../src/command/buildParameters/mint/mint-script-file';
describe('mint-script-file', () => {
  /* 
    ( --mint-script-file FILE
      [ --mint-redeemer-cbor-file CBOR FILE
      | --mint-redeemer-file JSON FILE
      | --mint-redeemer-value JSON VALUE
      ]
  */

  it('mint-script-file FILE', () => {
    const scriptFile = 'some-script-file';
    expect(MintScriptFile.fromScriptFile(scriptFile).toString()).toBe(`--mint-script-file ${scriptFile}`);
  });

  it('mint-script-file redeemer', () => {
    const scriptFile = 'some-script-file';
    MintScriptFile.fromScriptFile(scriptFile).withRedeemer((builder) => {
      expect(builder).toBeInstanceOf(MintRedeemerBuilder);
      //return is not tested here
      return builder.cborFile('not-important');
    });

    const cborFile = 'some-cbor-file';
    expect(
      MintScriptFile.fromScriptFile(scriptFile)
        .withRedeemer((builder) => builder.cborFile(cborFile))
        .toString(),
    ).toBe(`--mint-script-file ${scriptFile} --mint-redeemer-cbor-file ${cborFile}`);
  });
});
