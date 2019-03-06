import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export * from './button';

export const configure: (aurelia: FrameworkConfiguration) => void = (aurelia: FrameworkConfiguration): void => {
  aurelia.plugin('@au-mcw-ripple');
  aurelia.globalResources([
    PLATFORM.moduleName('./button')
  ]);
};
