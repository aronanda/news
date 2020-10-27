#!/usr/bin/env node

const miniget = require('miniget')
const cheerio = require('cheerio')
const open = require('open')
const log = console.log.bind(console)

const [ cmd, slug ] = process.argv.slice(2)

const foxNewsUrl = 'https://topnewsshow.com/category/fox-news'

function pbcopy(data) {
  const proc = require('child_process').spawn('pbcopy')
  proc.stdin.write(data)
  proc.stdin.end()
}

async function getUrl(cmd, slug) {
  if (cmd === 'chute') {
    if (!slug)
      return 'https://www.bitchute.com'
    const url = `https://www.bitchute.com/video/${slug}/`
    const body = await miniget(url).text()
    let $ = cheerio.load(body)
    let videoUrl = $('.video-container video source').attr('src')

    return videoUrl
  } else {
    slug = cmd
  }
  const body = await miniget(foxNewsUrl).text()
  let $ = cheerio.load(body)
  let video
  let category
  switch (slug) {
    case 'five':
      category = 'the-five'
      break
    case 'lou':
      category = 'lou-dobbs-tonight'
      break
    case 'hannity':
      category = 'hannity'
      break
    case 'laura':
      category = 'the-ingraham-angle'
      break
    case 'tucker':
      category = 'tucker-carlson-tonight'
      break
    case 'watters':
      category = 'watters-world'
      break
    case 'judge':
      category = 'justice-with-judge-jeanine'
      break
    case 'greg':
      category = 'the-greg-gutfeld-show'
      break
    case 'levin':
      category = 'life-liberty-levin'
      break
    case 'hilton':
      category = 'the-next-revolution-with-steve-hilton'
      break
  }

  if (!category) {
    let url
    switch (slug) {
      case 'x22':
        url = 'https://bitchute.com/channel/n78PbEkvWx2g'
        break
      case 'ipot':
        url = 'https://bitchute.com/channel/Xe2ztraIRXRX'
        break
      case 'tdv':
        url = 'https://bitchute.com/channel/DkNYbFJKDPpX'
        break
      case 'storm':
        url = 'https://bitchute.com/channel/50tnZ2hx6duU'
        break
      case 'tim':
        url = 'https://youtube.com/c/Timcast/videos'
        break
      case 'timcast':
        url = 'https://youtube.com/c/TimcastNews/videos'
        break
      case 'timcastirl':
        url = 'https://youtube.com/c/TimcastIRL/videos'
        break
      case 'bcp':
        url = 'https://www.youtube.com/c/BlackConservativePatriot/videos'
        break
      case 'war':
        url = 'https://www.youtube.com/channel/UCWVvSbEw0imVIT8hiDcNgcQ/videos'
        break
      default:
        url = 'https://aronanda.github.io/news'
        break
    }
    return url
  }

  const main = $('#main').children('article').each((ii, child) => {
    const isFirst = $(child).hasClass(`category-${category}`)
    if (!video && isFirst) {
      video = child
    }
  })
  let url = $(video).children().first().children().first().attr('href')
  let vidBody = await miniget(url).text()
  $ = cheerio.load(vidBody)
  const iframe = $('iframe')
  let embedUrl = iframe.attr('src')
  if (embedUrl.match(/^\/\//)) {
    embedUrl = embedUrl.replace(/^\/\//, 'https://')
  }
  return embedUrl
}

async function exec() {
  return getUrl(cmd, slug).then(url => {
    log(url)
    pbcopy(url)
    open(url)
  })
}

log('');exec().then(() => log('')).catch(err => log(err))
