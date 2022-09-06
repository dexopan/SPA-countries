import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


import Controls from "../components/Controls";
import List from '../components/List';
import Card from "../components/Card";
import { ALL_COUNTRIES } from "../config";



const HomePage = ({ countries, setCountries }) => {


	const navigate = useNavigate();


	useEffect(() => {
		if (!countries.length) {
			axios.get(ALL_COUNTRIES).then(
				({ data }) => setCountries(data))
		}
	}, [])

	return (
		<>
			<Controls />
			<List>
				{countries.map(c => {
					const countryInfo = {
						img: c.flags.png,
						name: c.name,
						info: [
							{
								title: 'Population',
								description: c.population.toLocaleString()
							},
							{
								title: 'Region',
								description: c.region
							},
							{
								title: 'Capital',
								description: c.capital
							}
						],
					};
					return <Card key={c.name} onClick={() => navigate(`country/${c.name}`, { state: c })} {...countryInfo} />
				})}
			</List>
		</>
	)
}

export default HomePage