import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from 'widgets/SideBar';
import {
    ComponentRender,
} from 'shared/lib/tests/componentRender/componentRender';

describe('SideBar', () => {
    test('rendering', () => {
        ComponentRender(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        ComponentRender(<SideBar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
