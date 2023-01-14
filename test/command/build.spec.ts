import { Era, Network, NodeMode } from '@zodimo/cardano-cli-base';
import { BuildOutput } from '../../src/command/build';
import { Transaction } from '../../src/transaction';
describe('cardano-cli transaction build', () => {
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
  it('mainnet, tx-in, change-address ,out-file', () => {
    const txIn = '12345#1';
    const changeAddress = 'my-change-address';
    const outfileName = 'my-out-file';
    expect(
      Transaction.createWithCardanoCliBin()
        .build((builder) =>
          builder
            .withNetwork((builder) => builder.mainnet())
            .withTxIn((builder) => builder.withTxIn(txIn))
            .withChangeAddress(changeAddress)
            .withOutput((builder) => builder.outFile(outfileName)),
        )
        .getCommand(),
    ).toBe(
      [
        'cardano-cli transaction build',
        '--mainnet',
        `--tx-in ${txIn}`,
        `--change-address ${changeAddress}`,
        `--out-file ${outfileName}`,
      ].join(' '),
    );
  });

  //to cover all the era nodemode and output variations, maybe they should be manually tested?
  it('era, nodeMode, cardano-mode, mainnet, tx-in, change-address ,out-file', () => {
    const txIn = '12345#1';
    const changeAddress = 'my-change-address';
    //eras
    [Era.allegra, Era.alonzo, Era.babbage, Era.byron].forEach((era) => {
      //nodeModes
      [NodeMode.byron(), NodeMode.cardano(), NodeMode.shelley()].forEach((nodeMode) => {
        [Network.mainnet(), Network.testnetMagic(1)].forEach((network) => {
          [
            BuildOutput.outFile('my-out-file'),
            BuildOutput.calculatePlutusScriptCost('file-to-save-script-cost'),
          ].forEach((buildOutput) => {
            expect(
              Transaction.createWithCardanoCliBin()
                .build((builder) =>
                  builder
                    .withEra(era)
                    .withNodeMode(nodeMode)
                    .withNetwork(network)
                    .withTxIn((builder) => builder.withTxIn(txIn))
                    .withChangeAddress(changeAddress)
                    .withOutput(buildOutput),
                )
                .getCommand(),
            ).toBe(
              [
                'cardano-cli transaction build',
                `${era.toString()}`,
                `${nodeMode.toString()}`,
                `${network.toString()}`,
                `--tx-in ${txIn}`,
                `--change-address ${changeAddress}`,
                `${buildOutput.toString()}`,
              ].join(' '),
            );
          });
        });
      });
    });
  });

});
