import { BooleanCommandParameter } from '@zodimo/cardano-cli-base';

export class JsonMetadataBuilder {
  noSchema(): JsonMetadata {
    return JsonMetadata.noSchema();
  }
  detailedSchema(): JsonMetadata {
    return JsonMetadata.detailedSchema();
  }
}
export class JsonMetadata extends BooleanCommandParameter {
  static noSchema(): JsonMetadata {
    return JsonMetadata.from('json-metadata-no-schema');
  }
  static detailedSchema(): JsonMetadata {
    return JsonMetadata.from('json-metadata-detailed-schema');
  }
}
