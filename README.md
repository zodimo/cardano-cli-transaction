# cardano-cli-transaction

This package is a command builder part of a series to wrap the cardano-cli

# Development

run the dump command to check for differences.

```bash
npm run build
node dist/dump-cli-help-to-docs.js
```

# cardano-cli transaction -h

```text
Usage: cardano-cli transaction
            ( build-raw
            | build
            | sign
            | witness
            | assemble
            | submit
            | policyid
            | calculate-min-fee
            | calculate-min-required-utxo
            | hash-script-data
            | txid
            | view
            )
```

# TODO

- add git integration and test coverage badges

- Implementations

- [ ] transaction
  - [ ] build-raw
  - [x] build
  - [x] sign
  - [ ] witness
  - [ ] assemble
  - [x] submit
  - [x] policyid
  - [x] calculate-min-fee
  - [ ] calculate-min-required-utxo
  - [ ] hash-script-data
  - [x] txid
  - [ ] view
