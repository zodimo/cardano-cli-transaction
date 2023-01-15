import { BooleanCommandParameter } from '@zodimo/cardano-cli-base';

export enum ScriptValidOptions {
  IS_VALID = 'script-valid',
  IS_INVALID = 'script-invalid',
}

export class ScriptValidBuilder {
  isValid(): ScriptValid {
    return ScriptValid.isValid();
  }
  isInvalid(): ScriptValid {
    return ScriptValid.isInvalid();
  }
}

export class ScriptValid extends BooleanCommandParameter {
  constructor(paramKey: ScriptValidOptions) {
    super(paramKey);
  }
  static isValid(): ScriptValid {
    return new ScriptValid(ScriptValidOptions.IS_VALID);
  }
  static isInvalid(): ScriptValid {
    return new ScriptValid(ScriptValidOptions.IS_INVALID);
  }
}
