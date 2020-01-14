let friends = ['Avera', 'Brad', 'John', 'Mollie', 'Abby']
function linesOfCode(friends) {
    for(i=0;i< friends.length; i++){
        for(a = 100; a > 0; a--) { 
        console.log(a + " lines of code in the file, " + a + " lines of code;" + friends[i] + " strikes one out, clears it all out," + a + " lines of code in the file")};
    }
}
linesOfCode(friends);
        

