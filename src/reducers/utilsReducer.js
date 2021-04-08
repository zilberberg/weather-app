import {  } from "../constants/favoritesConstants";

let initialState = {
    locationDetails: {
        Version: 1,
        Key: 215854,
        Type: "City",
        Rank: 31,
        LocalizedName: "Tel Aviv",
        Country: {
          ID: "IL",
          LocalizedName: "Israel"
        },
        AdministrativeArea: {
          ID: "TA",
          LocalizedName: "Tel Aviv"
        }
    },
    currentWeather: {
        LocalObservationDateTime: "2021-04-08T17:25:00+03:00",
        EpochTime: 1617891900,
        WeatherText: "Partly sunny",
        WeatherIcon: 3,
        HasPrecipitation: false,
        PrecipitationType: null,
        IsDayTime: true,
        Temperature: {
            Metric: {
                Value: 21.6,
                Unit: "C",
                UnitType: 17
            },
            Imperial: {
                Value: 71,
                Unit: "F",
                UnitType: 18
            }
        },
        MobileLink: "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
        Link: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
    },
    forecast: [
        {
            Date: "2021-04-08T07:00:00+03:00",
            EpochDate: 1617854400,
            Temperature: {
              Minimum: {
                Value: 56,
                Unit: "F",
                UnitType: 18
              },
              Maximum: {
                Value: 75,
                Unit: "F",
                UnitType: 18
              }
            },
            Day: {
              Icon: 3,
              IconPhrase: "Partly sunny",
              HasPrecipitation: false
            },
            Night: {
              Icon: 35,
              IconPhrase: "Partly cloudy",
              HasPrecipitation: false
            },
            Sources: [
              "AccuWeather"
            ],
            MobileLink: "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
            Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
          },
          {
            Date: "2021-04-09T07:00:00+03:00",
            EpochDate: 1617940800,
            Temperature: {
              Minimum: {
                Value: 55,
                Unit: "F",
                UnitType: 18
              },
              Maximum: {
                Value: 70,
                Unit: "F",
                UnitType: 18
              }
            },
            Day: {
              Icon: 3,
              IconPhrase: "Partly sunny",
              HasPrecipitation: false
            },
            Night: {
              Icon: 38,
              IconPhrase: "Mostly cloudy",
              HasPrecipitation: false
            },
            Sources: [
              "AccuWeather"
            ],
            MobileLink: "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
            Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us"
          },
          {
            Date: "2021-04-10T07:00:00+03:00",
            EpochDate: 1618027200,
            Temperature: {
              Minimum: {
                Value: 57,
                Unit: "F",
                UnitType: 18
              },
              Maximum: {
                Value: 63,
                Unit: "F",
                UnitType: 18
              }
            },
            Day: {
              Icon: 6,
              IconPhrase: "Mostly cloudy",
              HasPrecipitation: false
            },
            Night: {
              Icon: 36,
              IconPhrase: "Intermittent clouds",
              HasPrecipitation: false
            },
            Sources: [
              "AccuWeather"
            ],
            MobileLink: "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
            Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us"
          },
          {
            Date: "2021-04-11T07:00:00+03:00",
            EpochDate: 1618113600,
            Temperature: {
              Minimum: {
                Value: 55,
                Unit: "F",
                UnitType: 18
              },
              Maximum: {
                Value: 66,
                Unit: "F",
                UnitType: 18
              }
            },
            Day: {
              Icon: 4,
              IconPhrase: "Intermittent clouds",
              HasPrecipitation: false
            },
            Night: {
              Icon: 36,
              IconPhrase: "Intermittent clouds",
              HasPrecipitation: false
            },
            Sources: [
              "AccuWeather"
            ],
            MobileLink: "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
            Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us"
          },
          {
            Date: "2021-04-12T07:00:00+03:00",
            EpochDate: 1618200000,
            Temperature: {
              Minimum: {
                Value: 52,
                Unit: "F",
                UnitType: 18
              },
              Maximum: {
                Value: 67,
                Unit: "F",
                UnitType: 18
              }
            },
            Day: {
              Icon: 3,
              IconPhrase: "Partly sunny",
              HasPrecipitation: false
            },
            Night: {
              Icon: 33,
              IconPhrase: "Clear",
              HasPrecipitation: false
            },
            Sources: [
              "AccuWeather"
            ],
            MobileLink: "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
            Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us"
          }
    ],
}
function utilsReducer(state = {...initialState}, action) {
    switch (action.type) {

        default:
            return state;
    }
}

export { utilsReducer }