import { CompositeCommandParameter, StringCommandParameter } from '@zodimo/cardano-cli-base';

export class SimpleMintingScriptBuilder {
  fromTxReference(value: string): SimpleMintingScript {
    return SimpleMintingScript.fromTxReference(value);
  }
}

export class SimpleMintingScript extends CompositeCommandParameter {
  static fromTxReference(value: string): SimpleMintingScript {
    return new SimpleMintingScript(StringCommandParameter.from('simple-minting-script-tx-in-reference', value));
  }
  withPolicyId(value: string): SimpleMintingScript {
    this.withParameter(StringCommandParameter.from('policy-id', value));
    return this;
  }
}
