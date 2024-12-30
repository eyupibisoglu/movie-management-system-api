import { Document } from 'mongoose';

export interface Movie extends Document {
  readonly name: string;
    readonly ageRestriction: number;
    readonly isActive: boolean;
}
