import React from 'react';
import './collections-preview.styles.scss';
import { ShopItem } from '../../utilities/_models/shop-item.model';
import { Section } from '../../utilities/_models/section.model';

const CollectionsPreviewComponent = ({ title, items }: ShopItem) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{ title?.toUpperCase() }</h1>
            <div className="preview">
                {
                    items?.map(({ id, name }: Section) => (
                        <div key={ id }>{ name }</div>
                    ))
                }
            </div>
        </div>
    );
};

export default CollectionsPreviewComponent;

