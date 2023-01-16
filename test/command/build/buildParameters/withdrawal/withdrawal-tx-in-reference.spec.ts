import { WithdrawalReferenceTxInRedeemerBuilder } from '../../../../../src/command/buildParameters/withdrawal/withdrawal-reference-tx-in-redeemer';
import {
  WithdrawalTxInReference,
  WithdrawalTxInReferenceBuilder,
} from '../../../../../src/command/buildParameters/withdrawal/withdrawal-tx-in-reference';
describe('withdrawal-tx-in-reference', () => {
  /* 
| --withdrawal-tx-in-reference TX-IN
    --withdrawal-plutus-script-v2
    ( --withdrawal-reference-tx-in-redeemer-cbor-file CBOR FILE
    | --withdrawal-reference-tx-in-redeemer-file JSON FILE
    | --withdrawal-reference-tx-in-redeemer-value JSON VALUE
    )
  */
  it('withdrawal-script-file', () => {
    const txInReference = '54534543#2';
    expect(WithdrawalTxInReference.fromTxInReference(txInReference).toString()).toBe(
      `--withdrawal-tx-in-reference ${txInReference}`,
    );
    expect(new WithdrawalTxInReferenceBuilder().withTxInReference(txInReference).toString()).toBe(
      `--withdrawal-tx-in-reference ${txInReference}`,
    );
  });

  it('withdrawal-script-file withdrawal-plutus-script-v2', () => {
    const txInReference = '54534543#2';
    expect(WithdrawalTxInReference.fromTxInReference(txInReference).withWithdrawalPlutusScriptV2().toString()).toBe(
      `--withdrawal-tx-in-reference ${txInReference} --withdrawal-plutus-script-v2`,
    );
  });

  it('withdrawal-script-file redeemer', () => {
    const txInReference = '54534543#2';
    WithdrawalTxInReference.fromTxInReference(txInReference).withRedeemer((builder) => {
      expect(builder).toBeInstanceOf(WithdrawalReferenceTxInRedeemerBuilder);
      //return is not tested here.
      return builder.cborFile('not-important');
    });
  });
});
