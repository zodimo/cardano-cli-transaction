import {
  Builder,
  Command,
  CommandOptions,
  CompositeCommandParameter,
  MaybeCommandParameterFactory,
  Network,
  NetworkBuilder,
  OutFile,
  OutFileBuilder,
  StringCommandParameter,
} from '@zodimo/cardano-cli-base';

export enum TxToSignOptions {
  TX_BODY_FILE = 'tx-body-file',
  TX_FILE = 'tx-file',
}

export class TxToSignBuilder {
  txBodyFile(value: string): TxToSign {
    return TxToSign.txBodyFile(value);
  }
  txFile(value: string): TxToSign {
    return TxToSign.txFile(value);
  }
}
export class TxToSign extends StringCommandParameter {
  constructor(paramKey: TxToSignOptions, paramValue: string) {
    super(paramKey, paramValue);
  }
  static txBodyFile(value: string): TxToSign {
    return TxToSign.from(TxToSignOptions.TX_BODY_FILE, value);
  }
  static txFile(value: string): TxToSign {
    return TxToSign.from(TxToSignOptions.TX_FILE, value);
  }
}
export class SignOptions implements CommandOptions {
  private txToSign?: TxToSign;
  private signingKeyFiles: CompositeCommandParameter[];
  private network?: Network;
  private outFile?: OutFile;

  constructor() {
    this.signingKeyFiles = [];
  }

  withTxToSign(builder: Builder<TxToSignBuilder, TxToSign>): SignOptions;
  withTxToSign(value: TxToSign): SignOptions;
  withTxToSign(value: TxToSign | Builder<TxToSignBuilder, TxToSign>): SignOptions {
    if (typeof value !== 'function') {
      this.txToSign = value;
      return this;
    }
    this.txToSign = value(new TxToSignBuilder());
    return this;
  }

  withSigningKeyFile(file: string, address?: string): SignOptions {
    const maybeAddress = MaybeCommandParameterFactory.maybeString('address', address);
    this.signingKeyFiles.push(
      CompositeCommandParameter.from(StringCommandParameter.from('signing-key-file', file), maybeAddress),
    );
    return this;
  }

  withNetwork(builder: Builder<NetworkBuilder, Network>): SignOptions;
  withNetwork(value: Network): SignOptions;
  withNetwork(value: Network | Builder<NetworkBuilder, Network>): SignOptions {
    if (typeof value !== 'function') {
      this.network = value;
      return this;
    }

    this.network = value(new NetworkBuilder());
    return this;
  }

  withOutFile(builder: Builder<OutFileBuilder, OutFile>): SignOptions;
  withOutFile(value: OutFile): SignOptions;
  withOutFile(value: OutFile | Builder<OutFileBuilder, OutFile>): SignOptions {
    if (typeof value !== 'function') {
      this.outFile = value;
      return this;
    }
    this.outFile = value(new OutFileBuilder());
    return this;
  }

  toString(): string {
    const output: string[] = [];

    if (this.txToSign) {
      output.push(this.txToSign.toString());
    }
    this.signingKeyFiles.forEach((signingKeyFile) => output.push(signingKeyFile.toString()));

    if (this.network) {
      output.push(this.network.toString());
    }
    if (this.outFile) {
      output.push(this.outFile.toString());
    }

    return output.join(' ');
  }
}
export class Sign extends Command<SignOptions> {
  getCommandName(): string {
    return 'sign';
  }
}
