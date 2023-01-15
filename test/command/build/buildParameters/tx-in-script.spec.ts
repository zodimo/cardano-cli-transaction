import { TxInParameter } from '../../../../src/command/buildParameters/tx-in-parameter';
import { TxInScript } from '../../../../src/command/buildParameters/tx-in-script';
import { TxInScriptDatumBuilder } from '../../../../src/command/buildParameters/tx-in-script-datum';
import { TxInScriptRedeemerBuilder } from '../../../../src/command/buildParameters/tx-in-script-redeemer';

describe('tx-in-script', () => {
  /*
    --tx-in-script-file FILE
            [
                ( --tx-in-datum-cbor-file CBOR FILE | --tx-in-datum-file JSON FILE | --tx-in-datum-value JSON VALUE | --tx-in-inline-datum-present )
                ( --tx-in-redeemer-cbor-file CBOR FILE | --tx-in-redeemer-file JSON FILE | --tx-in-redeemer-value JSON VALUE )
            ]
  */

  it('tx-in-script-file FILE', () => {
    // withScriptFile
    const scriptFile = 'my-script-file';
    expect(new TxInScript().withScriptFile(scriptFile).toString()).toBe(`--tx-in-script-file ${scriptFile}`);
  });

  it('datum builder', () => {
    // withDatum
    new TxInScript().withDatum((builder) => {
      expect(builder).toBeInstanceOf(TxInScriptDatumBuilder);
      //return is not tested
      return builder.inlineDatumIsPresent();
    });
  });

  it('redeemer builder', () => {
    // withRedeemer
    new TxInScript().withRedeemer((builder) => {
      expect(builder).toBeInstanceOf(TxInScriptRedeemerBuilder);
      //return is not tested
      return builder.jsonValue('not-important');
    });
  });

  const txIn = '12345#1';
  it('tx-in-script-file', () => {
    const txInScriptFile = 'my-script-file';
    expect(
      TxInParameter.fromTxIn(txIn)
        .withAlternative((builder) => builder.txInScript((builder) => builder.withScriptFile(txInScriptFile)))
        .toString(),
    ).toBe([`--tx-in ${txIn}`, `--tx-in-script-file ${txInScriptFile}`].join(' '));
  });

  //all together now as an example
  it('example 1', () => {
    // script with inline datum and json file redeemer
    const scriptFile = 'my-script-file';
    const jsonRedeemerFile = 'my-json-redeemer-file';
    expect(
      TxInParameter.fromTxIn(txIn)
        .withAlternative((builder) =>
          builder.txInScript((builder) =>
            builder
              .withScriptFile(scriptFile)
              .withDatum((builder) => builder.inlineDatumIsPresent())
              .withRedeemer((builder) => builder.jsonFile(jsonRedeemerFile)),
          ),
        )
        .toString(),
    ).toBe(
      [
        `--tx-in ${txIn}`,
        `--tx-in-script-file ${scriptFile}`,
        `--tx-in-inline-datum-present`,
        `--tx-in-redeemer-file ${jsonRedeemerFile}`,
      ].join(' '),
    );
  });
});
