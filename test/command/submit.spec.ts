import { Transaction } from '../../src/transaction';

describe('cardano-cli transaction sumit', () => {
  /* 
  Usage: cardano-cli transaction submit 
            [ --shelley-mode
            | --byron-mode [--epoch-slots NATURAL]
            | --cardano-mode [--epoch-slots NATURAL]
            ]
            (--mainnet | --testnet-magic NATURAL)
            --tx-file FILE
  */
  it('mainnet and tx-file', () => {
    const txFile = 'my-tx-file';
    expect(
      Transaction.createWithCardanoCliBin()
        .submit((builder) => builder.withNetwork((builder) => builder.mainnet()).withTxFile(txFile))
        .getCommand(),
    ).toBe(['cardano-cli transaction submit', '--mainnet', `--tx-file ${txFile}`].join(' '));
  });
  it('shelley-mode, mainnet and tx-file', () => {
    const txFile = 'my-tx-file';
    expect(
      Transaction.createWithCardanoCliBin()
        .submit((builder) =>
          builder
            .withNodeMode((builder) => builder.shelley())
            .withNetwork((builder) => builder.mainnet())
            .withTxFile(txFile),
        )
        .getCommand(),
    ).toBe(['cardano-cli transaction submit', '--shelley-mode', '--mainnet', `--tx-file ${txFile}`].join(' '));
  });

  it('shelley-mode, testnet-magic 2 and tx-file', () => {
    const txFile = 'my-tx-file';
    expect(
      Transaction.createWithCardanoCliBin()
        .submit((builder) =>
          builder
            .withNodeMode((builder) => builder.shelley())
            .withNetwork((builder) => builder.testnetMagic(2))
            .withTxFile(txFile),
        )
        .getCommand(),
    ).toBe(['cardano-cli transaction submit', '--shelley-mode', '--testnet-magic 2', `--tx-file ${txFile}`].join(' '));
  });

  it('cardano-mode, epoch-slots, testnet-magic 2 and tx-file', () => {
    const txFile = 'my-tx-file';
    expect(
      Transaction.createWithCardanoCliBin()
        .submit((builder) =>
          builder
            .withNodeMode((builder) => builder.cardano(1000))
            .withNetwork((builder) => builder.testnetMagic(2))
            .withTxFile(txFile),
        )
        .getCommand(),
    ).toBe(
      [
        'cardano-cli transaction submit',
        '--cardano-mode',
        '--epoch-slots 1000',
        '--testnet-magic 2',
        `--tx-file ${txFile}`,
      ].join(' '),
    );
  });
});
