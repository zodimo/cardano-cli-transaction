import { BuildOptions } from '../src/command/build';
import { SignOptions } from '../src/command/sign';
import { SubmitOptions } from '../src/command/submit';
import { Transaction } from '../src/transaction';

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
      return builder.withOutFile((b) => b.createForFile(''));
    });
  });

  it('submit', () => {
    Transaction.createWithCardanoCliBin().submit((builder) => {
      expect(builder).toBeInstanceOf(SubmitOptions);
      //return is not important
      return builder.withTxFile('');
    });
  });

  it('build', () => {
    Transaction.createWithCardanoCliBin().build((builder) => {
      expect(builder).toBeInstanceOf(BuildOptions);
      //return is not important
      return builder.withTxIn((b) => b.withTxIn(''));
    });
  });
});
