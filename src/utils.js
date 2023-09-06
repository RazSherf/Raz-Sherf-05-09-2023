const weatherIcons = [
    { IconNumber: 1, Text: 'Sunny', IconLink: 'https://developer.accuweather.com/sites/default/files/01-s.png' },
    { IconNumber: 2, Text: 'Mostly Sunny', IconLink: 'https://developer.accuweather.com/sites/default/files/02-s.png' },
    { IconNumber: 3, Text: 'Partly Sunny', IconLink: 'https://developer.accuweather.com/sites/default/files/03-s.png' },
    { IconNumber: 4, Text: 'Intermittent Clouds', IconLink: 'https://developer.accuweather.com/sites/default/files/04-s.png' },
    { IconNumber: 5, Text: 'Hazy Sunshine', IconLink: 'https://developer.accuweather.com/sites/default/files/05-s.png' },
    { IconNumber: 6, Text: 'Mostly Cloudy', IconLink: 'https://developer.accuweather.com/sites/default/files/06-s.png' },
    { IconNumber: 7, Text: 'Cloudy', IconLink: 'https://developer.accuweather.com/sites/default/files/07-s.png' },
    { IconNumber: 8, Text: 'Dreary (Overcast)', IconLink: 'https://developer.accuweather.com/sites/default/files/08-s.png' },
    { IconNumber: 11, Text: 'Fog', IconLink: 'https://developer.accuweather.com/sites/default/files/11-s.png' },
    { IconNumber: 12, Text: 'Showers', IconLink: 'https://developer.accuweather.com/sites/default/files/12-s.png' },
    { IconNumber: 13, Text: 'Mostly Cloudy w/ Showers', IconLink: 'https://developer.accuweather.com/sites/default/files/13-s.png' },
    { IconNumber: 14, Text: 'Partly Sunny w/ Showers', IconLink: 'https://developer.accuweather.com/sites/default/files/14-s.png' },
    { IconNumber: 15, Text: 'T-Storms', IconLink: 'https://developer.accuweather.com/sites/default/files/15-s.png' },
    { IconNumber: 16, Text: 'Mostly Cloudy w/ T-Storms', IconLink: 'https://developer.accuweather.com/sites/default/files/16-s.png' },
    { IconNumber: 17, Text: 'Partly Sunny w/ T-Storms', IconLink: 'https://developer.accuweather.com/sites/default/files/17-s.png' },
    { IconNumber: 18, Text: 'Rain', IconLink: 'https://developer.accuweather.com/sites/default/files/18-s.png' },
    { IconNumber: 19, Text: 'Flurries', IconLink: 'https://developer.accuweather.com/sites/default/files/19-s.png' },
    { IconNumber: 20, Text: 'Mostly Cloudy w/ Flurries', IconLink: 'https://developer.accuweather.com/sites/default/files/20-s.png' },
    { IconNumber: 21, Text: 'Partly Sunny w/ Flurries', IconLink: 'https://developer.accuweather.com/sites/default/files/21-s.png' },
    { IconNumber: 22, Text: 'Snow', IconLink: 'https://developer.accuweather.com/sites/default/files/22-s.png' },
    { IconNumber: 23, Text: 'Mostly Cloudy w/ Snow', IconLink: 'https://developer.accuweather.com/sites/default/files/23-s.png' },
    { IconNumber: 24, Text: 'Ice', IconLink: 'https://developer.accuweather.com/sites/default/files/24-s.png' },
    { IconNumber: 25, Text: 'Sleet', IconLink: 'https://developer.accuweather.com/sites/default/files/25-s.png' },
    { IconNumber: 26, Text: 'Freezing Rain', IconLink: 'https://developer.accuweather.com/sites/default/files/26-s.png' },
    { IconNumber: 29, Text: 'Rain and Snow', IconLink: 'https://developer.accuweather.com/sites/default/files/29-s.png' },
    { IconNumber: 30, Text: 'Hot', IconLink: 'https://developer.accuweather.com/sites/default/files/30-s.png' },
    { IconNumber: 31, Text: 'Cold', IconLink: 'https://developer.accuweather.com/sites/default/files/31-s.png' },
    { IconNumber: 32, Text: 'Windy', IconLink: 'https://developer.accuweather.com/sites/default/files/32-s.png' },
    { IconNumber: 33, Text: 'Clear', IconLink: 'https://developer.accuweather.com/sites/default/files/33-s.png' },
    { IconNumber: 34, Text: 'Mostly Clear', IconLink: 'https://developer.accuweather.com/sites/default/files/34-s.png' },
    { IconNumber: 35, Text: 'Partly Cloudy', IconLink: 'https://developer.accuweather.com/sites/default/files/35-s.png' },
    { IconNumber: 36, Text: 'Intermittent Clouds', IconLink: 'https://developer.accuweather.com/sites/default/files/36-s.png' },
    { IconNumber: 37, Text: 'Hazy Moonlight', IconLink: 'https://developer.accuweather.com/sites/default/files/37-s.png' },
    { IconNumber: 38, Text: 'Mostly Cloudy', IconLink: 'https://developer.accuweather.com/sites/default/files/38-s.png' },
    { IconNumber: 39, Text: 'Partly Cloudy w/ Showers', IconLink: 'https://developer.accuweather.com/sites/default/files/39-s.png' },
    { IconNumber: 40, Text: 'Mostly Cloudy w/ Showers', IconLink: 'https://developer.accuweather.com/sites/default/files/40-s.png' },
    { IconNumber: 41, Text: 'Partly Cloudy w/ T-Storms', IconLink: 'https://developer.accuweather.com/sites/default/files/41-s.png' },
    { IconNumber: 42, Text: 'Mostly Cloudy w/ T-Storms', IconLink: 'https://developer.accuweather.com/sites/default/files/42-s.png' },
    { IconNumber: 43, Text: 'Mostly Cloudy w/ Flurries', IconLink: 'https://developer.accuweather.com/sites/default/files/43-s.png' },
    { IconNumber: 44, Text: 'Mostly Cloudy w/ Snow', IconLink: 'https://developer.accuweather.com/sites/default/files/44-s.png' },
];

const getWeatherIconLink = (iconNumber) => {
    const weatherIcon = weatherIcons.find((icon) => icon.IconNumber === iconNumber);
    if (weatherIcon) {
        return weatherIcon.IconLink;
    }
    return '';
}

export default getWeatherIconLink;