import { SpendingReferenceTxInDatumBuilder } from '../../../../../src/command/buildParameters/tx-in/spending-reference-tx-in-datum';
import { SpendingReferenceTxInRedeemerBuilder } from '../../../../../src/command/buildParameters/tx-in/spending-reference-tx-in-redeemer';
import { TxInSpending } from '../../../../../src/command/buildParameters/tx-in/tx-in-spending';

describe('tx-in-spending', () => {
  /* 
  --spending-tx-in-reference TX-IN
    --spending-plutus-script-v2
    ( --spending-reference-tx-in-datum-cbor-file CBOR FILE | --spending-reference-tx-in-datum-file JSON FILE | --spending-reference-tx-in-datum-value JSON VALUE | --spending-reference-tx-in-inline-datum-present )
    ( --spending-reference-tx-in-redeemer-cbor-file CBOR FILE | --spending-reference-tx-in-redeemer-file JSON FILE | --spending-reference-tx-in-redeemer-value JSON VALUE ) 
       
  */
  it('spending-tx-in-reference', () => {
    const spendingTxInReference = '234#';
    expect(new TxInSpending().withspendingTxInReference(spendingTxInReference).toString()).toBe(
      `--spending-tx-in-reference ${spendingTxInReference}`,
    );
  });

  it('spending-plutus-script-v2', () => {
    expect(new TxInSpending().withSpendingPlutusScriptV2().toString()).toBe(`--spending-plutus-script-v2`);
  });

  it('SpendingReferenceTxInDatumBuilder', () => {
    new TxInSpending().withSpendingReferenceTxInDatum((builder) => {
      expect(builder).toBeInstanceOf(SpendingReferenceTxInDatumBuilder);
      //return not tested
      return builder.inlineDatumIsPresent();
    });
  });

  it('withSpendingReferenceTxInRedeemer', () => {
    new TxInSpending().withSpendingReferenceTxInRedeemer((builder) => {
      expect(builder).toBeInstanceOf(SpendingReferenceTxInRedeemerBuilder);
      //return not tested
      return builder.jsonValue('');
    });
  });
});
