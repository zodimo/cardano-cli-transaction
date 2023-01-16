import { JsonMetaData, JsonMetaDataBuilder } from '../../../../src/command/buildParameters/json-metadata';

describe('json-metadata', () => {
  // [--json-metadata-no-schema | --json-metadata-detailed-schema]
  it('json-metadata-no-schema', () => {
    expect(JsonMetaData.noSchema().toString()).toBe('--json-metadata-no-schema');
    expect(new JsonMetaDataBuilder().noSchema().toString()).toBe('--json-metadata-no-schema');
  });

  it('json-metadata-detailed-schema', () => {
    expect(JsonMetaData.detailedSchema().toString()).toBe('--json-metadata-detailed-schema');
    expect(new JsonMetaDataBuilder().detailedSchema().toString()).toBe('--json-metadata-detailed-schema');
  });
});
