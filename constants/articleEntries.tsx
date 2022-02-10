/** @format */
type ArticleParams = {
	id: string;
	title: string;
	slug: string;
	date: string;
	time: string;
	image: string;
	content: string;
	category: string;
	author: string;
};
export const ALL_ARTICLE_ENTRIES: Array<ArticleParams> = [
	{
		id: "1",
		title:
			"England's IPL players likely to miss test series against New Zealand",
		slug: "england's-ipl-players-likely-to-miss-test-series-against-new-zealand",
		date: "June 09, 2021",
		time: "10:00 PM EST",
		content:
			"England are likely to rest their Indian Premier League (IPL) 2021 players for the Test series against New Zealand in order to give the cricketers a break. New Zealand will play England in a two-match Test series which gets underway from June 2 at Lord's in London. According to a report in BBC, England players who featured in IPL 2021 before the tourtitlent was postponed will not be hurriedly picked for the Test series. Chris Woakes, Sam Curran, Moeen Ali, Jos Buttler, and Jonny Bairstow all played at least a game in the postponed IPL and are now in mandatory 10-day isolation after returning to the UK.",
		image: "/images/sample/news1.jpg",
		category: "sport",
		author: "rowling",
	},
	{
		id: "2",
		title:
			"Ferran Torres Hat-Trick Sees Manchester City Hold Off Newcastle United",
		slug: "ferran-orres-hat-trick-sees-manchester-city-hold-off-newcastle-united",
		date: "June 2, 2021",
		time: "8:00 PM EST",
		content:
			"Ferran Torres scored his first Manchester City hat-trick as the newly-crowned English champions twice came from behind to beat Newcastle 4-3 on Saturday. With a third Premier League title in four years sealed with three games to spare, Pep Guardiola again took the chance to hand a number of his fringe players an opportunity to shine two weeks ahead of the Champions League final. Goalkeeper Scott Carson was handed his City debut at 35 and a first Premier League appearance for almost 10 years.",
		image: "/images/sample/news2.jpg",
		category: "sport",
		author: "rowling",
	},
	{
		id: "3",
		title: "England Pacer Harry Gurney Retires",
		slug: "england-pacer-harry-gurney-retires",
		date: "June 11, 2021",
		time: "7:00 PM EST",
		content:
			"England seamer and former Kolkata Knight Riders pacer Harry Gurney announced his retirement from cricket after taking 614 all-format wickets during his career in the professional game. The Nottinghamshire pacer bowed out as a result of the shoulder injury that saw him miss the club's 2020 T20 Blast campaign. The time has arrived for me to hang up my boots. After trying to recover from the recent injury to my shoulder, I am truly disappointed to have to end my playing career as a result of it, Gurney captioned a post on Instagram to announce his retirement.",
		image: "/images/sample/news3.jpg",
		category: "science",
		author: "rowling",
	},
	{
		id: "4",
		title: "CSK Seek To Regain Their Dominance",
		slug: "csk-seek-to-regain-their-dominance",
		date: "June 20, 2021",
		time: "10:00 PM EST",
		content:
			"The 13th edition of the Indian Premier League (IPL) held in the United Arab Emirates in 2020 changed fortunes for one of the most consistent sides in the history of the event, Chennai Super Kings. The Mahendra Singh Dhoni-led contingent never really recovered from a bad start, unavailability of players, the virus scares and a collective failure to acclimatize to foreign conditions. However, the depth and quality of leadership in the CSK squad cannot be underestimated for long and with the return of a rejuvenated Dhoni in their ranks, the franchise will aim to regain their authority and script another epic journey this season.",
		image: "/images/sample/news4.jpg",
		category: "science",
		author: "rowling",
	},
	{
		id: "5",
		title: "Turkish Grand Prix Cancelled, Replaced By 2nd Race In Austria",
		slug: "turkish-grand-prix-cancelled-replaced-by-2nd-race-in-austria",
		date: "June 30, 2021",
		time: "8:00 PM EST",
		content:
			"The Turkish Grand Prix, which was only drafted onto the Formula One calendar as a replacement for the cancelled Canada GP two weeks ago, was itself axed on Friday. Formula One chiefs, forced into another change due to Covid-19 protocols, announced that they will instead return to the sport's safe haven of Austria. The decision was made in the wake of the announcement of new travel restrictions imposed by several countries in which F1 teams are based, affecting travel from Turkey, they said.",
		image: "/images/sample/news5.jpg",
		category: "nature",
		author: "keats",
	},
	{
		id: "6",
		title:
			"Mercedes Masterstroke In Barcelona Helps Lewis Hamilton Deny Max Verstappen",
		slug: "mercedes-masterstroke-in-barcelona-helps-lewis-hamilton-deny-max-verstappen",
		date: "July 2, 2021",
		time: "8:00 PM EST",
		content:
			"Lewis Hamilton claimed his fifth successive Spanish Grand Prix on Sunday ahead of Red Bull's Max Verstappen after a Mercedes pit-stop masterstroke. Hamilton moved on to 98 career wins after a surprise second change of tyres hoodwinked Red Bull to lift him 14 points clear of Verstappen in the drivers' standings. It was a really great strategy by the team. What a day! beamed Hamilton, who was quick to acknowledge the smattering of fans allowed in to watch, a rare occurence in the time of coronavirus.",
		image: "/images/sample/news6.jpg",
		category: "culture",
		author: "keats",
	},
	{
		id: "7",
		title: "Rafael Nadal Takes Revenge On Alexander Zverev",
		slug: "rafael-nadal-takes-revenge-on-alexander-zverev",
		date: "July 2, 2021",
		time: "8:00 PM EST",
		content:
			"Nine-time champion Rafael Nadal dispatched his Madrid Masters slayer Alexander Zverev 6-3, 6-4 to reach the Italian Open semi-finals on Friday. Second-seed Nadal lost to Zverev in the Madrid last-eight last week, but ended his three-match losing streak against the German in the Foro Italico. It was an important victory for me against a great player, said the Spaniard. The 34-year-old shook off his marathon 3hr 30min quarter-final battle past Denis Shapovalov on Thursday where he needed to save two match points.",
		image: "/images/sample/news7.jpg",
		category: "sport",
		author: "keats",
	},
	{
		id: "8",
		title: "Novak Djokovic Sweeps Into Italian Open Quarter-Finals",
		slug: "novak-djokovic-sweeps-into-italian-open-quarter-finals",
		date: "July 5, 2021",
		time: "8:00 PM EST",
		content:
			"World number one Novak Djokovic swept into the Italian Open quarter-finals on Thursday with a straight sets wins over Alejandro Davidovich Fokina in front of spectators who were allowed to watch in the Foro Italico for the first time. The five-time Rome champion won through 6-2, 6-1 in 1hr 10min against the 48th-ranked Spaniard with the venue filled to 25 per cent of capacity. It was not good, it was great. I missed the crowd, said the 33-year-old Serb after the match.",
		image: "/images/sample/news8.jpg",
		category: "sport",
		author: "keats",
	},
	{
		id: "9",
		title:
			"Hideki Matsuyama Holds Off Xander Schauffele To Win Historic Masters Title",
		slug: "hideki-matsuyama-holds-off-xander-schauffele-to-win-historic-masters-title",
		date: "July 6, 2021",
		time: "8:00 PM EST",
		content:
			"Hideki Matsuyama won the 85th Masters in dramatic fashion on Sunday, holding off Xander Schauffele down the back nine to become the first Japanese man to capture a major golf title. Carrying the hopes of a nation on his shoulders, Matsuyama calmly grinded out clutch pars and struck for crucial birdies in a pressure-packed march at Augusta National, hanging on over the final holes for a historic one-stroke victory. Matsuyama took the green jacket symbolic of Masters supremacy, a top prize of $2.07 million (1.74 million euros) and a place for the ages in Japanese sports history.",
		image: "/images/sample/news9.jpg",
		category: "sport",
		author: "keats",
	},
	{
		id: "10",
		title: "Singapore Open 2021 Cancelled Due To Surge In COVID-19 Cases",
		slug: "singapore-open-2021-cancelled-due-to-surge-in-covid-19-cases",
		date: "July 7, 2021",
		time: "8:00 PM EST",
		content:
			"Tournament organisers Singapore Badminton Association (SBA) and Badminton World Federation (BWF) on Wednesday agreed to cancel the Singapore Open 2021 scheduled for June 1-6, 2021. All attempts were made by the organisers and BWF to provide a safe tournament environment for all participants. However, rising COVID-19 cases globally led to complex challenges in managing inbound travel. Thus, in the interests of all players, tournament personnel and the local community's health and safety, the event has been cancelled, the Badminton World Federation said in an official statement.",
		image: "/images/sample/news10.jpg",
		category: "culture",
		author: "orwell",
	},
	{
		id: "11",
		title:
			"Tulip inspired wind turbine that combines wind and solar energy sources.",
		slug: "tulip-inspired-wind-turbine-that-combines-wind-and-solar-energy-sources.",
		date: "Jan 10, 2022",
		time: "8:00 PM EST",
		content:
			"Did you know that apple computers and harley davies motorbikes were invented in someones garage. While the next invention hoping to  make a huge impact on our lives and also helping to reduce fossil fuel for countries with changeable climates is a vertical axis wind turbine that produces generates electricity whether it shines or not. Yes human beings are truly ingenius. The simple tweak of having solar panels located on the bottom flat mating surface makes this vertical wind turbine an efficient energy harvester. The project was the idea of  a Norwegian inventor, John Fasting Sørbø from Kristiansand. The energy pole Emotion is perfect for off-grid locations since no grid connection is needed. There are several benefits for not needing to pull a power cable through air or trenching. It will prevent visual littering and intervention with nature, an easyplug and play installation, no electricity cost and grid independence. Bottom line – less hassle. The Emotion can also be installed as a grid-tied solution where the infrastructure already exists, to contribute energy to the grid and simultaneously reduce the owner's costs through plus customer schemes.",
		image: "/images/sample/news11.jpg",
		category: "science",
		author: "sufields",
	},
	{
		id: "12",
		title: "Whats inside a Black Hole",
		slug: "whats-inside-a-black-hole",
		date: "Jan 10, 2022",
		time: "8:00 PM EST",
		content: " Click on this article to find out what is inside a black hole",
		image: "/images/sample/news12.jpg",
		category: "science",
		author: "sufields",
	},
	{
		id: "13",
		title: "Find out what plants, vegetables and fruits thrive in your area",
		slug: "what-plants-vegetables-fruits-thrive",
		date: "Jan 10, 2022",
		time: "8:00 PM EST",
		content:
			" Using our algorithm we can tell you the best plants, vegetables and fruit that thrive in your area. ",
		image: "/images/sample/news13.jpg",
		category: "nature",
		author: "sufields",
	},
];


[
  {
      "_id": "61fd97d4952ee6854060c8c3",
      "title": "What's inside a Black Hole",
      "slug": "what-s-inside-a-black-hole",
      "content": "Well, we don't know yet...",
      "description": "Maybe the answer is in this article, or not...",
      "published_at": "2022-02-04T21:17:42.819Z",
      "createdAt": "2022-02-04T21:17:08.437Z",
      "updatedAt": "2022-02-04T21:20:49.224Z",
      "__v": 0,
      "image": {
          "_id": "61ea9f2bfe2b390016213310",
          "name": "what_s_inside_a_black_hole_563f22b6e2.jpg",
          "alternativeText": "",
          "caption": "",
          "hash": "what_s_inside_a_black_hole_563f22b6e2_908522edd7",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "size": 7.5,
          "width": 800,
          "height": 466,
          "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642766121/what_s_inside_a_black_hole_563f22b6e2_908522edd7.jpg",
          "provider_metadata": {
              "public_id": "what_s_inside_a_black_hole_563f22b6e2_908522edd7",
              "resource_type": "image"
          },
          "formats": {
              "thumbnail": {
                  "name": "thumbnail_what_s_inside_a_black_hole_563f22b6e2.jpg",
                  "hash": "thumbnail_what_s_inside_a_black_hole_563f22b6e2_908522edd7",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "width": 245,
                  "height": 143,
                  "size": 1.75,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642766122/thumbnail_what_s_inside_a_black_hole_563f22b6e2_908522edd7.jpg",
                  "provider_metadata": {
                      "public_id": "thumbnail_what_s_inside_a_black_hole_563f22b6e2_908522edd7",
                      "resource_type": "image"
                  }
              },
              "medium": {
                  "name": "medium_what_s_inside_a_black_hole_563f22b6e2.jpg",
                  "hash": "medium_what_s_inside_a_black_hole_563f22b6e2_908522edd7",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "width": 750,
                  "height": 437,
                  "size": 7.13,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642766122/medium_what_s_inside_a_black_hole_563f22b6e2_908522edd7.jpg",
                  "provider_metadata": {
                      "public_id": "medium_what_s_inside_a_black_hole_563f22b6e2_908522edd7",
                      "resource_type": "image"
                  }
              },
              "small": {
                  "name": "small_what_s_inside_a_black_hole_563f22b6e2.jpg",
                  "hash": "small_what_s_inside_a_black_hole_563f22b6e2_908522edd7",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "width": 500,
                  "height": 291,
                  "size": 4.07,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642766123/small_what_s_inside_a_black_hole_563f22b6e2_908522edd7.jpg",
                  "provider_metadata": {
                      "public_id": "small_what_s_inside_a_black_hole_563f22b6e2_908522edd7",
                      "resource_type": "image"
                  }
              }
          },
          "provider": "cloudinary",
          "related": [
              "61fd97d4952ee6854060c8c3"
          ],
          "createdAt": "2022-01-21T11:55:23.650Z",
          "updatedAt": "2022-02-04T21:17:08.683Z",
          "__v": 0,
          "id": "61ea9f2bfe2b390016213310"
      },
      "author": "super admin",
      "category": "science",
      "id": "61fd97d4952ee6854060c8c3"
  },
  {
      "_id": "61fd9932952ee6854060c8c5",
      "content": "\n  # The Story of Aaron Swartz\\n\\nAaron Hillel Swartz (November 8, 1986 – January 11, 2013) was an American computer programmer, entrepreneur, writer, political organizer, and Internet hacktivist. He was involved in the development of the web feed format RSS, the Markdown publishing format, the organization Creative Commons, and the website framework web.py, and was a co-founder of the social news site [Reddit](https://reddit.com). He was given the title of co-founder of Reddit by Y Combinator owner [Paul Graham](https://en.wikipedia.org/wiki/Paul_Graham_(programmer)) after the formation of Not a Bug, Inc. (a merger of Swartz's project Infogami and Redbrick Solutions, a company run by Alexis Ohanian and Steve Huffman).\\n\\nSwartz's work also focused on civic awareness and activism. He helped launch the Progressive Change Campaign Committee in 2009 to learn more about effective online activism. In 2010, he became a research fellow at Harvard University's Safra Research Lab on Institutional Corruption, directed by Lawrence Lessig. He founded the online group Demand Progress, known for its campaign against the Stop Online Piracy Act.\\n\\n\\n<iframe width=\\\"560\\\" height=\\\"315\\\" src=\\\"https://www.youtube.com/embed/PFQGjEJ9PEc\\\" frameborder=\\\"0\\\" allow=\\\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\\\" allowfullscreen></iframe>\\n\\n\\nIn 2011, Swartz was arrested by Massachusetts Institute of Technology (MIT) police on state breaking-and-entering charges, after connecting a computer to the MIT network in an unmarked and unlocked closet, and setting it to download academic journal articles systematically from JSTOR using a guest user account issued to him by MIT. Federal prosecutors later charged him with two counts of wire fraud and eleven violations of the Computer Fraud and Abuse Act,[14] carrying a cumulative maximum penalty of $1 million in fines, 35 years in prison, asset forfeiture, restitution, and supervised release.\\n\\nSwartz declined a plea bargain under which he would have served six months in federal prison. Two days after the prosecution rejected a counter-offer by Swartz, he was found dead in his Brooklyn apartment, where he had hanged himself.\\n\\nIn 2013, Swartz was inducted posthumously into the [Internet Hall of Fame](https://www.internethalloffame.org//).\n",
      "title": "The internet's Own boy",
      "slug": "the-internet-s-own-boy",
      "description": "Follow the story of Aaron Swartz, the boy who could change the world",
      "published_at": "2022-02-04T21:23:22.714Z",
      "createdAt": "2022-02-04T21:22:58.082Z",
      "updatedAt": "2022-02-04T21:23:23.099Z",
      "__v": 0,
      "image": {
          "_id": "61ed58023e771f0016c27e0f",
          "name": "the_internet_s_own_boy_c0a50178b6.jpg",
          "alternativeText": "",
          "caption": "",
          "hash": "the_internet_s_own_boy_c0a50178b6_bd91e7f284",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "size": 91.55,
          "width": 1200,
          "height": 707,
          "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642944511/the_internet_s_own_boy_c0a50178b6_bd91e7f284.jpg",
          "provider_metadata": {
              "public_id": "the_internet_s_own_boy_c0a50178b6_bd91e7f284",
              "resource_type": "image"
          },
          "formats": {
              "thumbnail": {
                  "name": "thumbnail_the_internet_s_own_boy_c0a50178b6.jpg",
                  "hash": "thumbnail_the_internet_s_own_boy_c0a50178b6_bd91e7f284",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "width": 245,
                  "height": 144,
                  "size": 8.36,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642944512/thumbnail_the_internet_s_own_boy_c0a50178b6_bd91e7f284.jpg",
                  "provider_metadata": {
                      "public_id": "thumbnail_the_internet_s_own_boy_c0a50178b6_bd91e7f284",
                      "resource_type": "image"
                  }
              },
              "large": {
                  "name": "large_the_internet_s_own_boy_c0a50178b6.jpg",
                  "hash": "large_the_internet_s_own_boy_c0a50178b6_bd91e7f284",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "width": 1000,
                  "height": 589,
                  "size": 70.31,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642944512/large_the_internet_s_own_boy_c0a50178b6_bd91e7f284.jpg",
                  "provider_metadata": {
                      "public_id": "large_the_internet_s_own_boy_c0a50178b6_bd91e7f284",
                      "resource_type": "image"
                  }
              },
              "medium": {
                  "name": "medium_the_internet_s_own_boy_c0a50178b6.jpg",
                  "hash": "medium_the_internet_s_own_boy_c0a50178b6_bd91e7f284",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "width": 750,
                  "height": 442,
                  "size": 46.11,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642944513/medium_the_internet_s_own_boy_c0a50178b6_bd91e7f284.jpg",
                  "provider_metadata": {
                      "public_id": "medium_the_internet_s_own_boy_c0a50178b6_bd91e7f284",
                      "resource_type": "image"
                  }
              },
              "small": {
                  "name": "small_the_internet_s_own_boy_c0a50178b6.jpg",
                  "hash": "small_the_internet_s_own_boy_c0a50178b6_bd91e7f284",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "width": 500,
                  "height": 295,
                  "size": 24.98,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642944514/small_the_internet_s_own_boy_c0a50178b6_bd91e7f284.jpg",
                  "provider_metadata": {
                      "public_id": "small_the_internet_s_own_boy_c0a50178b6_bd91e7f284",
                      "resource_type": "image"
                  }
              }
          },
          "provider": "cloudinary",
          "related": [
              "61fd9932952ee6854060c8c5"
          ],
          "createdAt": "2022-01-23T13:28:34.555Z",
          "updatedAt": "2022-02-04T21:22:58.260Z",
          "__v": 0,
          "id": "61ed58023e771f0016c27e0f"
      },
      "author": "David Doe",
      "category": "science",
      "id": "61fd9932952ee6854060c8c5"
  },
  {
      "_id": "61fd99ee952ee6854060c8c7",
      "content": "\n # Badass\\n\\nMantis shrimps, or stomatopods, are marine crustaceans of the order Stomatopoda. Some species have specialised calcified \\\"*clubs*\\\" that can strike with **great power**, while others have sharp forelimbs used to capture prey. They branched from other members of the class Malacostraca around 340 million years ago. Mantis shrimps typically grow to around 10 cm (3.9 in) in length. A few can reach up to 38 cm (15 in). The largest mantis shrimp ever caught had a length of 46 cm (18 in); it was caught in the Indian River near Fort Pierce, Florida, in the United States. A mantis shrimp's carapace (the bony, thick shell that covers crustaceans and some other species) covers only the rear part of the head and the first four segments of the thorax. Varieties range in color from shades of brown to vivid colors, with more than 450 species of mantis shrimps being known. They are among the most important predators in many shallow, tropical and subtropical marine habitats. However, despite being common, they are poorly understood, as many species spend most of their lives tucked away in burrows and holes.\\n\\nCalled \\\"sea locusts\\\" by ancient Assyrians, \\\"prawn killers\\\" in Australia, and now sometimes referred to as \\\"thumb splitters\\\"—because of the animal's ability to inflict painful gashes if handled incautiously—mantis shrimps have powerful claws that are used to attack and kill prey by spearing, stunning, or dismembering.\\n\\n<iframe width=\\\"560\\\" height=\\\"315\\\" src=\\\"https://www.youtube.com/embed/CW8NUCPLE1c\\\" frameborder=\\\"0\\\" allow=\\\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\\\" allowfullscreen></iframe>\\n\\nMantis shrimps have, like mantis, ravishing legs. But theirs are so resilient that they inspire the military to make the armor of the future. Above all, their speed and striking power are the responsibility of the superpowers. As the comic book The Oatmeal recounts, the squid's ravishing legs move at the speed of a bullet fired by a 22 caliber and can strike a prey in 1/3000 of a second, with a force of 1,500 Newtons. One tenth of that speed, deployed by a human arm, \\\"would be enough to send a baseball into orbit.\\\"\\n\\nA speed such as it boils water around ravishing legs and creates a shock wave capable of killing a prey missed by the strike.\\n\\nKept in an aquarium, crustaceans make carnage by dismembering and devouring crabs, shrimps, octopuses, snails and shells (whose shells they break). They would even be able to break the windows of overly fragile aquariums.",
      "title": "This shrimp is awesome",
      "slug": "this-shrimp-is-awesome",
      "description": "Mantis shrimps, or stomatopods, are marine crustaceans of the order Stomatopoda. Some species have specialised calcified \\\"clubs\\\" that can strike with great power, while others have sharp forelimbs used to capture prey.",
      "published_at": "2022-02-04T21:26:20.537Z",
      "createdAt": "2022-02-04T21:26:06.289Z",
      "updatedAt": "2022-02-04T21:26:20.664Z",
      "__v": 0,
      "image": {
          "_id": "61ed58033e771f0016c27e10",
          "name": "this_shrimp_is_awesome_73ef8b1652.jpg",
          "alternativeText": "",
          "caption": "",
          "hash": "this_shrimp_is_awesome_73ef8b1652_d3d7b88631",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "size": 95.42,
          "width": 1200,
          "height": 630,
          "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642944511/this_shrimp_is_awesome_73ef8b1652_d3d7b88631.jpg",
          "provider_metadata": {
              "public_id": "this_shrimp_is_awesome_73ef8b1652_d3d7b88631",
              "resource_type": "image"
          },
          "formats": {
              "thumbnail": {
                  "name": "thumbnail_this_shrimp_is_awesome_73ef8b1652.jpg",
                  "hash": "thumbnail_this_shrimp_is_awesome_73ef8b1652_d3d7b88631",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "width": 245,
                  "height": 129,
                  "size": 9.61,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642944512/thumbnail_this_shrimp_is_awesome_73ef8b1652_d3d7b88631.jpg",
                  "provider_metadata": {
                      "public_id": "thumbnail_this_shrimp_is_awesome_73ef8b1652_d3d7b88631",
                      "resource_type": "image"
                  }
              },
              "large": {
                  "name": "large_this_shrimp_is_awesome_73ef8b1652.jpg",
                  "hash": "large_this_shrimp_is_awesome_73ef8b1652_d3d7b88631",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "width": 1000,
                  "height": 525,
                  "size": 73.02,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642944512/large_this_shrimp_is_awesome_73ef8b1652_d3d7b88631.jpg",
                  "provider_metadata": {
                      "public_id": "large_this_shrimp_is_awesome_73ef8b1652_d3d7b88631",
                      "resource_type": "image"
                  }
              },
              "medium": {
                  "name": "medium_this_shrimp_is_awesome_73ef8b1652.jpg",
                  "hash": "medium_this_shrimp_is_awesome_73ef8b1652_d3d7b88631",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "width": 750,
                  "height": 394,
                  "size": 48.56,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642944514/medium_this_shrimp_is_awesome_73ef8b1652_d3d7b88631.jpg",
                  "provider_metadata": {
                      "public_id": "medium_this_shrimp_is_awesome_73ef8b1652_d3d7b88631",
                      "resource_type": "image"
                  }
              },
              "small": {
                  "name": "small_this_shrimp_is_awesome_73ef8b1652.jpg",
                  "hash": "small_this_shrimp_is_awesome_73ef8b1652_d3d7b88631",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "width": 500,
                  "height": 263,
                  "size": 26.86,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642944515/small_this_shrimp_is_awesome_73ef8b1652_d3d7b88631.jpg",
                  "provider_metadata": {
                      "public_id": "small_this_shrimp_is_awesome_73ef8b1652_d3d7b88631",
                      "resource_type": "image"
                  }
              }
          },
          "provider": "cloudinary",
          "related": [
              "61fd99ee952ee6854060c8c7"
          ],
          "createdAt": "2022-01-23T13:28:35.323Z",
          "updatedAt": "2022-02-04T21:26:06.483Z",
          "__v": 0,
          "id": "61ed58033e771f0016c27e10"
      },
      "id": "61fd99ee952ee6854060c8c7"
  },
  {
      "_id": "61fd9b4a952ee6854060c8c9",
      "content": "It's the story of a user named **Omer Barnir** who reported a bug in 2005 on the MySQL [bug report platform](https://bugs.mysql.com/)\\n\\nBut the thing is that Omer never got an answer. 15 years later, the bug has never been fix and people are starting to make fun out of it. We let you take a look at the conversation [here](https://bugs.mysql.com/bug.php?id=11472), it's pretty funny",
      "title": "A bug is becoming a meme on the internet",
      "slug": "a-bug-is-becoming-a-meme-on-the-internet",
      "description": "How a bug on MySQL is becoming a meme on the internet",
      "author": "David Doe",
      "category": "Science",
      "published_at": "2022-02-04T21:32:03.804Z",
      "createdAt": "2022-02-04T21:31:54.564Z",
      "updatedAt": "2022-02-04T21:32:04.195Z",
      "__v": 0,
      "image": {
          "_id": "61ed50483e771f0016c27e03",
          "name": "a_bug_is_becoming_a_meme_on_the_internet_540049d54d.jpg",
          "alternativeText": "",
          "caption": "",
          "hash": "a_bug_is_becoming_a_meme_on_the_internet_540049d54d_8164623688",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "size": 198.85,
          "width": 3628,
          "height": 2419,
          "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642942533/a_bug_is_becoming_a_meme_on_the_internet_540049d54d_8164623688.jpg",
          "provider_metadata": {
              "public_id": "a_bug_is_becoming_a_meme_on_the_internet_540049d54d_8164623688",
              "resource_type": "image"
          },
          "formats": {
              "thumbnail": {
                  "name": "thumbnail_a_bug_is_becoming_a_meme_on_the_internet_540049d54d.jpg",
                  "hash": "thumbnail_a_bug_is_becoming_a_meme_on_the_internet_540049d54d_8164623688",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "width": 234,
                  "height": 156,
                  "size": 6.93,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642942534/thumbnail_a_bug_is_becoming_a_meme_on_the_internet_540049d54d_8164623688.jpg",
                  "provider_metadata": {
                      "public_id": "thumbnail_a_bug_is_becoming_a_meme_on_the_internet_540049d54d_8164623688",
                      "resource_type": "image"
                  }
              },
              "large": {
                  "name": "large_a_bug_is_becoming_a_meme_on_the_internet_540049d54d.jpg",
                  "hash": "large_a_bug_is_becoming_a_meme_on_the_internet_540049d54d_8164623688",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "width": 1000,
                  "height": 667,
                  "size": 51.29,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642942534/large_a_bug_is_becoming_a_meme_on_the_internet_540049d54d_8164623688.jpg",
                  "provider_metadata": {
                      "public_id": "large_a_bug_is_becoming_a_meme_on_the_internet_540049d54d_8164623688",
                      "resource_type": "image"
                  }
              },
              "medium": {
                  "name": "medium_a_bug_is_becoming_a_meme_on_the_internet_540049d54d.jpg",
                  "hash": "medium_a_bug_is_becoming_a_meme_on_the_internet_540049d54d_8164623688",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "width": 750,
                  "height": 500,
                  "size": 33.47,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642942535/medium_a_bug_is_becoming_a_meme_on_the_internet_540049d54d_8164623688.jpg",
                  "provider_metadata": {
                      "public_id": "medium_a_bug_is_becoming_a_meme_on_the_internet_540049d54d_8164623688",
                      "resource_type": "image"
                  }
              },
              "small": {
                  "name": "small_a_bug_is_becoming_a_meme_on_the_internet_540049d54d.jpg",
                  "hash": "small_a_bug_is_becoming_a_meme_on_the_internet_540049d54d_8164623688",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "width": 500,
                  "height": 333,
                  "size": 19.44,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642942536/small_a_bug_is_becoming_a_meme_on_the_internet_540049d54d_8164623688.jpg",
                  "provider_metadata": {
                      "public_id": "small_a_bug_is_becoming_a_meme_on_the_internet_540049d54d_8164623688",
                      "resource_type": "image"
                  }
              }
          },
          "provider": "cloudinary",
          "related": [
              "61fd9b4a952ee6854060c8c9"
          ],
          "createdAt": "2022-01-23T12:55:36.415Z",
          "updatedAt": "2022-02-04T21:31:54.933Z",
          "__v": 0,
          "id": "61ed50483e771f0016c27e03"
      },
      "id": "61fd9b4a952ee6854060c8c9"
  },
  {
      "_id": "61fd9bb7952ee6854060c8cb",
      "content": "Ålesund Boxing Club is for both those who want to go boxing match and amateurs. We have a venue in Brusdalsvegen 212 next to Spjelkavik fitness centre in Fremmerholen.\\n\\n\\nTraining times:\\n\\nMonday 19:30 - 21:00\\n\\nWednesday 19:30 - 21:00\\n\\nAdditional trainings are agreed on the messenger group.\\n\\nThere is also the possibility of self-training in our premises.\\n\\nPrices:\\n\\nMembership - 2300kr\\n\\n",
      "title": "New boxing club serves as a community hub for area",
      "slug": "new-boxing-club-serves-as-a-community-hub-for-area",
      "description": "New boxing club serves as a community hub for area",
      "category": "sport",
      "author": "Sarah Baker",
      "published_at": "2022-02-04T21:33:51.175Z",
      "createdAt": "2022-02-04T21:33:43.071Z",
      "updatedAt": "2022-02-04T21:33:51.364Z",
      "__v": 0,
      "image": {
          "_id": "61faf2a2952ee6854060c8b4",
          "name": "dsc_0017.jpg",
          "alternativeText": "",
          "caption": "",
          "hash": "dsc_0017_0745c109bb",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "size": 1948.53,
          "width": 6000,
          "height": 4000,
          "url": "https://res.cloudinary.com/noroff-as/image/upload/v1643836059/dsc_0017_0745c109bb.jpg",
          "provider_metadata": {
              "public_id": "dsc_0017_0745c109bb",
              "resource_type": "image"
          },
          "formats": {
              "thumbnail": {
                  "name": "thumbnail_dsc_0017.jpg",
                  "hash": "thumbnail_dsc_0017_0745c109bb",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "width": 234,
                  "height": 156,
                  "size": 11.21,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1643836060/thumbnail_dsc_0017_0745c109bb.jpg",
                  "provider_metadata": {
                      "public_id": "thumbnail_dsc_0017_0745c109bb",
                      "resource_type": "image"
                  }
              },
              "large": {
                  "name": "large_dsc_0017.jpg",
                  "hash": "large_dsc_0017_0745c109bb",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "width": 1000,
                  "height": 667,
                  "size": 83.36,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1643836063/large_dsc_0017_0745c109bb.jpg",
                  "provider_metadata": {
                      "public_id": "large_dsc_0017_0745c109bb",
                      "resource_type": "image"
                  }
              },
              "medium": {
                  "name": "medium_dsc_0017.jpg",
                  "hash": "medium_dsc_0017_0745c109bb",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "width": 750,
                  "height": 500,
                  "size": 56.66,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1643836064/medium_dsc_0017_0745c109bb.jpg",
                  "provider_metadata": {
                      "public_id": "medium_dsc_0017_0745c109bb",
                      "resource_type": "image"
                  }
              },
              "small": {
                  "name": "small_dsc_0017.jpg",
                  "hash": "small_dsc_0017_0745c109bb",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "width": 500,
                  "height": 333,
                  "size": 33.04,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1643836065/small_dsc_0017_0745c109bb.jpg",
                  "provider_metadata": {
                      "public_id": "small_dsc_0017_0745c109bb",
                      "resource_type": "image"
                  }
              }
          },
          "provider": "cloudinary",
          "related": [
              "61fd9bb7952ee6854060c8cb"
          ],
          "createdAt": "2022-02-02T21:07:46.619Z",
          "updatedAt": "2022-02-04T21:33:43.303Z",
          "__v": 0,
          "id": "61faf2a2952ee6854060c8b4"
      },
      "id": "61fd9bb7952ee6854060c8cb"
  },
  {
      "_id": "61fd9c50952ee6854060c8cd",
      "content": "\nEngland are likely to rest their Indian Premier League (IPL) 2021 players for the Test series against New Zealand in order to give the cricketers a break. New Zealand will play England in a two-match Test series which gets underway from June 2 at Lord's in London. \\n\\nAccording to a report in BBC, England players who featured in IPL 2021 before the tourtitlent was postponed will not be hurriedly picked for the Test series. Chris Woakes, Sam Curran, Moeen Ali, Jos Buttler, and Jonny Bairstow all played at least a game in the postponed IPL and are now in mandatory 10-day isolation after returning to the UK.",
      "title": "England's IPL players likely to miss upcoming test series",
      "slug": "england-s-ipl-players-likely-to-miss-upcoming-test-series",
      "description": "England's IPL players likely to miss test series against New Zealand",
      "published_at": "2022-02-04T21:36:27.053Z",
      "createdAt": "2022-02-04T21:36:16.787Z",
      "updatedAt": "2022-02-04T21:38:49.170Z",
      "__v": 0,
      "image": {
          "_id": "61ea9e6afe2b390016213308",
          "name": "news1.JPG",
          "alternativeText": "",
          "caption": "",
          "hash": "news1_c5807e8d8c",
          "ext": ".JPG",
          "mime": "image/jpeg",
          "size": 61.47,
          "width": 786,
          "height": 588,
          "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642765928/news1_c5807e8d8c.jpg",
          "provider_metadata": {
              "public_id": "news1_c5807e8d8c",
              "resource_type": "image"
          },
          "formats": {
              "thumbnail": {
                  "name": "thumbnail_news1.JPG",
                  "hash": "thumbnail_news1_c5807e8d8c",
                  "ext": ".JPG",
                  "mime": "image/jpeg",
                  "width": 209,
                  "height": 156,
                  "size": 9.57,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642765928/thumbnail_news1_c5807e8d8c.jpg",
                  "provider_metadata": {
                      "public_id": "thumbnail_news1_c5807e8d8c",
                      "resource_type": "image"
                  }
              },
              "medium": {
                  "name": "medium_news1.JPG",
                  "hash": "medium_news1_c5807e8d8c",
                  "ext": ".JPG",
                  "mime": "image/jpeg",
                  "width": 750,
                  "height": 561,
                  "size": 58.17,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642765929/medium_news1_c5807e8d8c.jpg",
                  "provider_metadata": {
                      "public_id": "medium_news1_c5807e8d8c",
                      "resource_type": "image"
                  }
              },
              "small": {
                  "name": "small_news1.JPG",
                  "hash": "small_news1_c5807e8d8c",
                  "ext": ".JPG",
                  "mime": "image/jpeg",
                  "width": 500,
                  "height": 374,
                  "size": 33.76,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642765930/small_news1_c5807e8d8c.jpg",
                  "provider_metadata": {
                      "public_id": "small_news1_c5807e8d8c",
                      "resource_type": "image"
                  }
              }
          },
          "provider": "cloudinary",
          "related": [
              "61fd9c50952ee6854060c8cd"
          ],
          "createdAt": "2022-01-21T11:52:10.594Z",
          "updatedAt": "2022-02-04T21:36:16.866Z",
          "__v": 0,
          "id": "61ea9e6afe2b390016213308"
      },
      "author": "Sarah Baker",
      "category": "sport",
      "id": "61fd9c50952ee6854060c8cd"
  },
  {
      "_id": "61fd9cc9952ee6854060c8cf",
      "content": "\nFerran Torres scored his first Manchester City hat-trick as the newly-crowned English champions twice came from behind to beat Newcastle 4-3 on Saturday. With a third Premier League title in four years sealed with three games to spare, Pep Guardiola again took the chance to hand a number of his fringe players an opportunity to shine two weeks ahead of the Champions League final. Goalkeeper Scott Carson was handed his City debut at 35 and a first Premier League appearance for almost 10 years.\\n",
      "title": "Torres Stars in Manchester City Win",
      "slug": "torres-stars-in-manchester-city-win",
      "description": "Ferran Torres Hat-Trick Sees Manchester City Hold Off Newcastle United",
      "category": "sport",
      "author": "Sarah Baker",
      "published_at": "2022-02-04T21:38:23.862Z",
      "createdAt": "2022-02-04T21:38:17.190Z",
      "updatedAt": "2022-02-04T21:38:24.139Z",
      "__v": 0,
      "image": {
          "_id": "61ea9e6afe2b390016213309",
          "name": "news2.JPG",
          "alternativeText": "",
          "caption": "",
          "hash": "news2_ccf5ec251a",
          "ext": ".JPG",
          "mime": "image/jpeg",
          "size": 63.41,
          "width": 784,
          "height": 595,
          "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642765928/news2_ccf5ec251a.jpg",
          "provider_metadata": {
              "public_id": "news2_ccf5ec251a",
              "resource_type": "image"
          },
          "formats": {
              "thumbnail": {
                  "name": "thumbnail_news2.JPG",
                  "hash": "thumbnail_news2_ccf5ec251a",
                  "ext": ".JPG",
                  "mime": "image/jpeg",
                  "width": 206,
                  "height": 156,
                  "size": 9.3,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642765928/thumbnail_news2_ccf5ec251a.jpg",
                  "provider_metadata": {
                      "public_id": "thumbnail_news2_ccf5ec251a",
                      "resource_type": "image"
                  }
              },
              "medium": {
                  "name": "medium_news2.JPG",
                  "hash": "medium_news2_ccf5ec251a",
                  "ext": ".JPG",
                  "mime": "image/jpeg",
                  "width": 750,
                  "height": 569,
                  "size": 60.97,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642765929/medium_news2_ccf5ec251a.jpg",
                  "provider_metadata": {
                      "public_id": "medium_news2_ccf5ec251a",
                      "resource_type": "image"
                  }
              },
              "small": {
                  "name": "small_news2.JPG",
                  "hash": "small_news2_ccf5ec251a",
                  "ext": ".JPG",
                  "mime": "image/jpeg",
                  "width": 500,
                  "height": 379,
                  "size": 34.69,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642765930/small_news2_ccf5ec251a.jpg",
                  "provider_metadata": {
                      "public_id": "small_news2_ccf5ec251a",
                      "resource_type": "image"
                  }
              }
          },
          "provider": "cloudinary",
          "related": [
              "61fd9cc9952ee6854060c8cf"
          ],
          "createdAt": "2022-01-21T11:52:10.618Z",
          "updatedAt": "2022-02-04T21:38:17.503Z",
          "__v": 0,
          "id": "61ea9e6afe2b390016213309"
      },
      "id": "61fd9cc9952ee6854060c8cf"
  },
  {
      "_id": "61fd9d40952ee6854060c8d1",
      "content": "Did you know that apple computers and harley davies motorbikes were invented in someones garage. While the next invention hoping to  make a huge impact on our lives and also helping to reduce fossil fuel for countries with changeable climates is a vertical axis wind turbine that produces generates electricity whether it shines or not. Yes human beings are truly ingenius.\\n\\nThe simple tweak of having solar panels located on the bottom flat mating surface makes this vertical wind turbine an efficient energy harvester. The project was the idea of  a Norwegian inventor, John Fasting Sørbø from Kristiansand. The energy pole Emotion is perfect for off-grid locations since no grid connection is needed. There are several benefits for not needing to pull a power cable through air or trenching. \\n\\nIt will prevent visual littering and intervention with nature, an easy plug and play installation, no electricity cost and grid independence. \\n\\nBottom line – less hassle. The Emotion can also be installed as a grid-tied solution where the infrastructure already exists, to contribute energy to the grid and simultaneously reduce the owner's costs through plus customer schemes.\\n",
      "title": "Tulip inspired wind turbine which works when there is no wind",
      "slug": "tulip-inspired-wind-turbine-which-works-when-there-is-no-wind",
      "description": "Tulip inspired wind turbine that combines wind and solar energy sources.",
      "category": "science",
      "author": "David Doe",
      "published_at": "2022-02-04T21:45:22.095Z",
      "createdAt": "2022-02-04T21:40:16.848Z",
      "updatedAt": "2022-02-04T21:45:22.510Z",
      "__v": 0,
      "image": {
          "_id": "61ea9e6afe2b39001621330b",
          "name": "news11.jpg.jpg",
          "alternativeText": "",
          "caption": "",
          "hash": "news11_jpg_619898dc8b",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "size": 84.27,
          "width": 1000,
          "height": 1000,
          "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642765928/news11_jpg_619898dc8b.jpg",
          "provider_metadata": {
              "public_id": "news11_jpg_619898dc8b",
              "resource_type": "image"
          },
          "formats": {
              "thumbnail": {
                  "name": "thumbnail_news11.jpg.jpg",
                  "hash": "thumbnail_news11_jpg_619898dc8b",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "width": 156,
                  "height": 156,
                  "size": 6.03,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642765929/thumbnail_news11_jpg_619898dc8b.jpg",
                  "provider_metadata": {
                      "public_id": "thumbnail_news11_jpg_619898dc8b",
                      "resource_type": "image"
                  }
              },
              "medium": {
                  "name": "medium_news11.jpg.jpg",
                  "hash": "medium_news11_jpg_619898dc8b",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "width": 750,
                  "height": 750,
                  "size": 70.41,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642765929/medium_news11_jpg_619898dc8b.jpg",
                  "provider_metadata": {
                      "public_id": "medium_news11_jpg_619898dc8b",
                      "resource_type": "image"
                  }
              },
              "small": {
                  "name": "small_news11.jpg.jpg",
                  "hash": "small_news11_jpg_619898dc8b",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "width": 500,
                  "height": 500,
                  "size": 37.77,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642765930/small_news11_jpg_619898dc8b.jpg",
                  "provider_metadata": {
                      "public_id": "small_news11_jpg_619898dc8b",
                      "resource_type": "image"
                  }
              }
          },
          "provider": "cloudinary",
          "related": [
              "61fd9d40952ee6854060c8d1"
          ],
          "createdAt": "2022-01-21T11:52:10.945Z",
          "updatedAt": "2022-02-04T21:40:17.139Z",
          "__v": 0,
          "id": "61ea9e6afe2b39001621330b"
      },
      "id": "61fd9d40952ee6854060c8d1"
  },
  {
      "_id": "61fda189952ee6854060c8d3",
      "title": "England Pacer Harry Gurney Retires",
      "slug": "england-pacer-harry-gurney-retires",
      "description": "england-pacer-harry-gurney-retires",
      "content": "England seamer and former Kolkata Knight Riders pacer Harry Gurney announced his retirement from cricket after taking 614 all-format wickets during his career in the professional game. The Nottinghamshire pacer bowed out as a result of the shoulder injury that saw him miss the club's 2020 T20 Blast campaign. The time has arrived for me to hang up my boots. After trying to recover from the recent injury to my shoulder, I am truly disappointed to have to end my playing career as a result of it, Gurney captioned a post on Instagram to announce his retirement.",
      "author": "Sarah Baker",
      "published_at": "2022-02-04T21:58:33.666Z",
      "createdAt": "2022-02-04T21:58:33.688Z",
      "updatedAt": "2022-02-04T21:58:33.688Z",
      "__v": 0,
      "id": "61fda189952ee6854060c8d3"
  },
  {
      "_id": "61fda1d5c8480500166817b6",
      "title": "Sport Article",
      "description": "Sport Article",
      "content": "Some content blah ",
      "slug": "Sport_Articl",
      "category": "sport",
      "published_at": "2022-02-04T21:59:49.092Z",
      "createdAt": "2022-02-04T21:59:49.095Z",
      "updatedAt": "2022-02-04T21:59:49.095Z",
      "__v": 0,
      "id": "61fda1d5c8480500166817b6"
  },
  {
      "_id": "61fdb710952ee6854060c8d4",
      "content": "  Straight from the worlds biggest maritime 21st innovators, the Norwegians comes a hybrid free floating or fixed tidal power-plant. This tidal turbine is called OceanONE its main attraction is that no moving parts rotational or otherwise are submerged (below the waters surface). This is very attractive because these parts are not exposed to a high loads (and direct saltwater contact) and the marine environment does not come into contact with harmful mechanical lubrication or moving parts that can adversely effect marine life. Inspired by marine buoys this technology is the brain child of Geir Arne Solheim\\n\\nOceanONE is the worlds most efficient stand alone wave power plant, invented by Havkraft in Ålesund Norway. The solution combines two efficient wave energy conversion methods for optimum power production and cost-efficiency. The market leading oscillating water column-technology (the Havkraft Wave Energy Converter – H-WEC) is boosted by a market leading point absorption unit (The PowerBooster – POBO). Combined in the OceanONE you get the best possible stand alone power plant in the world.\\n\\n.",
      "title": " Stand Alone Wave Powerplant",
      "slug": "stand-alone-wave-powerplant",
      "description": "A stand alone wave power-plant where no moving parts submerged",
      "category": "science",
      "author": "David Doe",
      "published_at": "2022-02-04T23:30:55.719Z",
      "createdAt": "2022-02-04T23:30:24.020Z",
      "updatedAt": "2022-02-04T23:30:56.294Z",
      "__v": 0,
      "image": {
          "_id": "61ec802e5249c400161f48b2",
          "name": "havkraft-768x306.jpg",
          "alternativeText": "",
          "caption": "",
          "hash": "havkraft_768x306_dbbca62998",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "size": 41.97,
          "width": 768,
          "height": 306,
          "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642889260/havkraft_768x306_dbbca62998.jpg",
          "provider_metadata": {
              "public_id": "havkraft_768x306_dbbca62998",
              "resource_type": "image"
          },
          "formats": {
              "thumbnail": {
                  "name": "thumbnail_havkraft-768x306.jpg",
                  "hash": "thumbnail_havkraft_768x306_dbbca62998",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "width": 245,
                  "height": 98,
                  "size": 6.44,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642889260/thumbnail_havkraft_768x306_dbbca62998.jpg",
                  "provider_metadata": {
                      "public_id": "thumbnail_havkraft_768x306_dbbca62998",
                      "resource_type": "image"
                  }
              },
              "medium": {
                  "name": "medium_havkraft-768x306.jpg",
                  "hash": "medium_havkraft_768x306_dbbca62998",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "width": 750,
                  "height": 299,
                  "size": 39.98,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642889261/medium_havkraft_768x306_dbbca62998.jpg",
                  "provider_metadata": {
                      "public_id": "medium_havkraft_768x306_dbbca62998",
                      "resource_type": "image"
                  }
              },
              "small": {
                  "name": "small_havkraft-768x306.jpg",
                  "hash": "small_havkraft_768x306_dbbca62998",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "width": 500,
                  "height": 199,
                  "size": 20.33,
                  "path": null,
                  "url": "https://res.cloudinary.com/noroff-as/image/upload/v1642889262/small_havkraft_768x306_dbbca62998.jpg",
                  "provider_metadata": {
                      "public_id": "small_havkraft_768x306_dbbca62998",
                      "resource_type": "image"
                  }
              }
          },
          "provider": "cloudinary",
          "related": [
              "61fdb710952ee6854060c8d4"
          ],
          "createdAt": "2022-01-22T22:07:42.409Z",
          "updatedAt": "2022-02-04T23:30:24.324Z",
          "__v": 0,
          "id": "61ec802e5249c400161f48b2"
      },
      "id": "61fdb710952ee6854060c8d4"
  },
  {
      "_id": "6200479bdd662400164d9a51",
      "title": "Turkish Gran Prix cancelled, to be replaced by 2nd race in Austria",
      "slug": "Turkish_Grand_Prix_cancelled",
      "description": "Turkish Gran Prix cancelled, to be replaced by 2nd race in Austria",
      "content": "The Turkish Grand Prix, which was only drafted onto the Formula One calendar as a replacement for the cancelled Canada GP two weeks ago, was itself axed on Friday. Formula One chiefs, forced into another change due to Covid-19 protocols, announced that they will instead return to the sport's safe haven of Austria. The decision was made in the wake of the announcement of new travel restrictions imposed by several countries in which F1 teams are based, affecting travel from Turkey, they said.",
      "category": "sport",
      "published_at": "2022-02-06T22:11:39.962Z",
      "createdAt": "2022-02-06T22:11:39.968Z",
      "updatedAt": "2022-02-06T22:11:39.968Z",
      "__v": 0,
      "id": "6200479bdd662400164d9a51"
  },
  {
      "_id": "62004889dd662400164d9a52",
      "title": "Mercedes Masterstroke In Barcelona Helps Lewis Hamilton Deny Max Verstappen",
      "slug": "Mercedes_Masterstroke_In_Barcelona_Helps_Lewis_Hamilton_Deny_Max_Verstappen_",
      "description": "Mercedes Masterstroke In Barcelona Helps Lewis Hamilton Deny Max Verstappen",
      "content": "Lewis Hamilton claimed his fifth successive Spanish Grand Prix on Sunday ahead of Red Bull's Max Verstappen after a Mercedes pit-stop masterstroke. Hamilton moved on to 98 career wins after a surprise second change of tyres hoodwinked Red Bull to lift him 14 points clear of Verstappen in the drivers' standings. It was a really great strategy by the team. What a day! beamed Hamilton, who was quick to acknowledge the smattering of fans allowed in to watch, a rare occurence in the time of coronavirus.",
      "category": "sport",
      "published_at": "2022-02-06T22:15:37.094Z",
      "createdAt": "2022-02-06T22:15:37.096Z",
      "updatedAt": "2022-02-06T22:15:37.096Z",
      "__v": 0,
      "id": "62004889dd662400164d9a52"
  },
  {
      "_id": "6200498edd662400164d9a53",
      "title": "Rafael Nadal Takes Revenge On Alexander Zverev",
      "slug": "Rafael_Nadal_Takes_Revenge_On_Alexander_Zvere",
      "description": "Rafael Nadal Takes Revenge On Alexander Zverev",
      "content": "Nine-time champion Rafael Nadal dispatched his Madrid Masters slayer Alexander Zverev 6-3, 6-4 to reach the Italian Open semi-finals on Friday. Second-seed Nadal lost to Zverev in the Madrid last-eight last week, but ended his three-match losing streak against the German in the Foro Italico. It was an important victory for me against a great player, said the Spaniard. The 34-year-old shook off his marathon 3hr 30min quarter-final battle past Denis Shapovalov on Thursday where he needed to save two match points.",
      "category": "sport",
      "published_at": "2022-02-06T22:19:58.256Z",
      "createdAt": "2022-02-06T22:19:58.260Z",
      "updatedAt": "2022-02-06T22:19:58.260Z",
      "__v": 0,
      "id": "6200498edd662400164d9a53"
  }
]