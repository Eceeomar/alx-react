import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';
import React from 'react';

export default function Footer () {
    return (
        <footer className="App-footer">
            <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    );
}