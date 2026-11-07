export type RegistryEntryWithPreview = {
  name: string;
  displayName: string;
  description: string;
  previewImage?: string;
  previewAlt?: string;
  allowedRoles?: string[];
};
