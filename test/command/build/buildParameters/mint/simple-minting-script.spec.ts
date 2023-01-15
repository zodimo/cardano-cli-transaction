import { SimpleMintingScript } from '../../../../../src/command/buildParameters/mint/simple-minting-script';
describe('simple-minting-script', () => {
  //  | --simple-minting-script-tx-in-reference TX-IN --policy-id HASH
  it('simple-minting-script-tx-in-reference TX-IN ', () => {
    const txReference = '13223#2';
    expect(SimpleMintingScript.fromTxReference(txReference).toString()).toBe(
      `--simple-minting-script-tx-in-reference ${txReference}`,
    );
  });

  it('simple-minting-script-tx-in-reference TX-IN ,policy-id HASH', () => {
    const txReference = '13223#2';
    const policyId = 'some-policy-id';
    expect(SimpleMintingScript.fromTxReference(txReference).withPolicyId(policyId).toString()).toBe(
      `--simple-minting-script-tx-in-reference ${txReference} --policy-id ${policyId}`,
    );
  });
});
