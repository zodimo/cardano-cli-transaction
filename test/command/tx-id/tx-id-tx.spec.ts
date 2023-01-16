import { TxIdTx, TxIdTxBuilder } from '../../../src/command/tx-in-parameters/tx-id-tx';

describe('tx-id-tx', () => {
  //(--tx-body-file FILE | --tx-file FILE)
  it('tx-body-file', () => {
    const txBodyFile = 'some-tx-body-file';
    expect(TxIdTx.txBodyFile(txBodyFile).toString()).toBe(`--tx-body-file ${txBodyFile}`);
    expect(new TxIdTxBuilder().txBodyFile(txBodyFile).toString()).toBe(`--tx-body-file ${txBodyFile}`);
  });

  it('tx-file', () => {
    const txFile = 'some-tx-file';
    expect(TxIdTx.txFile(txFile).toString()).toBe(`--tx-file ${txFile}`);
    expect(new TxIdTxBuilder().txFile(txFile).toString()).toBe(`--tx-file ${txFile}`);
  });
});
