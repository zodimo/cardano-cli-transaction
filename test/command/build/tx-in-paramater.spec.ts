import { TxInParameter } from '../../../src/command/build';

describe('tx-in-parameter', () => {
  /*
    (
        --tx-in TX-IN
        [
            --spending-tx-in-reference TX-IN
            --spending-plutus-script-v2
            ( --spending-reference-tx-in-datum-cbor-file CBOR FILE | --spending-reference-tx-in-datum-file JSON FILE | --spending-reference-tx-in-datum-value JSON VALUE | --spending-reference-tx-in-inline-datum-present )
            ( --spending-reference-tx-in-redeemer-cbor-file CBOR FILE | --spending-reference-tx-in-redeemer-file JSON FILE | --spending-reference-tx-in-redeemer-value JSON VALUE ) 
            | --simple-script-tx-in-reference TX-IN | --tx-in-script-file FILE
            [
                ( --tx-in-datum-cbor-file CBOR FILE | --tx-in-datum-file JSON FILE | --tx-in-datum-value JSON VALUE | --tx-in-inline-datum-present )
                ( --tx-in-redeemer-cbor-file CBOR FILE | --tx-in-redeemer-file JSON FILE | --tx-in-redeemer-value JSON VALUE )
            ]
        ]
    )
*/

  const txIn = '12345#1';
  expect(TxInParameter.fromTxIn(txIn).toString()).toBe(`--tx-in ${txIn}`);

  it('spending-tx-in-reference', () => {
    const spendingTxInReference = '234#';
    expect(
      TxInParameter.fromTxIn(txIn)
        .withAlternative((builder) =>
          builder.txInSpending((builder) => builder.withspendingTxInReference(spendingTxInReference)),
        )
        .toString(),
    ).toBe([`--tx-in ${txIn}`, `--spending-tx-in-reference ${spendingTxInReference}`].join(' '));
  });

  it('spending-plutus-script-v2', () => {
    expect(
      TxInParameter.fromTxIn(txIn)
        .withAlternative((builder) => builder.txInSpending((builder) => builder.withSpendingPlutusScriptV2()))
        .toString(),
    ).toBe([`--tx-in ${txIn}`, `--spending-plutus-script-v2`].join(' '));
  });

  /**
   * spending-reference-tx-in DATUM
   */
  it('--spending-reference-tx-in-datum-cbor-file CBOR FILE', () => {
    const cborFile = 'my-cbor-file';
    expect(
      TxInParameter.fromTxIn(txIn)
        .withAlternative((builder) =>
          builder.txInSpending((builder) =>
            builder.withSpendingReferenceTxInDatum((builder) => builder.cborFile(cborFile)),
          ),
        )
        .toString(),
    ).toBe([`--tx-in ${txIn}`, `--spending-reference-tx-in-datum-cbor-file ${cborFile}`].join(' '));
  });

  it('--spending-reference-tx-in-datum-file JSON FILE', () => {
    const jsonFile = 'my-json-file';
    expect(
      TxInParameter.fromTxIn(txIn)
        .withAlternative((builder) =>
          builder.txInSpending((builder) =>
            builder.withSpendingReferenceTxInDatum((builder) => builder.jsonFile(jsonFile)),
          ),
        )
        .toString(),
    ).toBe([`--tx-in ${txIn}`, `--spending-reference-tx-in-datum-file ${jsonFile}`].join(' '));
  });

  it('--spending-reference-tx-in-datum-value JSON VALUE', () => {
    const jsonValue = 'my-json-value';
    expect(
      TxInParameter.fromTxIn(txIn)
        .withAlternative((builder) =>
          builder.txInSpending((builder) =>
            builder.withSpendingReferenceTxInDatum((builder) => builder.jsonValue(jsonValue)),
          ),
        )
        .toString(),
    ).toBe([`--tx-in ${txIn}`, `--spending-reference-tx-in-datum-value '${jsonValue}'`].join(' '));
  });

  it('--spending-reference-tx-in-inline-datum-present ', () => {
    expect(
      TxInParameter.fromTxIn(txIn)
        .withAlternative((builder) =>
          builder.txInSpending((builder) =>
            builder.withSpendingReferenceTxInDatum((builder) => builder.inlineDatumIsPresent()),
          ),
        )
        .toString(),
    ).toBe([`--tx-in ${txIn}`, `--spending-reference-tx-in-inline-datum-present`].join(' '));
  });

  /**
   * spending-reference-tx-in REDEEMER
   */
  it('--spending-reference-tx-in-redeemer-cbor-file CBOR FILE', () => {
    const cborFile = 'my-cbor-file';
    expect(
      TxInParameter.fromTxIn(txIn)
        .withAlternative((builder) =>
          builder.txInSpending((builder) =>
            builder.withSpendingReferenceTxInRedeemer((builder) => builder.cborFile(cborFile)),
          ),
        )
        .toString(),
    ).toBe([`--tx-in ${txIn}`, `--spending-reference-tx-in-redeemer-cbor-file ${cborFile}`].join(' '));
  });

  it('--spending-reference-tx-in-redeemer-file JSON FILE', () => {
    const jsonFile = 'my-json-file';
    expect(
      TxInParameter.fromTxIn(txIn)
        .withAlternative((builder) =>
          builder.txInSpending((builder) =>
            builder.withSpendingReferenceTxInRedeemer((builder) => builder.jsonFile(jsonFile)),
          ),
        )
        .toString(),
    ).toBe([`--tx-in ${txIn}`, `--spending-reference-tx-in-redeemer-file ${jsonFile}`].join(' '));
  });

  it('--spending-reference-tx-in-redeemer-value JSON VALUE', () => {
    const jsonValue = 'my-json-value';
    expect(
      TxInParameter.fromTxIn(txIn)
        .withAlternative((builder) =>
          builder.txInSpending((builder) =>
            builder.withSpendingReferenceTxInRedeemer((builder) => builder.jsonValue(jsonValue)),
          ),
        )
        .toString(),
    ).toBe([`--tx-in ${txIn}`, `--spending-reference-tx-in-redeemer-value ${jsonValue}`].join(' '));
  });

  it('simple-script-tx-in-reference TX-IN', () => {
    const simpleScriptTxInReference = '234#';
    expect(
      TxInParameter.fromTxIn(txIn)
        .withAlternative((builder) => builder.simpleScriptTxInReference(simpleScriptTxInReference))
        .toString(),
    ).toBe([`--tx-in ${txIn}`, `--simple-script-tx-in-reference ${simpleScriptTxInReference}`].join(' '));
  });

  /*
    --tx-in-script-file FILE
            [
                ( --tx-in-datum-cbor-file CBOR FILE | --tx-in-datum-file JSON FILE | --tx-in-datum-value JSON VALUE | --tx-in-inline-datum-present )
                ( --tx-in-redeemer-cbor-file CBOR FILE | --tx-in-redeemer-file JSON FILE | --tx-in-redeemer-value JSON VALUE )
            ]
  */
  it('tx-in-script-file', () => {
    const txInScriptFile = 'my-script-file';
    expect(
      TxInParameter.fromTxIn(txIn)
        .withAlternative((builder) => builder.txInScript((builder) => builder.withScriptFile(txInScriptFile)))
        .toString(),
    ).toBe([`--tx-in ${txIn}`, `--tx-in-script-file ${txInScriptFile}`].join(' '));
  });

  // DATUM
  it('tx-in-datum-cbor-file CBOR FILE', () => {
    const txInScriptFile = 'my-script-file';
    const cborFile = 'my-cbor-file';
    expect(
      TxInParameter.fromTxIn(txIn)
        .withAlternative((builder) =>
          builder.txInScript((builder) =>
            builder.withScriptFile(txInScriptFile).withDatum((builder) => builder.cborFile(cborFile)),
          ),
        )
        .toString(),
    ).toBe(
      [`--tx-in ${txIn}`, `--tx-in-script-file ${txInScriptFile}`, `--tx-in-datum-cbor-file ${cborFile}`].join(' '),
    );
  });

  it('tx-in-datum-file JSON FILE', () => {
    const txInScriptFile = 'my-script-file';
    const jsonFile = 'my-json-file';
    expect(
      TxInParameter.fromTxIn(txIn)
        .withAlternative((builder) =>
          builder.txInScript((builder) =>
            builder.withScriptFile(txInScriptFile).withDatum((builder) => builder.jsonFile(jsonFile)),
          ),
        )
        .toString(),
    ).toBe([`--tx-in ${txIn}`, `--tx-in-script-file ${txInScriptFile}`, `--tx-in-datum-file ${jsonFile}`].join(' '));
  });

  it('tx-in-datum-value JSON VALUE', () => {
    const txInScriptFile = 'my-script-file';
    const jsonValue = 'my-json-value';
    expect(
      TxInParameter.fromTxIn(txIn)
        .withAlternative((builder) =>
          builder.txInScript((builder) =>
            builder.withScriptFile(txInScriptFile).withDatum((builder) => builder.jsonValue(jsonValue)),
          ),
        )
        .toString(),
    ).toBe(
      [`--tx-in ${txIn}`, `--tx-in-script-file ${txInScriptFile}`, `--tx-in-datum-value '${jsonValue}'`].join(' '),
    );
  });

  it('tx-in-inline-datum-present', () => {
    const txInScriptFile = 'my-script-file';
    expect(
      TxInParameter.fromTxIn(txIn)
        .withAlternative((builder) =>
          builder.txInScript((builder) =>
            builder.withScriptFile(txInScriptFile).withDatum((builder) => builder.inlineDatumIsPresent()),
          ),
        )
        .toString(),
    ).toBe([`--tx-in ${txIn}`, `--tx-in-script-file ${txInScriptFile}`, `--tx-in-inline-datum-present`].join(' '));
  });

  // REDEEMER
  it('tx-in-redeemer-cbor-file CBOR FILE', () => {
    const txInScriptFile = 'my-script-file';
    const cborFile = 'my-cbor-file';
    expect(
      TxInParameter.fromTxIn(txIn)
        .withAlternative((builder) =>
          builder.txInScript((builder) =>
            builder.withScriptFile(txInScriptFile).withRedeemer((builder) => builder.cborFile(cborFile)),
          ),
        )
        .toString(),
    ).toBe(
      [`--tx-in ${txIn}`, `--tx-in-script-file ${txInScriptFile}`, `--tx-in-redeemer-cbor-file ${cborFile}`].join(' '),
    );
  });

  it('tx-in-redeemer-file JSON FILE', () => {
    const txInScriptFile = 'my-script-file';
    const jsonFile = 'my-json-file';
    expect(
      TxInParameter.fromTxIn(txIn)
        .withAlternative((builder) =>
          builder.txInScript((builder) =>
            builder.withScriptFile(txInScriptFile).withRedeemer((builder) => builder.jsonFile(jsonFile)),
          ),
        )
        .toString(),
    ).toBe([`--tx-in ${txIn}`, `--tx-in-script-file ${txInScriptFile}`, `--tx-in-redeemer-file ${jsonFile}`].join(' '));
  });

  it('tx-in-redeemer-value JSON VALUE', () => {
    const txInScriptFile = 'my-script-file';
    const jsonValue = 'my-json-value';
    expect(
      TxInParameter.fromTxIn(txIn)
        .withAlternative((builder) =>
          builder.txInScript((builder) =>
            builder.withScriptFile(txInScriptFile).withRedeemer((builder) => builder.jsonValue(jsonValue)),
          ),
        )
        .toString(),
    ).toBe(
      [`--tx-in ${txIn}`, `--tx-in-script-file ${txInScriptFile}`, `--tx-in-redeemer-value '${jsonValue}'`].join(' '),
    );
  });
  //all together now as an example
  it('example 1', () => {
    // script with inline datum and json file redeemer
    const scriptFile = 'my-script-file';
    const jsonRedeemerFile = 'my-json-redeemer-file';
    expect(
      TxInParameter.fromTxIn(txIn)
        .withAlternative((builder) =>
          builder.txInScript((builder) =>
            builder
              .withScriptFile(scriptFile)
              .withDatum((builder) => builder.inlineDatumIsPresent())
              .withRedeemer((builder) => builder.jsonFile(jsonRedeemerFile)),
          ),
        )
        .toString(),
    ).toBe(
      [
        `--tx-in ${txIn}`,
        `--tx-in-script-file ${scriptFile}`,
        `--tx-in-inline-datum-present`,
        `--tx-in-redeemer-file ${jsonRedeemerFile}`,
      ].join(' '),
    );
  });
});
