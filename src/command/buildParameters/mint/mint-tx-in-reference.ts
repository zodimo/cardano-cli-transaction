import {
  BooleanCommandParameter,
  Builder,
  CompositeCommandParameter,
  StringCommandParameter,
} from '@zodimo/cardano-cli-base';
import { MintReferenceTxInRedeemer, MintReferenceTxInRedeemerBuilder } from './mint-reference-tx-in-redeemer';
export class MintTxInReferenceBuilder {
  fromTxIn(value: string): MintTxInReference {
    return MintTxInReference.fromTxIn(value);
  }
}

export class MintTxInReference extends CompositeCommandParameter {
  static fromTxIn(value: string): MintTxInReference {
    return new MintTxInReference(StringCommandParameter.from('mint-tx-in-reference', value));
  }

  withMintPlutusScriptV2(): MintTxInReference {
    this.withParameter(BooleanCommandParameter.from('mint-plutus-script-v2'));
    return this;
  }

  withRedeemer(builder: Builder<MintReferenceTxInRedeemerBuilder, MintReferenceTxInRedeemer>): MintTxInReference {
    this.withParameter(builder(new MintReferenceTxInRedeemerBuilder()));
    return this;
  }
  withPolicyId(value: string): MintTxInReference {
    this.withParameter(StringCommandParameter.from('policy-id', value));
    return this;
  }
}
