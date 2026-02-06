export interface ProgramFile {
  name: string;
  link: string;
  transport?: string;
}

export interface ProgramRegion {
  name: string;
  files: ProgramFile[];
}

export interface ProgramDestination {
  name: string;
  region?: ProgramRegion[];
  files?: ProgramFile[];
}

export interface ProgramZone {
  name: string;
  destinations: ProgramDestination[];
}
