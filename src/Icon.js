
import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from './SvgIcon';

export const Icon = (props) => {
    const { style, className, icon, ...others} = props; //eslint-disable-line

    return (
        <div {...others} style={{...style, display: 'inline-flex', justifyContent: 'center', alignItems:'center'}} className={className}>
            <SvgIcon size={props.size} icon={props.icon}/>
        </div>
    );
};

export const withBaseIcon = (defaultProps) => props => {
    const propsToUse = {...defaultProps};

    return <Icon {...propsToUse} {...props}/>;
};


Icon.defaultProps = {
    size: 16,
    fill: 'currentColor'
};

Icon.propTypes = {
    icon: PropTypes.object.isRequired,
    size: PropTypes.number,
    style: PropTypes.object,
    className: PropTypes.string
};

export default Icon;
