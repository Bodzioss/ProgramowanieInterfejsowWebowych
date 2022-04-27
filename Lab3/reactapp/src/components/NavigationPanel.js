import React from 'react';
import { Link } from 'react-router-dom';

import "./styles/NavigationPanel.css"

export default function NavigationPanel() {
    return (
            <nav class="navMenu">
                <a href="/StudentsResult">Studenci</a>
                <a href="/GroupResult">Grupy</a>
                <div class="dot"></div>
            </nav>
    );
}