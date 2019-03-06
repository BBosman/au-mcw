import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export * from './ripple';

export const configure: (aurelia: FrameworkConfiguration) => void = (aurelia: FrameworkConfiguration): void => {
  aurelia.globalResources([
    PLATFORM.moduleName('./ripple')
  ]);
};
