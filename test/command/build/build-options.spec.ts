import { EraBuilder, NetworkBuilder, NodeModeBuilder } from '@zodimo/cardano-cli-base';
import { BuildOptions } from '../../../src/command/build';
import { ScriptValidBuilder } from '../../../src/command/buildParameters/script-valid';
import { TxInParameterBuilder } from '../../../src/command/buildParameters/tx-in-parameter';
import { RequiredSignerBuilder } from '../../../src/command/buildParameters/required-signer';
import { TxOutParameterBuilder } from '../../../src/command/buildParameters/tx-out-parameter';
import { MintParameterBuilder } from '../../../src/command/buildParameters/mint-parameter';
import { CertificateFileBuilder } from '../../../src/command/buildParameters/certificate-file';
import { WithdrawalParameterBuilder } from '../../../src/command/buildParameters/withdrawal-parameter';
import { JsonMetadataBuilder } from '../../../src/command/buildParameters/json-metadata';
import { MetadataBuilder } from '../../../src/command/buildParameters/metadata';
import { BuildOutputBuilder } from '../../../src/command/buildParameters/build-output';

describe('build-options', () => {
  /*
    Usage: cardano-cli transaction build 
    [ --byron-era
    | --shelley-era
    | --allegra-era
    | --mary-era
    | --alonzo-era
    | --babbage-era
    ]
    [ --shelley-mode
    | --byron-mode [--epoch-slots NATURAL]
    | --cardano-mode [--epoch-slots NATURAL]
    ]
    (--mainnet | --testnet-magic NATURAL)
    [--script-valid | --script-invalid]
    [--witness-override WORD]
    // note on --tx-in one or more
    (--tx-in TX-IN
      [ --spending-tx-in-reference TX-IN
        --spending-plutus-script-v2
        ( --spending-reference-tx-in-datum-cbor-file CBOR FILE
        | --spending-reference-tx-in-datum-file JSON FILE
        | --spending-reference-tx-in-datum-value JSON VALUE
        | --spending-reference-tx-in-inline-datum-present
        )
        ( --spending-reference-tx-in-redeemer-cbor-file CBOR FILE
        | --spending-reference-tx-in-redeemer-file JSON FILE
        | --spending-reference-tx-in-redeemer-value JSON VALUE
        )
      | --simple-script-tx-in-reference TX-IN
      | --tx-in-script-file FILE
        [
          ( --tx-in-datum-cbor-file CBOR FILE
          | --tx-in-datum-file JSON FILE
          | --tx-in-datum-value JSON VALUE
          | --tx-in-inline-datum-present
          )
          ( --tx-in-redeemer-cbor-file CBOR FILE
          | --tx-in-redeemer-file JSON FILE
          | --tx-in-redeemer-value JSON VALUE
          )]
      ])
    [--read-only-tx-in-reference TX-IN]
    [--required-signer FILE | --required-signer-hash HASH]
    [--tx-in-collateral TX-IN]
    [--tx-out-return-collateral ADDRESS VALUE]
    [--tx-total-collateral INTEGER]
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
      [--tx-out-reference-script-file FILE]]
    --change-address ADDRESS
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
    [--invalid-before SLOT]
    [--invalid-hereafter SLOT]
    [--certificate-file CERTIFICATEFILE
      [ --certificate-script-file FILE
        [ --certificate-redeemer-cbor-file CBOR FILE
        | --certificate-redeemer-file JSON FILE
        | --certificate-redeemer-value JSON VALUE
        ]
      | --certificate-tx-in-reference TX-IN
        --certificate-plutus-script-v2
        ( --certificate-reference-tx-in-redeemer-cbor-file CBOR FILE
        | --certificate-reference-tx-in-redeemer-file JSON FILE
        | --certificate-reference-tx-in-redeemer-value JSON VALUE
        )
      ]]
    [--withdrawal WITHDRAWAL
      [ --withdrawal-script-file FILE
        [ --withdrawal-redeemer-cbor-file CBOR FILE
        | --withdrawal-redeemer-file JSON FILE
        | --withdrawal-redeemer-value JSON VALUE
        ]
      | --withdrawal-tx-in-reference TX-IN
        --withdrawal-plutus-script-v2
        ( --withdrawal-reference-tx-in-redeemer-cbor-file CBOR FILE
        | --withdrawal-reference-tx-in-redeemer-file JSON FILE
        | --withdrawal-reference-tx-in-redeemer-value JSON VALUE
        )
      ]]
    [--json-metadata-no-schema | --json-metadata-detailed-schema]
    [--auxiliary-script-file FILE]
    [--metadata-json-file FILE | --metadata-cbor-file FILE]
    [--genesis FILE | --protocol-params-file FILE]
    [--update-proposal-file FILE]
    (--out-file FILE | --calculate-plutus-script-cost FILE)
  */

  it('era', () => {
    new BuildOptions().withEra((builder) => {
      expect(builder).toBeInstanceOf(EraBuilder);
      //return it not tested
      return builder.babbage;
    });
  });

  it('node-mode', () => {
    new BuildOptions().withNodeMode((builder) => {
      expect(builder).toBeInstanceOf(NodeModeBuilder);
      //return it not tested
      return builder.cardano();
    });
  });
  it('network', () => {
    new BuildOptions().withNetwork((builder) => {
      expect(builder).toBeInstanceOf(NetworkBuilder);
      //return it not tested
      return builder.mainnet();
    });
  });

  it('script-valid', () => {
    // [--script-valid | --script-invalid]
    new BuildOptions().withScriptValid((builder) => {
      expect(builder).toBeInstanceOf(ScriptValidBuilder);
      //return it not tested
      return builder.isValid();
    });
  });

  it('witness-override', () => {
    const witnessOverrideWord = 'some override';
    expect(new BuildOptions().withWitnessOverride(witnessOverrideWord).toString()).toBe(
      `--witness-override ${witnessOverrideWord}`,
    );
  });

  it('tx-in', () => {
    new BuildOptions().withTxIn((builder) => {
      expect(builder).toBeInstanceOf(TxInParameterBuilder);
      //return it not tested
      return builder.withTxIn('not tested');
    });
  });

  it('read-only-tx-in-reference', () => {
    const readOnlyTxInReference = '123456789#1';
    expect(new BuildOptions().withReadOnlyTxInReference(readOnlyTxInReference).toString()).toBe(
      `--read-only-tx-in-reference ${readOnlyTxInReference}`,
    );
  });

  it('required-signer', () => {
    // [--required-signer FILE | --required-signer-hash HASH]
    new BuildOptions().withRequiredSigner((builder) => {
      expect(builder).toBeInstanceOf(RequiredSignerBuilder);
      //return it not tested
      return builder.hash('not-important');
    });
  });

  it('tx-in-collateral TX-IN', () => {
    const txInCollateral = '123456789#1';
    expect(new BuildOptions().withTxInCollateral(txInCollateral).toString()).toBe(
      `--tx-in-collateral ${txInCollateral}`,
    );
  });

  it('tx-out-return-collateral ADDRESS VALUE', () => {
    const txOutReturnCollateral = 'address-value';
    expect(new BuildOptions().withTxOutReturnCollateral(txOutReturnCollateral).toString()).toBe(
      `--tx-out-return-collateral ${txOutReturnCollateral}`,
    );
  });

  it('tx-total-collateral INTEGER', () => {
    const txTotalCollateral = 100;
    expect(new BuildOptions().withTxTotalCollateral(txTotalCollateral).toString()).toBe(
      `--tx-total-collateral ${txTotalCollateral}`,
    );
  });

  it('tx-out', () => {
    new BuildOptions().withTxOut((builder) => {
      expect(builder).toBeInstanceOf(TxOutParameterBuilder);
      //return it not tested
      return builder.withTxOut('not-important');
    });
  });

  it('change-address ADDRESS', () => {
    const changeAddress = 'some-address';
    expect(new BuildOptions().withChangeAddress(changeAddress).toString()).toBe(`--change-address ${changeAddress}`);
  });

  it('mint', () => {
    new BuildOptions().withMint((builder) => {
      expect(builder).toBeInstanceOf(MintParameterBuilder);
      //return it not tested
      return builder.withMint('not-important');
    });
  });

  it('invalid-before SLOT', () => {
    const invalidBeforeSlot = 10;
    expect(new BuildOptions().withInvalidBefore(invalidBeforeSlot).toString()).toBe(
      `--invalid-before ${invalidBeforeSlot}`,
    );
  });
  it('invalid-hereafter SLOT', () => {
    const invalidHereafterSlot = 10;
    expect(new BuildOptions().withInvalidHereafter(invalidHereafterSlot).toString()).toBe(
      `--invalid-hereafter ${invalidHereafterSlot}`,
    );
  });

  it('certificate-file', () => {
    new BuildOptions().withCertificateFile((builder) => {
      expect(builder).toBeInstanceOf(CertificateFileBuilder);
      //return it not tested
      return builder.withCertificateFile('not-important');
    });
  });

  it('withdrawal', () => {
    new BuildOptions().withWithdrawal((builder) => {
      expect(builder).toBeInstanceOf(WithdrawalParameterBuilder);
      //return it not tested
      return builder.withWithdrawal('not-important');
    });
  });

  it('json-metadata', () => {
    new BuildOptions().withJsonMetadata((builder) => {
      expect(builder).toBeInstanceOf(JsonMetadataBuilder);
      //return it not tested
      return builder.noSchema();
    });
  });

  it('auxiliary-script-file', () => {
    const auxiliaryScriptFile = 'some-aux-script-file';
    expect(new BuildOptions().withAuxiliaryScriptFile(auxiliaryScriptFile).toString()).toBe(
      `--auxiliary-script-file ${auxiliaryScriptFile}`,
    );
  });
  it('metadata', () => {
    new BuildOptions().withMetadata((builder) => {
      expect(builder).toBeInstanceOf(MetadataBuilder);
      //return it not tested
      return builder.jsonFile('not-important');
    });
  });

  it('protocol-params-file', () => {
    const protocolParamsFile = 'some-aux-script-file';
    expect(new BuildOptions().withProtocolParamsFile(protocolParamsFile).toString()).toBe(
      `--protocol-params-file ${protocolParamsFile}`,
    );
  });

  it('update-proposal-file', () => {
    const updateProposalFile = 'some-proposal-file';
    expect(new BuildOptions().withUpdateProposalFile(updateProposalFile).toString()).toBe(
      `--update-proposal-file ${updateProposalFile}`,
    );
  });

  it('build output', () => {
    new BuildOptions().withOutput((builder) => {
      expect(builder).toBeInstanceOf(BuildOutputBuilder);
      //return it not tested
      return builder.outFile('not-important');
    });
  });
});
