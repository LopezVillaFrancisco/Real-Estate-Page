const properties = [
    {
        id: 1,
        name: "Beach House",
        location: "Malibu, CA",
        price: "$300,000",
        rooms: 4,
        bathrooms: 2,
        size: "2000 sq ft",
        year_built: 2015,
        features: ["Pool", "Parking", "Ocean view"],
        description: "Beautiful beach house with panoramic ocean views, perfect for enjoying the sea breeze and sunshine.",
        imageUrl: [
            "https://static1.squarespace.com/static/5eb1e180d1aaaa079bb58596/t/607b4c649c6cd72fbe9cc6cf/1618693221725/STUDIOpractice-malibu-beach-house-1-1500x1099.jpg",
            "https://static1.squarespace.com/static/5eb1e180d1aaaa079bb58596/t/607b4c649c6cd72fbe9cc6cf/1618693221725/STUDIOpractice-malibu-beach-house-1-1500x1099.jpg",
            "https://static1.squarespace.com/static/5eb1e180d1aaaa079bb58596/t/607b4c649c6cd72fbe9cc6cf/1618693221725/STUDIOpractice-malibu-beach-house-1-1500x1099.jpg",
            "https://static1.squarespace.com/static/5eb1e180d1aaaa079bb58596/t/607b4c649c6cd72fbe9cc6cf/1618693221725/STUDIOpractice-malibu-beach-house-1-1500x1099.jpg",
            "https://static1.squarespace.com/static/5eb1e180d1aaaa079bb58596/t/607b4c649c6cd72fbe9cc6cf/1618693221725/STUDIOpractice-malibu-beach-house-1-1500x1099.jpg"
        ]
    },
    {
        id: 2,
        name: "City Apartment",
        location: "New York, NY",
        price: "$200,000",
        rooms: 2,
        bathrooms: 1,
        size: "900 sq ft",
        year_built: 2010,
        features: ["Gym", "24h Security", "Parking"],
        description: "Modern apartment in the heart of the city, with quick access to restaurants, shops, and nightlife.",
        imageUrl: [
            "https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/c2cd77b11abf78327d4042c8df677bc8-full.jpg",
            "https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/c2cd77b11abf78327d4042c8df677bc8-full.jpg",
            "https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/c2cd77b11abf78327d4042c8df677bc8-full.jpg",
            "https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/c2cd77b11abf78327d4042c8df677bc8-full.jpg",
            "https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/c2cd77b11abf78327d4042c8df677bc8-full.jpg"
        ]
    },
    {
        id: 3,
        name: "Country House",
        location: "Aspen, CO",
        price: "$350,000",
        rooms: 5,
        bathrooms: 3,
        size: "3500 sq ft",
        year_built: 2005,
        features: ["Fireplace", "Garden", "Garage"],
        description: "Charming country house in the Aspen mountains, perfect for peaceful getaways in nature.",
        imageUrl: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VA9M5wv-o-NkQPJpo5Sc1FwBQk7PUT3tbQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VA9M5wv-o-NkQPJpo5Sc1FwBQk7PUT3tbQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VA9M5wv-o-NkQPJpo5Sc1FwBQk7PUT3tbQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VA9M5wv-o-NkQPJpo5Sc1FwBQk7PUT3tbQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VA9M5wv-o-NkQPJpo5Sc1FwBQk7PUT3tbQ&s"
        ]
    },
    {
        id: 4,
        name: "Luxury Villa",
        location: "Beverly Hills, CA",
        price: "$800,000",
        rooms: 6,
        bathrooms: 5,
        size: "5000 sq ft",
        year_built: 2020,
        features: ["Pool", "Gym", "Garden", "Panoramic view"],
        description: "Luxurious villa in Beverly Hills with spacious areas, a private pool, and garden. Ideal for those seeking exclusivity.",
        imageUrl: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOSyzP0-s7gs_Kw82O0pKQC9dYwIZ1a-yqPA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOSyzP0-s7gs_Kw82O0pKQC9dYwIZ1a-yqPA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOSyzP0-s7gs_Kw82O0pKQC9dYwIZ1a-yqPA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOSyzP0-s7gs_Kw82O0pKQC9dYwIZ1a-yqPA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOSyzP0-s7gs_Kw82O0pKQC9dYwIZ1a-yqPA&s"
        ]
    },
    {
        id: 5,
        name: "Modern House",
        location: "Miami, FL",
        price: "$600,000",
        rooms: 4,
        bathrooms: 2,
        size: "3000 sq ft",
        year_built: 2018,
        features: ["Parking", "Pool", "Near the beach"],
        description: "Modern house in Miami with contemporary design, open spaces, and access to the best beaches in the city.",
        imageUrl: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVhbW43hQvz5JTVWuS0qOU8TpzUM63UxyJTg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVhbW43hQvz5JTVWuS0qOU8TpzUM63UxyJTg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVhbW43hQvz5JTVWuS0qOU8TpzUM63UxyJTg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVhbW43hQvz5JTVWuS0qOU8TpzUM63UxyJTg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVhbW43hQvz5JTVWuS0qOU8TpzUM63UxyJTg&s"
        ]
    },
    {
        id: 6,
        name: "Luxurious Apartment",
        location: "Dubai, UAE",
        price: "$1,000,000",
        rooms: 3,
        bathrooms: 3,
        size: "1500 sq ft",
        year_built: 2021,
        features: ["Pool", "Gym", "City view"],
        description: "Exclusive apartment in the heart of Dubai with stunning city views and luxurious interior finishes.",
        imageUrl: [
            "https://www1.lovethatdesign.com/wp-content/uploads/2021/05/Love-That-Design-Taj-Residences-JLT-Spline-6-1727x1152.jpg",
            "https://www1.lovethatdesign.com/wp-content/uploads/2021/05/Love-That-Design-Taj-Residences-JLT-Spline-6-1727x1152.jpg",
            "https://www1.lovethatdesign.com/wp-content/uploads/2021/05/Love-That-Design-Taj-Residences-JLT-Spline-6-1727x1152.jpg",
            "https://www1.lovethatdesign.com/wp-content/uploads/2021/05/Love-That-Design-Taj-Residences-JLT-Spline-6-1727x1152.jpg",
            "https://www1.lovethatdesign.com/wp-content/uploads/2021/05/Love-That-Design-Taj-Residences-JLT-Spline-6-1727x1152.jpg"
        ]
    },
    {
        id: 7,
        name: "Classic House",
        location: "Boston, MA",
        price: "$500,000",
        rooms: 4,
        bathrooms: 2,
        size: "2500 sq ft",
        year_built: 1920,
        features: ["Garden", "Fireplace", "Close to parks"],
        description: "Classic house in historic Boston with traditional architectural details and a charming garden.",
        imageUrl: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwjeixX63O_3d3oQH21jKQcCkPF_lp2a573w&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwjeixX63O_3d3oQH21jKQcCkPF_lp2a573w&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwjeixX63O_3d3oQH21jKQcCkPF_lp2a573w&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwjeixX63O_3d3oQH21jKQcCkPF_lp2a573w&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwjeixX63O_3d3oQH21jKQcCkPF_lp2a573w&s"
        ]
    },
    {
        id: 8,
        name: "Downtown Penthouse",
        location: "Chicago, IL",
        price: "$700,000",
        rooms: 3,
        bathrooms: 3,
        size: "1800 sq ft",
        year_built: 2017,
        features: ["City view", "Gym", "24h Security"],
        description: "Luxurious penthouse in downtown Chicago with stunning city views and access to all urban amenities.",
        imageUrl: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVHU2J9T0DnbBUNluUO2TAjaVopfBax_jRoA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVHU2J9T0DnbBUNluUO2TAjaVopfBax_jRoA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVHU2J9T0DnbBUNluUO2TAjaVopfBax_jRoA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVHU2J9T0DnbBUNluUO2TAjaVopfBax_jRoA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVHU2J9T0DnbBUNluUO2TAjaVopfBax_jRoA&s"
        ]
    },
    {
        id: 9,
        name: "Mountain Chalet",
        location: "Lake Tahoe, CA",
        price: "$600,000",
        rooms: 5,
        bathrooms: 3,
        size: "4000 sq ft",
        year_built: 2012,
        features: ["Fireplace", "Mountain view", "Garage"],
        description: "Cozy chalet in Lake Tahoe, perfect for skiing and nature lovers, with breathtaking mountain views.",
        imageUrl: [
            "https://st.hzcdn.com/simgs/pictures/exteriors/contemporary-mountain-chalet-andrea-schumacher-interiors-img~c87156bf097f5fdb_4-6658-1-6d327fc.jpg",
            "https://st.hzcdn.com/simgs/pictures/exteriors/contemporary-mountain-chalet-andrea-schumacher-interiors-img~c87156bf097f5fdb_4-6658-1-6d327fc.jpg",
            "https://st.hzcdn.com/simgs/pictures/exteriors/contemporary-mountain-chalet-andrea-schumacher-interiors-img~c87156bf097f5fdb_4-6658-1-6d327fc.jpg",
            "https://st.hzcdn.com/simgs/pictures/exteriors/contemporary-mountain-chalet-andrea-schumacher-interiors-img~c87156bf097f5fdb_4-6658-1-6d327fc.jpg",
            "https://st.hzcdn.com/simgs/pictures/exteriors/contemporary-mountain-chalet-andrea-schumacher-interiors-img~c87156bf097f5fdb_4-6658-1-6d327fc.jpg"
        ]
    },
    {
        id: 10,
        name: "Lake House",
        location: "Lake Como, Italy",
        price: "$750,000",
        rooms: 4,
        bathrooms: 2,
        size: "3000 sq ft",
        year_built: 2015,
        features: ["Lake view", "Garden", "Lake access"],
        description: "Charming lake house with stunning lake views in Lake Como, Italy. A tranquil retreat with direct water access and a private garden.",
        imageUrl: [
            "https://idologyasheville.com/img/Things-You-Never-Knew-About-Your-Lakehouse-Home-Floors_IDology-Asheville.jpg",
            "https://idologyasheville.com/img/Things-You-Never-Knew-About-Your-Lakehouse-Home-Floors_IDology-Asheville.jpg",
            "https://idologyasheville.com/img/Things-You-Never-Knew-About-Your-Lakehouse-Home-Floors_IDology-Asheville.jpg",
            "https://idologyasheville.com/img/Things-You-Never-Knew-About-Your-Lakehouse-Home-Floors_IDology-Asheville.jpg",
            "https://idologyasheville.com/img/Things-You-Never-Knew-About-Your-Lakehouse-Home-Floors_IDology-Asheville.jpg"
        ]
    },
    {
        id: 11,
        name: "Compact Studio",
        location: "San Francisco, CA",
        price: "$150,000",
        rooms: 1,
        bathrooms: 1,
       size: "500 sq ft",
        year_built: 2008,
        features: ["Equipped kitchen", "Close to public transport"],
        description: "Compact studio in San Francisco, ideal for an individual or couple looking to live in the heart of the city.",
        imageUrl: [
            "https://shedcoliving.com/app/uploads/2023/02/dsc1791-edit-1920x1282.jpg",
            "https://shedcoliving.com/app/uploads/2023/02/dsc1791-edit-1920x1282.jpg",
            "https://shedcoliving.com/app/uploads/2023/02/dsc1791-edit-1920x1282.jpg",
            "https://shedcoliving.com/app/uploads/2023/02/dsc1791-edit-1920x1282.jpg",
            "https://shedcoliving.com/app/uploads/2023/02/dsc1791-edit-1920x1282.jpg"
        ]
    }
]


export default properties;
