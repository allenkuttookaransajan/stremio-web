// Copyright (C) 2017-2023 Smart code 203358507

const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');
const styles = require('./styles');

const Button = React.forwardRef(({ className, href, disabled, children, onLongPress, ...props }, ref) => {
    let pressTimer = null;
    const onTouchStart = function () {
        pressTimer = setTimeout(function () {
            if (typeof onLongPress === 'function') {
                //alert('longpress detected');
                onLongPress();
            }
        }, 600); // values less than 600 will cause an artifact of previous menus staying on screen.
    };
    const onTouchEnd = function () {
        clearTimeout(pressTimer);
    };
    const onKeyDown = React.useCallback((event) => {
        if (typeof props.onKeyDown === 'function') {
            props.onKeyDown(event);
        }

        if (event.key === 'Enter' && !event.nativeEvent.buttonClickPrevented) {
            event.currentTarget.click();
        }
    }, [props.onKeyDown]);
    const onMouseDown = React.useCallback((event) => {
        if (typeof props.onMouseDown === 'function') {
            props.onMouseDown(event);
        }

        if (!event.nativeEvent.buttonBlurPrevented) {
            event.preventDefault();
            if (document.activeElement instanceof HTMLElement) {
                document.activeElement.blur();
            }
        }
    }, [props.onMouseDown]);
    return React.createElement(
        typeof href === 'string' && href.length > 0 ? 'a' : 'div',
        {
            tabIndex: 0,
            ...props,
            ref,
            className: classnames(className, styles['button-container'], { 'disabled': disabled }),
            href,
            onKeyDown,
            onMouseDown,
            onTouchStart,
            onTouchEnd,
        },
        children
    );
});

Button.displayName = 'Button';

Button.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    onKeyDown: PropTypes.func,
    onMouseDown: PropTypes.func,
    onLongPress: PropTypes.func,
};

module.exports = Button;
