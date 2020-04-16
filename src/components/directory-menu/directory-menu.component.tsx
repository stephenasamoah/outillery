import React from 'react';
import { sections } from '../../utilities/sections.data';
import { Section } from '../../utilities/_models/section.model';
import MenuItem from '../menu-item/menu-item';
import './directory-menu.styles.scss';

interface State {
    sections: Section[]
}

class DirectoryMenu extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            sections: sections
        };

        console.log(props);
    }

    render(): React.ReactNode {
        const { sections } = this.state;
        return (
            <ul className="directory-menu">
                {
                    sections.map(({ id, title, imageUrl, size }) => (
                        <MenuItem key={ id } title={ title } size={ size } imageUrl={ imageUrl }/>
                    ))
                }
            </ul>
        );
    }


}

export default DirectoryMenu;
