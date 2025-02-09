import { UnlockCard } from './UnlockCard';

import { createMockAccount } from '~/systems/Account/__mocks__';

export default {
  component: UnlockCard,
  title: 'Unlock/Components/UnlockDialog',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Usage = () => {
  return (
    <>
      <UnlockCard onUnlock={() => {}} />
    </>
  );
};

Usage.loaders = [
  async () => {
    await createMockAccount();
    return {};
  },
];
Usage.parameters = {
  layout: 'centered',
};
