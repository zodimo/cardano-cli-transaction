import { TxInAlternativeBuilder } from '../../../src/command/buildParameters/tx-in-alternative';
import { TxInParameter, TxInParameterBuilder } from '../../../src/command/buildParameters/tx-in-parameter';
describe('tx-in-parameter', () => {
  /*
    (
        --tx-in TX-IN
        [
            --spending-tx-in-reference TX-IN
            --spending-plutus-script-v2
            ( --spending-reference-tx-in-datum-cbor-file CBOR FILE | --spending-reference-tx-in-datum-file JSON FILE | --spending-reference-tx-in-datum-value JSON VALUE | --spending-reference-tx-in-inline-datum-present )
            ( --spending-reference-tx-in-redeemer-cbor-file CBOR FILE | --spending-reference-tx-in-redeemer-file JSON FILE | --spending-reference-tx-in-redeemer-value JSON VALUE ) 
            | --simple-script-tx-in-reference TX-IN | --tx-in-script-file FILE
            [
                ( --tx-in-datum-cbor-file CBOR FILE | --tx-in-datum-file JSON FILE | --tx-in-datum-value JSON VALUE | --tx-in-inline-datum-present )
                ( --tx-in-redeemer-cbor-file CBOR FILE | --tx-in-redeemer-file JSON FILE | --tx-in-redeemer-value JSON VALUE )
            ]
        ]
    )
*/

  const txIn = '12345#1';
  expect(TxInParameter.fromTxIn(txIn).toString()).toBe(`--tx-in ${txIn}`);
  expect(new TxInParameterBuilder().withTxIn(txIn).toString()).toBe(`--tx-in ${txIn}`);

  it('tx-in-parameter alternative options', () => {
    TxInParameter.fromTxIn(txIn).withAlternative((builder) => {
      expect(builder).toBeInstanceOf(TxInAlternativeBuilder);
      // the return is not tested here
      return builder.simpleScriptTxInReference('not-important-here');
    });

    new TxInParameterBuilder().withTxIn(txIn).withAlternative((builder) => {
      expect(builder).toBeInstanceOf(TxInAlternativeBuilder);
      // the return is not tested here
      return builder.simpleScriptTxInReference('not-important-here');
    });
  });
});
