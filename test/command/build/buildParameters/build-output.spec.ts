import { BuildOutput, BuildOutputBuilder } from '../../../../src/command/buildParameters/build-output';
describe('transaction build outputs', () => {
  //(--out-file FILE | --calculate-plutus-script-cost FILE)
  it('out-file', () => {
    expect(BuildOutput.outFile('my-file').toString()).toBe(`--out-file my-file`);
    expect(new BuildOutputBuilder().outFile('my-file').toString()).toBe(`--out-file my-file`);
  });

  it('calculate-plutus-script-cost', () => {
    expect(BuildOutput.calculatePlutusScriptCost('my-file').toString()).toBe(`--calculate-plutus-script-cost my-file`);
    expect(new BuildOutputBuilder().calculatePlutusScriptCost('my-file').toString()).toBe(
      `--calculate-plutus-script-cost my-file`,
    );
  });
});
