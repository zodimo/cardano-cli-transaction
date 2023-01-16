import { Builder, Command, CommandOptions } from '@zodimo/cardano-cli-base';
import { TxIdTx, TxIdTxBuilder } from './tx-in-parameters/tx-id-tx';

export class TxIdOptions implements CommandOptions {
  private txIdTx?: TxIdTx;

  withTx(builder: Builder<TxIdTxBuilder, TxIdTx>): TxIdOptions;
  withTx(value: TxIdTx): TxIdOptions;
  withTx(value: TxIdTx | Builder<TxIdTxBuilder, TxIdTx>): TxIdOptions {
    if (typeof value !== 'function') {
      this.txIdTx = value;
      return this;
    }
    this.txIdTx = value(new TxIdTxBuilder());
    return this;
  }

  toString(): string {
    const output: string[] = [];

    if (this.txIdTx) {
      output.push(this.txIdTx.toString());
    }

    return output.join(' ');
  }
}

export class TxId extends Command<TxIdOptions> {
  getCommandName(): string {
    return 'txid';
  }
}
