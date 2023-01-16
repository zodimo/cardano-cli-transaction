import { StringCommandParameter } from '@zodimo/cardano-cli-base';

export class TxIdTxBuilder {
  txBodyFile(value: string): TxIdTx {
    return TxIdTx.txBodyFile(value);
  }
  txFile(value: string): TxIdTx {
    return TxIdTx.txFile(value);
  }
}
export class TxIdTx extends StringCommandParameter {
  static txBodyFile(value: string): TxIdTx {
    return new TxIdTx('tx-body-file', value);
  }
  static txFile(value: string): TxIdTx {
    return new TxIdTx('tx-file', value);
  }
}
