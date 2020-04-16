import { BaseModel } from './base.model';
import { Section } from './section.model';

export interface ShopItem extends BaseModel {
    title?: string;
    name?: string;
    imageUrl?: string;
    routeName?: string;
    items?: Section[]
}
