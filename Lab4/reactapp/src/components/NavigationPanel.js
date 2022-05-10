import React from 'react';
import { Link } from 'react-router-dom';

import "./styles/NavigationPanel.css"

export default function NavigationPanel() {
    return (
            <nav className="navMenu">
                <a href="/StudentsResult">Studenci</a>
                <a href="/GroupResult">Grupy</a>
                <div className="dot"></div>
            </nav>
    );
}