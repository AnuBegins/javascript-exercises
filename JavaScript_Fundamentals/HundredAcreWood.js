

var tigger = { character: "Tigger" }; // start with just the character attribute
tigger.north = pooh; // add more attributes, where we are actually storing the memory location for the other object
tigger.north.east = bees;
tigger.north.west = piglet;          // Follow Tigger's north attribute to a location in memory


var pooh = { character: "Winnie the Pooh" };
pooh.south = tigger;
pooh.east = bees;
pooh.west = piglet;
pooh.north = christopherRobin;

var piglet = { character: "Piglet"};        // create Piglet's home object with just the character attribute
piglet.east = tigger.north;          // Piglet's east attribute is Tigger's north attribute, which is a memory address. Assign that object's west attribute to piglet
piglet.north = owl;


var bees = { character: "Bees"};
bees.west = tigger.north;


var owl = {character: "Owl"};
owl.south = piglet;
owl.east = christopherRobin;


var christopherRobin = {character: "Christopher Robin"};
christopherRobin.north = kanga;
christopherRobin.south = pooh;
christopherRobin.west = owl;
christopherRobin.east = rabbit;

var rabbit = {character: "Rabbit"};
rabbit.east = gopher;
rabbit.south = bees;
rabbit.west = christopherRobin;

var gopher = {character: "Gopher"};
gopher.west = rabbit;

var kanga = {character: "Kanga"};
kanga.north = eeyore;
kanga.south = christopherRobin;

var eeyore = {character: "Eeyore"};
eeyore.east = heffalumps;
eeyore.south = kanga;

var heffalumps = {character: "Heffalumps"};
heffalumps.west = eeyore;