import { BuildOptions } from '../src/command/build';
import { SignOptions } from '../src/command/sign';
import { SubmitOptions } from '../src/command/submit';
import { Transaction } from '../src/transaction';
import { PolicyIdOptions } from '../src/command/policy-id';
import { CalculateMinFeeOptions } from '../src/command/calculate-min-fee';

describe('cardano-cli transaction', () => {
  it('default commandPrefix', () => {
    expect(Transaction.createWithCardanoCliBin().commandPrefix).toBe('cardano-cli transaction');
  });

  it('can change cliBinPath commandPrefix', () => {
    expect(Transaction.createWithCardanoCliBin('cli').commandPrefix).toBe('cli transaction');
  });

  it('sign', () => {
    Transaction.createWithCardanoCliBin().sign((builder) => {
      expect(builder).toBeInstanceOf(SignOptions);
      //return is not important
      return builder.withOutFile((b) => b.createForFile('not-important'));
    });
  });

  it('submit', () => {
    Transaction.createWithCardanoCliBin().submit((builder) => {
      expect(builder).toBeInstanceOf(SubmitOptions);
      //return is not important
      return builder.withTxFile('not-important');
    });
  });

  it('build', () => {
    Transaction.createWithCardanoCliBin().build((builder) => {
      expect(builder).toBeInstanceOf(BuildOptions);
      //return is not important
      return builder.withTxIn((b) => b.withTxIn('not-important'));
    });
  });

  it('policyid', () => {
    Transaction.createWithCardanoCliBin().policyId((builder) => {
      expect(builder).toBeInstanceOf(PolicyIdOptions);
      //return is not important
      return builder.withScriptFile('not-important');
    });
  });

  it('calculate-min-fee', () => {
    Transaction.createWithCardanoCliBin().calculateMinFee((builder) => {
      expect(builder).toBeInstanceOf(CalculateMinFeeOptions);
      //return is not important
      return builder.withTxBodyFile('not-important');
    });
  });
});
