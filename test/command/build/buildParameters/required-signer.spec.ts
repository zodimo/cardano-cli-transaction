import { RequiredSigner, RequiredSignerBuilder } from '../../../../src/command/buildParameters/required-signer';
describe('required-signer', () => {
  //[--required-signer FILE | --required-signer-hash HASH]
  it('required-signer FILE', () => {
    const requiredSignerFile = 'my-signer-file';
    expect(RequiredSigner.file(requiredSignerFile).toString()).toBe(`--required-signer ${requiredSignerFile}`);
    expect(new RequiredSignerBuilder().file(requiredSignerFile).toString()).toBe(
      `--required-signer ${requiredSignerFile}`,
    );
  });

  it('required-signer-hash HASH', () => {
    const requiredSignerHash = 'my-signer-hash';
    expect(RequiredSigner.hash(requiredSignerHash).toString()).toBe(`--required-signer-hash ${requiredSignerHash}`);
    expect(new RequiredSignerBuilder().hash(requiredSignerHash).toString()).toBe(
      `--required-signer-hash ${requiredSignerHash}`,
    );
  });
});
