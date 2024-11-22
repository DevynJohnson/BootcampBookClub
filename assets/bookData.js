const bookData = [
    {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1708114013i/37781.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1691164949i/8422222.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    },
    {
      "author": "Dante Alighieri",
      "country": "Italy",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1462220704i/6655.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
    },
    {
      "author": "Unknown",
      "country": "Sumer and Akkadian Empire",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388287904i/19351.jpg",
      "language": "Akkadian",
      "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "year": -1700
    },
    {
      "author": "Unknown",
      "country": "Achaemenid Empire",
      "imageLink": "https://m.media-amazon.com/images/I/81htOJsRyXL._AC_UF1000,1000_QL80_.jpg",
      "language": "Hebrew",
      "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
      "pages": 176,
      "title": "The Book Of Job",
      "year": -600
    },
    {
      "author": "Unknown",
      "country": "India/Iran/Iraq/Egypt/Tajikistan",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1436162131i/21524446.jpg",
      "language": "Arabic",
      "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
      "pages": 288,
      "title": "One Thousand and One Nights",
      "year": 1200
    },
    {
      "author": "Unknown",
      "country": "Iceland",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1504227050i/36159839.jpg",
      "language": "Old Norse",
      "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
      "pages": 384,
      "title": "Nj\u00e1l's Saga",
      "year": 1350
    },
    {
      "author": "Jane Austen",
      "country": "United Kingdom",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
      "pages": 226,
      "title": "Pride and Prejudice",
      "year": 1813
    },
    {
      "author": "Honor\u00e9 de Balzac",
      "country": "France",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1389768126i/59145.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
      "pages": 443,
      "title": "Le P\u00e8re Goriot",
      "year": 1835
    },
    {
      "author": "Samuel Beckett",
      "country": "Republic of Ireland",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1645833303i/12279.jpg",
      "language": "French, English",
      "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
      "pages": 256,
      "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
      "year": 1952
    },
    {
      "author": "Giovanni Boccaccio",
      "country": "Italy",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1472027832i/51799.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/The_Decameron\n",
      "pages": 1024,
      "title": "The Decameron",
      "year": 1351
    },
    {
      "author": "Jorge Luis Borges",
      "country": "Argentina",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1621713120i/426504.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Ficciones\n",
      "pages": 224,
      "title": "Ficciones",
      "year": 1965
    },
    {
      "author": "Emily Bront\u00eb",
      "country": "United Kingdom",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1316731478i/17148.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
      "pages": 342,
      "title": "Wuthering Heights",
      "year": 1847
    },
    {
      "author": "Albert Camus",
      "country": "Algeria, French Empire",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1590930002i/49552.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/The_Stranger_(novel)\n",
      "pages": 185,
      "title": "The Stranger",
      "year": 1942
    },
    {
      "author": "Paul Celan",
      "country": "Romania, France",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1510933483i/1258536.jpg",
      "language": "German",
      "link": "\n",
      "pages": 320,
      "title": "Poems",
      "year": 1952
    },
    {
      "author": "Louis-Ferdinand C\u00e9line",
      "country": "France",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1585118052i/12395.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night\n",
      "pages": 505,
      "title": "Journey to the End of the Night",
      "year": 1932
    },
    {
      "author": "Miguel de Cervantes",
      "country": "Spain",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546112331i/3836.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Don_Quixote\n",
      "pages": 1056,
      "title": "Don Quijote De La Mancha",
      "year": 1610
    },
    {
      "author": "Geoffrey Chaucer",
      "country": "England",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1261208589i/2696.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Canterbury_Tales\n",
      "pages": 544,
      "title": "The Canterbury Tales",
      "year": 1450
    },
    {
      "author": "Anton Chekhov",
      "country": "Russia",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1500379840i/35699179.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov\n",
      "pages": 194,
      "title": "Stories",
      "year": 1886
    },
    {
      "author": "Joseph Conrad",
      "country": "United Kingdom",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328865264i/115476.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Nostromo\n",
      "pages": 320,
      "title": "Nostromo",
      "year": 1904
    },
    {
      "author": "Charles Dickens",
      "country": "United Kingdom",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631687432i/2623.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Great_Expectations\n",
      "pages": 194,
      "title": "Great Expectations",
      "year": 1861
    },
    {
      "author": "Denis Diderot",
      "country": "France",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386925793i/18212.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Jacques_the_Fatalist\n",
      "pages": 596,
      "title": "Jacques the Fatalist",
      "year": 1796
    },
    {
      "author": "Alfred D\u00f6blin",
      "country": "Germany",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1298025058i/243381.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/Berlin_Alexanderplatz\n",
      "pages": 600,
      "title": "Berlin Alexanderplatz",
      "year": 1929
    },
    {
      "author": "Fyodor Dostoevsky",
      "country": "Russia",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1382846449i/7144.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/Crime_and_Punishment\n",
      "pages": 551,
      "title": "Crime and Punishment",
      "year": 1866
    },
    {
      "author": "Fyodor Dostoevsky",
      "country": "Russia",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657539107i/12505.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/The_Idiot\n",
      "pages": 656,
      "title": "The Idiot",
      "year": 1869
    },
    {
      "author": "Fyodor Dostoevsky",
      "country": "Russia",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1524586008i/5695.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)\n",
      "pages": 768,
      "title": "Demons",
      "year": 1872
    },
    {
      "author": "Fyodor Dostoevsky",
      "country": "Russia",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1427728126i/4934.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/The_Brothers_Karamazov\n",
      "pages": 824,
      "title": "The Brothers Karamazov",
      "year": 1880
    },
    {
      "author": "George Eliot",
      "country": "United Kingdom",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1568307771i/19089.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Middlemarch\n",
      "pages": 800,
      "title": "Middlemarch",
      "year": 1871
    },
    {
      "author": "Ralph Ellison",
      "country": "United States",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1556482805i/16981.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Invisible_Man\n",
      "pages": 581,
      "title": "Invisible Man",
      "year": 1952
    },
    {
      "author": "Euripides",
      "country": "Greece",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328868366i/752900.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Medea_(play)\n",
      "pages": 104,
      "title": "Medea",
      "year": -431
    },
    {
      "author": "William Faulkner",
      "country": "United States",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388474680i/373755.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Absalom,_Absalom!\n",
      "pages": 313,
      "title": "Absalom, Absalom!",
      "year": 1936
    },
    {
      "author": "William Faulkner",
      "country": "United States",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388474680i/373755.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Sound_and_the_Fury\n",
      "pages": 326,
      "title": "The Sound and the Fury",
      "year": 1929
    },
    {
      "author": "Gustave Flaubert",
      "country": "France",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1606770119i/2175.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Madame_Bovary\n",
      "pages": 528,
      "title": "Madame Bovary",
      "year": 1857
    },
    {
      "author": "Gustave Flaubert",
      "country": "France",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1688719735i/2183.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Sentimental_Education\n",
      "pages": 606,
      "title": "Sentimental Education",
      "year": 1869
    },
    {
      "author": "Federico Garc\u00eda Lorca",
      "country": "Spain",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1178301202i/782581.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Gypsy_Ballads\n",
      "pages": 218,
      "title": "Gypsy Ballads",
      "year": 1928
    },
    {
      "author": "Gabriel Garc\u00eda M\u00e1rquez",
      "country": "Colombia",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327881361i/320.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude\n",
      "pages": 417,
      "title": "One Hundred Years of Solitude",
      "year": 1967
    },
    {
      "author": "Gabriel Garc\u00eda M\u00e1rquez",
      "country": "Colombia",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1644691354i/9712.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera\n",
      "pages": 368,
      "title": "Love in the Time of Cholera",
      "year": 1985
    },
    {
      "author": "Johann Wolfgang von Goethe",
      "country": "Saxe-Weimar",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1435405022i/14706.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/Goethe%27s_Faust\n",
      "pages": 158,
      "title": "Faust",
      "year": 1832
    },
    {
      "author": "Nikolai Gogol",
      "country": "Russia",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387201057i/28381.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/Dead_Souls\n",
      "pages": 432,
      "title": "Dead Souls",
      "year": 1842
    },
    {
      "author": "G\u00fcnter Grass",
      "country": "Germany",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327945103i/35743.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Tin_Drum\n",
      "pages": 600,
      "title": "The Tin Drum",
      "year": 1959
    },
    {
      "author": "Jo\u00e3o Guimar\u00e3es Rosa",
      "country": "Brazil",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1223320051i/165017.jpg",
      "language": "Portuguese",
      "link": "https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands\n",
      "pages": 494,
      "title": "The Devil to Pay in the Backlands",
      "year": 1956
    },
    {
      "author": "Knut Hamsun",
      "country": "Norway",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1456243307i/32585.jpg",
      "language": "Norwegian",
      "link": "https://en.wikipedia.org/wiki/Hunger_(Hamsun_novel)\n",
      "pages": 176,
      "title": "Hunger",
      "year": 1890
    },
    {
      "author": "Ernest Hemingway",
      "country": "United States",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1329189714i/2165.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea\n",
      "pages": 128,
      "title": "The Old Man and the Sea",
      "year": 1952
    },
    {
      "author": "Homer",
      "country": "Greece",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1681797700i/77265004.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Iliad\n",
      "pages": 608,
      "title": "Iliad",
      "year": -735
    },
    {
      "author": "Homer",
      "country": "Greece",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1711957706i/1381.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Odyssey\n",
      "pages": 374,
      "title": "Odyssey",
      "year": -800
    },
    {
      "author": "Henrik Ibsen",
      "country": "Norway",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660268136i/37793.jpg",
      "language": "Norwegian",
      "link": "https://en.wikipedia.org/wiki/A_Doll%27s_House\n",
      "pages": 68,
      "title": "A Doll's House",
      "year": 1879
    },
    {
      "author": "James Joyce",
      "country": "Irish Free State",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1428891345i/338798.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Ulysses_(novel)\n",
      "pages": 228,
      "title": "Ulysses",
      "year": 1922
    },
    {
      "author": "Franz Kafka",
      "country": "Czechoslovakia",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1699404134i/142577040.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/Franz_Kafka_bibliography#Short_stories\n",
      "pages": 488,
      "title": "Stories",
      "year": 1924
    },
    {
      "author": "Franz Kafka",
      "country": "Czechoslovakia",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399438i/17690.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Trial\n",
      "pages": 160,
      "title": "The Trial",
      "year": 1925
    },
    {
      "author": "Franz Kafka",
      "country": "Czechoslovakia",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646336042i/333538.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Castle_(novel)\n",
      "pages": 352,
      "title": "The Castle",
      "year": 1926
    },
    {
      "author": "K\u0101lid\u0101sa",
      "country": "India",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1438108149i/641936.jpg",
      "language": "Sanskrit",
      "link": "https://en.wikipedia.org/wiki/Abhij%C3%B1%C4%81na%C5%9B%C4%81kuntalam\n",
      "pages": 147,
      "title": "The recognition of Sakuntala",
      "year": 150
    },
    {
      "author": "Yasunari Kawabata",
      "country": "Japan",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1652456149i/59950.jpg",
      "language": "Japanese",
      "link": "https://en.wikipedia.org/wiki/The_Sound_of_the_Mountain\n",
      "pages": 288,
      "title": "The Sound of the Mountain",
      "year": 1954
    },
    {
      "author": "Nikos Kazantzakis",
      "country": "Greece",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1542885673i/53639.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Zorba_the_Greek\n",
      "pages": 368,
      "title": "Zorba the Greek",
      "year": 1946
    },
    {
      "author": "D. H. Lawrence",
      "country": "United Kingdom",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386924291i/32071.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Sons_and_Lovers\n",
      "pages": 432,
      "title": "Sons and Lovers",
      "year": 1913
    },
    {
      "author": "Halld\u00f3r Laxness",
      "country": "Iceland",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1282892439i/77287.jpg",
      "language": "Icelandic",
      "link": "https://en.wikipedia.org/wiki/Independent_People\n",
      "pages": 470,
      "title": "Independent People",
      "year": 1934
    },
    {
      "author": "Giacomo Leopardi",
      "country": "Italy",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1524622790i/39937596.jpg",
      "language": "Italian",
      "link": "\n",
      "pages": 184,
      "title": "Poems",
      "year": 1818
    },
    {
      "author": "Doris Lessing",
      "country": "United Kingdom",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1367457541i/24100.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Golden_Notebook\n",
      "pages": 688,
      "title": "The Golden Notebook",
      "year": 1962
    },
    {
      "author": "Astrid Lindgren",
      "country": "Sweden",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1519300455i/19302.jpg",
      "language": "Swedish",
      "link": "https://en.wikipedia.org/wiki/Pippi_Longstocking\n",
      "pages": 160,
      "title": "Pippi Longstocking",
      "year": 1945
    },
    {
      "author": "Lu Xun",
      "country": "China",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387707313i/127047.jpg",
      "language": "Chinese",
      "link": "https://en.wikipedia.org/wiki/A_Madman%27s_Diary\n",
      "pages": 389,
      "title": "Diary of a Madman",
      "year": 1918
    },
    {
      "author": "Naguib Mahfouz",
      "country": "Egypt",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1210123501i/134821.jpg",
      "language": "Arabic",
      "link": "https://en.wikipedia.org/wiki/Children_of_Gebelawi\n",
      "pages": 355,
      "title": "Children of Gebelawi",
      "year": 1959
    },
    {
      "author": "Thomas Mann",
      "country": "Germany",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1337128414i/80890.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/Buddenbrooks\n",
      "pages": 736,
      "title": "Buddenbrooks",
      "year": 1901
    },
    {
      "author": "Thomas Mann",
      "country": "Germany",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1645738968i/88077.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Magic_Mountain\n",
      "pages": 720,
      "title": "The Magic Mountain",
      "year": 1924
    },
    {
      "author": "Herman Melville",
      "country": "United States",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327940656i/153747.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Moby-Dick\n",
      "pages": 378,
      "title": "Moby Dick",
      "year": 1851
    },
    {
      "author": "Michel de Montaigne",
      "country": "France",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657542435i/30735.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Essays_(Montaigne)\n",
      "pages": 404,
      "title": "Essays",
      "year": 1595
    },
    {
      "author": "Elsa Morante",
      "country": "Italy",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388594061i/1158380.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/History_(novel)\n",
      "pages": 600,
      "title": "History",
      "year": 1974
    },
    {
      "author": "Toni Morrison",
      "country": "United States",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1722944318i/6149.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Beloved_(novel)\n",
      "pages": 321,
      "title": "Beloved",
      "year": 1987
    },
    {
      "author": "Murasaki Shikibu",
      "country": "Japan",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1403199662i/7048.jpg",
      "language": "Japanese",
      "link": "https://en.wikipedia.org/wiki/The_Tale_of_Genji\n",
      "pages": 1360,
      "title": "The Tale of Genji",
      "year": 1006
    },
    {
      "author": "Robert Musil",
      "country": "Austria",
      "imageLink": "",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Man_Without_Qualities\n",
      "pages": 365,
      "title": "The Man Without Qualities",
      "year": 1931
    },
    {
      "author": "Vladimir Nabokov",
      "country": "Russia/United States",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1647816500i/527756.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Lolita\n",
      "pages": 317,
      "title": "Lolita",
      "year": 1955
    },
    {
      "author": "George Orwell",
      "country": "United Kingdom",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four\n",
      "pages": 272,
      "title": "Nineteen Eighty-Four",
      "year": 1949
    },
    {
      "author": "Ovid",
      "country": "Roman Empire",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1622739150i/1715.jpg",
      "language": "Classical Latin",
      "link": "https://en.wikipedia.org/wiki/Metamorphoses\n",
      "pages": 576,
      "title": "Metamorphoses",
      "year": 100
    },
    {
      "author": "Fernando Pessoa",
      "country": "Portugal",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631144816i/45974.jpg",
      "language": "Portuguese",
      "link": "https://en.wikipedia.org/wiki/The_Book_of_Disquiet\n",
      "pages": 272,
      "title": "The Book of Disquiet",
      "year": 1928
    },
    {
      "author": "Edgar Allan Poe",
      "country": "United States",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1401301979i/22365679.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Edgar_Allan_Poe_bibliography#Tales\n",
      "pages": 842,
      "title": "Tales",
      "year": 1950
    },
    {
      "author": "Marcel Proust",
      "country": "France",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657567516i/18796.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/In_Search_of_Lost_Time\n",
      "pages": 2408,
      "title": "In Search of Lost Time",
      "year": 1920
    },
    {
      "author": "Fran\u00e7ois Rabelais",
      "country": "France",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1336964698i/18266.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel\n",
      "pages": 623,
      "title": "Gargantua and Pantagruel",
      "year": 1533
    },
    {
      "author": "Juan Rulfo",
      "country": "Mexico",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1500663791i/38787.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Pedro_P%C3%A1ramo\n",
      "pages": 124,
      "title": "Pedro P\u00e1ramo",
      "year": 1955
    },
    {
      "author": "Rumi",
      "country": "Sultanate of Rum",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1385347687i/18940409.jpg",
      "language": "Persian",
      "link": "https://en.wikipedia.org/wiki/Masnavi\n",
      "pages": 438,
      "title": "The Masnavi",
      "year": 1236
    },
    {
      "author": "Salman Rushdie",
      "country": "United Kingdom, India",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1673724335i/14836.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Midnight%27s_Children\n",
      "pages": 536,
      "title": "Midnight's Children",
      "year": 1981
    },
    {
      "author": "Saadi",
      "country": "Persia, Persian Empire",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1371598539i/18102791.jpg",
      "language": "Persian",
      "link": "https://en.wikipedia.org/wiki/Bustan_(book)\n",
      "pages": 298,
      "title": "Bostan",
      "year": 1257
    },
    {
      "author": "Tayeb Salih",
      "country": "Sudan",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387663113i/669780.jpg",
      "language": "Arabic",
      "link": "https://en.wikipedia.org/wiki/Season_of_Migration_to_the_North\n",
      "pages": 139,
      "title": "Season of Migration to the North",
      "year": 1966
    },
    {
      "author": "Jos\u00e9 Saramago",
      "country": "Portugal",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1528481068i/40495148.jpg",
      "language": "Portuguese",
      "link": "https://en.wikipedia.org/wiki/Blindness_(novel)\n",
      "pages": 352,
      "title": "Blindness",
      "year": 1995
    },
    {
      "author": "William Shakespeare",
      "country": "England",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1351051208i/1420.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Hamlet\n",
      "pages": 432,
      "title": "Hamlet",
      "year": 1603
    },
    {
      "author": "William Shakespeare",
      "country": "England",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1331563731i/12938.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/King_Lear\n",
      "pages": 384,
      "title": "King Lear",
      "year": 1608
    },
    {
      "author": "William Shakespeare",
      "country": "England",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1459795105i/12996.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Othello\n",
      "pages": 314,
      "title": "Othello",
      "year": 1609
    },
    {
      "author": "Sophocles",
      "country": "Greece",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1349031073i/34439.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Oedipus_the_King\n",
      "pages": 88,
      "title": "Oedipus the King",
      "year": -430
    },
    {
      "author": "Stendhal",
      "country": "France",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635011110i/14662.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/The_Red_and_the_Black\n",
      "pages": 576,
      "title": "The Red and the Black",
      "year": 1830
    },
    {
      "author": "Laurence Sterne",
      "country": "England",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1403402384i/76527.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman\n",
      "pages": 640,
      "title": "The Life And Opinions of Tristram Shandy",
      "year": 1760
    },
    {
      "author": "Italo Svevo",
      "country": "Italy",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1368321719i/84743.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Zeno%27s_Conscience\n",
      "pages": 412,
      "title": "Confessions of Zeno",
      "year": 1923
    },
    {
      "author": "Jonathan Swift",
      "country": "Ireland",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1427829692i/7733.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Gulliver%27s_Travels\n",
      "pages": 178,
      "title": "Gulliver's Travels",
      "year": 1726
    },
    {
      "author": "Leo Tolstoy",
      "country": "Russia",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1413215930i/656.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/War_and_Peace\n",
      "pages": 1296,
      "title": "War and Peace",
      "year": 1867
    },
    {
      "author": "Leo Tolstoy",
      "country": "Russia",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1288758122i/155.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/Anna_Karenina\n",
      "pages": 864,
      "title": "Anna Karenina",
      "year": 1877
    },
    {
      "author": "Leo Tolstoy",
      "country": "Russia",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1407462195i/160374.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich\n",
      "pages": 92,
      "title": "The Death of Ivan Ilyich",
      "year": 1886
    },
    {
      "author": "Mark Twain",
      "country": "United States",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546096879i/2956.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn\n",
      "pages": 224,
      "title": "The Adventures of Huckleberry Finn",
      "year": 1884
    },
    {
      "author": "Valmiki",
      "country": "India",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1558092986i/45864727.jpg",
      "language": "Sanskrit",
      "link": "https://en.wikipedia.org/wiki/Ramayana\n",
      "pages": 152,
      "title": "Ramayana",
      "year": -450
    },
    {
      "author": "Virgil",
      "country": "Roman Empire",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1611403064i/56791239.jpg",
      "language": "Classical Latin",
      "link": "https://en.wikipedia.org/wiki/Aeneid\n",
      "pages": 442,
      "title": "The Aeneid",
      "year": -23
    },
    {
      "author": "Vyasa",
      "country": "India",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553101923i/118252.jpg",
      "language": "Sanskrit",
      "link": "https://en.wikipedia.org/wiki/Mahabharata\n",
      "pages": 276,
      "title": "Mahabharata",
      "year": -700
    },
    {
      "author": "Walt Whitman",
      "country": "United States",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1693499414i/765418.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Leaves_of_Grass\n",
      "pages": 152,
      "title": "Leaves of Grass",
      "year": 1855
    },
    {
      "author": "Virginia Woolf",
      "country": "United Kingdom",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646148221i/14942.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Mrs_Dalloway\n",
      "pages": 216,
      "title": "Mrs Dalloway",
      "year": 1925
    },
    {
      "author": "Virginia Woolf",
      "country": "United Kingdom",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1639106809i/59716.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/To_the_Lighthouse\n",
      "pages": 209,
      "title": "To the Lighthouse",
      "year": 1927
    },
    {
      "author": "Marguerite Yourcenar",
      "country": "France/Belgium",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1416448158i/12172.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Memoirs_of_Hadrian\n",
      "pages": 408,
      "title": "Memoirs of Hadrian",
      "year": 1951
    }
  ]