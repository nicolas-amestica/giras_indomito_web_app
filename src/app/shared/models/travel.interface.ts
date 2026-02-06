import { Destination } from './destination.interface';
import { Activity } from './activity.interface';

export interface Travel {
  zone: string;
  img: string;
  description: string;
  destinations: Destination[];
}

export interface CustomTravel {
  activities: Activity[];
  destination: Destination;
  zone: string;
}
