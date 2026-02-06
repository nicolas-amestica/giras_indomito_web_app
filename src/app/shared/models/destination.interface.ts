import { Activity } from './activity.interface';

export interface Destination {
  name: string;
  description: string;
  region?: string;
  image?: string;
  activities: Activity[];
}
