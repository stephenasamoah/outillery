import React from 'react';
import './collections-preview.styles.scss';
import { ShopItem } from '../../../utilities/_models/shop-item.model';
import CollectionItemComponent from '../collection-item/collection-item.component';

const CollectionsPreviewComponent = ({ title, items }: ShopItem) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{ title?.toUpperCase() }</h1>
            <div className="preview">
                {
                    items?.filter((c, i) => i < 4)
                        .map((item) => (
                            <CollectionItemComponent key={ item.id } item={ item }/>
                        ))
                }
            </div>
        </div>
    );
};

export default CollectionsPreviewComponent;

