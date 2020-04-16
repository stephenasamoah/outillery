import React from 'react';
import { SECTIONS } from '../../utilities/_data/sections.data';
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
            sections: SECTIONS
        };
    }

    render(): React.ReactNode {
        const { sections } = this.state;
        return (
            <ul className="directory-menu">
                {
                    sections.map(({ id, ...sectionsProps }) => (
                        <MenuItem key={ id } { ...sectionsProps }/>
                    ))
                }
            </ul>
        );
    }


}

export default DirectoryMenu;
