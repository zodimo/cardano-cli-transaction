import { Builder, CompositeCommandParameter, StringCommandParameter } from '@zodimo/cardano-cli-base';
import { MintScriptFile, MintScriptFileBuilder } from './mint/mint-script-file';
import { MintTxInReference, MintTxInReferenceBuilder } from './mint/mint-tx-in-reference';
import { SimpleMintingScript, SimpleMintingScriptBuilder } from './mint/simple-minting-script';

export class MintParameter extends CompositeCommandParameter {
  static fromMint(value: string): MintParameter {
    return new MintParameter(new StringCommandParameter('mint', value));
  }

  withMintScriptFile(builder: Builder<MintScriptFileBuilder, MintScriptFile>): MintParameter {
    this.withParameter(builder(new MintScriptFileBuilder()));
    return this;
  }

  withSimpleMintingScript(builder: Builder<SimpleMintingScriptBuilder, SimpleMintingScript>): MintParameter {
    this.withParameter(builder(new SimpleMintingScriptBuilder()));
    return this;
  }

  withMintTxInReference(builder: Builder<MintTxInReferenceBuilder, MintTxInReference>): MintParameter {
    this.withParameter(builder(new MintTxInReferenceBuilder()));
    return this;
  }
}
