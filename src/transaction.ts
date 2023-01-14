export class Transaction {
  public readonly commandPrefix: string;
  constructor(commandPrefix: string) {
    this.commandPrefix = `${commandPrefix} transaction`;
  }

  static createWithCardanoCliBin(cardniCliBinPath = 'cardano-cli'): Transaction {
    return new Transaction(cardniCliBinPath);
  }
}
