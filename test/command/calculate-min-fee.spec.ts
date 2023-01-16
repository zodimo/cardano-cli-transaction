import { NetworkBuilder } from '@zodimo/cardano-cli-base';
import { CalculateMinFee, CalculateMinFeeOptions } from '../../src/command/calculate-min-fee';

describe('calculate-min-fee', () => {
  /*
  Usage: cardano-cli transaction calculate-min-fee --tx-body-file FILE
            [--mainnet | --testnet-magic NATURAL]
            (--genesis FILE | --protocol-params-file FILE)
            --tx-in-count NATURAL
            --tx-out-count NATURAL
            --witness-count NATURAL
            [--byron-witness-count NATURAL]
  */

  //CalculateMinFee
  it('command name', () => {
    expect(new CalculateMinFee('no required', new CalculateMinFeeOptions()).getCommandName()).toBe('calculate-min-fee');
    expect(new CalculateMinFee('cli', new CalculateMinFeeOptions()).getCommand()).toBe('cli calculate-min-fee');
  });

  //CalculateMinFeeOptions
  it('tx-body-file', () => {
    const txBodyFile = 'some-tx-body-file';
    expect(new CalculateMinFeeOptions().withTxBodyFile(txBodyFile).toString()).toBe(`--tx-body-file ${txBodyFile}`);
  });

  it('network', () => {
    new CalculateMinFeeOptions().withNetwork((builder) => {
      expect(builder).toBeInstanceOf(NetworkBuilder);
      //return it not tested
      return builder.mainnet();
    });
    expect(new CalculateMinFeeOptions().withNetwork((b) => b.mainnet()).toString()).toBe('--mainnet');
  });

  it('protocol-params-file', () => {
    const protocolParamsFile = 'some-aux-script-file';
    expect(new CalculateMinFeeOptions().withProtocolParamsFile(protocolParamsFile).toString()).toBe(
      `--protocol-params-file ${protocolParamsFile}`,
    );
  });

  it('tx-out-count', () => {
    const txInCount = 10;
    expect(new CalculateMinFeeOptions().withTxInCount(txInCount).toString()).toBe(`--tx-in-count ${txInCount}`);
  });

  it('tx-out-count', () => {
    const txOutCount = 10;
    expect(new CalculateMinFeeOptions().withTxOutCount(txOutCount).toString()).toBe(`--tx-out-count ${txOutCount}`);
  });

  it('witness-count', () => {
    const witnessCount = 10;
    expect(new CalculateMinFeeOptions().withWitnessCount(witnessCount).toString()).toBe(
      `--witness-count ${witnessCount}`,
    );
  });

  it('byron-witness-count', () => {
    const byronWitnessCount = 10;
    expect(new CalculateMinFeeOptions().withByronWitnessCount(byronWitnessCount).toString()).toBe(
      `--byron-witness-count ${byronWitnessCount}`,
    );
  });
});
