import { GviewModule } from './gview.module';

describe('GviewModule', () => {
  let gviewModule: GviewModule;

  beforeEach(() => {
    gviewModule = new GviewModule();
  });

  it('should create an instance', () => {
    expect(gviewModule).toBeTruthy();
  });
});
