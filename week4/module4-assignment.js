var names = ["Jakob", "Kohli", "Rohit", "Johnwick", "Allu"];

for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var firstLetter = name.charAt(0);
    firstLetter = firstLetter.toUpperCase();

    if (firstLetter === 'J') {
        console.log("Goodbye " + name);
    } else {
        console.log("Hello " + name);
    }
}
