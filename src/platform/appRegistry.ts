import type { ComponentType } from 'react';
import {EXAMPLE_PREVIEW, OES_PREVIEW, BYDASH_PREVIEW, RSTORIES_PREVIEW } from '../assets';
import type { RegistryEntryWithPreview } from './registryTypes';

export type AppRegistryEntry = RegistryEntryWithPreview & {
  type: string;
  responsible: string;
  email: string;
  status: string;
  version: string;
  data: string;
  data_update: string;
  route: string;
  loader: () => Promise<{ default: ComponentType }>;
};

export const appRegistry: AppRegistryEntry[] = [
  {
    name: 'DashBoardApp',
    displayName: 'ByDash',
    type: 'analytical',
    responsible: 'Benjamin Buchbauer',
    email: 'benjamin.buchnauer@mail.de',
    status: 'planed',
    version: '0.0.0.1',
    data: 'unknown',
    data_update: 'unknown',
    route: '/bydash',
    description: 'Fiktives Steuerungstool für den Freistaat Bayern.',
    previewImage: BYDASH_PREVIEW,
    previewAlt: 'Vorschau der ByDash App.',
    allowedRoles: ['user', 'admin'],
    // @ts-expect-error - Federated module, type definition not available at compile time
    loader: () => import('bydash/DashBoardApp'),
  },
  {
    name: 'class',
    displayName: 'Klassenwiederholungen',
    type: 'analytical',
    responsible: 'Edgar Treischl',
    email: 'edgar.treischl@isb.bayern.de',
    status: 'released',
    version: '1.0.0',
    data: 'Bayern Schulen in Zahlen',
    data_update: 'yearly',
    route: '/class',
    description: 'Befunde der Klassenwiederholungen anhand Bayern Schulen in Zahlen.',
    previewImage: EXAMPLE_PREVIEW,
    previewAlt: 'Vorschau der Klassenwiederholungen App.',
    allowedRoles: ['user', 'admin'],
    // @ts-expect-error - Federated module, type definition not available at compile time
    loader: () => import('class/KlassenWiederholungApp'),
  },
  {
    name: 'rstories',
    displayName: 'R Stories',
    type: 'analytical',
    responsible: 'Edgar Treischl',
    email: 'edgar.treischl@isb.bayern.de',
    status: 'planed',
    version: '1.0.0',
    data: 'None',
    data_update: 'yearly',
    route: '/rstories',
    description: 'Ziele und Maßnahmen der SCP Schulen',
    previewImage: RSTORIES_PREVIEW,
    previewAlt: 'Vorschau der SCP Prototyp App.',
    allowedRoles: ['user', 'admin'],
    // @ts-expect-error - Federated module, type definition not available at compile time
    loader: () => import('rstories/App'),
  },
  {
    name: 'oes',
    displayName: 'OES',
    type: 'analytical',
    responsible: 'Edgar Treischl',
    email: 'edgar.treischl@isb.bayern.de',
    status: 'planed',
    version: '1.0.0',
    data: 'Externe Evaluation',
    data_update: 'daily',
    route: '/oes',
    description: 'Fiktive Beispielergebnisse des Online Evaluation Systems.',
    previewImage: OES_PREVIEW,
    previewAlt: 'Vorschau der OES App.',
    allowedRoles: ['admin'],
    // @ts-expect-error - Federated module, type definition not available at compile time
    loader: () => import('oes/OESApp'),
  },
];
