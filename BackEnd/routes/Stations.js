const express = require("express")
const router = express.Router()
const { Stations } = require("../models");
const fetch = require("cross-fetch");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
	let allStations;
	try {
		allStations = await Stations.findOne()
		if (allStations == null) {
			let listOfStation = [];
			// table is empty, hence need to be populated
			fetch("https://environment.data.gov.uk/flood-monitoring/id/stations")
				.then(response => response.json())
				.then((data) => {
					for (let i = 0; i < data.items.length; i++) {
						listOfStation.push({
							notation: data.items[i].notation,
							lat: data.items[i].lat,
							long: data.items[i].long,
							label: data.items[i].label,
							riverName: data.items[i].label,
							catchmentName: data.items[i].catchmentName,
							town: data.items[i].town,
						});
					}
					Stations.bulkCreate(listOfStation);
				})
		}

	} catch (e) {
		res.send("Error " + e);
	}

	res.json(await Stations.findAll({
		attributes: { exclude: ['updatedAt', 'createdAt'] },
		where: {
			lat: {
				[Op.ne]: null
			}
		}

	}));

});






module.exports = router;



















/*


















router.get("/", async (req, res) => {
	// check the last time the data was fetched
	

});

// fetch latest data from the flood api and save it into the database

module.exports = router

*/