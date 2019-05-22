Vue.component('auction-item', {
    props: ['auction'],
    template: `
        <li>
            Tytuł: {{auction.name}}
            Cena wywoławcza: {{auction.price}} <br>
            <button @click.prevent="$emit('close-auction', auction.id)">Zakończ aukcję</button>
            <br><br>
            <strong>Lista ofert:</strong>
            <ul>
                <li v-for="offer in auction.offers">
                    osoba: {{offer.name}}, oferta: {{offer.price}},
                </li>
            </ul>
        </li>

        <add-new-offer
        :offers="auction.offers"
        :auctionprice="auction.price"
        :highestoffer="highestOfferPrice()"
        >
        </add-new-offer>
    `,
    methods: {
        removeOffer(id) {
            this.auction.offers = this.auction.offers.filter(offer => offer.id !== id);
        },
        highestOfferPrice() {
            if (this.auction.offers.length > 0) {
                return this.auction.offers
                [this.auction.offers.length-1].price;
            } else {
                return this.auction.price
            }
        }
    }
});


// Vue.component('add-new-offer', {
//     data() {
//         return {
//             newOffer: {
//                 name: '',
//                 price: 0,
//             },
//             newOfferId: 0,
//         }
//     }
//     props: ['offers', 'auctionprice', 'highestoffer'],
//     template: `
//     <form @submit.prevent="addNewOffer">
//         <label for="offer-name">Tytuł</label>
//         <input name="offer-name" id="offer-name"
//         v-model="newOffer.name"/>


//         <label for="offer-price">Cena wywyoławcza</label>
//         <input name="offer-price" id="offer-price" type="number"
//         v-model="newOffer.price"/>

//         <button type="submit">Dodaj nową ofertę</button>

//     </form>
//     `,
//     methods: {

//     }
// });


const myApp = new Vue({
    el: '[data-id="myApp"]',
    data() {
        return {
            newAuctionId: 0,
            newAuction: {
                name: '',
                price: 0,

            },
            auctionsData: [
                {
                    
                    name: 'Aukcja 1',
                    price: 123,
                    offers: [
                        {
                            id:1,
                            name: 'kamil',
                            price: 125,
                        },
                    ]
                }
            ]
        }
    },
    methods: {
        addNewAuction() {
           
            this.newAuctionID();

            this.newAuction.price = Number(this.newAuction.price);
        

            if (this.newAuction.name.length > 0) {
                this.auctionsData.push({
                    id: this.newAuctionId,
                    name: this.newAuction.name,
                    price: this.newAuction.price,
                    offers: []
                });
                this.newAuction.name= "";
                this.newAuction.price= 0;
            }
        },

            
        
        newAuctionID() {
            if (this.auctionsData.length >0) {
                this.newAuctionId = 
                this.auctionsData[this.auctionsData.length-1].id;
            }
            this.newAuctionId++;
        },

        removeAuction() {
            this.auctionsData = this.auctionsData.filter(auction => auction.id !== id);
        }
    },
    
})