import { Transaction } from '../src/transaction';

describe('cardano-cli transaction', () => {
  it('default commandPrefix', () => {
    expect(Transaction.createWithCardanoCliBin().commandPrefix).toBe('cardano-cli transaction');
  });

  it('can change cliBinPath commandPrefix', () => {
    expect(Transaction.createWithCardanoCliBin('cli').commandPrefix).toBe('cli transaction');
  });
});
