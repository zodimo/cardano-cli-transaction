import { MintReferenceTxInRedeemerBuilder } from '../../../../../src/command/buildParameters/mint/mint-reference-tx-in-redeemer';
import {
  MintTxInReference,
  MintTxInReferenceBuilder,
} from '../../../../../src/command/buildParameters/mint/mint-tx-in-reference';
describe('mint-tx-in-reference', () => {
  /* 
    | --mint-tx-in-reference TX-IN
    --mint-plutus-script-v2
    ( --mint-reference-tx-in-redeemer-cbor-file CBOR FILE
    | --mint-reference-tx-in-redeemer-file JSON FILE
    | --mint-reference-tx-in-redeemer-value JSON VALUE
    )
    --policy-id HASH
  */
  it('mint-tx-in-reference', () => {
    const txInReference = '1234322#2';
    expect(MintTxInReference.fromTxIn(txInReference).toString()).toBe(`--mint-tx-in-reference ${txInReference}`);
    expect(new MintTxInReferenceBuilder().fromTxIn(txInReference).toString()).toBe(
      `--mint-tx-in-reference ${txInReference}`,
    );
  });

  it('mint-tx-in-reference mint-plutus-script-v2', () => {
    const txInReference = '1234322#2';
    expect(MintTxInReference.fromTxIn(txInReference).toString()).toBe(`--mint-tx-in-reference ${txInReference}`);
    expect(new MintTxInReferenceBuilder().fromTxIn(txInReference).withMintPlutusScriptV2().toString()).toBe(
      `--mint-tx-in-reference ${txInReference} --mint-plutus-script-v2`,
    );
  });

  it('mint-tx-in-reference mint-reference-tx-in-redeemer', () => {
    const txInReference = '1234322#2';
    MintTxInReference.fromTxIn(txInReference).withRedeemer((builder) => {
      expect(builder).toBeInstanceOf(MintReferenceTxInRedeemerBuilder);
      //return is not tested here
      return builder.cborFile('not-important');
    });
  });

  it('policy-id', () => {
    const txInReference = '1234322#2';
    const policyId = 'some-policy-hash';
    expect(MintTxInReference.fromTxIn(txInReference).withPolicyId(policyId).toString()).toBe(
      `--mint-tx-in-reference ${txInReference} --policy-id ${policyId}`,
    );
  });
});
