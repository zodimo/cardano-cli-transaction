import { Command, CommandOptions, StringCommandParameter } from '@zodimo/cardano-cli-base';

export class PolicyIdOptions implements CommandOptions {
  private scriptFile?: StringCommandParameter;
  withScriptFile(value: string): PolicyIdOptions {
    this.scriptFile = StringCommandParameter.from('script-file', value);
    return this;
  }
  toString(): string {
    const output: string[] = [];

    if (this.scriptFile) {
      output.push(this.scriptFile.toString());
    }

    return output.join(' ');
  }
}
export class PolicyId extends Command<PolicyIdOptions> {
  getCommandName(): string {
    return 'policyid';
  }
}
