var personList = new Vue({
    el: '#personsLi',
    data: {
        newPerson: "",
        persons: [{
            name: "Piotr",
            surname: "Kwiatkowski",
            age: "28",
            email: "piotr@gmail.com",
            address: {
                street: "Wiejska 45A",
                zipcode: "15-300",
                city: "Białystok"
            },
            friend: true,
            likes: 4,
            photo: "https://randomuser.me/api/portraits/men/22.jpg",
            interests: ["sport", "muzyka"]
        },
        {
            name: "Krzysztof",
            surname: "Nowak",
            age: "19",
            email: "knowak@wp.pl",
            address: {
                street: "Sienkiewicza 12 m. 13",
                zipcode: "15-400",
                city: "Białystok"
            },
            friend: false,
            likes: 12,
            photo: "https://randomuser.me/api/portraits/men/73.jpg",
            interests: ["komiksy", "gry wideo", "anime"]
        },
        {
            name: "Olga",
            surname: "Zielińska",
            age: "32",
            email: "olzie@gmail.com",
            address: {
                street: "Lipowa 8/10",
                zipcode: "15-500",
                city: "Białystok"
            },
            friend: true,
            likes: 15,
            photo: "https://randomuser.me/api/portraits/women/40.jpg",
            interests: ["film", "muzyka"]
        },
        {
            name: "Barbara",
            surname: "Kowalska",
            age: "22",
            email: "kowalska@manga.pl",
            address: {
                street: "Mazowiecka 9B/44",
                zipcode: "15-600",
                city: "Białystok"
            },
            friend: false,
            likes: 10,
            photo: "https://randomuser.me/api/portraits/women/50.jpg",
            interests: ["manga", "anime"]
        },
    ]
    },
    methods: {
        
    },
   })

   