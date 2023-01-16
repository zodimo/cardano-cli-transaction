import { Metadata, MetadataBuilder } from '../../../../src/command/buildParameters/metadata';

describe('metadata', () => {
  // [--metadata-json-file FILE | --metadata-cbor-file FILE]

  it('metadata-json-file', () => {
    const jsonFile = 'some-json-file';
    expect(Metadata.jsonFile(jsonFile).toString()).toBe(`--metadata-json-file ${jsonFile}`);
    expect(new MetadataBuilder().jsonFile(jsonFile).toString()).toBe(`--metadata-json-file ${jsonFile}`);
  });

  it('metadata-cbor-file', () => {
    const cborFile = 'some-cbor-file';
    expect(Metadata.cborFile(cborFile).toString()).toBe(`--metadata-cbor-file ${cborFile}`);
    expect(new MetadataBuilder().cborFile(cborFile).toString()).toBe(`--metadata-cbor-file ${cborFile}`);
  });
});
