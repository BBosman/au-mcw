import { Aurelia, PLATFORM } from 'aurelia-framework';

export async function configure(aurelia: Aurelia): Promise<void> {
  aurelia
    .use
    .standardConfiguration()
    .plugin(PLATFORM.moduleName('@au-mcw/button'))
    .developmentLogging();

  try {
    await aurelia.start();
    await aurelia.setRoot(PLATFORM.moduleName('shell'));
  } catch (error) {
    console.error(error.message); // tslint:disable-line:no-console
  }
}
