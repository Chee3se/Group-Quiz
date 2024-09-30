<?php

namespace Database\Seeders;

use App\Models\Quiz;
use Illuminate\Database\Seeder;

class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $quiz_movies = Quiz::create(['title' => 'Movies']);

        $quiz_movies->addQuestion('What is the highest-grossing movie of all time?', [
            'Avatar' => true,
            'Titanic' => false,
            'Star Wars: The Force Awakens' => false,
            'Avengers: Endgame' => false,
        ]);
        
        $quiz_movies->addQuestion('Who directed "Inception"?', [
            'Christopher Nolan' => true,
            'Steven Spielberg' => false,
            'James Cameron' => false,
            'Quentin Tarantino' => false,
        ]);
        
        $quiz_movies->addQuestion('Which actor played the Joker in "The Dark Knight"?', [
            'Jared Leto' => false,
            'Joaquin Phoenix' => false,
            'Heath Ledger' => true,
            'Jack Nicholson' => false,
        ]);
        
        $quiz_movies->addQuestion('What movie won the Best Picture Oscar in 2020?', [
            'Parasite' => true,
            '1917' => false,
            'Joker' => false,
            'Once Upon a Time in Hollywood' => false,
        ]);
        
        $quiz_movies->addQuestion('Which movie features the song "My Heart Will Go On"?', [
            'Titanic' => true,
            'The Bodyguard' => false,
            'Pretty Woman' => false,
            'Ghost' => false,
        ]);
        
        $quiz_movies->addQuestion('Which character is a member of the Avengers?', [
            'Iron Man' => true,
            'Superman' => false,
            'Batman' => false,
            'Wolverine' => false,
        ]);
        
        $quiz_movies->addQuestion('Which movie franchise features a character named Jack Sparrow?', [
            'Harry Potter' => false,
            'Lord of the Rings' => false,
            'Star Wars' => false,
            'Pirates of the Caribbean' => true,

        ]);
        
        $quiz_movies->addQuestion('What year was the first "Star Wars" movie released?', [
            '1980' => false,
            '1977' => true,
            '1983' => false,
            '1973' => false,
        ]);
        
        $quiz_movies->addQuestion('Which movie is about a theme park with cloned dinosaurs?', [
            'King Kong' => false,
            'Godzilla' => false,
            'Jurassic Park' => true,
            'The Lost World' => false,
        ]);
        
        $quiz_movies->addQuestion('Who directed the 1994 movie "Pulp Fiction"?', [
            'Martin Scorsese' => false,
            'Francis Ford Coppola' => false,
            'Ridley Scott' => false,
            'Quentin Tarantino' => true,
        ]);
        
        $quiz_movies->addQuestion('Which actor voiced Woody in "Toy Story"?', [
            'Tom Hanks' => true,
            'Tim Allen' => false,
            'Billy Crystal' => false,
            'Robin Williams' => false,
        ]);
        
        $quiz_movies->addQuestion('Which actress played Katniss Everdeen in "The Hunger Games"?', [
            'Jennifer Lawrence' => true,
            'Emma Watson' => false,
            'Scarlett Johansson' => false,
            'Kristen Stewart' => false,
        ]);
        
        $quiz_movies->addQuestion('What is the first rule of "Fight Club"?', [
            'You always fight' => false,
            'You never lose' => false,
            'You must win' => false,
            'You do not talk about Fight Club' => true,
        ]);
        
        $quiz_movies->addQuestion('Which movie is set in the fictional African nation of Wakanda?', [
            'Wonder Woman' => false,
            'Black Panther' => true,
            'The Lion King' => false,
            'Thor: Ragnarok' => false,
        ]);
        

        $quiz_books = Quiz::create(['title' => 'Books']);

        $quiz_books->addQuestion('Who wrote "To Kill a Mockingbird"?', [
            'Mark Twain' => false,
            'Harper Lee' => true,
            'F. Scott Fitzgerald' => false,
            'Ernest Hemingway' => false,
        ]);
        
        $quiz_books->addQuestion('Which novel begins with the line "Call me Ishmael"?', [
            'The Great Gatsby' => false,
            'War and Peace' => false,
            'Moby Dick' => true,
            '1984' => false,
        ]);
        
        $quiz_books->addQuestion('Who is the author of the "Harry Potter" series?', [
            'C.S. Lewis' => false,
            'J.K. Rowling' => true,
            'J.R.R. Tolkien' => false,
            'Philip Pullman' => false,
        ]);
        
        $quiz_books->addQuestion('Which book features the characters Frodo Baggins and Gandalf?', [
            'The Lord of the Rings' => true,
            'The Chronicles of Narnia' => false,
            'The Hobbit' => false,
            'Harry Potter and the Sorcerer’s Stone' => false,
        ]);
        
        $quiz_books->addQuestion('What is the name of the dystopian novel by George Orwell?', [
            'Brave New World' => false,
            'The Road' => false,
            '1984' => true,
            'Fahrenheit 451' => false,
        ]);
        
        $quiz_books->addQuestion('Which book is part of the "Divergent" trilogy?', [
            'The Maze Runner' => false,
            'The Hunger Games' => false,
            'Insurgent' => true,
            'Ender’s Game' => false,
        ]);
        
        $quiz_books->addQuestion('In which book does the character Atticus Finch appear?', [
            'Of Mice and Men' => false,
            'Great Expectations' => false,
            'To Kill a Mockingbird' => true,
            'The Catcher in the Rye' => false,
        ]);
        
        $quiz_books->addQuestion('Who wrote the fantasy series "A Song of Ice and Fire"?', [
            'George R.R. Martin' => true,
            'J.R.R. Tolkien' => false,
            'C.S. Lewis' => false,
            'Robert Jordan' => false,
        ]);
        
        $quiz_books->addQuestion('Which novel is set on a deserted island and features the characters Ralph and Piggy?', [
            'Treasure Island' => false,
            'The Beach' => false,
            'Lord of the Flies' => true,
            'Robinson Crusoe' => false,
        ]);
        
        $quiz_books->addQuestion('Who is the author of "Pride and Prejudice"?', [
            'Charlotte Brontë' => false,
            'Louisa May Alcott' => false,
            'Jane Austen' => true,
            'Emily Brontë' => false,
        ]);
        
        $quiz_books->addQuestion('Which book is a classic horror novel written by Mary Shelley?', [
            'Dracula' => false,
            'The Strange Case of Dr Jekyll and Mr Hyde' => false,
            'Frankenstein' => true,
            'The Invisible Man' => false,
        ]);
        
        $quiz_books->addQuestion('Which novel features a dystopian future ruled by "Big Brother"?', [
            'Fahrenheit 451' => false,
            '1984' => true,
            'Brave New World' => false,
            'The Handmaid’s Tale' => false,
        ]);
        
        $quiz_books->addQuestion('What is the title of the first book in the "The Hunger Games" series?', [
            'Mockingjay' => false,
            'The Maze Runner' => false,
            'The Hunger Games' => true,
            'Catching Fire' => false,
        ]);
        
        $quiz_books->addQuestion('Which character in "The Great Gatsby" is known for his extravagant parties?', [
            'Nick Carraway' => false,
            'Jay Gatsby' => true,
            'Daisy Buchanan' => false,
            'Tom Buchanan' => false,
        ]);
        
        $quiz_books->addQuestion('Who wrote the famous novel "The Catcher in the Rye"?', [
            'J.D. Salinger' => true,
            'F. Scott Fitzgerald' => false,
            'Ernest Hemingway' => false,
            'William Faulkner' => false,
        ]);
        

        $quiz_knowledge = Quiz::create(['title' => 'General Knowledge']);


        $quiz_knowledge->addQuestion('Which planet is known as the Red Planet?', [
            'Venus' => false,
            'Mars' => true,
            'Jupiter' => false,
            'Saturn' => false,
        ]);
        
        $quiz_knowledge->addQuestion('What is the capital city of Australia?', [
            'Sydney' => false,
            'Canberra' => true,
            'Melbourne' => false,
            'Brisbane' => false,
        ]);
        
        $quiz_knowledge->addQuestion('What is the largest mammal in the world?', [
            'Elephant' => false,
            'Blue Whale' => true,
            'Giraffe' => false,
            'Great White Shark' => false,
        ]);
        
        $quiz_knowledge->addQuestion('Who painted the "Mona Lisa"?', [
            'Vincent van Gogh' => false,
            'Leonardo da Vinci' => true,
            'Pablo Picasso' => false,
            'Michelangelo' => false,
        ]);
        
        $quiz_knowledge->addQuestion('What is the smallest country in the world by land area?', [
            'Monaco' => false,
            'Vatican City' => true,
            'San Marino' => false,
            'Liechtenstein' => false,
        ]);
        
        $quiz_knowledge->addQuestion('What is the chemical symbol for gold?', [
            'Au' => true,
            'Ag' => false,
            'Pb' => false,
            'Fe' => false,
        ]);
        
        $quiz_knowledge->addQuestion('In which year did the Titanic sink?', [
            '1905' => false,
            '1912' => true,
            '1898' => false,
            '1920' => false,
        ]);
        
        $quiz_knowledge->addQuestion('What is the longest river in the world?', [
            'Amazon' => false,
            'Nile' => true,
            'Yangtze' => false,
            'Mississippi' => false,
        ]);
        
        $quiz_knowledge->addQuestion('Who wrote "Hamlet"?', [
            'Charles Dickens' => false,
            'William Shakespeare' => true,
            'Jane Austen' => false,
            'George Orwell' => false,
        ]);
        
        $quiz_knowledge->addQuestion('Which country has the most natural lakes?', [
            'India' => false,
            'Canada' => true,
            'Brazil' => false,
            'Russia' => false,
        ]);
        
        $quiz_knowledge->addQuestion('What is the largest organ in the human body?', [
            'Heart' => false,
            'Skin' => true,
            'Liver' => false,
            'Lungs' => false,
        ]);
        
        $quiz_knowledge->addQuestion('Which country is home to the kangaroo?', [
            'New Zealand' => false,
            'Australia' => true,
            'South Africa' => false,
            'Indonesia' => false,
        ]);
        
        $quiz_knowledge->addQuestion('What is the square root of 64?', [
            '8' => true,
            '7' => false,
            '6' => false,
            '9' => false,
        ]);
        
        $quiz_knowledge->addQuestion('What does "WWW" stand for in a website browser?', [
            'World Web Window' => false,
            'World Wide Web' => true,
            'Web World Wide' => false,
            'Wide Web World' => false,
        ]);
        
        $quiz_knowledge->addQuestion('How many continents are there in the world?', [
            '6' => false,
            '7' => true,
            '5' => false,
            '8' => false,
        ]);
        
        $quiz_sports = Quiz::create(['title' => ' Sports']);

        $quiz_sports->addQuestion('Which country won the FIFA World Cup in 2018?', [
            'Germany' => false,
            'Brazil' => false,
            'France' => true,
            'Argentina' => false,
        ]);
        
        $quiz_sports->addQuestion('How many players are on a standard soccer team?', [
            '10' => false,
            '12' => false,
            '11' => true,
            '9' => false,
        ]);
        
        $quiz_sports->addQuestion('Which tennis player has won the most Grand Slam titles?', [
            'Roger Federer' => false,
            'Rafael Nadal' => true,
            'Novak Djokovic' => false,
            'Pete Sampras' => false,
        ]);
        
        $quiz_sports->addQuestion('Which sport is known as "the king of sports"?', [
            'Basketball' => false,
            'Cricket' => false,
            'Soccer' => true,
            'Tennis' => false,
        ]);
        
        $quiz_sports->addQuestion('In which year were the first modern Olympic Games held?', [
            '1904' => false,
            '1896' => true,
            '1920' => false,
            '1912' => false,
        ]);
        
        $quiz_sports->addQuestion('Which country has won the most Olympic gold medals in swimming?', [
            'Australia' => false,
            'United States' => true,
            'China' => false,
            'Russia' => false,
        ]);
        
        $quiz_sports->addQuestion('How long is an Olympic swimming pool?', [
            '25 meters' => false,
            '50 meters' => true,
            '75 meters' => false,
            '100 meters' => false,
        ]);
        
        $quiz_sports->addQuestion('Which NBA team has won the most championships?', [
            'Los Angeles Lakers' => false,
            'Chicago Bulls' => false,
            'Boston Celtics' => true,
            'Golden State Warriors' => false,
        ]);
        
        $quiz_sports->addQuestion('Who holds the record for the most home runs in MLB history?', [
            'Barry Bonds' => true,
            'Babe Ruth' => false,
            'Hank Aaron' => false,
            'Willie Mays' => false,
        ]);
        
        $quiz_sports->addQuestion('In what sport would you perform a "slam dunk"?', [
            'Tennis' => false,
            'Basketball' => true,
            'Volleyball' => false,
            'Soccer' => false,
        ]);
        
        $quiz_sports->addQuestion('Which country is famous for producing top cricket players like Sachin Tendulkar?', [
            'Australia' => false,
            'England' => false,
            'India' => true,
            'South Africa' => false,
        ]);
        
        $quiz_sports->addQuestion('Which boxer is known as "The Greatest" and "The People’s Champion"?', [
            'Mike Tyson' => false,
            'Floyd Mayweather' => false,
            'Muhammad Ali' => true,
            'Joe Frazier' => false,
        ]);
        
        $quiz_sports->addQuestion('Which country has won the most Rugby World Cup titles?', [
            'South Africa' => false,
            'New Zealand' => true,
            'England' => false,
            'Australia' => false,
        ]);
        
        $quiz_sports->addQuestion('Which sport uses the terms "love", "deuce", and "advantage"?', [
            'Badminton' => false,
            'Tennis' => true,
            'Squash' => false,
            'Table Tennis' => false,
        ]);
        
        $quiz_sports->addQuestion('In which sport is the "Vince Lombardi Trophy" awarded?', [
            'Baseball' => false,
            'Basketball' => false,
            'American Football' => true,
            'Ice Hockey' => false,
        ]);
        

        $quiz_games = Quiz::create(['title' => 'Video Games']);

        $quiz_games->addQuestion('Which video game series features the character "Master Chief"?', [
            'Call of Duty' => false,
            'Halo' => true,
            'Gears of War' => false,
            'Battlefield' => false,
        ]);
        
        $quiz_games->addQuestion('In which game would you find the location "Hyrule"?', [
            'Final Fantasy' => false,
            'The Legend of Zelda' => true,
            'Dark Souls' => false,
            'Elder Scrolls' => false,
        ]);
        
        $quiz_games->addQuestion('Which company developed the video game "The Witcher 3: Wild Hunt"?', [
            'Ubisoft' => false,
            'CD Projekt Red' => true,
            'Rockstar Games' => false,
            'Bethesda' => false,
        ]);
        
        $quiz_games->addQuestion('What is the name of the main protagonist in the "Uncharted" series?', [
            'Nathan Drake' => true,
            'Lara Croft' => false,
            'John Marston' => false,
            'Ezio Auditore' => false,
        ]);
        
        $quiz_games->addQuestion('Which game popularized the battle royale genre?', [
            'Fortnite' => false,
            'PlayerUnknown’s Battlegrounds (PUBG)' => true,
            'Apex Legends' => false,
            'Call of Duty: Warzone' => false,
        ]);
        
        $quiz_games->addQuestion('Which video game features a location called "Rapture"?', [
            'Bioshock' => true,
            'Half-Life' => false,
            'Fallout' => false,
            'Mass Effect' => false,
        ]);
        
        $quiz_games->addQuestion('In which year was the original "Super Mario Bros." released?', [
            '1980' => false,
            '1985' => true,
            '1990' => false,
            '1995' => false,
        ]);
        
        $quiz_games->addQuestion('Which video game features a character named "Geralt of Rivia"?', [
            'Skyrim' => false,
            'The Witcher' => true,
            'Dragon Age' => false,
            'Bloodborne' => false,
        ]);
        
        $quiz_games->addQuestion('What is the name of the in-game currency used in "League of Legends"?', [
            'Gold' => false,
            'Riot Points' => false,
            'Blue Essence' => true,
            'Silver' => false,
        ]);
        
        $quiz_games->addQuestion('Which of the following is the highest rank in "Counter-Strike: Global Offensive"?', [
            'Silver' => false,
            'Gold Nova' => false,
            'Master Guardian' => false,
            'Global Elite' => true,
        ]);
        
        $quiz_games->addQuestion('Which of these games is set in the "Mushroom Kingdom"?', [
            'Sonic the Hedgehog' => false,
            'Super Mario Bros.' => true,
            'Donkey Kong Country' => false,
            'Kirby' => false,
        ]);
        
        $quiz_games->addQuestion('Who is the main antagonist in the "Metal Gear Solid" series?', [
            'Solid Snake' => false,
            'Liquid Snake' => true,
            'Revolver Ocelot' => false,
            'Big Boss' => false,
        ]);
        
        $quiz_games->addQuestion('Which video game features a character named "Tom Nook"?', [
            'Animal Crossing' => true,
            'Harvest Moon' => false,
            'Stardew Valley' => false,
            'The Sims' => false,
        ]);
        
        $quiz_games->addQuestion('Which game franchise includes the "Nuka-Cola" soft drink?', [
            'Fallout' => true,
            'Bioshock' => false,
            'Borderlands' => false,
            'Metro' => false,
        ]);
        
        $quiz_games->addQuestion('Which game studio is responsible for creating "The Elder Scrolls" series?', [
            'Ubisoft' => false,
            'Bethesda' => true,
            'BioWare' => false,
            'Square Enix' => false,
        ]);
        

        $quiz_scape = Quiz::create(['title' => ' Old School Rune Scape']);

$quiz_scape->addQuestion('How many subquests are there in "Recipe for Disaster"?', [
    '7' => false,
    '10' => false,
    '8' => false,
    '9' => true,
]);

$quiz_scape->addQuestion('What is the drop rate for a Dragon Warhammer from Lizardman Shamans?', [
    '1/5000' => false,
    '1/2500' => true,
    '1/10000' => false,
    '1/500' => false,
]);

$quiz_scape->addQuestion('At what Agility level can you use the shortcut in TzHaar city?', [
    '81' => true,
    '85' => false,
    '87' => false,
    '89' => false,
]);

$quiz_scape->addQuestion('Which Barrows brother is immune to Magic attacks?', [
    'Ahrim' => false,
    'Torag' => false,
    'Dharok' => false,
    'Karil' => true,
]);

$quiz_scape->addQuestion('Which of the following does NOT give you a strength bonus?', [
    'Amulet of Strength' => false,
    'Infernal Cape' => false,
    'Bandos Chestplate' => false,
    'Amulet of Glory' => true,
]);

$quiz_scape->addQuestion('What is the max hit a player can achieve with full max strength gear?', [
    '48' => false,
    '52' => false,
    '49' => false,
    '51' => true,
]);

$quiz_scape->addQuestion('Which ancient language did Zarosian followers speak?', [
    'Elder Tongue' => false,
    'Ancient Elvish' => false,
    'Ardougnian' => false,
    'Kharidian' => true,
]);

$quiz_scape->addQuestion('How much Slayer experience do you get from killing a Nechryael?', [
    '85' => false,
    '90' => false,
    '91' => true,
    '95' => false,
]);

$quiz_scape->addQuestion('What is the defense level requirement to wear Bandos armor?', [
    '65' => false,
    '70' => true,
    '60' => false,
    '75' => false,
]);

$quiz_scape->addQuestion('What is the in-game name of the area where you fight Vorkath?', [
    'Dragon Isle' => false,
    'Fossil Island' => false,
    'Ungael' => true,
    'Asgarnia' => false,
]);

$quiz_scape->addQuestion('Which runes are required to cast the spell Ice Barrage?', [
    'Water, Blood, Death, Air' => false,
    'Blood, Death, Fire, Water' => false,
    'Blood, Death, Water' => true,
    'Water, Death, Blood, Soul' => false,
]);

$quiz_scape->addQuestion('What is the name of the mage that gives you the Ghostly Robes in the miniquest "Curse of Zaros"?', [
    'Eblis' => false,
    'Rasolo' => false,
    'Dhalak' => true,
    'Azzanadra' => false,
]);

$quiz_scape->addQuestion('How many coins do you need to purchase a Dragon Scimitar from Ape Atoll?', [
    '100k' => false,
    '200k' => false,
    '80k' => true,
    '120k' => false,
]);

$quiz_scape->addQuestion('What is the minimum level to enter the Warriors’ Guild?', [
    '110' => false,
    '100' => false,
    '90' => true,
    '85' => false,
]);

$quiz_scape->addQuestion('Which boss drops the Zamorakian Spear?', [
    'General Graardor' => false,
    'Zilyana' => false,
    'Kree\'arra' => false,
    'K\'ril Tsutsaroth' => true,
]);


    }
}
