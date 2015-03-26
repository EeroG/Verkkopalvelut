// tehdään angular module, johon injektoidaan firebase riippuvuus
angular.module('scheduleApp', ['firebase'])


//tehdään pääkontrolleri 

.controller('mainController', function ($scope, $firebase) {


    var ref = new Firebase("https://scorching-heat-3335.firebaseio.com/days");

    var fb = $firebase(ref);

    //$asObjectin avulla syncronoidaan firebase-kannan JSON-objektit angular-objekteiksi
    var syncObject = fb.$asObject();

    //edellisen objektin avulla bindataan tietokanta myös $scope-muuttujaan.
    //Näin yksinkertaisesti tietokanta on bindattu kaikille käyttäjille reaaliajassa
    syncObject.$bindTo($scope, 'days');



    //Seuraavaksi tehdään datan asetusfunktio.
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