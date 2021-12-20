describe('App', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show the step one message', async () => {
    await expect(element(by.id('stepOne'))).toBeVisible();
  });
});
