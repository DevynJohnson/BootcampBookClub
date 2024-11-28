/* This entire file is simply exports the bookData object. This is how we can access all of the information inside.
  By using "import {bookData} from './bookData.js';" in the script.js file, we pull this entire array of objects over.

   Every object in this array has the following attributes, written in the lower case:
   - author: the name of the person who originally wrote the book
   - country: the location of the book's origin or first publication, depending on when it was created.
   - imageLink: can be used as an image's src attribute to display the book cover.
   - language: the language the book was orignally written in.
   - link: a link to the wikipedia page for the book.
   - pages: the number of pages in the book.
   - title: the title of the book.
   - year: the year the book was published or originated.

   I intend to add a description attribute with a paragraph telling the user what it is about.

   It is only intended to be added once into localStorage, after which point we can make whatever changes we want.

   Let me know if you have any issues!

 */

   export const bookData = [
    {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "description": "A simple story of a 'strong man' whose life is dominated by fear and anger, Things Fall Apart is written with remarkable economy and subtle irony. Uniquely and richly African, at the same time it reveals Achebe's keen awareness of the human qualities common to men of all times and places.",
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
      "description": "The complete collection of tales from Hans Christian Andersen. Included tales are The Snow Queen, The Princess and the Pea, The Emperor's New Suit, and The Little Mermaid.",
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
      "description": "This vigorous translation of Inferno preserves Dante's simple, natural style, and captures the swift movement of the original Italian verse. Mark Musa's blank verse rendition of the poet's journey through the circles of Hell re-creates for the modern reader the rich meanings that Dante's poem had for his contemporaries. Musa's introduction and commentaries on each of the cantos brilliantly illuminate the text.",
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
      "description": "Miraculously preserved on clay tablets dating back as much as four thousand years, the poem of Gilgamesh, king of Uruk, is the world’s oldest epic, predating Homer by many centuries. The story tells of Gilgamesh’s adventures with the wild man Enkidu, and of his arduous journey to the ends of the earth in quest of the Babylonian Noah and the secret of immortality. Alongside its themes of family, friendship and the duties of kings, the Epic of Gilgamesh is, above all, about mankind’s eternal struggle with the fear of death.",
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
      "description": "Now, The Book of Job has been rendered into English by the eminent translator and scholar Stephen Mitchell, whose versions of Rilke, Israeli poetry, and the Tao Te Ching have been widely praised. This is the first time ever that the Hebrew verse of Job has been translated into verse in any language, ancient or modern, and the result is a triumph.",
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
      "description": "Tales of the enchanting 'Thousand and One Nights' have entered the folklore of the entire world but their origins lie in the Arabic and Indian oral traditions of the early middle ages. Their power to entice lies in the tenacity of the storyteller Scheherazade who weaves a new tale each night, to save herself from execution. Popular characters such as Aladdin, Ali Baba and Sinbad the sailor have become part of the Arabian Nights, added in later years, but told within the intriguing structure of the original.",
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
      "description": "The saga deals with a process of blood feuds in the Icelandic Commonwealth, showing how the requirements of honor could lead to minor slights spiralling into destructive and prolonged bloodshed. Insults where a character's manhood is called into question are especially prominent and may reflect an author critical of an overly restrictive ideal of masculinity. Another characteristic of the narrative is the presence of omens and prophetic dreams. It is disputed whether this reflects a fatalistic outlook on the part of the author.",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1504227050i/36159839.jpg",
      "language": "Old Norse",
      "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga",
      "pages": 384,
      "title": "Nj\u00e1l's Saga",
      "year": 1350
    },
    {
      "author": "Jane Austen",
      "country": "United Kingdom",
      "description": "Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work 'her own darling child' and its vivacious heroine, Elizabeth Bennet, 'as delightful a creature as ever appeared in print.' The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen's radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England.",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice",
      "pages": 226,
      "title": "Pride and Prejudice",
      "year": 1813
    },
    {
      "author": "Honor\u00e9 de Balzac",
      "country": "France",
      "description": "In a seedy boarding house on Rue Neuve-Sainte Geneviève, the Vauquer house, regulars from the neighborhood rub shoulders. Among them, Eugène de Rastignac, from a noble and impoverished family who came to study law in Paris. He dreams of breaking into high society. In his quest for the upper echelons, he will discover the secret of Father Goriot and will then measure the breadth of men's miserable vanity.",
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
      "description": "Taken together, these three novels represent the high-water mark of the literary movement we call Modernism. Within their linguistic terrain, where stories are taken up, broken off, and taken up again, where voices rise and crumble and are resurrected, we can discern the essential lineaments of our modern condition, and encounter an awesome vision, tragic yet always compelling and always mysteriously invigorating, of consciousness trapped and struggling inside the boundaries of nature.",
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
      "description": "The Decameron (c.1351) is an entertaining series of one hundred stories written in the wake of the Black Death. The stories are told in a country villa outside the city of Florence by ten young noble men and women who are seeking to escape the ravages of the plague. Boccaccio's skill as a dramatist is masterfully displayed in these vivid portraits of people from all stations in life, with plots that revel in a bewildering variety of human reactions.",
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
      "description": "The seventeen pieces in Ficciones demonstrate the whirlwind of Borges's genius and mirror the precision and potency of his intellect and inventiveness, his piercing irony, his skepticism, and his obsession with fantasy. Borges sends us on a journey into a compelling, bizarre, and profoundly resonant realm; we enter the fearful sphere of Pascal's abyss, the surreal and literal labyrinth of books, and the iconography of eternal return. To enter the worlds in Ficciones is to enter the mind of Jorge Luis Borges, wherein lies Heaven, Hell, and everything else in between.",
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
      "description": "At the centre of this novel is the passionate love between Catherine Earnshaw and Heathcliff - recounted with such emotional intensity that a plain tale of the Yorkshire moors acquires the depth and simplicity of ancient tragedy.",
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
      "description": "Published in 1942 by French author Albert Camus, The Stranger has long been considered a classic of twentieth-century literature. Le Monde ranks it as number one on its '100 Books of the Century' list. Through this story of an ordinary man unwittingly drawn into a senseless murder on a sundrenched Algerian beach, Camus explores what he termed 'the nakedness of man faced with the absurd.'",
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
      "description": "'In the writing of Paul Celan even we readers who can hear poetry only dimly in German can sense the greatness of his invention: the cadences of a music tilted against music's complacency; words punished for their plausibility by being reinvented and fused together and broken apart; syntax chopped and stretched to crack and expose its crust of dead rhetoric Michael Hamburger has earned our gratitude for rendering these poems into a reasonably inventive English 'Robert Pinsky, THE NEW REPUBLIC'",
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
      "description": "Louis-Ferdinand Celine's revulsion and anger at what he considered the idiocy and hypocrisy of society explodes from nearly every page of this novel. Filled with slang and obscenities and written in raw, colloquial language, Journey to the End of the Night is a literary symphony of violence, cruelty and obscene nihilism. ",
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
      "description": "Don Quixote has become so entranced by reading chivalric romances that he determines to become a knight-errant himself. In the company of his faithful squire, Sancho Panza, his exploits blossom in all sorts of wonderful ways. While Quixote's fancy often leads him astray—he tilts at windmills, imagining them to be giants—Sancho acquires cunning and a certain sagacity. Sane madman and wise fool, they roam the world together, and together they have haunted readers' imaginations for nearly four hundred years.",
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
      "description": "The procession that crosses Chaucer's pages is as full of life and as richly textured as a medieval tapestry. The Knight, the Miller, the Friar, the Squire, the Prioress, the Wife of Bath, and others who make up the cast of characters -- including Chaucer himself -- are real people, with human emotions and weaknesses. When it is remembered that Chaucer wrote in English at a time when Latin was the standard literary language across western Europe, the magnitude of his achievement is even more remarkable. But Chaucer's genius needs no historical introduction; it bursts forth from every page of The Canterbury Tales.",
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
      "description": "This collection contains some of the most important of his earliest and shortest comic sketches, as well as examples of his great, mature works. Throughout, the doctor-turned-writer displays compassion for human suffering and misfortune, but is always able to see the comical, even farcical aspects of the human condition. Chekhov sees and depicts life with unwavering honesty and truthfulness, although a clear moral sense can be detected beneath his apparent objectivity.",
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
      "description": "A gripping tale of capitalist exploitation and rebellion, set amid the mist-shrouded mountains of a fictional South American republic, employs flashbacks and glimpses of the future to depict the lure of silver and its effects on men. Conrad's deeply moral consciousness and masterful narrative technique are at their best in this, one of his finest works.",
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
      "description": "Great Expectations charts the progress of Pip from childhood through often painful experiences to adulthood, as he moves from the Kent marshes to busy, commercial London, encountering a variety of extraordinary characters ranging from Magwitch, the escaped convict, to Miss Havisham, locked up with her unhappy past and living with her ward, the arrogant, beautiful Estella.",
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
      "description": "Jacques the Fatalist is Diderot's answer to the problem of existence. If human beings are determined by their genes and their environment, how can they claim to be free to want or do anything? Where are Jacques and his Master going? Are they simply occupying space, living mechanically until they die, believing erroneously that they are in charge of their Destiny? Diderot intervenes to cheat our expectations of what fiction should be and do, and behaves like a provocative, ironic and unfailingly entertaining master of revels who finally show why Fate is not to be equated with doom. In the introduction to this brilliant new translation, David Coward explains the philosophical basis of Diderot's fascination with Fate and shows why Jacques the Fatalist pioneers techniques of fiction which, two centuries on, novelists still regard as experimental.",
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
      "description": "Franz Biberkopf, pimp and petty thief, has just finished serving a term in prison for murdering his girlfriend. He's on his own in Weimar Berlin with its lousy economy and frontier morality, but Franz is determined to turn over new leaf, get ahead, make an honest man of himself, and so on and so forth. He hawks papers, chases girls, needs and bleeds money, and gets mixed up in spite of himself in various criminal and political schemes. This is only the beginning of our modern everyman's multiplying misfortunes.",
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
      "description": "Raskolnikov, a destitute and desperate former student, wanders through the slums of St Petersburg and commits a random murder without remorse or regret. He imagines himself to be a great man, a Napoleon: acting for a higher purpose beyond conventional moral law. But as he embarks on a dangerous game of cat and mouse with a suspicious police investigator, Raskolnikov is pursued by the growing voice of his conscience and finds the noose of his own guilt tightening around his neck. Only Sonya, a downtrodden sex worker, can offer the chance of redemption.",
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
      "description": "Returning to Russia from a sanitarium in Switzerland, the Christ-like epileptic Prince Myshkin finds himself enmeshed in a tangle of love, torn between two women—the notorious kept woman Nastasya and the pure Aglaia—both involved, in turn, with the corrupt, money-hungry Ganya. In the end, Myshkin’s honesty, goodness, and integrity are shown to be unequal to the moral emptiness of those around him. In her revision of the Garnett translation, Anna Brailovsky has corrected inaccuracies wrought by Garnett’s drastic anglicization of the novel, restoring as much as possible the syntactical structure of the original story.",
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
      "description": "Inspired by the true story of a political murder that horrified Russians in 1869, Fyodor Dostoevsky conceived of Demons as a 'novel-pamphlet' in which he would say everything about the plague of materialist ideology that he saw infecting his native land. What emerged was a prophetic and ferociously funny masterpiece of ideology and murder in pre-revolutionary Russia.",
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
      "description": "The Brothers Karamazov is a murder mystery, a courtroom drama, and an exploration of erotic rivalry in a series of triangular love affairs involving the “wicked and sentimental” Fyodor Pavlovich Karamazov and his three sons―the impulsive and sensual Dmitri; the coldly rational Ivan; and the healthy, red-cheeked young novice Alyosha. Through the gripping events of their story, Dostoevsky portrays the whole of Russian life, is social and spiritual striving, in what was both the golden age and a tragic turning point in Russian culture.",
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
      "description": "George Eliot's most ambitious novel is a masterly evocation of diverse lives and changing fortunes in a provincial community. Peopling its landscape are Dorothea Brooke, a young idealist whose search for intellectual fulfillment leads her into a disastrous marriage to the pedantic scholar Casaubon; the charming but tactless Dr Lydgate, whose pioneering medical methods, combined with an imprudent marriage to the spendthrift beauty Rosamond, threaten to undermine his career; and the religious hypocrite Bulstrode, hiding scandalous crimes from his past. As their stories interweave, George Eliot creates a richly nuanced and moving drama, hailed by Virginia Woolf as 'one of the few English novels written for grown-up people.'",
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
      "description": "First published in 1952 and immediately hailed as a masterpiece, Invisible Man is one of those rare novels that have changed the shape of American literature. For not only does Ralph Ellison's nightmare journey across the racial divide tell unparalleled truths about the nature of bigotry and its effects on the minds of both victims and perpetrators, it gives us an entirely new model of what a novel can be.",
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
      "description": "One of the most powerful and enduring of Greek tragedies, Medea centers on the myth of Jason, leader of the Argonauts, who has won the dragon-guarded treasure of the Golden Fleece with the help of the sorceress Medea. Having married Medea and fathered her two children, Jason abandons her for a more favorable match, never suspecting the terrible revenge she will take.",
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
      "description": "Published in 1936, Absalom, Absalom! is considered by many to be William Faulkner's masterpiece. Although the novel's complex and fragmented structure poses considerable difficulty to readers, the book's literary merits place it squarely in the ranks of America's finest novels. The story concerns Thomas Sutpen, a poor man who finds wealth and then marries into a respectable family. His ambition and extreme need for control bring about his ruin and the ruin of his family. ",
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
      "description": "The tragedy of the Compson family features some of the most memorable characters in literature: beautiful, rebellious Caddy; the manchild Benjy; haunted, neurotic Quentin; Jason, the brutal cynic; and Dilsey, their black servant. Their lives fragmented and harrowed by history and legacy, the character's voices and actions mesh to create what is arguably Faulkner's masterpiece and one of the greatest novels of the twentieth century.",
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
      "description": "Madame Bovary is the debut novel of French writer Gustave Flaubert, published in 1856. The character lives beyond her means in order to escape the banalities and emptiness of provincial life. When the novel was first serialized in La Revue de Paris between 1 October 1856 and 15 December 1856, public prosecutors attacked the novel for obscenity. The resulting trial in January 1857 made the story notorious. ",
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
      "description": "Based on Flaubert's own youthful passion for an older woman, Sentimental Education was described by its author as “the moral history of the men of my generation.” It follows the amorous adventures of Frederic Moreau, a law student who, returning home to Normandy from Paris, notices Mme Arnoux, a slender, dark woman several years older than himself. It is the beginning of an infatuation that will last a lifetime. He befriends her husband, an influential businessman, and as their paths cross and re-cross over the years, Mme Arnoux remains the constant, unattainable love of Moreau's life. Blending love story, historical authenticity, and satire, Sentimental Education is one of the great French novels of the nineteenth century.",
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
      "description": "Lorca's famous Gypsy Ballads were composed in the 1920s, when his poetic style was evolving from the traditional towards the surrealist. The combination of the ballad's perennial narrative format with startling and allusive imagery has intrigued readers ever since.",
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
      "description": "The brilliant, bestselling, landmark novel that tells the story of the Buendia family, and chronicles the irreconcilable conflict between the desire for solitude and the need for love—in rich, imaginative prose that has come to define an entire genre known as 'magical realism.'",
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
      "description": "In their youth, Florentino Ariza and Fermina Daza fall passionately in love. When Fermina eventually chooses to marry a wealthy, well-born doctor, Florentino is heartbroken, but he is a romantic. As he rises in his business career he whiles away the years in 622 affairs—yet he reserves his heart for Fermina. Her husband dies at last, and Florentino purposefully attends the funeral. Fifty years, nine months, and four days after he first declared his love for Fermina, he will do so again.",
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
      "description": "Goethe's masterpiece and perhaps the greatest work in German literature, Faust has made the legendary German alchemist one of the central myths of the Western world. Here indeed is a monumental Faust, an audacious man boldly wagering with the devil, Mephistopheles, that no magic, sensuality, experience, or knowledge can lead him to a moment he would wish to last forever.",
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
      "description": "Chichikov, a mysterious stranger, arrives in a provincial town and visits a succession of landowners to make each a strange offer. He proposes to buy the names of dead serfs still registered on the census, saving their owners from paying taxes on them, and to use these 'souls' as collateral to re-invent himself as a gentleman.",
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
      "description": "On his third birthday Oskar decides to stop growing. Haunted by the deaths of his parents and wielding his tin drum Oskar recounts the events of his extraordinary life; from the long nightmare of the Nazi era to his anarchic adventures in post-war Germany.",
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
      "description": "Lively reminiscences of bandit warfare in the sertao, the still primitive Brazilian back country, told by a wise, retired outlaw chief",
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
      "description": " The book brilliantly probes the psychodynamics of alienation, obsession, and self-destruction, painting an unforgettable portrait of a man driven by forces beyond his control to the edge of the abyss.",
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
      "description": "This short novel, already a modern classic, is the superbly told, tragic story of a Cuban fisherman in the Gulf Stream and the giant Marlin he kills and loses—specifically referred to in the citation accompanying the author's Nobel Prize for literature in 1954.",
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
      "description": "One of the foremost achievements in Western literature, Homer's Iliad tells the story of the darkest episode of the Trojan War. At its center is Achilles, the greatest warrior-champion of the Greeks, and his conflict with his leader Agamemnon. Interwoven in the tragic sequence of events are powerfully moving descriptions of the ebb and flow of battle, the besieged city of Ilium, the feud between the gods, and the fate of mortals.",
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
      "description": "If the Iliad is the world's greatest war epic, then the Odyssey is literature's grandest evocation of everyman's journey though life. Odysseus' reliance on his wit and wiliness for survival in his encounters with divine and natural forces, during his ten-year voyage home to Ithaca after the Trojan War, is at once a timeless human story and an individual test of moral endurance.",
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
      "description": "A Doll's House (1879), is a masterpiece of theatrical craft which, for the first time portrayed the tragic hypocrisy of Victorian middle class marriage on the stage. The play ushered in a new social era and 'exploded like a bomb into contemporary life'.",
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
      "description": "The novel's stream-of-consciousness technique, careful structuring, and experimental prose—replete with puns, parodies, and allusions—as well as its rich characterisation and broad humour have led it to be regarded as one of the greatest literary works in history.",
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
      "description": "The Complete Stories brings together all of Kafka’s stories, from the classic tales such as “The Metamorphosis,” “In the Penal Colony,” and “A Hunger Artist” to shorter pieces and fragments that Max Brod, Kafka's literary executor, released after Kafka's death. ",
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
      "description": "The Trial is the terrifying tale of Josef K., a respectable bank officer who is suddenly and inexplicably arrested and must defend himself against a charge about which he can get no information. Whether read as an existential tale, a parable, or a prophecy of the excesses of modern bureaucracy wedded to the madness of totalitarianism, The Trial has resonated with chilling truth for generations of readers.",
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
      "description": " The Castle is the haunting tale of K.’s relentless, unavailing struggle with an inscrutable authority in order to gain access to the Castle. ",
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
      "description": "Kalidasa's play about the love of King Dusyanta and Sakuntala, a hermitage girl, their separation by a curse, and eventual reunion, is the supreme work of Sanskrit drama by its greatest poet and playwright.",
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
      "description": "By day Ogata Shingo, an elderly Tokyo businessman, is troubled by small failures of memory. At night he associates the distant rumble he hears from the nearby mountain with the sounds of death. In between are the complex relationships that were once the foundations of Shingo's life.",
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
      "description": "The classic novel, international sensation, and inspiration for the film starring Anthony Quinn explores the struggle between the aesthetic and the rational, the inner life and the life of the mind. The classic novel Zorba the Greek is the story of two men, their incredible friendship, and the importance of living life to the fullest.",
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
      "description": "The marriage of Gertrude and Walter Morel has become a battleground. Repelled by her uneducated and sometimes violent husband, delicate Gertrude devotes her life to her children, especially to her sons, William and Paul - determined they will not follow their father into working down the coal mines.",
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
      "description": "Having spent eighteen years in humiliating servitude, Bjartur wants nothing more than to raise his flocks unbeholden to any man. But Bjartur's spirited daughter wants to live unbeholden to him. What ensues is a battle of wills that is by turns harsh and touching, elemental in its emotional intensity and intimate in its homely detail.",
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
      "description": "Leopardi was substantially a poet,--that is to say, he had imagination, sentiment, passion, an intense love of beauty, a powerful impulse towards things ideal.",
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
      "description": "Anna is a writer, author of one very successful novel, who now keeps four notebooks. In one, with a black cover, she reviews the African experience of her earlier year. In a red one she records her political life, her disillusionment with communism. In a yellow one she writes a novel in which the heroine relives part of her own experience. And in the blue one she keeps a personal diary. Finally, in love with an American writer and threatened with insanity, Anna tries to bring the threads of all four books together in a golden notebook.",
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
      "description": "Tommy and his sister Annika have a new neighbor, and her name is Pippi Longstocking. She has crazy red pigtails, no parents to tell her what to do, a horse that lives on her porch, and a flair for the outrageous that seems to lead to one adventure after another!",
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
      "description": "This collection of short stories by Lu Xun, commonly considered one of the greatest writers in 20th-century China and often referred to as the father of modern Chinese literature, includes the celebrated short story, 'A Madman's Diary'.",
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
      "description": "The history of a Cairo alley through several generations. Successive heroes struggle to restore the rights of the people to the trust fund set up by their ancestor Gebelaawi, usurped by embezzlers and tyrants.",
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
      "description": "A classic of modern literature: Buddenbrooks is the story of four generations of a wealthy bourgeois family in northern Germany facing the advent of modernity; in an uncertain new world, the family's bonds and traditions begin to disintegrate",
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
      "description": "In this dizzyingly rich novel of ideas, Mann uses a sanatorium in the Swiss Alps, a community devoted exclusively to sickness, as a microcosm for Europe, which in the years before 1914 was already exhibiting the first symptoms of its own terminal irrationality.",
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
      "description": " In part, Moby-Dick is the story of an eerily compelling madman pursuing an unholy war against a creature as vast and dangerous and unknowable as the sea itself. But more than just a novel of adventure, more than an encyclopaedia of whaling lore and legend, the book can be seen as part of its author's lifelong meditation on America.",
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
      "description": "Michel de Montaigne's Essays is an essential work of Western thought. In it, the philosopher and humanist expose his opinions and reflections on man, thought, morality, life and death.",
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
      "description": "Set in Rome from 1941 to 1947, the novel is a great choral fresco that tells the horrors of war and history, 'this scandal that has lasted for two thousand years'. ",
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
      "description": "Sethe, its protagonist, was born a slave and escaped to Ohio, but eighteen years later she is still not free. She has too many memories of Sweet Home, the beautiful farm where so many hideous things happened.",
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
      "description": "Genji, the Shining Prince, is the son of an emperor. He is a passionate character whose tempestuous nature, family circumstances, love affairs, alliances, and shifting political fortunes form the core of this magnificent epic.",
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
      "description": "Set in Vienna on the eve of World War I, this great novel of ideas tells the story of Ulrich, ex-soldier and scientist, seducer and skeptic, who finds himself drafted into the grandiose plans for the 70th jubilee of the Emperor Franz Josef.",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1505353925i/33517111._SX150_.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Man_Without_Qualities\n",
      "pages": 365,
      "title": "The Man Without Qualities",
      "year": 1931
    },
    {
      "author": "Vladimir Nabokov",
      "country": "Russia/United States",
      "description": "Humbert Humbert - scholar, aesthete and romantic - has fallen completely and utterly in love with Dolores Haze, his landlady's gum-snapping, silky skinned twelve-year-old daughter. Reluctantly agreeing to marry Mrs Haze just to be close to Lolita, Humbert suffers greatly in the pursuit of romance.",
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
      "description": "A masterpiece of rebellion and imprisonment where war is peace freedom is slavery and Big Brother is watching. Thought Police, Big Brother, Orwellian - these words have entered our vocabulary because of George Orwell's classic dystopian novel 1984. ",
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
      "description": "In Metamophoses, Ovid brings together a dazzling array of mythological tales, ingeniously linked by the idea of transformation—often as a result of love or lust—where men and women find themselves magically changed into new and sometimes extraordinary beings.",
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
      "description": "this unique collection of short, aphoristic paragraphs comprises the 'autobiography' of Bernardo Soares, one of Pessoa's alternate selves. Part intimate diary, part prose poetry, part descriptive narrative, captivatingly translated by Richard Zenith, The Book of Disquiet is one of the greatest works of the twentieth century.",
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
      "description": "Poe was one of the country's earliest practitioners of the short story, and considered to be the inventor of the detective fiction genre, as well as a significant contributor to the emerging genre of science fiction.",
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
      "description": "On the surface a traditional 'Bildungsroman' describing the narrator’s journey of self-discovery, this huge and complex book is also a panoramic and richly comic portrait of France in the author’s lifetime, and a profound meditation on the nature of art, love, time, memory and death. ",
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
      "description": "The dazzling and exuberant moral stories of Rabelais (c.1471-1553) expose human follies with their mischievous and often obscene humour, while intertwining the realistic with carnivalesque fantasy to make us look afresh at the world.",
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
      "description": "A classic of Mexican modern literature about a haunted village. As one enters Juan Rulfo's legendary novel, one follows a dusty road to a town of death. Time shifts from one consciousness to another in a hypnotic flow of dreams, desires, and memories, a world of ghosts dominated by the figure of Pedro Páramo - lover, overlord, murderer.",
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
      "description": "Rumi's Masnavi is widely recognized as the greatest Sufi poem ever written, and has been called 'the Koran in Persian'. The thirteenth-century Muslim mystic Rumi composed his work for the benefit of his disciples in the Sufi order named after him, better known as the whirling dervishes.",
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
      "description": "Saleem Sinai is born at the stroke of midnight on August 15, 1947, the very moment of India’s independence. Greeted by fireworks displays, cheering crowds, and Prime Minister Nehru himself, Saleem grows up to learn the ominous consequences of this coincidence.",
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
      "description": "Sadi wrote Bostan one year before Gulistan, in 655 AH (1257 AD) and between two religious holidays. Ahmet Metin Şahin, with the wish of his late uncle Şefik Can, translated both works of this great Islamic poet into Turkish with their meters.",
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
      "description": "Whoops, I guess I missed this one...",
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
      "description": "A city is hit by an epidemic of 'white blindness' that spares no one. Authorities confine the blind to an empty mental hospital, but there the criminal element holds everyone captive, stealing food rations, and assaulting women.",
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
      "description": "Among Shakespeare's plays, 'Hamlet' is considered by many his masterpiece. Among actors, the role of Hamlet, Prince of Denmark, is considered the jewel in the crown of a triumphant theatrical career.",
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
      "description": "The play tells us about families struggling between greed and cruelty, on the one hand, and support and consolation, on the other. Emotions are extreme, magnified to gigantic proportions. We also see old age portrayed in all its vulnerability, pride, and, perhaps, wisdom—one reason this most devastating of Shakespeare’s tragedies is also perhaps his most moving.",
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
      "description": "In Othello, Shakespeare creates a powerful drama of a marriage that begins with fascination (between the exotic Moor Othello and the Venetian lady Desdemona), with elopement, and with intense mutual devotion and that ends precipitately with jealous rage and violent deaths.",
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
      "description": "To Laius, King of Thebes, an oracle foretold that the child born to him by his queen Jocasta would slay his father and wed his mother. So when in time a son was born the infant's feet were riveted together and he was left to die on Mount Cithaeron. But a shepherd found the babe and tended him, and delivered him to another shepherd who took him to his master, the King of Corinth.",
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
      "description": "Handsome, ambitious Julien Sorel is determined to rise above his humble provincial origins. Soon realizing that success can only be achieved by adopting the subtle code of hypocrisy by which society operates, he begins to achieve advancement through deceit and self-interest.",
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
      "description": "Part novel, part digression, its gloriously disordered narrative interweaves the birth and life of the unfortunate 'hero' Tristram Shandy, the eccentric philosophy of his father Walter, the amours and military obsessions of Uncle Toby, and a host of other characters, including Dr Slop, Corporal Trim and the parson Yorick.",
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
      "description": "As a form of therapy, Zeno's doctor advises him to write his memoirs. The patient reconstructs the events in his life into a palatable reality founded upon compromise and rationalization.",
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
      "description": "A wickedly clever satire uses comic inversions to offer telling insights into the nature of man and society.",
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
      "description": "War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature.",
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
      "description": "Acclaimed by many as the world's greatest novel, Anna Karenina provides a vast panorama of contemporary life in Russia and of humanity in general.",
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
      "description": "Hailed as one of the world's supreme masterpieces on the subject of death and dying, The Death of Ivan Ilyich is the story of a worldly careerist, a high court judge who has never given the inevitability of his dying so much as a passing thought.",
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
      "description": "A nineteenth-century boy from a Mississippi River town recounts his adventures as he travels down the river with a runaway slave, encountering a family involved in a feud, two scoundrels pretending to be royalty, and Tom Sawyer's aunt who mistakes him for Tom.",
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
      "description": "The Ramayana is, quite simply, the greatest of Indian epics - and one of the world's supreme masterpieces of storytelling 'Almost every individual living in India'.",
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
      "description": "Virgil’s epic tale tells the story of Aeneas, a Trojan hero, who flees his city after its fall, with his father Anchises and his young son Ascanius - for Aeneas is destined to found Rome and father the Roman race.",
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
      "description": "The Mahabharata is not a mere epic; it is a romance telling the tale of heroic men and women, and of some who were divine. It is a whole literature in itself, containing a code of life, a philosophy of social and ethical relations, and speculative thought on human problems that is hard to rival.",
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
      "description": "A collection of quintessentially American poems, the seminal work of one of the most influential writers of the nineteenth century.",
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
      "description": "Heralded as Virginia Woolf's greatest novel, this is a vivid portrait of a single day in a woman's life. When we meet her, Mrs. Clarissa Dalloway is preoccupied with the last-minute details of party preparation while in her mind she is something much more than a perfect society hostess.",
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
      "description": "The serene and maternal Mrs. Ramsay, the tragic yet absurd Mr. Ramsay, and their children and assorted guests are on holiday on the Isle of Skye. From the seemingly trivial postponement of a visit to a nearby lighthouse, Woolf constructs a remarkable, moving examination of the complex tensions and allegiances of family life and the conflict between men and women.",
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
      "description": "Marguerite Yourcenar reimagines the Emperor Hadrian's arduous boyhood, his triumphs and reversals, and finally, as emperor, his gradual reordering of a war-torn world, writing with the imaginative insight of a great writer of the twentieth century while crafting a prose style as elegant and precise as those of the Latin stylists of Hadrian's own era.",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1416448158i/12172.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Memoirs_of_Hadrian\n",
      "pages": 408,
      "title": "Memoirs of Hadrian",
      "year": 1951
    }
  ]

  