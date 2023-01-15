import { Era, Network, NodeMode } from '@zodimo/cardano-cli-base';
import { Build, BuildOptions } from '../../src/command/build';
import { BuildOutput } from '../../src/command/buildParameters/build-output';
import { Transaction } from '../../src/transaction';
describe('cardano-cli transaction build', () => {
  it('commandName', () => {
    expect(new Build('cardano-cli', new BuildOptions()).getCommandName()).toBe('build');
  });

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
