import { Builder, CompositeCommandParameter, StringCommandParameter } from '@zodimo/cardano-cli-base';
import { CertificateRedeemer, CertificateRedeemerBuilder } from './certificate-redeemer';

export class CertificateScriptFileBuilder {
  withScriptFile(value: string): CertificateScriptFile {
    return CertificateScriptFile.fromsScriptFile(value);
  }
}
export class CertificateScriptFile extends CompositeCommandParameter {
  static fromsScriptFile(value: string): CertificateScriptFile {
    return new CertificateScriptFile(StringCommandParameter.from('certificate-script-file', value));
  }
  withRedeemer(builder: Builder<CertificateRedeemerBuilder, CertificateRedeemer>): CertificateScriptFile {
    this.withParameter(builder(new CertificateRedeemerBuilder()));
    return this;
  }
}
