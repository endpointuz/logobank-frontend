export const getButtonType = type => (
  type && `mcs-button-${type}`
);

export const getClassNameFromArray = classesList => classesList
  .filter(el => (el !== undefined && el !== null))
  .join('-');

export const isClassComponent = component => (!!(
  typeof component === 'function'
  && component.prototype
  && component.prototype.isReactComponent
));

export const isFunctionComponent = component => (!!((
  typeof component === 'function'
  && !(
    component.prototype
    && component.prototype.isReactComponent
  )
)));

export const isReactComponent = component => (!!((
  isClassComponent(component)
  || isFunctionComponent(component)
)));
