import {Planet} from 'react-planet';
import {useState} from 'react';

function PlanetCenter() {
    // const [isBooped, setIsBooped] = React.useState(false);

    // const style = useSpring({
    //     display: 'inline-block',
    //     backfaceVisibility: 'hidden',
    //     transform: isBooped
    //       ? `rotate(${rotation}deg)`
    //       : `rotate(0deg)`,
    //   });

    return (<div
        className="planetCenter"
            style={{
                height: 50,
                width: 50,
                borderRadius: '50%',
                backgroundColor: '#000000',
            }}
        />)
}

function MyPlanet() {
	return (
		<Planet
			centerContent={<PlanetCenter />}
            autoClose
            rotation={180}
            bounce
            bounceOnOpen
            bounceOnClose
		>
			<div
				style={{
					height: 30,
					width: 30,
					borderRadius: '50%',
                    backgroundColor: '#000000',
				}}
			/>
			<div
				style={{
					height: 30,
					width: 30,
					borderRadius: '50%',
					backgroundColor: '#000000',
                }}
                dragablePlanet
                dragRadiusPlanet={20}
                bounce
			/>
            <div
				style={{
					height: 30,
					width: 30,
					borderRadius: '50%',
					backgroundColor: '#000000',
                }}
                dragablePlanet
                dragRadiusPlanet={20}
                bounce
			/>
            <div
				style={{
					height: 30,
					width: 30,
					borderRadius: '50%',
					backgroundColor: '#000000',
                }}
                dragablePlanet
                dragRadiusPlanet={20}
                bounce
			/>
            <div />
            <div />
            <div/>
            <div />
		</Planet>
	);
}

export default MyPlanet