
//import info from package.json
import * as app from '../../package.json';

/**
 * App configuration object
 */
export const AppConfig={
  title: "App title",
  subtitle: "app subtitle",
  version: app['version'],
  logo: 'assets/img/logo.png',
  menuButtons: [ ],
  menuItems: [{
    url:'/home', label: "Home", matIco:"home"
    },{
    url:'/league/1', label: "Premier League",
    img:'assets/img/premier_league_logo.png'
    },{
    url:'/league/2', label: "Bundesliga",
    img:'assets/img/bundesliga_logo.png'
    },{
    url:'/league/3', label: "Primera division",
    img:'assets/img/primera_division_logo.png'
    },{
    url:'/league/4', label: "Serie A",
    img:'assets/img/serie_a_logo.png'
    },{
    url:'/help', label: "Help", matIco:"help"
  }],
  socialMedia:{
    title:'share',
    items:[{
      url:'https://twitter.com', faIco:'fab fa-twitter', label:"Twitter"
      },{
      url:'https://facebook.com', faIco:'fab fa-facebook', label:"Facebook"
      },{
      url:'https://linkedin.com', faIco:'fab fa-linkedin', label:"LinkedIn"
      },{
      url:'https://google.plus.com', faIco:'fab fa-google-plus', label:"GooglePlus"
    }]
  },
  contactInfo:{
    title:'CONTACT',
    items:[{
      type:'text', label:'Address: ', value: 'One Way Street, 345', faIco:'fas fa-map-marker-alt'
      },{
      type:'text', label:'Phone: ', value: '+381 123 45 67 890', faIco:'fas fa-phone'
      },{
      type:'email', label:'E-mail: ', faIco:'far fa-envelope',
        value: 'email@your.domain.com', url: 'mailto:email@your.domain.com'
      },{
      type:'link', label:'Website: ', faIco:'fas fa-globe',
      value: 'www.dv4all.com', url: 'https://www.dv4all.com'
    }]
  },
  footerLogo:{
    uri:"url('assets/img/dv4all_logo.svg')",
    fill:"contain",
    url:'https://dv4all.com'
  },
  footerLinks:{
    title:'SOURCES',
    items:[{
      label:'Football-data.org',
      url: 'https://api.football-data.org/'
    },{
      label:'Wikipedia API',
      url: 'https://www.mediawiki.org/wiki/API:Main_page'
    },{
      label:'Twitter API',
      url: 'https://developer.twitter.com/'
    },{
      label:'Youtube API',
      url: 'https://developers.google.com/youtube/v3/'
    },{
      faIco: "fab fa-github",
      label:'Github',
      url: 'https://github.com/dmijatovic/ng6-football'
    }]
  },
  apiEndpoints: {
    point1:""
  },
  graphQL:{
    competitions:{
      "query": "{competitions(select:[445,452,455,456]){name year league currentMatchday numberOfMatchdays numberOfTeams numberOfGames lastUpdated wiki{title desc url}}}"
    }
  }
}

/**
 * App utility functions
 */
export const AppUtils={


}
