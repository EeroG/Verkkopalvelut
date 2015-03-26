// tehdään angular moduli, johon injektoidaan firebase
angular.module('scheduleApp', ['firebase'])

/** 
 * Tehdään pääkontrolleri, joka määrittää miten angular-sovellus toimii. Kontrolleri on javascript objekti joka luodaan
 * object constructorin avulla. Esim määrittämällä controllerin sisällä $scope.name = Eero; voidaan muuttujaa kutsua
 * HTML:ssä {{name}}.
 */

.controller('mainController', function ($scope, $firebase) {
    //yhteys firebase palvelimen tietokantaan
    var ref = new Firebase("https://scorching-heat-3335.firebaseio.com/days");
    var fb = $firebase(ref);
    /**
     * $asObject-metodin avulla syncronoidaan firebase-kannan JSON-objektit angular-objekteiksi, 
     * jolloin niitä voidaan käyttää sovelluksessa */
    var syncObject = fb.$asObject();
    //edellisen objektin avulla bindataan tietokanta myös $scope-muuttujaan eli controlleriin.
    //Näin yksinkertaisesti tietokanta on bindattu kaikille käyttäjille reaaliajassa
    syncObject.$bindTo($scope, 'days');
    //Seuraavaksi tehdään oletusarvojen asetusfunktio, jota kutsutaan "Tyhjennä varaukset"-nappia painettaessa.
    $scope.reset = function () {

        fb.$set({
            a: {
                name: 'Maanantai',
                slots: {
                    110: {
                        time: '11:00',
                        booked: false
                    },
                    130: {
                        time: '13:00',
                        booked: false
                    },
                    150: {
                        time: '15:00',
                        booked: false
                    },
                    170: {
                        time: '17:00',
                        booked: false
                    },
                    180: {
                        time: '18:00',
                        booked: false
                    }
                }
            },
            b: {
                name: 'Tiistai',
                slots: {
                    110: {
                        time: '11:00',
                        booked: false
                    },
                    130: {
                        time: '13:00',
                        booked: false
                    },
                    150: {
                        time: '15:00',
                        booked: false
                    },
                    170: {
                        time: '17:00',
                        booked: false
                    },
                    180: {
                        time: '18:00',
                        booked: false
                    }
                }
            },
            c: {
                name: 'Keskiviikko',
                slots: {
                    110: {
                        time: '11:00',
                        booked: false
                    },
                    130: {
                        time: '13:00',
                        booked: false
                    },
                    150: {
                        time: '15:00',
                        booked: false
                    },
                    170: {
                        time: '17:00',
                        booked: false
                    },
                    180: {
                        time: '18:00',
                        booked: false
                    }
                }
            },
            d: {
                name: 'Torstai',
                slots: {
                   
                    110: {
                        time: '11:00',
                        booked: false
                    },
                    130: {
                        time: '13:00',
                        booked: false
                    },
                    150: {
                        time: '15:00',
                        booked: false
                    },
                    170: {
                        time: '17:00',
                        booked: false
                    },
                    180: {
                        time: '18:00',
                        booked: false
                    }
                }
            },
            e: {
                name: 'Perjantai',
                slots: {
                    110: {
                        time: '11:00',
                        booked: false
                    },
                    130: {
                        time: '13:00',
                        booked: false
                    },
                    150: {
                        time: '15:00',
                        booked: false
                    },
                    170: {
                        time: '17:00',
                        booked: false
                    },
                    180: {
                        time: '18:00',
                        booked: false
                    }
                }
            }

        });
    }


});
