import { BooleanCommandParameter } from '@zodimo/cardano-cli-base';

export class JsonMetaDataBuilder {
  noSchema(): JsonMetaData {
    return JsonMetaData.noSchema();
  }
  detailedSchema(): JsonMetaData {
    return JsonMetaData.detailedSchema();
  }
}
export class JsonMetaData extends BooleanCommandParameter {
  static noSchema(): JsonMetaData {
    return JsonMetaData.from('json-metadata-no-schema');
  }
  static detailedSchema(): JsonMetaData {
    return JsonMetaData.from('json-metadata-detailed-schema');
  }
}
