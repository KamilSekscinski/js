var personList = new Vue({
    el: '#personsLi',
    data: {
        filterValue: "",
        newPersons: [],
        newName: "",
        newSurname: "",
        newAge: 1,
        newEmail: "",
        newStreet: "",
        newZip: "",
        newCity: "",
        newLikes: 0,
        newFriend: "",
        newInterests: "",
        newPhoto: "",
    
        
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
        filter() {
            this.filterValue = this.filterValue.toLowerCase();
            this.NewPersons = [...this.persons];
            this.NewPersons = this.NewPersons.filter(person =>
              person.name.toLowerCase().includes(this.filterValue)
            );
            this.persons = this.NewPersons;
          },
        // filter() {
        //     this.persons = this.persons.filter(person => person.name.length > 4)
        //     },
            // sortowanie malejąco imie
        sortdownName: function() {
                function compare(a,b) {
                    if (a.name > b.name)
                        return -1;
                    if (a.name < b.name)
                        return 1;
                    return 0;
                }
                return this.persons.sort(compare);
        },
        // sortowanie rosnąco imie
        sortupName: function() {
            function compare(a,b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            }
            return this.persons.sort(compare);
        },
        // sortowanie malejąco nazwisko
        sortdownSurname: function() {
                function compare(a,b) {
                    if (a.surname > b.surname)
                        return -1;
                    if (a.surname < b.surname)
                        return 1;
                    return 0;
                }
                return this.persons.sort(compare);
        },
        // sortowanie rosnąco nazwisko
        sortupSurname: function() {
            function compare(a,b) {
                if (a.surname < b.surname)
                    return -1;
                if (a.surname > b.surname)
                    return 1;
                return 0;
            }
            return this.persons.sort(compare);
        },
        addNewPerson() {
            this.persons.push({
              name: this.newName,
              surname: this.newSurname,
              age: this.newAge,
              email: this.newEmail,
              address: {
                street: this.newStreet,
                zipcode: this.newZip,
                city: this.newCity
            },
              address: this.newAddress,
              likes: this.newLikes,
              friend: this.newFriend,
              interests: [this.newInterests],
              photo: this.newPhoto
            })
            this.newName = "";
            this.newSurname = "";
            this.newAge = 0;
            this.newEmail = "";
            this.newStreet = "";
            this.newZip = "";
            this.newCity = "";
            this.newLikes = 0;
            this.newFriend = "";
            this.newInterests = "";
            this.newPhoto = ""
          },
        // addint() {
        //     this.persons.interests.push(
        //         this.personInterest
               
        //     )
        //     this.personInterest = ""
        //   },
        
        
        
        
    },
    computed: {
        
        
    },
   })

   