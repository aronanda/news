
const items = [
  { name: 'Amazing Polly', slug: 'polly', site: '', chute: 'ZofFQQoDoqYT' },
  { name: 'AndWeKnow', slug: 'andweknow', site: 'andweknow.com', chute: '1uDxpDogKMs9' },
  { name: 'BitChute', slug: 'chute', site: 'bitchute.com' },
  { name: 'Black Conservative Patriot', slug: 'bcp', yt: 'c/BlackConservativePatriot/videos' },
  { name: 'Destroying the Illusion', slug: 'illusion', chute: 'XyIkC2xqtFHY' },
  { name: 'Dollar Vigilante', slug: 'tdv', site: 'dollarvigilante.com', chute: 'DkNYbFJKDPpX' },
  { name: 'Dustin Nemos', slug: 'nemos', chute: 'dustinnemos' },
  { name: 'Edge of Wonder', slug: 'edge', site: 'edgeofwonder.tv' },
  { name: 'Fox News', slug: 'fox', site: 'topnewsshow.com/category/fox-news' },
  { name: 'Gab', slug: 'gab', site: 'gab.com' },
  { name: 'IPOT', slug: 'ipot', chute: 'Xe2ztraIRXRX', gab: 'IPOT' },
  { name: 'InfoWars', slug: 'infowars', site: 'banned.video' },
  { name: 'InTheMatrixxx', slug: 'matrix', site: 'inthematrixxx.com' },
  { name: 'Joe M', slug: 'storm', chute: '50tnZ2hx6duU', gab: 'StormIsUponUs' },
  { name: 'Justinformed Talk', slug: 'justinformed', chute: 'zWqrqKTLkhqW' },
  { name: 'Millennial Millie', yt: 'c/MillennialMillie/videos' },
  { name: 'Mouthy Buddha', slug: 'buddha', chute: 'wnuZEpMvRZs6' },
  { name: 'PatriotsSoapbox', slug: 'soapbox', chute: 'wnKzAtP4CGk4' },
  { name: 'PrayingMedic', slug: 'medic', chute: 'FJLej1ou6JVe' },
  { name: 'Redpill78', slug: 'redpill', chute: 'ckAsk0HlOn5w', gab: '' },
  { name: 'Sarah Westall', slug: 'westall', chute: '1Ez5eVnVz1yY' },
  { name: 'SGT Report', slug: 'sgt', site: 'sgtreport.tv' },
  { name: 'Spaceshot76', slug: 'spaceshot', yt: 'channel/UCxBRXoY4uqpHwmm7DVIePIQ' },
  { name: 'Stroppy Me', slug: 'stroppy', chute: 'M4YtazGIdcIH' },
  { name: 'Tim Pool', slug: 'tim', yt: 'c/Timcast/videos' },
  { name: 'Timcast', slug: 'timcast', yt: 'c/TimcastNews/videos' },
  { name: 'Timcast IRL', slug: 'timcastirl', yt: 'c/TimcastIRL/videos' },
  { name: 'TrueTV', slug: 'true', yt: 'c/TrueTVFactsOfTheGlobe/videos', chute: 'DBeueU8c231O' },
  { name: 'Truth & Art TV', slug: 'truthart', site: 'truthandarttv.com' },
  { name: 'War Room', slug: 'warroom', site: 'pandemic.warroom.org', yt: 'channel/UCWVvSbEw0imVIT8hiDcNgcQ/videos' },
  { name: 'WokeSocieties', slug: 'woke', site: 'wokesocieties.com' },
  { name: 'X22 Report', slug: 'x22', site: 'x22report.com', chute: 'n78PbEkvWx2g' },
]

const actions = [
  { name: 'Bitchute', slug: 'chute', color: 'amber darken-2', icon: 'video', pre: 'https://bitchute.com/channel/' },
  { name: 'Website', slug: 'site', color: 'blue', icon: 'web', pre: 'http://' },
  { name: 'Gab', slug: 'gab', color: 'green', icon: 'message', pre: 'https://gab.com/' },
  { name: 'Youtube', slug: 'yt', color: 'red', icon: 'youtube', pre: 'https://www.youtube.com/' },
]

if (typeof exports === 'undefined')
  Object.assign(window, { items, actions })
else
  Object.assign(exports, { items, actions })
