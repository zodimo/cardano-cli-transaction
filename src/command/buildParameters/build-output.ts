import { StringCommandParameter } from '@zodimo/cardano-cli-base';

enum BuildOutputTypes {
  OUT_FILE = 'out-file',
  CALCULATE_PLUTUS_SCRIPT_COST = 'calculate-plutus-script-cost',
}

export class BuildOutputBuilder {
  outFile(value: string): BuildOutput {
    return BuildOutput.outFile(value);
  }
  calculatePlutusScriptCost(value: string): BuildOutput {
    return BuildOutput.calculatePlutusScriptCost(value);
  }
}
export class BuildOutput extends StringCommandParameter {
  constructor(paramKey: BuildOutputTypes, paramValue: string) {
    super(paramKey, paramValue);
  }
  static outFile(value: string): BuildOutput {
    return new BuildOutput(BuildOutputTypes.OUT_FILE, value);
  }
  static calculatePlutusScriptCost(value: string): BuildOutput {
    return new BuildOutput(BuildOutputTypes.CALCULATE_PLUTUS_SCRIPT_COST, value);
  }
}
