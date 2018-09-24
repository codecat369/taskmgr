import { GviserModule } from './gviser.module';

describe('GviserModule', () => {
  let gviserModule: GviserModule;

  beforeEach(() => {
    gviserModule = new GviserModule();
  });

  it('should create an instance', () => {
    expect(gviserModule).toBeTruthy();
  });
});
