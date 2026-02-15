'use client';
// NOTE: Import All Mantine Related CSS Here

// mantine css imports
import '@mantine/carousel/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/core/styles.css';
import '@mantine/core/styles.layer.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/notifications/styles.css';
import 'mantine-datatable/styles.layer.css';

import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import React from 'react';
import { theme } from '../utils/theme';

function MantineWrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <MantineProvider theme={theme} forceColorScheme="light">
      <ModalsProvider>
        <Notifications />
        {children}
      </ModalsProvider>
    </MantineProvider>
  );
}

export default MantineWrapper;
