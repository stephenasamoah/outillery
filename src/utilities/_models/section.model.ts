import { BaseModel } from './base.model';

export interface Section extends BaseModel {
    title?: string;
    imageUrl?: string;
    size?: string;
}
