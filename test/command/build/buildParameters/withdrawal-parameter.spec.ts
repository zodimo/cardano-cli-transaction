import {
  WithdrawalParameter,
  WithdrawalParameterBuilder,
} from '../../../../src/command/buildParameters/withdrawal-parameter';
import { WithdrawalScriptFileBuilder } from '../../../../src/command/buildParameters/withdrawal/withdrawal-script-file';
import { WithdrawalTxInReferenceBuilder } from '../../../../src/command/buildParameters/withdrawal/withdrawal-tx-in-reference';

describe('withdrawal-parameter', () => {
  it('withdrawal', () => {
    const withdrawal = 'some-withdrawal';
    expect(WithdrawalParameter.fromWithdrawal(withdrawal).toString()).toBe(`--withdrawal ${withdrawal}`);
    expect(new WithdrawalParameterBuilder().withWithdrawal(withdrawal).toString()).toBe(`--withdrawal ${withdrawal}`);
  });

  it('withdrawal withdrawal-script-file', () => {
    const withdrawal = 'some-withdrawal';
    WithdrawalParameter.fromWithdrawal(withdrawal).withWithdrawalScriptFile((builder) => {
      expect(builder).toBeInstanceOf(WithdrawalScriptFileBuilder);
      //return not tested here.
      return builder.withScriptFile('not-important');
    });
  });

  it('withdrawal withdrawal-tx-in-reference', () => {
    const withdrawal = 'some-withdrawal';
    WithdrawalParameter.fromWithdrawal(withdrawal).withWithdrawalTxInReference((builder) => {
      expect(builder).toBeInstanceOf(WithdrawalTxInReferenceBuilder);
      //return not tested here.
      return builder.withTxInReference('not-important');
    });
  });
});
