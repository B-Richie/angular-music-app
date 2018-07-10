import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
      //debugger;
    const artists = [
        
            {
                "id": 1,
                "ArtistName": "A Flock Of Seagulls"
            },
            {
                "id": 2,
                "ArtistName": "A Tribe Called Quest"
            },
            {
                "id": 3,
                "ArtistName": "Acid Mothers Temple & The Cosmic Inferno"
            },
            {
                "id": 4,
                "ArtistName": "Acid Mothers Temple & The Melting Paraiso U.F.O."
            },
            {
                "id": 5,
                "ArtistName": "Alice In Chains"
            },
            {
                "id": 6,
                "ArtistName": "alt-J"
            },
            {
                "id": 7,
                "ArtistName": "Bauhaus"
            },
            {
                "id": 8,
                "ArtistName": "Beck"
            },
            {
                "id": 9,
                "ArtistName": "Billy Squier"
            },
            {
                "id": 10,
                "ArtistName": "Boogarins"
            },
            {
                "id": 11,
                "ArtistName": "Butthole Surfers"
            },
            {
                "id": 12,
                "ArtistName": "Captain Beefheart & His Magic Band"
            },
            {
                "id": 13,
                "ArtistName": "Cream"
            },
            {
                "id": 14,
                "ArtistName": "D'Angelo and The Vanguard"
            },
            {
                "id": 15,
                "ArtistName": "David Bowie"
            },
            {
                "id": 16,
                "ArtistName": "Dead Boys"
            },
            {
                "id": 17,
                "ArtistName": "Dead Kennedys"
            },
            {
                "id": 18,
                "ArtistName": "Death"
            },
            {
                "id": 19,
                "ArtistName": "Deerhunter"
            },
            {
                "id": 20,
                "ArtistName": "Descendents"
            },
            {
                "id": 21,
                "ArtistName": "Devendra Banhart"
            },
            {
                "id": 22,
                "ArtistName": "Devo"
            },
            {
                "id": 23,
                "ArtistName": "Dinosaur Jr."
            },
            {
                "id": 24,
                "ArtistName": "Dr. John"
            },
            {
                "id": 25,
                "ArtistName": "Echo And The Bunnymen"
            },
            {
                "id": 26,
                "ArtistName": "Electric Light Orchestra"
            },
            {
                "id": 27,
                "ArtistName": "Eminem"
            },
            {
                "id": 28,
                "ArtistName": "Foo Fighters"
            },
            {
                "id": 29,
                "ArtistName": "Frank Black"
            },
            {
                "id": 30,
                "ArtistName": "Frankie Goes To Hollywood"
            },
            {
                "id": 31,
                "ArtistName": "Guns N' Roses"
            },
            {
                "id": 32,
                "ArtistName": "Inxs"
            },
            {
                "id": 33,
                "ArtistName": "J. Geils Band"
            },
            {
                "id": 34,
                "ArtistName": "James"
            },
            {
                "id": 35,
                "ArtistName": "Jane's Addiction"
            },
            {
                "id": 36,
                "ArtistName": "Japandroids"
            },
            {
                "id": 37,
                "ArtistName": "Jim Morrison and the Doors"
            },
            {
                "id": 38,
                "ArtistName": "Joy Division"
            },
            {
                "id": 39,
                "ArtistName": "Kanye West"
            },
            {
                "id": 40,
                "ArtistName": "Kendrick Lamar"
            },
            {
                "id": 41,
                "ArtistName": "King Gizzard & The Lizard Wizard"
            },
            {
                "id": 42,
                "ArtistName": "Linda Ronstadt"
            },
            {
                "id": 43,
                "ArtistName": "Live"
            },
            {
                "id": 44,
                "ArtistName": "LL Cool J"
            },
            {
                "id": 45,
                "ArtistName": "Lou Reed"
            },
            {
                "id": 46,
                "ArtistName": "Love And Rockets"
            },
            {
                "id": 47,
                "ArtistName": "Madvillain"
            },
            {
                "id": 48,
                "ArtistName": "Merchandise"
            },
            {
                "id": 49,
                "ArtistName": "METZ"
            },
            {
                "id": 50,
                "ArtistName": "Miles Davis"
            },
            {
                "id": 51,
                "ArtistName": "Modest Mouse"
            },
            {
                "id": 52,
                "ArtistName": "Mondo Drag"
            },
            {
                "id": 53,
                "ArtistName": "Nas"
            },
            {
                "id": 54,
                "ArtistName": "New Order"
            },
            {
                "id": 55,
                "ArtistName": "Nine Inch Nails"
            },
            {
                "id": 56,
                "ArtistName": "Oasis"
            },
            {
                "id": 57,
                "ArtistName": "Pissed Jeans"
            },
            {
                "id": 58,
                "ArtistName": "Pixies"
            },
            {
                "id": 59,
                "ArtistName": "PJ Harvey"
            },
            {
                "id": 60,
                "ArtistName": "Pretenders"
            },
            {
                "id": 61,
                "ArtistName": "Primus"
            },
            {
                "id": 62,
                "ArtistName": "Public Enemy"
            },
            {
                "id": 63,
                "ArtistName": "Queen"
            },
            {
                "id": 64,
                "ArtistName": "Red Hot Chili Peppers"
            },
            {
                "id": 65,
                "ArtistName": "Revolting Cocks"
            },
            {
                "id": 66,
                "ArtistName": "Run The Jewels"
            },
            {
                "id": 67,
                "ArtistName": "RUN-DMC"
            },
            {
                "id": 68,
                "ArtistName": "Silver Apples"
            },
            {
                "id": 69,
                "ArtistName": "Simon & Garfunkel"
            },
            {
                "id": 70,
                "ArtistName": "Slick Rick"
            },
            {
                "id": 71,
                "ArtistName": "Snoop Doggy Dogg"
            },
            {
                "id": 72,
                "ArtistName": "Styx"
            },
            {
                "id": 73,
                "ArtistName": "Sufjan Stevens"
            },
            {
                "id": 74,
                "ArtistName": "Swans"
            },
            {
                "id": 75,
                "ArtistName": "Tame Impala"
            },
            {
                "id": 76,
                "ArtistName": "The 13th Floor Elevators"
            },
            {
                "id": 77,
                "ArtistName": "The Beastie Boys"
            },
            {
                "id": 78,
                "ArtistName": "The Cars"
            },
            {
                "id": 79,
                "ArtistName": "The Chameleons"
            },
            {
                "id": 80,
                "ArtistName": "The Cramps"
            },
            {
                "id": 81,
                "ArtistName": "The Crow"
            },
            {
                "id": 82,
                "ArtistName": "The Cure"
            },
            {
                "id": 83,
                "ArtistName": "The Dead Milkmen"
            },
            {
                "id": 84,
                "ArtistName": "The Fall"
            },
            {
                "id": 85,
                "ArtistName": "The Flaming Lips"
            },
            {
                "id": 86,
                "ArtistName": "The Go-Go's"
            },
            {
                "id": 87,
                "ArtistName": "The National"
            },
            {
                "id": 88,
                "ArtistName": "The Replacements"
            },
            {
                "id": 89,
                "ArtistName": "The Rolling Stones"
            },
            {
                "id": 90,
                "ArtistName": "The Smiths"
            },
            {
                "id": 91,
                "ArtistName": "The Soft Boys"
            },
            {
                "id": 92,
                "ArtistName": "The Who"
            },
            {
                "id": 93,
                "ArtistName": "Thee Oh Sees"
            },
            {
                "id": 94,
                "ArtistName": "Tom Waits"
            },
            {
                "id": 95,
                "ArtistName": "Tommy James And The Shondells"
            },
            {
                "id": 96,
                "ArtistName": "Ty Segall"
            },
            {
                "id": 97,
                "ArtistName": "Wu-Tang Clan"
            }
        
    ];
    const albums = [
        {
            "id": 1,
            "AlbumName": "A Flock Of Seagulls",
            "NumberOfTracks": 10,
            "ReleaseYear": 1990,
            "Cost": 0,
            "Genre": "Pop",
            "ArtistID": 1,
            "ArtistName": "A Flock Of Seagulls"
        },
        {
            "id": 2,
            "AlbumName": "Midnight Marauders",
            "NumberOfTracks": 14,
            "ReleaseYear": 1993,
            "Cost": 0,
            "Genre": "Rap & Hip-Hop",
            "ArtistID": 2,
            "ArtistName": "A Tribe Called Quest"
        },
        {
            "id": 3,
            "AlbumName": "The Low End Theory",
            "NumberOfTracks": 14,
            "ReleaseYear": 1991,
            "Cost": 0,
            "Genre": "Rap & Hip-Hop",
            "ArtistID": 2,
            "ArtistName": "A Tribe Called Quest"
        },
        {
            "id": 4,
            "AlbumName": "Doobie Wonderland",
            "NumberOfTracks": 5,
            "ReleaseYear": 2013,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 3,
            "ArtistName": "Acid Mothers Temple & The Cosmic Inferno"
        },
        {
            "id": 5,
            "AlbumName": "Son of a Bitches Brew",
            "NumberOfTracks": 7,
            "ReleaseYear": 2013,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 4,
            "ArtistName": "Acid Mothers Temple & The Melting Paraiso U.F.O."
        },
        {
            "id": 6,
            "AlbumName": "Alice In Chains",
            "NumberOfTracks": 12,
            "ReleaseYear": 1995,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 5,
            "ArtistName": "Alice In Chains"
        },
        {
            "id": 7,
            "AlbumName": "An Awesome Wave",
            "NumberOfTracks": 14,
            "ReleaseYear": 2012,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 6,
            "ArtistName": "alt-J"
        },
        {
            "id": 8,
            "AlbumName": "In The Flat Field",
            "NumberOfTracks": 18,
            "ReleaseYear": 1980,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 7,
            "ArtistName": "Bauhaus"
        },
        {
            "id": 9,
            "AlbumName": "The Sky's Gone Out",
            "NumberOfTracks": 10,
            "ReleaseYear": 1989,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 7,
            "ArtistName": "Bauhaus"
        },
        {
            "id": 10,
            "AlbumName": "Modern Guilt",
            "NumberOfTracks": 10,
            "ReleaseYear": 2008,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 8,
            "ArtistName": "Beck"
        },
        {
            "id": 11,
            "AlbumName": "Morning Phase",
            "NumberOfTracks": 13,
            "ReleaseYear": 2014,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 8,
            "ArtistName": "Beck"
        },
        {
            "id": 12,
            "AlbumName": "Mutations",
            "NumberOfTracks": 12,
            "ReleaseYear": 1998,
            "Cost": 0,
            "Genre": "Pop",
            "ArtistID": 8,
            "ArtistName": "Beck"
        },
        {
            "id": 13,
            "AlbumName": "Don't Say No",
            "NumberOfTracks": 10,
            "ReleaseYear": 2010,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 9,
            "ArtistName": "Billy Squier"
        },
        {
            "id": 14,
            "AlbumName": "As Plantas Que Curam",
            "NumberOfTracks": 10,
            "ReleaseYear": 2013,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 10,
            "ArtistName": "Boogarins"
        },
        {
            "id": 15,
            "AlbumName": "Electriclarryland",
            "NumberOfTracks": 0,
            "ReleaseYear": 1996,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 11,
            "ArtistName": "Butthole Surfers"
        },
        {
            "id": 16,
            "AlbumName": "Safe As Milk",
            "NumberOfTracks": 19,
            "ReleaseYear": 1966,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 12,
            "ArtistName": "Captain Beefheart & His Magic Band"
        },
        {
            "id": 17,
            "AlbumName": "Disraeli Gears",
            "NumberOfTracks": 11,
            "ReleaseYear": 1998,
            "Cost": 0,
            "Genre": "Pop",
            "ArtistID": 13,
            "ArtistName": "Cream"
        },
        {
            "id": 18,
            "AlbumName": "Black Messiah",
            "NumberOfTracks": 12,
            "ReleaseYear": 2014,
            "Cost": 0,
            "Genre": "R&B",
            "ArtistID": 14,
            "ArtistName": "D'Angelo and The Vanguard"
        },
        {
            "id": 19,
            "AlbumName": "Blackstar",
            "NumberOfTracks": 9,
            "ReleaseYear": 2016,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 15,
            "ArtistName": "David Bowie"
        },
        {
            "id": 20,
            "AlbumName": "Young, Loud And Snotty",
            "NumberOfTracks": 11,
            "ReleaseYear": 2007,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 16,
            "ArtistName": "Dead Boys"
        },
        {
            "id": 21,
            "AlbumName": "Fresh Fruit For Rotting Vegetables",
            "NumberOfTracks": 15,
            "ReleaseYear": 1980,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 17,
            "ArtistName": "Dead Kennedys"
        },
        {
            "id": 22,
            "AlbumName": "...For The Whole World To See",
            "NumberOfTracks": 7,
            "ReleaseYear": 2009,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 18,
            "ArtistName": "Death"
        },
        {
            "id": 23,
            "AlbumName": "Fading Frontier",
            "NumberOfTracks": 9,
            "ReleaseYear": 2015,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 19,
            "ArtistName": "Deerhunter"
        },
        {
            "id": 24,
            "AlbumName": "Halcyon Digest",
            "NumberOfTracks": 11,
            "ReleaseYear": 2010,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 19,
            "ArtistName": "Deerhunter"
        },
        {
            "id": 25,
            "AlbumName": "Milo Goes To College",
            "NumberOfTracks": 15,
            "ReleaseYear": 1982,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 20,
            "ArtistName": "Descendents"
        },
        {
            "id": 26,
            "AlbumName": "Rejoicing In the Hands",
            "NumberOfTracks": 16,
            "ReleaseYear": 2004,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 21,
            "ArtistName": "Devendra Banhart"
        },
        {
            "id": 27,
            "AlbumName": "Q: Are We Not Men? A: We Are Devo! [Deluxe Remastered Edition]",
            "NumberOfTracks": 22,
            "ReleaseYear": 1988,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 22,
            "ArtistName": "Devo"
        },
        {
            "id": 28,
            "AlbumName": "Dinosaur",
            "NumberOfTracks": 12,
            "ReleaseYear": 2005,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 23,
            "ArtistName": "Dinosaur Jr."
        },
        {
            "id": 29,
            "AlbumName": "Gris Gris",
            "NumberOfTracks": 7,
            "ReleaseYear": 2005,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 24,
            "ArtistName": "Dr. John"
        },
        {
            "id": 30,
            "AlbumName": "Echo & The Bunnymen",
            "NumberOfTracks": 18,
            "ReleaseYear": 2004,
            "Cost": 0,
            "Genre": "Pop",
            "ArtistID": 25,
            "ArtistName": "Echo And The Bunnymen"
        },
        {
            "id": 31,
            "AlbumName": "Ocean Rain",
            "NumberOfTracks": 9,
            "ReleaseYear": 1984,
            "Cost": 0,
            "Genre": "Pop",
            "ArtistID": 25,
            "ArtistName": "Echo And The Bunnymen"
        },
        {
            "id": 32,
            "AlbumName": "A New World Record",
            "NumberOfTracks": 15,
            "ReleaseYear": 2003,
            "Cost": 0,
            "Genre": "Pop",
            "ArtistID": 26,
            "ArtistName": "Electric Light Orchestra"
        },
        {
            "id": 33,
            "AlbumName": "The Slim Shady LP",
            "NumberOfTracks": 20,
            "ReleaseYear": 1999,
            "Cost": 0,
            "Genre": "Rap & Hip-Hop",
            "ArtistID": 27,
            "ArtistName": "Eminem"
        },
        {
            "id": 34,
            "AlbumName": "Saint Cecilia EP",
            "NumberOfTracks": 5,
            "ReleaseYear": 2015,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 28,
            "ArtistName": "Foo Fighters"
        },
        {
            "id": 35,
            "AlbumName": "Teenager Of The Year",
            "NumberOfTracks": 22,
            "ReleaseYear": 1994,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 29,
            "ArtistName": "Frank Black"
        },
        {
            "id": 36,
            "AlbumName": "Welcome To The Pleasuredome",
            "NumberOfTracks": 16,
            "ReleaseYear": 2013,
            "Cost": 0,
            "Genre": "Pop",
            "ArtistID": 30,
            "ArtistName": "Frankie Goes To Hollywood"
        },
        {
            "id": 37,
            "AlbumName": "Use Your Illusion I",
            "NumberOfTracks": 16,
            "ReleaseYear": 1991,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 31,
            "ArtistName": "Guns N' Roses"
        },
        {
            "id": 38,
            "AlbumName": "Use Your Illusion II",
            "NumberOfTracks": 14,
            "ReleaseYear": 1991,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 31,
            "ArtistName": "Guns N' Roses"
        },
        {
            "id": 39,
            "AlbumName": "Kick",
            "NumberOfTracks": 12,
            "ReleaseYear": 2011,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 32,
            "ArtistName": "Inxs"
        },
        {
            "id": 40,
            "AlbumName": "Freeze Frame",
            "NumberOfTracks": 9,
            "ReleaseYear": 1989,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 33,
            "ArtistName": "J. Geils Band"
        },
        {
            "id": 41,
            "AlbumName": "Laid",
            "NumberOfTracks": 13,
            "ReleaseYear": 0,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 34,
            "ArtistName": "James"
        },
        {
            "id": 42,
            "AlbumName": "The Great Escape Artist",
            "NumberOfTracks": 10,
            "ReleaseYear": 2011,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 35,
            "ArtistName": "Jane's Addiction"
        },
        {
            "id": 43,
            "AlbumName": "Post-Nothing",
            "NumberOfTracks": 8,
            "ReleaseYear": 2009,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 36,
            "ArtistName": "Japandroids"
        },
        {
            "id": 44,
            "AlbumName": "An American Prayer",
            "NumberOfTracks": 23,
            "ReleaseYear": 2006,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 37,
            "ArtistName": "Jim Morrison and the Doors"
        },
        {
            "id": 45,
            "AlbumName": "Still",
            "NumberOfTracks": 0,
            "ReleaseYear": 1981,
            "Cost": 0,
            "Genre": "Pop",
            "ArtistID": 38,
            "ArtistName": "Joy Division"
        },
        {
            "id": 46,
            "AlbumName": "My Beautiful Dark Twisted Fantasy",
            "NumberOfTracks": 13,
            "ReleaseYear": 0,
            "Cost": 0,
            "Genre": "Rap & Hip-Hop",
            "ArtistID": 39,
            "ArtistName": "Kanye West"
        },
        {
            "id": 47,
            "AlbumName": "good kid, m.A.A.d city",
            "NumberOfTracks": 14,
            "ReleaseYear": 0,
            "Cost": 0,
            "Genre": "Rap & Hip-Hop",
            "ArtistID": 40,
            "ArtistName": "Kendrick Lamar"
        },
        {
            "id": 48,
            "AlbumName": "To Pimp A Butterfly [Explicit]",
            "NumberOfTracks": 17,
            "ReleaseYear": 2015,
            "Cost": 0,
            "Genre": "Rap & Hip-Hop",
            "ArtistID": 40,
            "ArtistName": "Kendrick Lamar"
        },
        {
            "id": 49,
            "AlbumName": "Paper Mâché Dream Balloon",
            "NumberOfTracks": 12,
            "ReleaseYear": 2015,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 41,
            "ArtistName": "King Gizzard & The Lizard Wizard"
        },
        {
            "id": 50,
            "AlbumName": "Simple Dreams",
            "NumberOfTracks": 10,
            "ReleaseYear": 2006,
            "Cost": 0,
            "Genre": "Pop",
            "ArtistID": 42,
            "ArtistName": "Linda Ronstadt"
        },
        {
            "id": 51,
            "AlbumName": "Throwing Copper",
            "NumberOfTracks": 14,
            "ReleaseYear": 0,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 43,
            "ArtistName": "Live"
        },
        {
            "id": 52,
            "AlbumName": "Radio",
            "NumberOfTracks": 0,
            "ReleaseYear": 2013,
            "Cost": 0,
            "Genre": "Rap & Hip-Hop",
            "ArtistID": 44,
            "ArtistName": "LL Cool J"
        },
        {
            "id": 53,
            "AlbumName": "Berlin",
            "NumberOfTracks": 0,
            "ReleaseYear": 1998,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 45,
            "ArtistName": "Lou Reed"
        },
        {
            "id": 54,
            "AlbumName": "Express",
            "NumberOfTracks": 15,
            "ReleaseYear": 2001,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 46,
            "ArtistName": "Love And Rockets"
        },
        {
            "id": 55,
            "AlbumName": "Madvillainy",
            "NumberOfTracks": 22,
            "ReleaseYear": 2004,
            "Cost": 0,
            "Genre": "Rap & Hip-Hop",
            "ArtistID": 47,
            "ArtistName": "Madvillain"
        },
        {
            "id": 56,
            "AlbumName": "Children Of Desire",
            "NumberOfTracks": 6,
            "ReleaseYear": 2012,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 48,
            "ArtistName": "Merchandise"
        },
        {
            "id": 57,
            "AlbumName": "Totale Nite",
            "NumberOfTracks": 5,
            "ReleaseYear": 2013,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 48,
            "ArtistName": "Merchandise"
        },
        {
            "id": 58,
            "AlbumName": "Metz",
            "NumberOfTracks": 10,
            "ReleaseYear": 2012,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 49,
            "ArtistName": "METZ"
        },
        {
            "id": 59,
            "AlbumName": "Birth Of The Cool (Rudy Van Gelder Edition)",
            "NumberOfTracks": 12,
            "ReleaseYear": 2000,
            "Cost": 0,
            "Genre": "J-Jazz",
            "ArtistID": 50,
            "ArtistName": "Miles Davis"
        },
        {
            "id": 60,
            "AlbumName": "The Moon & Antarctica",
            "NumberOfTracks": 19,
            "ReleaseYear": 2004,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 51,
            "ArtistName": "Modest Mouse"
        },
        {
            "id": 61,
            "AlbumName": "New Rituals",
            "NumberOfTracks": 11,
            "ReleaseYear": 2010,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 52,
            "ArtistName": "Mondo Drag"
        },
        {
            "id": 62,
            "AlbumName": "Illmatic",
            "NumberOfTracks": 10,
            "ReleaseYear": 2013,
            "Cost": 0,
            "Genre": "Rap & Hip-Hop",
            "ArtistID": 53,
            "ArtistName": "Nas"
        },
        {
            "id": 63,
            "AlbumName": "Power, Corruption & Lies",
            "NumberOfTracks": 8,
            "ReleaseYear": 1985,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 54,
            "ArtistName": "New Order"
        },
        {
            "id": 64,
            "AlbumName": "With Teeth",
            "NumberOfTracks": 13,
            "ReleaseYear": 2005,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 55,
            "ArtistName": "Nine Inch Nails"
        },
        {
            "id": 65,
            "AlbumName": "[What's The Story] Morning Glory",
            "NumberOfTracks": 12,
            "ReleaseYear": 1995,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 56,
            "ArtistName": "Oasis"
        },
        {
            "id": 66,
            "AlbumName": "Honeys",
            "NumberOfTracks": 12,
            "ReleaseYear": 2013,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 57,
            "ArtistName": "Pissed Jeans"
        },
        {
            "id": 67,
            "AlbumName": "EP1",
            "NumberOfTracks": 4,
            "ReleaseYear": 2013,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 58,
            "ArtistName": "Pixies"
        },
        {
            "id": 68,
            "AlbumName": "Ep2",
            "NumberOfTracks": 4,
            "ReleaseYear": 2014,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 58,
            "ArtistName": "Pixies"
        },
        {
            "id": 69,
            "AlbumName": "Indie Cindy",
            "NumberOfTracks": 12,
            "ReleaseYear": 2014,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 58,
            "ArtistName": "Pixies"
        },
        {
            "id": 70,
            "AlbumName": "Let England Shake",
            "NumberOfTracks": 12,
            "ReleaseYear": 2011,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 59,
            "ArtistName": "PJ Harvey"
        },
        {
            "id": 71,
            "AlbumName": "Get Close",
            "NumberOfTracks": 11,
            "ReleaseYear": 2004,
            "Cost": 0,
            "Genre": "Pop",
            "ArtistID": 60,
            "ArtistName": "Pretenders"
        },
        {
            "id": 72,
            "AlbumName": "Learning To Crawl",
            "NumberOfTracks": 10,
            "ReleaseYear": 2006,
            "Cost": 0,
            "Genre": "Pop",
            "ArtistID": 60,
            "ArtistName": "Pretenders"
        },
        {
            "id": 73,
            "AlbumName": "Pretenders II",
            "NumberOfTracks": 12,
            "ReleaseYear": 1981,
            "Cost": 0,
            "Genre": "Pop",
            "ArtistID": 60,
            "ArtistName": "Pretenders"
        },
        {
            "id": 74,
            "AlbumName": "Pretenders",
            "NumberOfTracks": 26,
            "ReleaseYear": 1980,
            "Cost": 0,
            "Genre": "Pop",
            "ArtistID": 60,
            "ArtistName": "Pretenders"
        },
        {
            "id": 75,
            "AlbumName": "Green Naugahyde",
            "NumberOfTracks": 14,
            "ReleaseYear": 2011,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 61,
            "ArtistName": "Primus"
        },
        {
            "id": 76,
            "AlbumName": "It Takes A Nation Of Millions To Hold Us Back",
            "NumberOfTracks": 0,
            "ReleaseYear": 1995,
            "Cost": 0,
            "Genre": "Pop",
            "ArtistID": 62,
            "ArtistName": "Public Enemy"
        },
        {
            "id": 77,
            "AlbumName": "Yo! Bum Rush The Show",
            "NumberOfTracks": 12,
            "ReleaseYear": 1995,
            "Cost": 0,
            "Genre": "Rap & Hip-Hop",
            "ArtistID": 62,
            "ArtistName": "Public Enemy"
        },
        {
            "id": 78,
            "AlbumName": "Queen 40",
            "NumberOfTracks": 10,
            "ReleaseYear": 2011,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 63,
            "ArtistName": "Queen"
        },
        {
            "id": 79,
            "AlbumName": "Freaky Styley",
            "NumberOfTracks": 18,
            "ReleaseYear": 2005,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 64,
            "ArtistName": "Red Hot Chili Peppers"
        },
        {
            "id": 80,
            "AlbumName": "Beers, Steers + Queers",
            "NumberOfTracks": 13,
            "ReleaseYear": 2014,
            "Cost": 0,
            "Genre": "Dance & DJ",
            "ArtistID": 65,
            "ArtistName": "Revolting Cocks"
        },
        {
            "id": 81,
            "AlbumName": "Run the Jewels",
            "NumberOfTracks": 10,
            "ReleaseYear": 2014,
            "Cost": 0,
            "Genre": "Rap & Hip-Hop",
            "ArtistID": 66,
            "ArtistName": "Run The Jewels"
        },
        {
            "id": 82,
            "AlbumName": "Raising Hell",
            "NumberOfTracks": 12,
            "ReleaseYear": 1999,
            "Cost": 0,
            "Genre": "Rap & Hip-Hop",
            "ArtistID": 67,
            "ArtistName": "RUN-DMC"
        },
        {
            "id": 83,
            "AlbumName": "Silver Apples",
            "NumberOfTracks": 18,
            "ReleaseYear": 1997,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 68,
            "ArtistName": "Silver Apples"
        },
        {
            "id": 84,
            "AlbumName": "Sounds Of Silence",
            "NumberOfTracks": 15,
            "ReleaseYear": 2001,
            "Cost": 0,
            "Genre": "Pop",
            "ArtistID": 69,
            "ArtistName": "Simon & Garfunkel"
        },
        {
            "id": 85,
            "AlbumName": "The Great Adventures Of Slick Rick",
            "NumberOfTracks": 12,
            "ReleaseYear": 1995,
            "Cost": 0,
            "Genre": "Rap & Hip-Hop",
            "ArtistID": 70,
            "ArtistName": "Slick Rick"
        },
        {
            "id": 86,
            "AlbumName": "Doggystyle",
            "NumberOfTracks": 13,
            "ReleaseYear": 2001,
            "Cost": 0,
            "Genre": "Rap & Hip-Hop",
            "ArtistID": 71,
            "ArtistName": "Snoop Doggy Dogg"
        },
        {
            "id": 87,
            "AlbumName": "Kilroy Was Here",
            "NumberOfTracks": 9,
            "ReleaseYear": 0,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 72,
            "ArtistName": "Styx"
        },
        {
            "id": 88,
            "AlbumName": "Carrie & Lowell",
            "NumberOfTracks": 11,
            "ReleaseYear": 2015,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 73,
            "ArtistName": "Sufjan Stevens"
        },
        {
            "id": 89,
            "AlbumName": "Michigan",
            "NumberOfTracks": 15,
            "ReleaseYear": 2003,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 73,
            "ArtistName": "Sufjan Stevens"
        },
        {
            "id": 90,
            "AlbumName": "The Age of Adz",
            "NumberOfTracks": 11,
            "ReleaseYear": 2010,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 73,
            "ArtistName": "Sufjan Stevens"
        },
        {
            "id": 91,
            "AlbumName": "The Seer",
            "NumberOfTracks": 4,
            "ReleaseYear": 2012,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 74,
            "ArtistName": "Swans"
        },
        {
            "id": 92,
            "AlbumName": "To Be Kind",
            "NumberOfTracks": 5,
            "ReleaseYear": 2014,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 74,
            "ArtistName": "Swans"
        },
        {
            "id": 93,
            "AlbumName": "InnerSpeaker",
            "NumberOfTracks": 0,
            "ReleaseYear": 2011,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 75,
            "ArtistName": "Tame Impala"
        },
        {
            "id": 94,
            "AlbumName": "Lonerism",
            "NumberOfTracks": 12,
            "ReleaseYear": 2013,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 75,
            "ArtistName": "Tame Impala"
        },
        {
            "id": 95,
            "AlbumName": "Easter Everywhere",
            "NumberOfTracks": 20,
            "ReleaseYear": 2006,
            "Cost": 0,
            "Genre": "Soundtracks",
            "ArtistID": 76,
            "ArtistName": "The 13th Floor Elevators"
        },
        {
            "id": 96,
            "AlbumName": "Hot Sauce Committee Part Two",
            "NumberOfTracks": 16,
            "ReleaseYear": 2011,
            "Cost": 0,
            "Genre": "Rap & Hip-Hop",
            "ArtistID": 77,
            "ArtistName": "The Beastie Boys"
        },
        {
            "id": 97,
            "AlbumName": "Complete Greatest Hits",
            "NumberOfTracks": 20,
            "ReleaseYear": 2002,
            "Cost": 0,
            "Genre": "Pop",
            "ArtistID": 78,
            "ArtistName": "The Cars"
        },
        {
            "id": 98,
            "AlbumName": "Script Of The Bridge - 25th Anniversary Edition",
            "NumberOfTracks": 12,
            "ReleaseYear": 2008,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 79,
            "ArtistName": "The Chameleons"
        },
        {
            "id": 99,
            "AlbumName": "Psychedelic Jungle",
            "NumberOfTracks": 14,
            "ReleaseYear": 2003,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 80,
            "ArtistName": "The Cramps"
        },
        {
            "id": 100,
            "AlbumName": "Songs The Lord Taught Us",
            "NumberOfTracks": 18,
            "ReleaseYear": 2003,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 80,
            "ArtistName": "The Cramps"
        },
        {
            "id": 101,
            "AlbumName": "The Crow (Original Motion Picture Soundtrack)",
            "NumberOfTracks": 14,
            "ReleaseYear": 1994,
            "Cost": 0,
            "Genre": "Soundtracks",
            "ArtistID": 81,
            "ArtistName": "The Crow"
        },
        {
            "id": 102,
            "AlbumName": "Faith",
            "NumberOfTracks": 8,
            "ReleaseYear": 2004,
            "Cost": 0,
            "Genre": "Pop",
            "ArtistID": 82,
            "ArtistName": "The Cure"
        },
        {
            "id": 103,
            "AlbumName": "Seventeen Seconds",
            "NumberOfTracks": 10,
            "ReleaseYear": 1980,
            "Cost": 0,
            "Genre": "Pop",
            "ArtistID": 82,
            "ArtistName": "The Cure"
        },
        {
            "id": 104,
            "AlbumName": "The Cure",
            "NumberOfTracks": 11,
            "ReleaseYear": 2004,
            "Cost": 0,
            "Genre": "Pop",
            "ArtistID": 82,
            "ArtistName": "The Cure"
        },
        {
            "id": 105,
            "AlbumName": "The Head On The Door",
            "NumberOfTracks": 10,
            "ReleaseYear": 2008,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 82,
            "ArtistName": "The Cure"
        },
        {
            "id": 106,
            "AlbumName": "Three Imaginary Boys",
            "NumberOfTracks": 13,
            "ReleaseYear": 2008,
            "Cost": 0,
            "Genre": "Pop",
            "ArtistID": 82,
            "ArtistName": "The Cure"
        },
        {
            "id": 107,
            "AlbumName": "Big Lizard In My Back Yard",
            "NumberOfTracks": 21,
            "ReleaseYear": 1985,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 83,
            "ArtistName": "The Dead Milkmen"
        },
        {
            "id": 108,
            "AlbumName": "This Nation's Saving Grace",
            "NumberOfTracks": 16,
            "ReleaseYear": 1985,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 84,
            "ArtistName": "The Fall"
        },
        {
            "id": 109,
            "AlbumName": "The Terror",
            "NumberOfTracks": 10,
            "ReleaseYear": 2013,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 85,
            "ArtistName": "The Flaming Lips"
        },
        {
            "id": 110,
            "AlbumName": "Beauty And The Beat",
            "NumberOfTracks": 17,
            "ReleaseYear": 2011,
            "Cost": 0,
            "Genre": "Pop",
            "ArtistID": 86,
            "ArtistName": "The Go-Go's"
        },
        {
            "id": 111,
            "AlbumName": "Cherry Tree",
            "NumberOfTracks": 7,
            "ReleaseYear": 2009,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 87,
            "ArtistName": "The National"
        },
        {
            "id": 112,
            "AlbumName": "High Violet",
            "NumberOfTracks": 11,
            "ReleaseYear": 2010,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 87,
            "ArtistName": "The National"
        },
        {
            "id": 113,
            "AlbumName": "Trouble Will Find Me",
            "NumberOfTracks": 13,
            "ReleaseYear": 2013,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 87,
            "ArtistName": "The National"
        },
        {
            "id": 114,
            "AlbumName": "Don't Tell A Soul",
            "NumberOfTracks": 11,
            "ReleaseYear": 1989,
            "Cost": 0,
            "Genre": "Pop",
            "ArtistID": 88,
            "ArtistName": "The Replacements"
        },
        {
            "id": 115,
            "AlbumName": "Sorry Ma, Forgot To Take Out The Trash!",
            "NumberOfTracks": 0,
            "ReleaseYear": 1981,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 88,
            "ArtistName": "The Replacements"
        },
        {
            "id": 116,
            "AlbumName": "Emotional Rescue",
            "NumberOfTracks": 10,
            "ReleaseYear": 2009,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 89,
            "ArtistName": "The Rolling Stones"
        },
        {
            "id": 117,
            "AlbumName": "Some Girls",
            "NumberOfTracks": 10,
            "ReleaseYear": 2011,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 89,
            "ArtistName": "The Rolling Stones"
        },
        {
            "id": 118,
            "AlbumName": "Tattoo You",
            "NumberOfTracks": 11,
            "ReleaseYear": 2009,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 89,
            "ArtistName": "The Rolling Stones"
        },
        {
            "id": 119,
            "AlbumName": "Meat Is Murder",
            "NumberOfTracks": 9,
            "ReleaseYear": 2001,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 90,
            "ArtistName": "The Smiths"
        },
        {
            "id": 120,
            "AlbumName": "The Smiths",
            "NumberOfTracks": 11,
            "ReleaseYear": 2001,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 90,
            "ArtistName": "The Smiths"
        },
        {
            "id": 121,
            "AlbumName": "Underwater Moonlight",
            "NumberOfTracks": 40,
            "ReleaseYear": 2010,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 91,
            "ArtistName": "The Soft Boys"
        },
        {
            "id": 122,
            "AlbumName": "Face Dances",
            "NumberOfTracks": 14,
            "ReleaseYear": 1997,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 92,
            "ArtistName": "The Who"
        },
        {
            "id": 123,
            "AlbumName": "Carrion Crawler / The Dream",
            "NumberOfTracks": 10,
            "ReleaseYear": 2011,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 93,
            "ArtistName": "Thee Oh Sees"
        },
        {
            "id": 124,
            "AlbumName": "Floating Coffin",
            "NumberOfTracks": 10,
            "ReleaseYear": 2013,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 93,
            "ArtistName": "Thee Oh Sees"
        },
        {
            "id": 125,
            "AlbumName": "Mutilator Defeated At Last",
            "NumberOfTracks": 9,
            "ReleaseYear": 2015,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 93,
            "ArtistName": "Thee Oh Sees"
        },
        {
            "id": 126,
            "AlbumName": "The Master's Bedroom Is Worth Spending A Night In",
            "NumberOfTracks": 15,
            "ReleaseYear": 2008,
            "Cost": 0,
            "Genre": "Alternative Rock",
            "ArtistID": 93,
            "ArtistName": "Thee Oh Sees"
        },
        {
            "id": 127,
            "AlbumName": "Rain Dogs",
            "NumberOfTracks": 19,
            "ReleaseYear": 1990,
            "Cost": 0,
            "Genre": "Pop",
            "ArtistID": 94,
            "ArtistName": "Tom Waits"
        },
        {
            "id": 128,
            "AlbumName": "Crimson & Clover",
            "NumberOfTracks": 10,
            "ReleaseYear": 2005,
            "Cost": 0,
            "Genre": "Pop",
            "ArtistID": 95,
            "ArtistName": "Tommy James And The Shondells"
        },
        {
            "id": 129,
            "AlbumName": "Manipulator",
            "NumberOfTracks": 17,
            "ReleaseYear": 2014,
            "Cost": 0,
            "Genre": "Rock",
            "ArtistID": 96,
            "ArtistName": "Ty Segall"
        },
        {
            "id": 130,
            "AlbumName": "Enter The Wu-Tang",
            "NumberOfTracks": 12,
            "ReleaseYear": 2013,
            "Cost": 0,
            "Genre": "Rap & Hip-Hop",
            "ArtistID": 97,
            "ArtistName": "Wu-Tang Clan"
        }
    ];
    const tracks = [

    ];

    return {artists, albums, tracks};
  }
}