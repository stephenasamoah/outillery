import { ShopItem } from './shop-item.model';

export interface Section extends ShopItem {
    size?: string;
    price?: number;
}
