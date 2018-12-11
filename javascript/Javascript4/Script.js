var auto = {
    kleur : "Blauw",
    merk : "Audi",
    snelheid : 0,

    gasgeven : function () {
        this.snelheid += 5
        console.log(this.snelheid);
    },

    toeteren : function () {
        console.log("Toet!")
        
    }

}
console.log(auto.kleur);
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.toeteren();
