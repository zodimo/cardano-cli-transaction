import { Builder, CompositeCommandParameter, StringCommandParameter } from '@zodimo/cardano-cli-base';
import { TxInScript } from './tx-in-script';
import { TxInSpending } from './tx-in-spending';

export class TxInAlternativeBuilder {
  txInSpending(builder: Builder<TxInSpending, TxInSpending>): TxInAlternative {
    return TxInAlternative.txInSpending(builder);
  }

  simpleScriptTxInReference(value: string): TxInAlternative {
    return TxInAlternative.simpleScriptTxInReference(value);
  }
  txInScript(builder: Builder<TxInScript, TxInScript>): TxInAlternative {
    return TxInAlternative.txInScript(builder);
  }
}
export class TxInAlternative extends CompositeCommandParameter {
  static txInSpending(builder: Builder<TxInSpending, TxInSpending>): TxInAlternative {
    return TxInAlternative.from(builder(new TxInSpending()));
  }

  static simpleScriptTxInReference(value: string): TxInAlternative {
    return TxInAlternative.from(StringCommandParameter.from('simple-script-tx-in-reference', value));
  }

  static txInScript(builder: Builder<TxInScript, TxInScript>): TxInAlternative {
    return TxInAlternative.from(builder(new TxInScript()));
  }
}
