import React from 'react';
import {Link} from 'react-router-dom';

export default function NavigationPanel() {
    return (
        <ul>
            <li>
                <Link to="/StudentsResult">Students</Link>
            </li>
            <li>
                <Link to="/GroupResult">Group</Link>
            </li>
        </ul>
    );
}