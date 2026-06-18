import React from 'react';

// Importamos el componente
import { Progress } from './Progress/Progress';
// Importamos las constantes para que TypeScript no marque error
import { ProgressVariant, ProgressMode } from './Progress/Progress.constants';

export default {
  title: 'Components/Progress',
  component: Progress,
};

export const LinearDeterminate = () => (
  <Progress
    variant={ProgressVariant.LINEAR}
    mode={ProgressMode.DETERMINATE}
    value={70}
    showLabel={true}
  />
);

export const CircularIndeterminate = () => (
  <Progress variant={ProgressVariant.CIRCULAR} mode={ProgressMode.INDETERMINATE} />
);
