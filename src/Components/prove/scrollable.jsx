import React from 'react';

const Scrollable = ({ children }) => {
	const [ scroll, setScroll ] = React.useState(0);
	const [ scrollHeight, setScrollHeight ] = React.useState(0);
	const [ scrollWidth, setScrollWidth ] = React.useState(0);
	const [ scrollTop, setScrollTop ] = React.useState(0);
	const [ scrollLeft, setScrollLeft ] = React.useState(0);

	const handleScroll = () => {
		setScroll(window.scrollY);
		setScrollHeight(document.body.scrollHeight);
		setScrollWidth(document.body.scrollWidth);
		setScrollTop(document.body.scrollTop);
		setScrollLeft(document.body.scrollLeft);
	};
	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<div
			style={{
				height: scrollHeight,
				width: scrollWidth,
				top: scrollTop,
				left: scrollLeft,
				position: 'fixed',
				overflow: 'hidden'
			}}
		>
			{children}
		</div>
	);
};
export default Scrollable;
