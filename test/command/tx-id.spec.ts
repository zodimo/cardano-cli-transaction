import { TxId, TxIdOptions } from '../../src/command/tx-id';
import { TxIdTx, TxIdTxBuilder } from '../../src/command/tx-in-parameters/tx-id-tx';

describe('tx-id', () => {
  //Usage: cardano-cli transaction txid (--tx-body-file FILE | --tx-file FILE)
  //txid
  it('command name', () => {
    expect(new TxId('no required', new TxIdOptions()).getCommandName()).toBe('txid');
    expect(new TxId('cli', new TxIdOptions()).getCommand()).toBe('cli txid');
  });

  //TxIdTx builder

  it('txIdTx', () => {
    new TxIdOptions().withTx((builder) => {
      expect(builder).toBeInstanceOf(TxIdTxBuilder);
      //return is not tested here.
      return builder.txBodyFile('not-important');
    });

    expect(new TxIdOptions().withTx(TxIdTx.txBodyFile('some-tx-body-file')).toString()).toBe(
      `--tx-body-file some-tx-body-file`,
    );

    expect(new TxIdOptions().withTx((b) => b.txBodyFile('some-tx-body-file')).toString()).toBe(
      `--tx-body-file some-tx-body-file`,
    );
  });
});
