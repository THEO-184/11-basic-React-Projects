import React, { useState, useEffect } from "react";
const tourSites = [
	{
		id: 1,
		img: "https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
		siteTitle: "Best Of Paris In 7 Days Tour",
		price: "$1,995",
		info: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
	},
	{
		id: 2,
		img: "https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg",
		siteTitle: "Best Of Ireland In 14 Days Tour",
		price: "$3,895",
		info: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 days!",
	},
	{
		id: 3,
		img: "https://dl.airtable.com/.attachments/27f6cbfe631e303f98b97e9dafacf25b/6bbe2a07/vienna.jpeg",
		siteTitle: "Best of Rome in 7 Days Tour",
		price: "$2,695",
		info: "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days",
	},
	{
		id: 4,
		img: "https://dl.airtable.com/.attachments/3efa7aa402d49c12b8769c581a96af42/d5b641e3/italy.jpeg",
		siteTitle: "Best of Rome in 7 Days Tour",
		price: "$2,095",
		info: "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
	},
	{
		id: 5,
		img: "https://dl.airtable.com/.attachments/3feee7a93af0f4f809312132090c9a80/58e3e8ec/poland.jpeg",
		siteTitle: "Best Of Poland In 10 Days Tour",
		price: "$2,595",
		info: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
	},
];

const Tours = () => {
	const [sites, setSites] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [text, setText] = useState("Our Tours");
	const [isreadMore, setIsReadMore] = useState(true);
	// conditional rendering
	// useEffect

	const deleteItem = (id) => {
		let newSites = sites.filter((item) => item.id !== id);
		setSites(newSites);
		if (sites.length === 1) {
			setText("No Tours Left");
		}
		console.log(sites.length);
	};
	useEffect(() => {
		tourSites.forEach((site) => {
			fetch(site.img).then((res) => {
				if (res.ok === true) {
					setSites(tourSites);
					setIsLoading(false);
					setIsError(false);
				} else {
					setSites([]);
					setIsLoading(false);
					setIsError(true);
				}
			});
		});
	}, []);

	// reload
	const reload = () => {
		window.location.reload();
	};

	// Read more
	const readMore = () => {
		setIsReadMore(!isreadMore);
	};

	if (isLoading) {
		return (
			<div className="welcome-title">
				<h2>Loading...</h2>
			</div>
		);
	}

	if (isError) {
		return (
			<div className="welcome-title">
				<h2>Error...</h2>
			</div>
		);
	}
	return (
		<>
			<div className="container">
				<div className="welcome-title">
					<h1>{text}</h1>
				</div>
				{sites.map((item) => {
					const { id, img, siteTitle, info, price } = item;
					return (
						<>
							<div className="site-container" key={id}>
								<img src={img} alt="" />
								<div className="site">
									<div className="site-title">
										<h3>{siteTitle}</h3>
										<span className="price">{price}</span>
									</div>
									<p>
										{isreadMore ? info.slice(0, 200) : info}

										<button className="read-more" onClick={() => readMore()}>
											{isreadMore ? "...Read more" : " Read less"}
										</button>
									</p>

									<button className="btn" onClick={() => deleteItem(id)}>
										Not Interested
									</button>
								</div>
							</div>
						</>
					);
				})}

				{sites.length === 0 && (
					<button className="empty-btn" onClick={() => reload()}>
						Refresh
					</button>
				)}
			</div>
		</>
	);
};

export default Tours;
