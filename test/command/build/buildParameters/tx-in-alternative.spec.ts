import { TxInParameter } from '../../../../src/command/buildParameters/tx-in-parameter';
import { TxInScript } from '../../../../src/command/buildParameters/tx-in-script';
import { TxInSpending } from '../../../../src/command/buildParameters/tx-in-spending';

describe('tx-in-alternative', () => {
  const txIn = '12345#1';

  it('tx-in-alternative txInSpending as builder', () => {
    TxInParameter.fromTxIn(txIn).withAlternative((builder) => {
      return builder.txInSpending((builder) => {
        expect(builder).toBeInstanceOf(TxInSpending);
        //return is not important here
        return builder.withSpendingPlutusScriptV2();
      });
    });
  });

  it('tx-in-alternative simpleScriptTxInReference', () => {
    TxInParameter.fromTxIn(txIn).withAlternative((builder) => {
      const txInReference = '456#1';
      const result = builder.simpleScriptTxInReference(txInReference);
      expect(result.toString()).toBe(`--simple-script-tx-in-reference ${txInReference}`);
      return result;
    });
  });

  it('tx-in-alternative txInScript as builder', () => {
    TxInParameter.fromTxIn(txIn).withAlternative((builder) => {
      return builder.txInScript((builder) => {
        expect(builder).toBeInstanceOf(TxInScript);
        //return is not important here
        return builder.withDatum((b) => b.inlineDatumIsPresent());
      });
    });
  });
});
