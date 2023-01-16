import { JsonMetadata, JsonMetadataBuilder } from '../../../../src/command/buildParameters/json-metadata';

describe('json-metadata', () => {
  // [--json-metadata-no-schema | --json-metadata-detailed-schema]
  it('json-metadata-no-schema', () => {
    expect(JsonMetadata.noSchema().toString()).toBe('--json-metadata-no-schema');
    expect(new JsonMetadataBuilder().noSchema().toString()).toBe('--json-metadata-no-schema');
  });

  it('json-metadata-detailed-schema', () => {
    expect(JsonMetadata.detailedSchema().toString()).toBe('--json-metadata-detailed-schema');
    expect(new JsonMetadataBuilder().detailedSchema().toString()).toBe('--json-metadata-detailed-schema');
  });
});
