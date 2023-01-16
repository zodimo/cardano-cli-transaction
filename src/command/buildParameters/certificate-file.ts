import { Builder, CompositeCommandParameter, StringCommandParameter } from '@zodimo/cardano-cli-base';
import { CertificateScriptFile, CertificateScriptFileBuilder } from './certificate-file/certificate-script-file';
import {
  CertificateTxInReference,
  CertificateTxInReferenceBuilder,
} from './certificate-file/certificate-tx-in-reference';

export class CertificateFileBuilder {
  withCertificateFile(value: string): CertificateFile {
    return CertificateFile.fromCertificateFile(value);
  }
}
export class CertificateFile extends CompositeCommandParameter {
  static fromCertificateFile(value: string): CertificateFile {
    return new CertificateFile(StringCommandParameter.from('certificate-file', value));
  }
  withCertificateScriptFile(builder: Builder<CertificateScriptFileBuilder, CertificateScriptFile>): CertificateFile {
    this.withParameter(builder(new CertificateScriptFileBuilder()));
    return this;
  }
  withCertificateTxInReference(
    builder: Builder<CertificateTxInReferenceBuilder, CertificateTxInReference>,
  ): CertificateFile {
    this.withParameter(builder(new CertificateTxInReferenceBuilder()));
    return this;
  }
}
