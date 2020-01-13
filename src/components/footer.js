import React from 'react';

import Divider from "./divider";
import Newsletter from "./newsletterSignup";
import { padding } from '../theme';
import Bio from "./bio";

const Footer = () => {
    return (
        <footer>
            <Divider mt={padding.xxlarge} />
            <Newsletter mb={padding.large} mt={padding.large} />
            <Bio />
        </footer>
    );
}

export default Footer;