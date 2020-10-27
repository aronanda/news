
const items = [
  { name: 'Fox News', slug: 'fox', site: 'topnewsshow.com/category/fox-news' },
  { name: 'BitChute', slug: 'chute', site: 'bitchute.com' },
  { name: 'X22 Report', slug: 'x22', site: 'x22report.com', chute: 'n78PbEkvWx2g' },
  { name: 'IPOT', slug: 'ipot', chute: 'Xe2ztraIRXRX', gab: 'IPOT' },
  { name: 'Dollar Vigilante', slug: 'tdv', site: 'dollarvigilante.com', chute: 'DkNYbFJKDPpX' },
  { name: 'Joe M', slug: 'storm', chute: '50tnZ2hx6duU', gab: 'StormIsUponUs' },
  { name: 'SGT Report', slug: 'sgt', site: 'sgtreport.tv' },
  { name: 'Tim Pool', slug: 'tim', yt: 'c/Timcast/videos' },
  { name: 'Timcast', slug: 'timcast', yt: 'c/TimcastNews/videos' },
  { name: 'Timcast IRL', slug: 'timcastirl', yt: 'c/TimcastIRL/videos' },
  { name: 'Black Conservative Patriot', slug: 'bcp', yt: 'c/BlackConservativePatriot/videos' },
  { name: 'InTheMatrixxx', slug: 'matrix', site: 'inthematrixxx.com' },
  { name: 'Edge of Wonder', slug: 'edge', site: 'edgeofwonder.tv' },
  { name: 'Redpill78', slug: 'redpill', chute: 'ckAsk0HlOn5w', gab: '' },
  { name: 'Mouthy Buddha', slug: 'buddha', chute: 'wnuZEpMvRZs6' },
  { name: 'Destroying the Illusion', slug: 'illusion', chute: 'XyIkC2xqtFHY' },
  { name: 'PrayingMedic', slug: 'medic', chute: 'FJLej1ou6JVe' },
  { name: 'Spaceshot76', slug: 'spaceshot', yt: 'channel/UCxBRXoY4uqpHwmm7DVIePIQ' },
  { name: 'WokeSocieties', slug: 'woke', site: 'wokesocieties.com' },
  { name: 'Amazing Polly', slug: 'polly', site: '', chute: 'ZofFQQoDoqYT' },
  { name: 'Truth & Art TV', slug: 'truthart', site: 'truthandarttv.com' },
  { name: 'PatriotsSoapbox', slug: 'soapbox', chute: 'wnKzAtP4CGk4' },
  { name: 'Dustin Nemos', slug: 'nemos', chute: 'dustinnemos' },
  { name: 'AndWeKnow', slug: 'andweknow', site: 'andweknow.com', chute: '1uDxpDogKMs9' },
  { name: 'Stroppy Me', slug: 'stroppy', chute: 'M4YtazGIdcIH' },
  { name: 'Justinformed Talk', slug: 'justinformed', chute: 'zWqrqKTLkhqW' },
  { name: 'Sarah Westall', slug: 'westall', chute: '1Ez5eVnVz1yY' },
  { name: 'InfoWars', slug: 'infowars', site: 'banned.video' },
  { name: 'War Room', slug: 'warroom', yt: 'channel/UCWVvSbEw0imVIT8hiDcNgcQ/videos' },
]

const actions = [
  { name: 'Bitchute', slug: 'chute', color: 'amber darken-2', icon: 'video', pre: 'https://bitchute.com/channel/' },
  { name: 'Website', slug: 'site', color: 'blue', icon: 'web', pre: 'http://' },
  { name: 'Gab', slug: 'gab', color: 'green', icon: 'message', pre: 'https://gab.com/' },
  { name: 'Youtube', slug: 'yt', color: 'red', icon: 'youtube', pre: 'https://www.youtube.com/' },
]

if (typeof exports === 'undefined') {
  Object.assign(window, { items, actions })
} else {
  Object.assign(exports, { items, actions })
}
