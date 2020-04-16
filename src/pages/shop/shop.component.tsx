import React from 'react';
import './shop.styles.scss';
import { ShopItem } from '../../utilities/_models/shop-item.model';
import SHOP_DATA from '../../utilities/_data/shop.data';
import CollectionsPreviewComponent from '../../components/collections-preview/collections-preview.component';

interface State {
    collections: ShopItem[]
}

class ShopPage extends React.Component<any, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }

    render(): React.ReactNode {
        const { collections } = this.state;

        return (
            <div className="shop-page">
                {
                    collections.filter((c, i) => i < 4)
                        .map(({ id, ...collectionsProps }) => (
                            <CollectionsPreviewComponent
                                key={ id } { ...collectionsProps }/>
                        ))
                }
            </div>
        );
    }
}

export default ShopPage;
