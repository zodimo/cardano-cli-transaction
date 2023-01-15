import { TxOutParameter, TxOutParameterBuilder } from '../../../../src/command/buildParameters/tx-out-parameter';
import { TxOutDatumBuilder } from '../../../../src/command/buildParameters/tx-out/tx-out-datum';

describe('tx-out-parameter', () => {
  /* 
  [--tx-out ADDRESS VALUE
    [ --tx-out-datum-hash HASH
    | --tx-out-datum-hash-cbor-file CBOR FILE
    | --tx-out-datum-hash-file JSON FILE
    | --tx-out-datum-hash-value JSON VALUE
    | --tx-out-datum-embed-cbor-file CBOR FILE
    | --tx-out-datum-embed-file JSON FILE
    | --tx-out-datum-embed-value JSON VALUE
    | --tx-out-inline-datum-cbor-file CBOR FILE
    | --tx-out-inline-datum-file JSON FILE
    | --tx-out-inline-datum-value JSON VALUE
    ]
    [--tx-out-reference-script-file FILE]
]
  */

  it('tx-out', () => {
    const txOut = 'some-tx-out';
    expect(TxOutParameter.fromTxOut(txOut).toString()).toBe(`--tx-out ${txOut}`);
    expect(new TxOutParameterBuilder().withTxOut(txOut).toString()).toBe(`--tx-out ${txOut}`);
  });

  it('tx-out datum', () => {
    const txOut = 'some-tx-out';
    TxOutParameter.fromTxOut(txOut).withDatum((builder) => {
      expect(builder).toBeInstanceOf(TxOutDatumBuilder);
      //return value not tested here.
      return builder.datumHash('not-important');
    });
  });

  it('tx-out tx-out-reference-script-file', () => {
    const txOut = 'some-tx-out';
    const referenceScriptFile = 'some-reference-script-file';
    expect(TxOutParameter.fromTxOut(txOut).withReferenceScriptFile(referenceScriptFile).toString()).toBe(
      `--tx-out ${txOut} --tx-out-reference-script-file ${referenceScriptFile}`,
    );
  });
});
