import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

class DumpRawHelpDocs {
  private rawDocPath: string;
  constructor(private cliPath: string) {
    this.rawDocPath = path.resolve('docs/raw-help');
    this.ensureDirectoryExists(this.rawDocPath);
  }

  createDocFileForCommands(...commands: string[]): [string, string] {
    return [path.join(this.rawDocPath, `${commands.join('_')}.txt`), commands.join(' ')];
  }

  getCommandFileMapping(): Map<string, string> {
    const commandMapping: Map<string, string> = new Map();

    //transaction
    return commandMapping
      .set(...this.createDocFileForCommands('transaction'))
      .set(...this.createDocFileForCommands('transaction', 'build-raw'))
      .set(...this.createDocFileForCommands('transaction', 'build'))
      .set(...this.createDocFileForCommands('transaction', 'sign'))
      .set(...this.createDocFileForCommands('transaction', 'witness'))
      .set(...this.createDocFileForCommands('transaction', 'assemble'))
      .set(...this.createDocFileForCommands('transaction', 'submit'))
      .set(...this.createDocFileForCommands('transaction', 'policyid'))
      .set(...this.createDocFileForCommands('transaction', 'calculate-min-required-utxo'))
      .set(...this.createDocFileForCommands('transaction', 'hash-script-data'))
      .set(...this.createDocFileForCommands('transaction', 'txid'))
      .set(...this.createDocFileForCommands('transaction', 'view'));
  }

  generate(): void {
    const commandsToRun = this.getCommandFileMapping();
    // file command=>file

    commandsToRun.forEach((command: string, docPath: string) => {
      const result = this.runCommand(`${this.cliPath} ${command} -h`);
      console.log(`writing command: ${command} to file: ${docPath}`);
      fs.writeFileSync(docPath, result);
    });
  }

  ensureDirectoryExists(path: string) {
    if (!fs.existsSync(path)) this.runCommand(`mkdir -p ${path}`);
  }

  runCommand: (command: string) => string = (command: string) => {
    return execSync(command).toString();
  };
}

new DumpRawHelpDocs('cardano-cli').generate();
