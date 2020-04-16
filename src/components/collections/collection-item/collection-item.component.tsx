import React from 'react';
import './collection-item.styles.scss';
import { Section } from '../../../utilities/_models/section.model';

interface Item {
    item: Section;
}

type Props = Item;

const CollectionItemComponent = ({ item }: Props) => (
    <div className="collection-item">
        <div className="image" style={ {
            backgroundImage: `url(${ item.imageUrl })`
        } }/>

        <div className="collection-footer">
            <span className="name">{ item.name }</span>
            <span className="price">{ item.price }</span>
        </div>
    </div>
);

export default CollectionItemComponent;
