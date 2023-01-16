import { Transaction } from '../../src/transaction';

describe('policy-id', () => {
  // Usage: cardano-cli transaction policyid --script-file FILE
  it('command name', () => {
    expect(
      Transaction.createWithCardanoCliBin()
        .policyId((b) => b)
        .getCommandName(),
    ).toBe('policyid');
  });

  it('script-file', () => {
    const scriptFile = 'some-script-file';
    expect(
      Transaction.createWithCardanoCliBin()
        .policyId((builder) => builder.withScriptFile(scriptFile))
        .getCommand(),
    ).toBe(`cardano-cli transaction policyid --script-file ${scriptFile}`);
  });
});
