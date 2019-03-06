import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export * from './button';

export const configure: (aurelia: FrameworkConfiguration) => void = (aurelia: FrameworkConfiguration): void => {
  aurelia.globalResources([
    PLATFORM.moduleName('./button')
  ]);
};
