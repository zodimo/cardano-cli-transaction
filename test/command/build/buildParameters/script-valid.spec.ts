import { ScriptValid, ScriptValidBuilder } from '../../../../src/command/buildParameters/script-valid';

describe('script-valid', () => {
  it('isValid', () => {
    expect(ScriptValid.isValid().toString()).toBe('--script-valid');
    expect(new ScriptValidBuilder().isValid().toString()).toBe('--script-valid');
  });

  it('isInvalid', () => {
    expect(ScriptValid.isInvalid().toString()).toBe('--script-invalid');
    expect(new ScriptValidBuilder().isInvalid().toString()).toBe('--script-invalid');
  });
});
