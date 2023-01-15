import { TxOutDatum, TxOutDatumBuilder } from '../../../../../src/command/buildParameters/tx-out/tx-out-datum';

describe('tx-out-datum', () => {
  /*
    [ --tx-out-datum-hash HASH
    | --tx-out-datum-hash-cbor-file CBOR FILE
    | --tx-out-datum-hash-file JSON FILE
    | --tx-out-datum-hash-value JSON VALUE
    | --tx-out-datum-embed-cbor-file CBOR FILE
    | --tx-out-datum-embed-file JSON FILE
    | --tx-out-datum-embed-value JSON VALUE
    | --tx-out-inline-datum-cbor-file CBOR FILE
    | --tx-out-inline-datum-file JSON FILE
    | --tx-out-inline-datum-value JSON VALUE
   */

  it('tx-out-datum-hash', () => {
    const hash = 'some-hash';
    expect(TxOutDatum.datumHash(hash).toString()).toBe(`--tx-out-datum-hash ${hash}`);
    expect(new TxOutDatumBuilder().datumHash(hash).toString()).toBe(`--tx-out-datum-hash ${hash}`);
  });

  it('tx-out-datum-hash-cbor-file', () => {
    const cborFile = 'some-cbor-file';
    expect(TxOutDatum.datumHashCborFile(cborFile).toString()).toBe(`--tx-out-datum-hash-cbor-file ${cborFile}`);
    expect(new TxOutDatumBuilder().datumHashCborFile(cborFile).toString()).toBe(
      `--tx-out-datum-hash-cbor-file ${cborFile}`,
    );
  });

  it('tx-out-datum-hash-file', () => {
    const jsonFile = 'some-json-file';
    expect(TxOutDatum.datumHashFile(jsonFile).toString()).toBe(`--tx-out-datum-hash-file ${jsonFile}`);
    expect(new TxOutDatumBuilder().datumHashFile(jsonFile).toString()).toBe(`--tx-out-datum-hash-file ${jsonFile}`);
  });

  it('tx-out-datum-hash-value', () => {
    const jsonValue = 'some-json-value';
    expect(TxOutDatum.datumHashValue(jsonValue).toString()).toBe(`--tx-out-datum-hash-value '${jsonValue}'`);
    expect(new TxOutDatumBuilder().datumHashValue(jsonValue).toString()).toBe(
      `--tx-out-datum-hash-value '${jsonValue}'`,
    );
  });

  it('tx-out-datum-embed-cbor-file', () => {
    const cborfile = 'some-cbor-file';
    expect(TxOutDatum.datumEmbedCborFile(cborfile).toString()).toBe(`--tx-out-datum-embed-cbor-file ${cborfile}`);
    expect(new TxOutDatumBuilder().datumEmbedCborFile(cborfile).toString()).toBe(
      `--tx-out-datum-embed-cbor-file ${cborfile}`,
    );
  });

  it('tx-out-datum-embed-file', () => {
    const jsonFile = 'some-json-file';
    expect(TxOutDatum.datumEmbedFile(jsonFile).toString()).toBe(`--tx-out-datum-embed-file ${jsonFile}`);
    expect(new TxOutDatumBuilder().datumEmbedFile(jsonFile).toString()).toBe(`--tx-out-datum-embed-file ${jsonFile}`);
  });

  it('tx-out-datum-embed-value', () => {
    const jsonValue = 'some-json-value';
    expect(TxOutDatum.datumEmbedValue(jsonValue).toString()).toBe(`--tx-out-datum-embed-value '${jsonValue}'`);
    expect(new TxOutDatumBuilder().datumEmbedValue(jsonValue).toString()).toBe(
      `--tx-out-datum-embed-value '${jsonValue}'`,
    );
  });

  it('tx-out-inline-datum-cbor-file', () => {
    const cborfile = 'some-cbor-file';
    expect(TxOutDatum.inlineDatumCborFile(cborfile).toString()).toBe(`--tx-out-inline-datum-cbor-file ${cborfile}`);
    expect(new TxOutDatumBuilder().inlineDatumCborFile(cborfile).toString()).toBe(
      `--tx-out-inline-datum-cbor-file ${cborfile}`,
    );
  });

  it('tx-out-inline-datum-file', () => {
    const jsonFile = 'some-json-file';
    expect(TxOutDatum.inlineDatumFile(jsonFile).toString()).toBe(`--tx-out-inline-datum-file ${jsonFile}`);
    expect(new TxOutDatumBuilder().inlineDatumFile(jsonFile).toString()).toBe(`--tx-out-inline-datum-file ${jsonFile}`);
  });

  it('tx-out-inline-datum-value', () => {
    const jsonValue = 'some-json-value';
    expect(TxOutDatum.inlineDatumValue(jsonValue).toString()).toBe(`--tx-out-inline-datum-value '${jsonValue}'`);
    expect(new TxOutDatumBuilder().inlineDatumValue(jsonValue).toString()).toBe(
      `--tx-out-inline-datum-value '${jsonValue}'`,
    );
  });
});
