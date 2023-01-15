import { StringCommandParameter } from '@zodimo/cardano-cli-base';

export class TxOutDatumBuilder {
  datumHash(value: string): TxOutDatum {
    return TxOutDatum.datumHash(value);
  }

  datumHashCborFile(value: string): TxOutDatum {
    return TxOutDatum.datumHashCborFile(value);
  }

  datumHashFile(value: string): TxOutDatum {
    return TxOutDatum.datumHashFile(value);
  }

  datumHashValue(value: string): TxOutDatum {
    return TxOutDatum.datumHashValue(value);
  }

  datumEmbedCborFile(value: string): TxOutDatum {
    return TxOutDatum.datumEmbedCborFile(value);
  }

  datumEmbedFile(value: string): TxOutDatum {
    return TxOutDatum.datumEmbedFile(value);
  }

  datumEmbedValue(value: string): TxOutDatum {
    return TxOutDatum.datumEmbedValue(value);
  }

  inlineDatumCborFile(value: string): TxOutDatum {
    return TxOutDatum.inlineDatumCborFile(value);
  }

  inlineDatumFile(value: string): TxOutDatum {
    return TxOutDatum.inlineDatumFile(value);
  }

  inlineDatumValue(value: string): TxOutDatum {
    return TxOutDatum.inlineDatumValue(value);
  }
}

export class TxOutDatum extends StringCommandParameter {
  static datumHash(value: string): TxOutDatum {
    return TxOutDatum.from('tx-out-datum-hash', value);
  }

  static datumHashCborFile(value: string): TxOutDatum {
    return TxOutDatum.from('tx-out-datum-hash-cbor-file', value);
  }

  static datumHashFile(value: string): TxOutDatum {
    return TxOutDatum.from('tx-out-datum-hash-file', value);
  }

  static datumHashValue(value: string): TxOutDatum {
    return TxOutDatum.from('tx-out-datum-hash-value', value, true);
  }

  static datumEmbedCborFile(value: string): TxOutDatum {
    return TxOutDatum.from('tx-out-datum-embed-cbor-file', value);
  }

  static datumEmbedFile(value: string): TxOutDatum {
    return TxOutDatum.from('tx-out-datum-embed-file', value);
  }

  static datumEmbedValue(value: string): TxOutDatum {
    return TxOutDatum.from('tx-out-datum-embed-value', value, true);
  }

  static inlineDatumCborFile(value: string): TxOutDatum {
    return TxOutDatum.from('tx-out-inline-datum-cbor-file', value);
  }

  static inlineDatumFile(value: string): TxOutDatum {
    return TxOutDatum.from('tx-out-inline-datum-file', value);
  }

  static inlineDatumValue(value: string): TxOutDatum {
    return TxOutDatum.from('tx-out-inline-datum-value', value, true);
  }
}
