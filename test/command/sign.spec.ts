import { OutFile } from '@zodimo/cardano-cli-base';
import { TxToSign, TxToSignOptions } from '../../src/command/sign';
import { Transaction } from '../../src/transaction';

describe('cardano-cli transaction sign', () => {
  /* 
Usage: cardano-cli transaction sign (--tx-body-file FILE | --tx-file FILE)
            (--signing-key-file FILE [--address STRING])
            [--mainnet | --testnet-magic NATURAL]
            --out-file FILE
*/

  it('tx-body-file, signing-key-file and out-file', () => {
    const txBodyFile = 'my-tx-body-file';
    const signingKeyFile = 'my-signing-key-file';
    const outFileName = 'my-out-file';
    //with builders
    expect(
      Transaction.createWithCardanoCliBin()
        .sign((builder) =>
          builder
            .withTxToSign((builder) => builder.txBodyFile(txBodyFile))
            .withSigningKeyFile(signingKeyFile)
            .withOutFile((builder) => builder.createForFile(outFileName)),
        )
        .getCommand(),
    ).toBe(
      [
        'cardano-cli transaction sign',
        `--tx-body-file ${txBodyFile}`,
        `--signing-key-file ${signingKeyFile}`,
        `--out-file ${outFileName}`,
      ].join(' '),
    );
    //direct
    expect(
      Transaction.createWithCardanoCliBin()
        .sign((builder) =>
          builder
            .withTxToSign(TxToSign.txBodyFile(txBodyFile))
            .withSigningKeyFile(signingKeyFile)
            .withOutFile(OutFile.createForFile(outFileName)),
        )
        .getCommand(),
    ).toBe(
      [
        'cardano-cli transaction sign',
        `--tx-body-file ${txBodyFile}`,
        `--signing-key-file ${signingKeyFile}`,
        `--out-file ${outFileName}`,
      ].join(' '),
    );
  });

  it('tx-body-file, signing-key-file with address and out-file', () => {
    const txBodyFile = 'my-tx-body-file';
    const signingKeyFile = 'my-signing-key-file';
    const address = 'my-address';
    const outFileName = 'my-out-file';
    expect(
      Transaction.createWithCardanoCliBin()
        .sign((builder) =>
          builder
            .withTxToSign((builder) => builder.txBodyFile(txBodyFile))
            .withSigningKeyFile(signingKeyFile, address)
            .withOutFile((builder) => builder.createForFile(outFileName)),
        )
        .getCommand(),
    ).toBe(
      [
        'cardano-cli transaction sign',
        `--tx-body-file ${txBodyFile}`,
        `--signing-key-file ${signingKeyFile}`,
        `--address ${address}`,
        `--out-file ${outFileName}`,
      ].join(' '),
    );
  });

  it('tx-file, signing-key-file and out-file', () => {
    const txFile = 'my-tx-file';
    const signingKeyFile = 'my-signing-key-file';
    const outFileName = 'my-out-file';
    expect(
      Transaction.createWithCardanoCliBin()
        .sign((builder) =>
          builder
            .withTxToSign((builder) => builder.txFile(txFile))
            .withSigningKeyFile(signingKeyFile)
            .withOutFile((builder) => builder.createForFile(outFileName)),
        )
        .getCommand(),
    ).toBe(
      [
        'cardano-cli transaction sign',
        `--tx-file ${txFile}`,
        `--signing-key-file ${signingKeyFile}`,
        `--out-file ${outFileName}`,
      ].join(' '),
    );
  });

  it('tx-file, signing-key-file, mainnet and out-file', () => {
    const txFile = 'my-tx-file';
    const signingKeyFile = 'my-signing-key-file';
    const outFileName = 'my-out-file';
    expect(
      Transaction.createWithCardanoCliBin()
        .sign((builder) =>
          builder
            .withTxToSign((builder) => builder.txFile(txFile))
            .withSigningKeyFile(signingKeyFile)
            .withNetwork((builder) => builder.mainnet())
            .withOutFile((builder) => builder.createForFile(outFileName)),
        )
        .getCommand(),
    ).toBe(
      [
        'cardano-cli transaction sign',
        `--tx-file ${txFile}`,
        `--signing-key-file ${signingKeyFile}`,
        '--mainnet',
        `--out-file ${outFileName}`,
      ].join(' '),
    );
  });

  it('tx-file, signing-key-file, testnet-magic 2 and out-file', () => {
    const txFile = 'my-tx-file';
    const signingKeyFile = 'my-signing-key-file';
    const outFileName = 'my-out-file';
    expect(
      Transaction.createWithCardanoCliBin()
        .sign((builder) =>
          builder
            .withTxToSign((builder) => builder.txFile(txFile))
            .withSigningKeyFile(signingKeyFile)
            .withNetwork((builder) => builder.testnetMagic(2))
            .withOutFile((builder) => builder.createForFile(outFileName)),
        )
        .getCommand(),
    ).toBe(
      [
        'cardano-cli transaction sign',
        `--tx-file ${txFile}`,
        `--signing-key-file ${signingKeyFile}`,
        '--testnet-magic 2',
        `--out-file ${outFileName}`,
      ].join(' '),
    );
  });
});
