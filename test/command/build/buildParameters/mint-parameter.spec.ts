import { MintParameter, MintParameterBuilder } from '../../../../src/command/buildParameters/mint-parameter';
import { MintScriptFileBuilder } from '../../../../src/command/buildParameters/mint/mint-script-file';
import { MintTxInReferenceBuilder } from '../../../../src/command/buildParameters/mint/mint-tx-in-reference';
import { SimpleMintingScriptBuilder } from '../../../../src/command/buildParameters/mint/simple-minting-script';
describe('mint-parameter', () => {
  /*
  [--mint VALUE
    ( --mint-script-file FILE
      [ --mint-redeemer-cbor-file CBOR FILE
      | --mint-redeemer-file JSON FILE
      | --mint-redeemer-value JSON VALUE
      ]

    | --simple-minting-script-tx-in-reference TX-IN --policy-id HASH

    | --mint-tx-in-reference TX-IN
      --mint-plutus-script-v2
      ( --mint-reference-tx-in-redeemer-cbor-file CBOR FILE
      | --mint-reference-tx-in-redeemer-file JSON FILE
      | --mint-reference-tx-in-redeemer-value JSON VALUE
      )
      --policy-id HASH

    )]
  */

  it('mint', () => {
    const mint = 'some-tx-out';
    expect(MintParameter.fromMint(mint).toString()).toBe(`--mint ${mint}`);
    expect(new MintParameterBuilder().withMint(mint).toString()).toBe(`--mint ${mint}`);
  });

  it('mint mint-script-file', () => {
    const mint = 'some-tx-out';
    MintParameter.fromMint(mint).withMintScriptFile((builder) => {
      expect(builder).toBeInstanceOf(MintScriptFileBuilder);
      //return value not tested here.
      return builder.fromScriptFile('not-important');
    });
  });

  it('mint simple-minting-script-tx-in-reference', () => {
    const mint = 'some-tx-out';
    MintParameter.fromMint(mint).withSimpleMintingScript((builder) => {
      expect(builder).toBeInstanceOf(SimpleMintingScriptBuilder);
      //return value not tested here.
      return builder.fromTxReference('not-important');
    });
  });

  it('mint mint-tx-in-reference', () => {
    const mint = 'some-tx-out';
    const txInReference = '1342423#2';
    MintParameter.fromMint(mint).withMintTxInReference((builder) => {
      expect(builder).toBeInstanceOf(MintTxInReferenceBuilder);
      return builder.fromTxIn(txInReference);
    });
  });
});
