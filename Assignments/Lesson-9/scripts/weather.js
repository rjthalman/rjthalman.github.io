
                var header = document.querySelector('header');
                var section = document.querySelector('section');
                var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
                var request = new XMLHttpRequest();
                request.open('GET', requestURL);
                request.responseType = 'json';
                request.send();
                request.onload = function() {
                    var threetowns = request.response;
                    populateHeader(threetowns);
                    showTowns(threetowns);
                }
                function populateHeader(jsonObj) {
                    var myH1 = document.createElement('h1');
                    myH1.textContent = "Your Local Community";
                    header.appendChild(myH1);

                    var myPara = document.createElement('p');
                    myPara.textContent = "Franklin, Greenville, and Springfield ";
                    header.appendChild(myPara);
                }
                function showTowns(jsonObj) {
                    var towns = jsonObj['towns'];
                    towns.splice (2,1);

                    for (var i = 0; i < towns.length; i++) {
                        var myArticle = document.createElement('article');
                        var myH2 = document.createElement('h2');
                        var myPara1 = document.createElement('p');
                        var myPara2 = document.createElement('p');
                        var myPara3 = document.createElement('p');
                        var myPara4 = document.createElement('p');
                        var myPara5 = document.createElement('p');
                        var myList = document.createElement('ul');

                        myH2.textContent = towns[i].name;
                        myPara1.textContent = 'Motto: ' + towns[i].motto;
                        myPara2.textContent = 'Founded: ' + towns[i].yearFounded;
                        myPara3.textContent = 'Current population: ' + towns[i].currentPopulation;
                        myPara4.textContent = 'Average Rainfall: ' + towns[i].averageRainfall + " inches";
                        myPara5.textContent = 'Community Events:';

                        var communityEvents = towns[i].events;
                        for (var j = 0; j < communityEvents.length; j++) {
                            var listItem = document.createElement('li');
                            listItem.textContent = communityEvents[j];
                            myList.appendChild(listItem);
                        }

                        myArticle.appendChild(myH2);
                        myArticle.appendChild(myPara1);
                        myArticle.appendChild(myPara2);
                        myArticle.appendChild(myPara3);
                        myArticle.appendChild(myPara4);
                        myArticle.appendChild(myPara5);
                        myArticle.appendChild(myList);

                        section.appendChild(myArticle);
                    }
                }

    
    