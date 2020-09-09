const express =require('express');
const { ROUTE_CONSTANTS } = require('./helpers/route_constants');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.get(ROUTE_CONSTANTS.DEFAULT,function(req,res){
res.send("<h1>welcome to pega</h1>")
})
app.get(ROUTE_CONSTANTS.GET_LOGIN,function(req,res){
    res.sendFile(__dirname+'/pages/login.html')
})
app.get(ROUTE_CONSTANTS.GET_REGISTER,function(req,res){
    res.sendFile(__dirname+'/pages/register.html')
})
app.post(ROUTE_CONSTANTS.POST_LOGIN,function(req,res){
    console.log(req.body);
    res.send("successfully logged in");
})
app.get(ROUTE_CONSTANTS.GET_PRODUCTS,function(req,res){
    const productsData=[
        [
            {
              "_id": "5f586109ad36edb7157cbbfa",
              "index": 0,
              "guid": "3f2226e7-43d5-46b6-8046-a34f0ffa9ade",
              "isActive": false,
              "balance": "$1,331.97",
              "picture": "http://placehold.it/32x32",
              "age": 30,
              "eyeColor": "green",
              "name": "Vasquez Perkins",
              "gender": "male",
              "company": "ECLIPSENT",
              "email": "vasquezperkins@eclipsent.com",
              "phone": "+1 (879) 505-2143",
              "address": "165 Hegeman Avenue, Soham, West Virginia, 2462",
              "about": "Pariatur tempor officia laborum officia sit labore et. Tempor et dolore cupidatat proident do incididunt. Nisi laborum officia sit ipsum incididunt non magna ipsum non ut elit laborum dolore. Est incididunt fugiat aute aute. Lorem magna consectetur mollit laboris tempor elit fugiat elit officia occaecat consequat labore elit pariatur. Fugiat labore excepteur est esse minim consequat nostrud sunt velit cupidatat officia.\r\n",
              "registered": "2019-08-01T07:13:00 -06:-30",
              "latitude": 58.724987,
              "longitude": 121.418616,
              "tags": [
                "cillum",
                "aliquip",
                "laboris",
                "pariatur",
                "dolor",
                "dolore",
                "incididunt"
              ],
              "friends": [
                {
                  "id": 0,
                  "name": "Hampton Rice"
                },
                {
                  "id": 1,
                  "name": "Wilson Simmons"
                },
                {
                  "id": 2,
                  "name": "Eaton Hewitt"
                }
              ],
              "greeting": "Hello, Vasquez Perkins! You have 1 unread messages.",
              "favoriteFruit": "banana"
            },
            {
              "_id": "5f586109858a2c1412916703",
              "index": 1,
              "guid": "6b55b8b0-9546-413a-99e6-7e60d103d877",
              "isActive": true,
              "balance": "$2,535.73",
              "picture": "http://placehold.it/32x32",
              "age": 22,
              "eyeColor": "blue",
              "name": "Carrie Mcfadden",
              "gender": "female",
              "company": "INSURESYS",
              "email": "carriemcfadden@insuresys.com",
              "phone": "+1 (815) 557-3740",
              "address": "917 Boynton Place, Kylertown, Oregon, 6890",
              "about": "Nostrud aliquip incididunt sit et ex laboris in aliquip laboris. Mollit eiusmod exercitation veniam ipsum cupidatat sunt mollit ad. Ullamco reprehenderit qui amet do nostrud. Ullamco nostrud ad elit consectetur duis aliquip non. Et elit magna ad nulla nisi. Proident officia reprehenderit magna reprehenderit aliqua mollit veniam adipisicing deserunt adipisicing non irure Lorem incididunt. Dolore anim cillum enim tempor eiusmod tempor fugiat dolore ex consectetur sint sit.\r\n",
              "registered": "2020-06-22T09:22:36 -06:-30",
              "latitude": 7.108382,
              "longitude": 21.98879,
              "tags": [
                "ut",
                "in",
                "nulla",
                "consectetur",
                "dolore",
                "adipisicing",
                "anim"
              ],
              "friends": [
                {
                  "id": 0,
                  "name": "Rich Santiago"
                },
                {
                  "id": 1,
                  "name": "Herminia Morton"
                },
                {
                  "id": 2,
                  "name": "Daugherty Jacobs"
                }
              ],
              "greeting": "Hello, Carrie Mcfadden! You have 6 unread messages.",
              "favoriteFruit": "strawberry"
            },
            {
              "_id": "5f586109da43c1e68f73e6ae",
              "index": 2,
              "guid": "602837c5-1a04-4e00-b000-53deab6f2f6e",
              "isActive": true,
              "balance": "$1,692.83",
              "picture": "http://placehold.it/32x32",
              "age": 28,
              "eyeColor": "brown",
              "name": "Davis Price",
              "gender": "male",
              "company": "QNEKT",
              "email": "davisprice@qnekt.com",
              "phone": "+1 (990) 576-2593",
              "address": "608 Forrest Street, Bascom, Virginia, 6164",
              "about": "Incididunt aliqua aliquip aliquip do. Veniam aliqua ea esse magna deserunt ad eiusmod. Duis veniam et voluptate sit officia aute labore eu Lorem do nostrud laboris occaecat. Laborum sunt eiusmod adipisicing ullamco eiusmod dolore culpa est pariatur exercitation dolor sunt amet. Aliquip proident tempor sit do ullamco nisi.\r\n",
              "registered": "2016-09-14T01:54:06 -06:-30",
              "latitude": 70.582678,
              "longitude": 145.918797,
              "tags": [
                "deserunt",
                "dolor",
                "sit",
                "adipisicing",
                "exercitation",
                "consectetur",
                "laboris"
              ],
              "friends": [
                {
                  "id": 0,
                  "name": "Moore Berry"
                },
                {
                  "id": 1,
                  "name": "Melva Britt"
                },
                {
                  "id": 2,
                  "name": "Teri Valdez"
                }
              ],
              "greeting": "Hello, Davis Price! You have 1 unread messages.",
              "favoriteFruit": "banana"
            },
            {
              "_id": "5f586109164362f016577628",
              "index": 3,
              "guid": "7e4faa9a-8a08-45c1-8463-e7c530a26152",
              "isActive": false,
              "balance": "$3,985.16",
              "picture": "http://placehold.it/32x32",
              "age": 22,
              "eyeColor": "blue",
              "name": "Albert Kelley",
              "gender": "male",
              "company": "UNCORP",
              "email": "albertkelley@uncorp.com",
              "phone": "+1 (901) 564-3765",
              "address": "732 Sumpter Street, Maury, Idaho, 4780",
              "about": "Amet labore dolor aliqua nostrud magna deserunt elit sunt minim. Labore nisi eu nulla aliqua magna aliqua eiusmod incididunt cupidatat incididunt. Excepteur eiusmod anim Lorem elit ut labore dolore ullamco voluptate.\r\n",
              "registered": "2014-07-19T01:07:42 -06:-30",
              "latitude": 39.565165,
              "longitude": -28.700977,
              "tags": [
                "tempor",
                "enim",
                "cupidatat",
                "dolore",
                "quis",
                "id",
                "Lorem"
              ],
              "friends": [
                {
                  "id": 0,
                  "name": "Finley Pierce"
                },
                {
                  "id": 1,
                  "name": "Janell Hoover"
                },
                {
                  "id": 2,
                  "name": "Tanisha Harper"
                }
              ],
              "greeting": "Hello, Albert Kelley! You have 7 unread messages.",
              "favoriteFruit": "apple"
            },
            {
              "_id": "5f586109c9a60486ee5df2a4",
              "index": 4,
              "guid": "de18eca1-ec8e-45c4-a3e4-bbd2863b7da4",
              "isActive": false,
              "balance": "$2,796.12",
              "picture": "http://placehold.it/32x32",
              "age": 36,
              "eyeColor": "brown",
              "name": "Burgess Haynes",
              "gender": "male",
              "company": "ZILLAR",
              "email": "burgesshaynes@zillar.com",
              "phone": "+1 (983) 529-2142",
              "address": "929 Brightwater Avenue, Allensworth, Massachusetts, 1407",
              "about": "Duis sunt dolore consequat exercitation non officia irure eiusmod magna deserunt nisi. Quis culpa consectetur ea culpa occaecat ut quis elit non laborum consectetur aliqua magna enim. Commodo non anim cupidatat velit mollit ad nisi. Fugiat occaecat do minim consequat dolor commodo officia exercitation nostrud magna officia minim cupidatat.\r\n",
              "registered": "2019-01-19T04:01:50 -06:-30",
              "latitude": -13.101505,
              "longitude": 97.798165,
              "tags": [
                "ullamco",
                "Lorem",
                "irure",
                "tempor",
                "ea",
                "id",
                "aliqua"
              ],
              "friends": [
                {
                  "id": 0,
                  "name": "Mcintosh Dillon"
                },
                {
                  "id": 1,
                  "name": "Mccormick Shaw"
                },
                {
                  "id": 2,
                  "name": "Hopper Yang"
                }
              ],
              "greeting": "Hello, Burgess Haynes! You have 7 unread messages.",
              "favoriteFruit": "apple"
            },
            {
              "_id": "5f586109e66d6ddfeba608e5",
              "index": 5,
              "guid": "c198b971-d2e2-43f4-baed-7b9cfc29cffa",
              "isActive": false,
              "balance": "$2,246.23",
              "picture": "http://placehold.it/32x32",
              "age": 29,
              "eyeColor": "green",
              "name": "Pittman Warren",
              "gender": "male",
              "company": "UNI",
              "email": "pittmanwarren@uni.com",
              "phone": "+1 (988) 464-3209",
              "address": "703 Wilson Street, Epworth, Puerto Rico, 4620",
              "about": "Do mollit irure ex pariatur ex est et elit eiusmod laborum. Mollit Lorem eiusmod irure reprehenderit excepteur. Laboris velit sunt aliqua tempor Lorem.\r\n",
              "registered": "2019-05-12T07:05:32 -06:-30",
              "latitude": 6.648828,
              "longitude": 105.019794,
              "tags": [
                "esse",
                "qui",
                "duis",
                "Lorem",
                "proident",
                "anim",
                "ipsum"
              ],
              "friends": [
                {
                  "id": 0,
                  "name": "Helga Hardy"
                },
                {
                  "id": 1,
                  "name": "Minnie Schwartz"
                },
                {
                  "id": 2,
                  "name": "Maribel Leonard"
                }
              ],
              "greeting": "Hello, Pittman Warren! You have 5 unread messages.",
              "favoriteFruit": "banana"
            },
            {
              "_id": "5f5861092a8c0be04ed40a82",
              "index": 6,
              "guid": "c8209dc6-38de-4e43-a552-5ca1c726cf15",
              "isActive": true,
              "balance": "$1,199.56",
              "picture": "http://placehold.it/32x32",
              "age": 29,
              "eyeColor": "blue",
              "name": "Megan Wilcox",
              "gender": "female",
              "company": "HAIRPORT",
              "email": "meganwilcox@hairport.com",
              "phone": "+1 (958) 403-2029",
              "address": "443 Ryerson Street, Calvary, Kentucky, 5969",
              "about": "Occaecat velit veniam nulla aliqua velit eu. Cillum veniam ullamco excepteur cupidatat amet tempor deserunt eu labore in aliquip. Magna ullamco dolore exercitation nostrud nostrud nostrud consectetur commodo ea in fugiat in do esse. Ut nulla enim cillum laborum irure cupidatat fugiat incididunt. Pariatur reprehenderit veniam est pariatur id proident sunt sint elit enim.\r\n",
              "registered": "2018-01-24T12:36:17 -06:-30",
              "latitude": -16.641827,
              "longitude": 167.878133,
              "tags": [
                "in",
                "exercitation",
                "mollit",
                "in",
                "aliqua",
                "ea",
                "nulla"
              ],
              "friends": [
                {
                  "id": 0,
                  "name": "Roberson Miller"
                },
                {
                  "id": 1,
                  "name": "James Maynard"
                },
                {
                  "id": 2,
                  "name": "Hansen Hampton"
                }
              ],
              "greeting": "Hello, Megan Wilcox! You have 4 unread messages.",
              "favoriteFruit": "banana"
            }
          ]

    ];
    res.json(productsData);
    res.send("<h1>welcome to products page</h1>")
})
app.listen(3000);