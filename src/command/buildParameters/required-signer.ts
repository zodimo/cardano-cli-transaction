import { StringCommandParameter } from '@zodimo/cardano-cli-base';

enum RequiredSignerOptions {
  FILE = 'required-signer',
  HASH = 'required-signer-hash',
}

export class RequiredSignerBuilder {
  file(value: string): RequiredSigner {
    return RequiredSigner.file(value);
  }
  hash(value: string): RequiredSigner {
    return RequiredSigner.hash(value);
  }
}
export class RequiredSigner extends StringCommandParameter {
  constructor(paramKey: RequiredSignerOptions, paramValue: string) {
    super(paramKey, paramValue);
  }
  static file(value: string) {
    return new RequiredSigner(RequiredSignerOptions.FILE, value);
  }

  static hash(value: string) {
    return new RequiredSigner(RequiredSignerOptions.HASH, value);
  }
}
