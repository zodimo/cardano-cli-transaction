import { StringCommandParameter } from '@zodimo/cardano-cli-base';

export class MetadataBuilder {
  jsonFile(value: string): Metadata {
    return Metadata.jsonFile(value);
  }
  cborFile(value: string): Metadata {
    return Metadata.cborFile(value);
  }
}

export class Metadata extends StringCommandParameter {
  static jsonFile(value: string): Metadata {
    return Metadata.from('metadata-json-file', value);
  }
  static cborFile(value: string): Metadata {
    return Metadata.from('metadata-cbor-file', value);
  }
}
