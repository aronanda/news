#!/usr/bin/env node

const miniget = require('miniget')
const cheerio = require('cheerio')
const open = require('open')
const log = console.log.bind(console)

const [ cmd, ...args ] = process.argv.slice(2)

const foxNewsUrl = 'https://topnewsshow.com/category/fox-news'

function pbcopy(data) {
  const proc = require('child_process').spawn('pbcopy')
  proc.stdin.write(data)
  proc.stdin.end()
}

async function getFoxNews(slug = 'tucker') {
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
    default:
      category = 'tucker-carlson-tonight'
      break
  }

  const main = $('#main').children('article').each((ii, child) => {
    const isFirst = $(child).hasClass(`category-${category}`)
    if (!video && isFirst) {
      video = child
    }
  })
  let vidUrl = $(video).children().first().children().first().attr('href')
  let vidBody = await miniget(vidUrl).text()
  $ = cheerio.load(vidBody)
  const iframe = $('iframe')
  let embedUrl = iframe.attr('src')
  if (embedUrl.match(/^\/\//)) {
    embedUrl = embedUrl.replace(/^\/\//, 'https://')
  }
  return embedUrl
}

async function getBitchute(slug) {
  // slug = 'YGRRMH0fzcjv'
  if (!slug)
    return
  const url = `https://www.bitchute.com/video/${slug}/`
  const body = await miniget(url).text()
  let $ = cheerio.load(body)
  let videoUrl = $('.video-container video source').attr('src')

  return videoUrl
}

async function exec() {
  if (cmd === 'chute') {
    let [slug, toOpen] = args
    if (!slug)
      throw new Error('missing Bitchute slug')
    return getBitchute(slug).then(url => {
      log(url)
      pbcopy(url)
      if (toOpen)
        open(url)
    })
  } else {
    let [toOpen] = args
    return getFoxNews(cmd).then(url => {
      log(url)
      pbcopy(url)
      if (toOpen)
        open(url)
    })
  }
}

log('');exec().then(() => log('')).catch(err => log(err))
