const channels = [
             { 
                name: "Apple TV",
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/appletv/appletv.m3u8" },
                    { name: "Server 2", url: "https://play.applelive.in/appletv/appletvklm.m3u8" }
                ], 
                img: "https://i.ibb.co/MyGBD846/AppleTV.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "india"
            },
            { 
                name: "Apple TV", 
                sources: [
                    { name: "Server 1", url: "https://web.applelive.in/stream/appletv/index.m3u8" }
                ], 
                img: "https://i.ibb.co/F4CFQJkH/Apple-TV.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Global TV", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/globaltv/globaltv.m3u8" }
                ], 
                img: "https://i.ibb.co/TxFDP8Cz/Globaltvhd.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Kumari Kathir", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/jjmax/jjmax.m3u8" }
                ], 
                img: "https://i.ibb.co/pBBP582f/Kumari-Kathir.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "MCN HD", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/mcntv/mcntv.m3u8" }
                ], 
                img: "https://i.ibb.co/b5CS4r6Y/MCNtv.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "G TV", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/gtv/gtv.m3u8" }
                ], 
                img: "https://i.ibb.co/S7x4bW8K/GTV.jpg", 
                category: "Trivandrum District Local Channel",
                description: "India"
            },
            { 
                name: "Starnet", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/starnettv/starnettv.m3u8" },
                    { name: "Server 2", url: "https://rtmp.applelive.in/starnet/starnet/index.m3u8" }
                ], 
                img: "https://i.ibb.co/z0QS6hL/Starnet.jpg", 
                category: "Trivandrum District Local Channel",
                description: "India"
            },
            { 
                name: "Manorama News", 
                sources: [
                    { name: "Server 1", url: "https://mmtvnews1.akamaized.net/v1/master/673630b269b766886555eebfddd4f27f3de3ab50/mmtvNewsCampaign1/index.m3u8" },
                    { name: "Server 2", url: "https://segment.yuppcdn.net/240122/manoramanews/playlist.m3u8" }
                ], 
                img: "https://i.ibb.co/RppPy0m5/manoramanews.jpg", 
                category: "News",
                description: "Malayalam"
            },
            { 
                name: "Janam TV", 
                sources: [
                    { name: "Server 1", url: "https://segment.yuppcdn.net/140622/janamtvdev/playlist.m3u8" },
                    { name: "Server 2", url: "https://live-janamtv.dailyhunt.in/JanamTV/playlist.m3u8" }
                ], 
                img: "https://i.ibb.co/DPh3zcbV/janamtv.jpg", 
                category: "News",
                description: "Malayalam"
            },
            { 
                name: "Sun HD HD", 
                sources: [
                    { name: "Server 1", url: "https://livestream10.sunnxt.com/DolbyVision/SunTV_HDR/SunTV_HDR_Endpoints/SunTV-HDR10-IN-index.m3u8" }
                ], 
                img: "https://i.ibb.co/k2TpVBp6/suntvhd.jpg", 
                category: "Tamil",
                description: "India"
            },
            { 
                name: "VTV", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/vtv/vtv.m3u8" },
                ], 
                img: "https://i.ibb.co/fVLwhLsL/VTV.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Thanima TV (TVM)", 
                sources: [
                    { name: "Server 1", url: "https://live.skystream.in/live/thanimatvtvm/index.m3u8" },
                ], 
                img: "https://i.ibb.co/WN4yKdFN/Thanima-Media.jpg", 
                category: "Trivandrum District Local Channel",
                description: "India"
            },
            { 
                name: "Reporter",
                sources: [
                    { name: "Server 1", url: "https://segment.yuppcdn.net/050522/reporter/playlist.m3u8" },
                    { name: "Server 2", url: "https://tplay.live/out/news/independent-tv/index.m3u8" }
                ], 
                img: "https://i.ibb.co/hJ52GZDY/reporter.jpg", 
                category: "News",
                description: "Malayalam"
            },
            { 
                name: "Channel 24",
                sources: [
                    { name: "Server 1", url: "https://segment.yuppcdn.net/110322/channel24dev/playlist.m3u8" },
                    { name: "Server 2", url: "https://segment.yuppcdn.net/110322/channel24/playlist.m3u8" }
                ], 
                img: "https://i.ibb.co/Q3B19Lt8/24newsmalayalan.jpg", 
                category: "News",
                description: "Malayalam"
            },
            { 
                name: "Janasruthi Media",
                sources: [
                    { name: "Server 1", url: "https://live.applelive.in/janasruthitv/janasruthitv/index.m3u8" }
                ], 
                img: "https://i.ibb.co/KxbBw1Gy/Janasruthi-Media.jpg", 
                category: "Trivandrum District Local Channel",
                description: "Malayalam"
            },
            { 
                name: "Media Plus HD",
                sources: [
                    { name: "Server 1", url: "https://live.applelive.in/mediaplus/mediaplus/index.m3u8" }
                ], 
                img: "https://i.ibb.co/0jVnSjvD/Media-Plus-HD.jpg", 
                category: "Trivandrum District Local Channel",
                description: "Malayalam"
            },
            { 
                name: "Mathrubhumi News",
                sources: [
                    { name: "Server 1", url: "https://segment.yuppcdn.net/110322/mathrubhuminews/playlist.m3u8" }
                ], 
                img: "https://i.ibb.co/9HYCvZJd/mathrubhumi.jpg", 
                category: "News",
                description: "Malayalam"
            },
            { 
                name: "Powran Media", 
                sources: [
                    { name: "Server 1", url: "https://stream.onecloudlive.in/powranmedia/livestream/index.m3u8" },
                ], 
                img: "https://i.ibb.co/sdjc7msx/Powran-Media.jpg", 
                category: "Local Cable Channel (Kerala)",
                description: "India"
            },
            { 
                name: "Asianet News",
                sources: [
                    { name: "Server 1", url: "https://asianetnews.vgcdn.net/ptnr-Embed/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/1c19363c-e4a0-4e4d-ba28-771d5615b88e/playlist.m3u8" },
                    { name: "Server 2", url: "https://segment.yuppcdn.net/240122/asianetnews/playlist.m3u8" }
                ], 
                img: "https://i.ibb.co/Y46GTXsW/asianetnews.jpg", 
                category: "News",
                description: "Malayalam"
            },
            { 
                name: "Jaihind",
                sources: [
                    { name: "Server 1", url: "https://live-jaihind.dailyhunt.in/JaiHindTV/playlist.m3u8" },
                    { name: "Server 2", url: "https://test-yupptv.cachefly.net/260723/smil:jaihind1.smil/playlist.m3u8" }
                ], 
                img: "https://i.ibb.co/7NLtS5R7/jaihind.jpg", 
                category: "News",
                description: "Malayalam"
            },
            { 
                name: "Kerala Today (TVM)", 
                sources: [
                    { name: "Server 1", url: "https://live.skystream.in/live/krlatoday/index.m3u8" },
                ], 
                img: "https://i.ibb.co/yck4QRCc/Keral-Today.jpg", 
                category: "Trivandrum District Local Channel",
                description: "India"
            },
            { 
                name: "Media One",
                sources: [
                    { name: "Server 1", url: "https://cdn-3.pishow.tv/live/1481/master.m3u8" }
                ], 
                img: "https://i.ibb.co/8nnfwKnC/Mediaone.jpg", 
                category: "News",
                description: "Malayalam"
            },
            { 
                name: "News18 Keralam", 
                sources: [
                    { name: "Server 1", url: "https://nw18live.cdn.jio.com/bpk-tv/News18_Kerala_NW18_MOB/output01/playlist.m3u8" }
                ], 
                img: "https://i.ibb.co/LhcN1PLC/News18-Keralam.jpg", 
                category: "News",
                description: "Malayalam"
            },
            { 
                name: "G TV Max", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/gtvmax/gtvmax.m3u8" }
                ], 
                img: "https://i.ibb.co/hxt4kgvP/GTVMAX.jpg", 
                category: "Trivandrum District Local Channel",
                description: "India"
            },
            { 
                name: "Kaumudy", 
                sources: [
                    { name: "Server 1", url: "https://oqgdrkxby4rm-hls-live.5centscdn.com/kaumudytv/live.stream/chunks.m3u8" },
                    { name: "Server 2", url: "https://live-cf-kaumudytv.dailyhunt.in/master.m3u8" }
                ], 
                img: "https://i.ibb.co/RT1Y5RN7/kaumudy.jpg", 
                category: "Malayalam",
                description: "Malayalam"
            },
            { 
                name: "News Malayalam 24x7", 
                sources: [
                    { name: "Server 1", url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/news-malayalam-24x7/index.m3u8" },
                    { name: "Server 2", url: "https://live-cf-newsmalayalam24x7.dailyhunt.in/master.m3u8" }
                ], 
                img: "https://i.ibb.co/FGhJTTZ/News-Malayalam24x7.jpg", 
                category: "News",
                description: "Malayalam"
            },
            { 
                name: "Global TV (TVM)", 
                sources: [
                    { name: "Server 1", url: "https://live.skystream.in/live/global2924/index.m3u8" },
                ], 
                img: "https://i.ibb.co/LDmQZ6jj/GlobalTV.jpg", 
                category: "Trivandrum District Local Channel",
                description: "India"
            },
            { 
                name: "Kairali We", 
                sources: [
                    { name: "Server 1", url: "https://cdn-3.pishow.tv/live/1530/master.m3u8" },
                    { name: "Server 1", url: "https://cdn-3.pishow.tv/live/1530/master.m3u8" }
                ], 
                img: "https://i.ibb.co/qYP82pkd/we.jpg", 
                category: "Malayalam",
                description: "Malayalam"
            },
            { 
                name: "Real News Kerala", 
                sources: [
                    { name: "Server 1", url: "https://bk7l298nyx53-hls-live.5centscdn.com/realnews/e7dee419f91aa9e65939d3677fb9c4f5.sdp/playlist.m3u8" }
                ], 
                img: "https://i.ibb.co/ZpbPsF6w/Realnewskerala.jpg", 
                category: "News",
                description: "Malayalam"
            },
            {
                name: "Surya TV HD", 
                sources: [
                    { name: "Server 1", url: "https://livestream10.sunnxt.com/DolbyVision/SuryaTV_HDR/SuryaTV_HDR_Endpoints/SuryaTV-HDR10-IN-index.m3u8" }
                ], 
                img: "https://i.ibb.co/xKr9GRd8/Suryahd.jpg", 
                category: "Malayalam",
                description: "Malayalam"
            },
            { 
                name: "Kairali News", 
                sources: [
                    { name: "Server 1", url: "https://live-kairalinews.dailyhunt.in/KairaliNews/playlist.m3u8" },
                    { name: "Server 2", url: "https://cdn-3.pishow.tv/live/1469/master.m3u8" }
                ], 
                img: "https://i.ibb.co/przgSwP0/Kairali-News.jpg", 
                category: "News",
                description: "India"
            },
            { 
                name: "Amrita TV", 
                sources: [
                    { name: "Server 1", url: "https://ddash74r36xqp.cloudfront.net/master.m3u8" },
                    { name: "Server 2", url: "https://live20.bozztv.com/giatvplayout7/giatv-210448/tracks-v1a1/mono.ts.m3u8" }
                ], 
                img: "https://i.ibb.co/XrBkkPgY/Amritatv.jpg", 
                category: "Malayalam",
                description: "India"
            },
            { 
                name: "Mazhavil Manorama", 
                sources: [
                    { name: "Server 1", url: "https://segment.yuppcdn.net/050522/mazhavilmanorama/playlist.m3u8" },
                    { name: "Server 2", url: "https://live20.bozztv.com/giatvplayout7/giatv-209902/tracks-v1a1/mono.ts.m3u8" }
                ], 
                img: "https://i.ibb.co/CphfvN7X/Mazhavil-Manorama.jpg", 
                category: "Malayalam",
                description: "India"
            },
            { 
                name: "Koickal News", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/koickalnews/koickalnews.m3u8" }
                ], 
                img: "https://i.ibb.co/dsT21S86/Koickal-News.jpg", 
                category: "Trivandrum District Local Channel",
                description: "India"
            },
            { 
                name: "Jeevan TV", 
                sources: [
                    { name: "Server 1", url: "https://test-yupptv.cachefly.net/120723/smil:jeevan.smil/playlist.m3u8" },
                    { name: "Server 2", url: "https://live20.bozztv.com/giatvplayout7/giatv-209611/tracks-v1a1/mono.ts.m3u8" }
                ], 
                img: "https://i.ibb.co/MxJrc6mh/Jeevantv.jpg", 
                category: "Malayalam",
                description: "India"
            },
            { 
                name: "Asianet HD", 
                sources: [
                    { name: "Server 1", url: "https://anywhere.pwisetthon.com/http://217.20.112.199/asianet/index.m3u8" }
   
                ], 
                img: "https://i.ibb.co/S7JY0Q3f/Asianethd.jpg", 
                category: "Malayalam",
                description: "India"
            },
            { 
                name: "Willow Sports", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://a201aivottlinear-a.akamaihd.net/OTTB/lhr-nitro/clients/dash/enc/f60kqesunw/out/v1/a435ed7a00f947deb4369b46d8f2fb70/cenc.mpd",
                        type: "dash",
                        drm: {
                            kid: "1779c27b9d077a3ba0c9cc1bb9a94b9f",
                            key: "cc5cf3b7928fb9e0a1ee6a8b566f0a8e"
                        }
                    }
                ], 
                img: "https://i.ibb.co/gLyJ4pq0/Willowsports.jpg", 
                category: "Sports",
                description: "India"
            },
            { 
                name: "Media4", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/media4tv/media4tv.m3u8" }
                ], 
                img: "https://i.ibb.co/X9D6q5t/Media4TV.jpg", 
                category: "Trivandrum District Local Channel",
                description: "India"
            },
            { 
                name: "Flowers HD USA", 
                sources: [
                    { name: "Server 1", url: "https://yuppmedtaorire.akamaized.net/v1/master/a0d007312bfd99c47f76b77ae26b1ccdaae76cb1/flowers_nim_https/050522/flowers/playlist.m3u8" }
                ], 
                img: "https://i.ibb.co/ksz2KWM0/Flowershdusa.jpg", 
                category: "Malayalam",
                description: "India"
            },
            { 
                name: "Kumari TV", 
                sources: [
                    { name: "Server 1", url: "https://rtmp.applelive.in/gvkumaritv/gvkumaritv/index.m3u8" }
                ], 
                img: "https://i.ibb.co/NnrsB1bD/Kumaritv.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Kumari Action", 
                sources: [
                    { name: "Server 1", url: "https://rtmp.applelive.in/kumariplus/kumariplus/index.m3u8" }
                ], 
                img: "https://i.ibb.co/8g6tVhXG/Kumari-Action.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Enthiran TV", 
                sources: [
                    { name: "Server 1", url: "https://live.applelive.in/enthirantv/enthirantv/index.m3u8" }
                ], 
                img: "https://i.ibb.co/1YhxC7QP/Enthirantv.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "OMM TV", 
                sources: [
                    { name: "Server 1", url: "https://live.applelive.in/ommtv/ommtv/index.m3u8" }
                ], 
                img: "https://i.ibb.co/4n195VJ2/ommtv.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Animax",
                sources: [
                    { name: "Server 1", url: "https://amg02159-kcglobal-amg02159c1-samsung-in-521.playouts.now.amagi.tv/playlist/amg02159-kcglobal-animax-samsungin/playlist.m3u8" },
                ], 
                img: "https://i.postimg.cc/8PQrRLN8/Animax.png", 
                category: "Kids",
                description: "Japan"
            },
            { 
                name: "JC TV",
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/jctv/jctv.m3u8" },
                ], 
                img: "https://i.ibb.co/5Xny3xmB/jctv.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "9XM", 
                sources: [
                    { name: "Server 1", url: "https://d14c63magvk61v.cloudfront.net/strm/channels/9xm/master.m3u8" },
                    { name: "Server 2", url: "https://tvsen6.aynaott.com/9xm/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/Wb8VmBjp/9xm.jpg", 
                category: "Music",
                description: "India"
            },
            { 
                name: "Mastiii", 
                sources: [
                    { name: "Server 1", url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/mastiii/master.m3u8" },
                    { name: "Server 2", url: "https://tvsen6.aynaott.com/mastimusic/index.m3u8" },
                    { name: "Server 3", url: "https://sablive-ddpb.akamaized.net/mastii/playlist.m3u8" }
                ], 
                img: "https://i.postimg.cc/L4f6PQnh/mastiii.jpg", 
                category: "Music",
                description: "India"
            },
            { 
                name: "Nisha TV", 
                sources: [
                    { name: "Server 1", url: "https://app.ashokadigital.net/app/7825e06b/index.m3u8" },
                ], 
                img: "https://i.ibb.co/Q78WMrSs/Nisha-TV.jpg", 
                category: "Local Cable Channel (Tamilnadu)",
                description: "India"
            },
            { 
                name: "7Star TV", 
                sources: [
                    { name: "Server 1", url: "https://app.ashokadigital.net/app/ed8bd4a7/index.m3u8" },
                ], 
                img: "https://i.ibb.co/chHNLYTp/7Star-TV.jpg", 
                category: "Local Cable Channel (Tamilnadu)",
                description: "India"
            },
            { 
                name: "7Star Music TV", 
                sources: [
                    { name: "Server 1", url: "https://app.ashokadigital.net/app/9346e98d/index.m3u8" },
                ], 
                img: "https://i.ibb.co/rKWDQ0Hp/7-Star-Music-TV.jpg", 
                category: "Local Cable Channel (Tamilnadu)",
                description: "India"
            },
            { 
                name: "B4U Music", 
                sources: [
                    { name: "Server 1", url: "https://cdnb4u.wiseplayout.com/B4U_Music/master.m3u8" },
                    { name: "Server 2", url: "https://d3kdywbtdfbp9z.cloudfront.net/v1/manifest/93ce20f0f52760bf38be911ff4c91ed02aa2fd92/dff423e0-3c82-46d6-9ecb-3baa96b5694a/4598c408-0e38-488c-9b64-fc845d1ea2b6/0.m3u8" },
                    { name: "Server 3", url: "https://tvsen6.aynaott.com/b4umusic/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/mrvFm9CF/B4-U-Music.png", 
                category: "Music",
                description: "India"
            },
            { 
                name: "Riya TV", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/riyatv/riyatv.m3u8" }
                ], 
                img: "https://i.ibb.co/w8zwFjc/Riyatv.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Penguin TV", 
                sources: [
                    { name: "Server 1", url: "https://live.applelive.in/penguinhd/penguinhd/index.m3u8" }
                ], 
                img: "https://i.ibb.co/kV3nY7T5/Penguintvhd.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Selfee TV", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/selfeetv/selfeetv.m3u8" }
                ], 
                img: "https://i.ibb.co/cSVFRLSh/Selfietv.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Sri Vasanth TV", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/vasanthtv/vasanthtv.m3u8" }
                ], 
                img: "https://i.ibb.co/Xf8zzcY9/Sri-Vasanthtv.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "PR TV", 
                sources: [
                    { name: "Server 1", url:"https://play.applelive.in/prtv/prtv.m3u8" },
                ], 
                img: "https://i.ibb.co/5hCsCj9v/Prtv.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "JCV TV", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/jcvtv/jcvtv.m3u8" },
                ], 
                img: "https://i.ibb.co/HSG1fKJ/jcvtv.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "JCV Musix", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/jcvtv/jcvmusix.m3u8" },
                ], 
                img: "https://i.ibb.co/N2fYKxG4/jcvmusix.gif", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Zee Cinema", 
                sources: [
                    { name: "Server 1", url: "https://amg17931-zee-amg17931c5-samsung-th-5696.playouts.now.amagi.tv/playlist/amg17931-asiatvusaltdfast-zeecinema-samsungth/playlist.m3u8" },
                ], 
                img: "https://i.postimg.cc/SsVLHrkc/z-cinema.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "S Max", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/smaxtv/smaxtv.m3u8" },
                ], 
                img: "https://i.ibb.co/tMH8LYhk/Smax.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Hai TV", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/haitv/haitv.m3u8" },
                ], 
                img: "https://i.ibb.co/s9KzfMdh/Hairv.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "B4U Movies", 
                sources: [
                    { name: "Server 1", url: "https://cdnb4u.wiseplayout.com/B4U_Movies/master.m3u8" },
                    { name: "Server 2", url: "https://amg00877-b4unew-amg00877c2-xiaomi-in-5489.playouts.now.amagi.tv/playlist.m3u8" },
                ], 
                img: "https://i.postimg.cc/tgwF8wQJ/B4-U-Movies.png", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "B4U Kadak", 
                sources: [
                    { name: "Server 1", url: "https://cdnb4u.wiseplayout.com/B4U_Kadak/master.m3u8" },
                    { name: "Server 2", url: "https://amg00877-b4unew-amg00877c4-xiaomi-in-5473.playouts.now.amagi.tv/playlist.m3u8" }
                ], 
                img: "https://i.postimg.cc/zvnwCjQB/B4-U-Kadak.png", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "AVS", 
                sources: [
                    { name: "Server 1", url: "https://app.applelive.in/avstv/avstv/index.m3u8" },
                ], 
                img: "https://i.ibb.co/FLp5TnL1/AVS.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Royal TV", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/royaltv/royaltv.m3u8" },
                ], 
                img: "https://i.ibb.co/mF145KMT/Royaltv.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Selvi HD", 
                sources: [
                    { name: "Server 1", url: "https://live1.sscloud7.in/live/selvitv/index.m3u8" },
                ], 
                img: "https://i.ibb.co/zgYybKF/Selvihd.jpg", 
                category: "Local Cable Channel (Tamilnadu)",
                description: "India"
            },
            { 
                name: "News J", 
                sources: [
                    { name: "Server 1", url: "https://live-cf-newsj.dailyhunt.in/master.m3u8" },
                    { name: "Server 2", url: "https://cdn-3.pishow.tv/live/1279/master.m3u8" },
                ], 
                img: "https://i.ibb.co/9kSVjz8Y/NewsJ.jpg", 
                category: "News",
                description: "India"
            },
            { 
                name: "Polimer News", 
                sources: [
                    { name: "Server 1", url: "https://live-cf-polimernews.dailyhunt.in/master.m3u8" },
                ], 
                img: "https://i.ibb.co/L2bwFwX/Polimer-News.jpg", 
                category: "News",
                description: "India"
            },
            { 
                name: "Amma Vision", 
                sources: [
                    { name: "Server 1", url: "https://live.applelive.in/ammavision/ammavision/index.m3u8" }
                ], 
                img: "https://i.ibb.co/VWs3dCM5/Amma-Vision.jpg", 
                category: "Trivandrum District Local Channel",
                description: "India"
            },
            { 
                name: "Deepam TV", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/deebamtv/deebamtv.m3u8" }
                ], 
                img: "https://i.ibb.co/xKbGTrM9/DeebamTV.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Gowri Vision", 
                sources: [
                    { name: "Server 1", url: "https://live.applelive.in/gowrivision/gowrivision/index.m3u8" }
                ], 
                img: "https://i.ibb.co/XkprfW5c/Gowri.jpg", 
                category: "Trivandrum District Local Channel",
                description: "India"
            },
            { 
                name: "& Flix", 
                sources: [
                    { name: "Server 1", url: "https://edge3-moblive.yuppcdn.net/drm/smil:nflixdrm.smil/chunklist_b996000.m3u8" },
                ], 
                img: "https://i.postimg.cc/NfBgbv0y/flix.jpg", 
                category: "Movie",
                description: "India"
            },
            { 
                name: "ThanthiTV", 
                sources: [
                    { name: "Server 1", url: "https://cdn-3.pishow.tv/live/1612/master.m3u8" },
                ], 
                img: "https://i.ibb.co/RkJK2XNg/Thanthi-TV.jpg", 
                category: "News",
                description: "India"
            },
            { 
                name: "Willow Sports by Cricbuzz", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://otte.live.fly.ww.aiv-cdn.net/bom-nitro/live/dash/enc/mitifmm4g9/out/v1/a62499aa43894024a5e9870e16a56732/cenc.mpd",
                        type: "dash",
                        drm: {
                            kid: "942b3db5d08871706ddeb9302c4e2a29",
                            key: "d7c25442d9a7b0da9fda160c9dbe1e04"
                        }
                    }
                ], 
                img: "https://i.ibb.co/LdnDZzLV/Willow-Sports-By-Cricbuzz.jpg", 
                category: "Sports",
                description: "India"
            },
            { 
                name: "TNT Sports 1", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/dash/enc/wf8usag51e/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd",
                        type: "dash",
                        drm: {
                            kid: "d0f2e5c39e70c18f29bf77768a1ad89a",
                            key: "d6853c51fcf37a18905f0609972395d7"
                        }
                    }
                ], 
                img: "https://i.ibb.co/99sz2Bk3/TNTSports1.png", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "City Vision", 
                sources: [
                    { name: "Server 1", url: "https://live.skystream.in/live/citykannurcity/index.m3u8" },
                ], 
                img: "https://i.ibb.co/qLQbdWvq/City-Vision.jpg", 
                category: "Local Cable Channel (Kerala)",
                description: "India"
            },
            { 
                name: "TNT Sports 2", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/dash/enc/f0qvkrra8j/out/v1/f8fa17f087564f51aa4d5c700be43ec4/cenc.mpd",
                        type: "dash",
                        drm: {
                            kid: "9f51f3dc6313ac8bc668e2d9d1c04dfa",
                            key: "74bc63e5a193454a91ca494975db33f9"
                        }
                    }
                ], 
                img: "https://i.ibb.co/TMqfbkVL/TNTSports2.png", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "South Vision", 
                sources: [
                    { name: "Server 1", url: "https://live.skystream.in/live/southvsnklm/index.m3u8" },
                ], 
                img: "https://i.ibb.co/pBTJqvv6/South-Vision.jpg", 
                category: "Local Cable Channel (Kerala)",
                description: "India"
            },
            { 
                name: "TNT Sports 3", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/dash/enc/lsdasbvglv/out/v1/bb548a3626cd4708afbb94a58d71dce9/cenc.mpd",
                        type: "dash",
                        drm: {
                            kid: "a93c1cbfdccd23233bac13540c693e7f",
                            key: "2f6ab2e6693eb847eff3c9da8f9d01fc"
                        }
                    }
                ], 
                img: "https://i.ibb.co/bM4kJmFs/TNTSports3.png", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "City Channel", 
                sources: [
                    { name: "Server 1", url: "https://live.skystream.in/live/citytv2924/index.m3u8" },
                ], 
                img: "https://i.ibb.co/j9CFrQ8n/City-Channel.jpg", 
                category: "Local Cable Channel (Kerala)",
                description: "India"
            },
            { 
                name: "TNT Sports 4", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/dash/enc/i2pcjr4pe5/out/v1/912e9db56d75403b8a9ac0a719110f36/cenc.mpd",
                        type: "dash",
                        drm: {
                            kid: "192b1115da041585c77200128549efa1",
                            key: "634e10efe4abbb14be400a3ccbac0258"
                        }
                    }
                ], 
                img: "https://i.ibb.co/99r9bYMZ/TNTSports4.png", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "Ten Cricket", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://edge4-moblive.yuppcdn.net/drm2/smil:tencricketdrm1.smil/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "9872e439f21f4a299cab249c6554daa3",
                            key: "0cdfcfe0d0f1fbe100554ce3ef4c4665"
                        }
                    }
                ], 
                img: "https://i.ibb.co/gMWYbyRJ/Ten-Cricket.jpg", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "WWE Network", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://fsly.stream.peacocktv.com/Content/CMAF_CTR-4s/Live/channel(vc106wh3yw)/master.mpd",
                        type: "dash",
                        drm: {
                            kid: "00208c93f4358213b52220898b962385",
                            key: "8ae6063167228e350dd132d4a1573102"
                        }
                    }
                ], 
                img: "https://upload.wikimedia.org/wikipedia/en/8/8c/WWE_Network_logo.jpeg", 
                category: "Sports",
                description: "World"
            },
            { 
                name: "Best Action", 
                sources: [
                    { name: "Best-Action", url: "https://streams2.sofast.tv/ptnr-yupptv/title-BEST_ACTION_YUPPTV/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/9a4a5412-ca99-48d3-9013-d1811b95b9d2/manifest.m3u8" },
                    { name: "Best-Thriller", url: "https://streams2.sofast.tv/ptnr-yupptv/title-BEST_THRILLER_YUPPTV/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/ce168a85-c8d4-41d6-a597-cc8fd7baddd9/manifest.m3u8" },
                    { name: "Best-Classics", url: "https://streams2.sofast.tv/ptnr-yupptv/title-BEST_CLASSIC_TV_YUPPTV/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/4f5ab846-bcf0-47aa-b578-70054f98f2f1/manifest.m3u8" },
                    { name: "Best-Drama", url: "https://streams2.sofast.tv/ptnr-yupptv/title-BEST_DRAMA_YUPPTV/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/9800ea5c-2183-4160-9f01-70e5d6428a50/manifest.m3u8" },
                ], 
                img: "https://i.postimg.cc/ncHCB2vs/best-action.png", 
                category: "Movie",
                description: "World"
            },
            { 
                name: "Channel 2", 
                sources: [
                    { name: "Server 1", url: "https://skystream.in/live/channel6785/index.m3u8" },
                ], 
                img: "https://i.ibb.co/3yF3LsqX/Channel2.jpg", 
                category: "Local Cable Channel (Kerala)",
                description: "India"
            },
            { 
                name: "Star Jalsha", 
                sources: [
                    { name: "Server 1", url: "https://tvsen5.aynaott.com/gUX8BJmNc2yF/index.m3u8" },
                    { name: "Server 2", url: "https://live.dinesh29.com.np/stream/jiotvplus/starjalshahd/master.m3u8" },
                ], 
                img: "https://i.postimg.cc/WpQ9PsZ3/star-jalsha.jpg", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Bhagavath TV", 
                sources: [
                    { name: "Server 1", url: "https://web.applelive.in/bhagavathtv/bhagavathtv/index.m3u8" },
                    
                ], 
                img: "https://i.ibb.co/Wv44CQCz/Bhagavath-TV.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Balatrara Vision", 
                sources: [
                    { name: "Server 1", url: "https://anywhere.pwisetthon.com/http://cloud.logichost.in:1935/BALATARA/live/index.m3u8" },
                ], 
                img: "https://i.ibb.co/v4q0z10V/Balatrara-Vision.jpg", 
                category: "Trivandrum District Local Channel",
                description: "India"
            },
            { 
                name: "KCN HD", 
                sources: [
                    { name: "Server 1", url: "https://anywhere.pwisetthon.com/http://kcnsdhlsapp.ylivestream.com/kcnsdapphls/index.m3u8" },
                ], 
                img: "https://i.ibb.co/kVp5VVbX/KCNHD.jpg", 
                category: "Local Cable Channel (Kerala)",
                description: "India"
            },
            { 
                name: "CCTV News", 
                sources: [
                    { name: "Server 1", url: "https://96vd9q4kyxq7-hls-live.5centscdn.com/livestream/f25aeb3e9210967d546a077de6e105e4.sdp/playlist.m3u8" },
                ], 
                img: "https://i.ibb.co/v4DPKL1B/CCTVNEWS.jpg", 
                category: "Local Cable Channel (Kerala)",
                description: "India"
            },
            { 
                name: "CCTV Pradeshikam", 
                sources: [
                    { name: "Server 1", url: "https://96vd9q4kyxq7-hls-live.5centscdn.com/CCTVWEB/3d17933d07af044d3a2caa608d6a8afe.sdp/playlist.m3u8" },
                ], 
                img: "https://i.ibb.co/5VKHHzb/CCTVPradeshikam.jpg", 
                category: "Local Cable Channel (Kerala)",
                description: "India"
            },
            { 
                name: "CCTV Movies", 
                sources: [
                    { name: "Server 1", url: "https://96vd9q4kyxq7-hls-live.5centscdn.com/cctvkkm/4870f9d3a6299578edcc3e6c954baeba.sdp/playlist.m3u8" },
                ], 
                img: "https://i.ibb.co/wN3FpW15/CCTVMovies.jpg", 
                category: "Local Cable Channel (Kerala)",
                description: "India"
            },
            { 
                name: "Boobsh TV", 
                sources: [
                    { name: "Server 1", url: "https://rtmp.applelive.in/boobsh/boobsh/index.m3u8" },
                ], 
                img: "https://i.ibb.co/rGZH1n1Q/Btvhd.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "UTV News (Palakkad)", 
                sources: [
                    { name: "Server 1", url: "https://em4qj6nedyvg-hls-live.wmncdn.net/utv/ab2de115318ae40bdd434e193a2f2e7f.sdp/playlist.m3u8" },
                ], 
                img: "https://i.ibb.co/Kp1zjm01/UTVNEWSHD.jpg", 
                category: "Local Cable Channel (Kerala)",
                description: "India"
            },
            { 
                name: "UTV Utsav (Palakkad)", 
                sources: [
                    { name: "Server 1", url: "https://em4qj6nedyvg-hls-live.wmncdn.net/liveunit/89b1e919eed04e59383cf820d644c20e.sdp/playlist.m3u8" },
                ], 
                img: "https://i.ibb.co/zhXbJthn/UTVUtsav.jpg", 
                category: "Local Cable Channel (Kerala)",
                description: "India"
            },
            { 
                name: "Mazhavil Manorama HD", 
                sources: [
                    { name: "Server 1", url: "https://cdn-7.pishow.tv/live/1129/master.m3u8" },
                ], 
                img: "https://i.ibb.co/Qv5g22YC/Mazhavil-Manorama-HD.jpg", 
                category: "Malayalam",
                description: "India"
            },
            { 
                name: "Malai Murasu", 
                sources: [
                    { name: "Server 1", url: "https://cdn-3.pishow.tv/live/1606/master.m3u8" },
                ], 
                img: "https://i.ibb.co/LDd3Wmqd/Malai-Murasu-TV.jpg", 
                category: "News",
                description: "India"
            },
            { 
                name: "Akash Aath", 
                sources: [
                    { name: "Server 1", url: "https://cdn-4.pishow.tv/live/969/master.m3u8" },
                ], 
                img: "https://i.postimg.cc/WzkcbSSJ/akash-aath.jpg", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "KCN (Ksrgod)", 
                sources: [
                    { name: "Server 1", url: "https://live.skystream.in/live/kcnksrgod/index.m3u8" },
                ], 
                img: "https://i.ibb.co/8LfsTDDZ/kCN.jpg", 
                category: "Local Cable Channel (Kerala)",
                description: "India"
            },
            { 
                name: "Sony Aath", 
                sources: [
                    { name: "Server 1", url: "https://livecdn-bostaflix.global.ssl.fastly.net/api/b6a720edea/playlist.m3u8" },
                    { name: "Server 2", url: "https://tataplay.slivcdn.com/hls/live/2011641/SonyAathSD/master.m3u8" },
                ], 
                img: "https://i.postimg.cc/y8WtVLd6/sony-aath.jpg", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "PCV", 
                sources: [
                    { name: "Server 1", url: "https://live.skystream.in/live/pcvpattambi/index.m3u8" },
                ], 
                img: "https://i.ibb.co/DHZDkPz7/PCV.jpg", 
                category: "Local Cable Channel (Kerala)",
                description: "India"
            },
            { 
                name: "& TV", 
                sources: [
                    { name: "Server 1", url: "https://amg01117-amg01117c1-amgplt0165.playout.now3.amagi.tv/playlist.m3u8" },
                ], 
                img: "https://i.postimg.cc/fb4qjDwp/tv.jpg", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "Rose Vision", 
                sources: [
                    { name: "Server 1", url: "https://live.skystream.in/live/rose3265/index.m3u8" },
                ], 
                img: "https://i.ibb.co/s9nW63yj/Rose-Vision.jpg", 
                category: "Local Cable Channel (Kerala)",
                description: "India"
            },
            { 
                name: "DD National", 
                sources: [
                    { name: "Server 1", url: "https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/40492a64c1db4a1385ba1a397d357d3a/index.m3u8" },
                ], 
                img: "https://i.postimg.cc/PrVcPf1R/DD-National.png", 
                category: "Entertainment",
                description: "India"
            },
            { 
                name: "GSV", 
                sources: [
                    { name: "Server 1", url: "https://live.skystream.in/live/gsv2924/index.m3u8" },
                ], 
                img: "https://i.ibb.co/VcyYJ8BB/GSV.jpg", 
                category: "Local Cable Channel (Kerala)",
                description: "India"
            },
            { 
                name: "Sha TV", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/shatv/shatv.m3u8" },
                ], 
                img: "https://i.ibb.co/kgRQNwtP/ShaTV.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Dark TV", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/darktv/darktv.m3u8" },
                ], 
                img: "https://i.ibb.co/H1S3Msg/DarkTV.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "CC Net", 
                sources: [
                    { name: "Server 1", url: "https://live.skystream.in/live/ccnet7082/index.m3u8" },
                ], 
                img: "https://i.ibb.co/vvhrTK8G/CCNet.jpg", 
                category: "Local Cable Channel (Kerala)",
                description: "India"
            },
            { 
                name: "Jeyson TV", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/jeysontv/jeysontv.m3u8" },
                ], 
                img: "https://i.ibb.co/8LQYcjtp/JeysonTV.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Colours Tamil HD", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2101/default_ott.mpd",
                        type: "dash",
                        drm: {
                            kid: "e46354fb39c28e5956bc946ac2a05010",
                            key: "511905bf191474b412b4ec117515a79c"
                        }
                    }
                ], 
                img: "https://i.ibb.co/78NvQLX/colorstamilhd.jpg", 
                category: "Tamil",
                description: "India"
            },
            { 
                name: "TCN Channel", 
                sources: [
                    { name: "Server 1", url: "https://live.skystream.in/live/tcn8909/index.m3u8" },
                ], 
                img: "https://i.ibb.co/Hfx8XbpM/TCNChannel.jpg", 
                category: "Local Cable Channel (Kerala)",
                description: "India"
            },
            { 
                name: "Zee Tamil HD", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2311/default_ott.mpd",
                        type: "dash",
                        drm: {
                            kid: "0d4e3e7dac2d58b93bf819a72fe8d510",
                            key: "667a33f4d5bb3587f2d5209886839eac"
                        }
                    }
                ], 
                img: "https://i.ibb.co/RTdTShF8/Zeetamilhd.jpg", 
                category: "Tamil",
                description: "India"
            },
            { 
                name: "Adithya TV", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/915/default_ott.mpd",
                        type: "dash",
                        drm: {
                            kid: "859f5b2054c4073e8f0da463d208b910",
                            key: "5eb3762b1a4631a0b98e25e23cef0193"
                        }
                    }
                ], 
                img: "https://i.ibb.co/tw5DQnCF/Adithyatv.jpg", 
                category: "Tamil",
                description: "India"
            },
            { 
                name: "Sun TV", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2310/default_ott.mpd",
                        type: "dash",
                        drm: {
                            kid: "83076ff2f68d1764b559c432ab49ca10",
                            key: "ebdf56ba4a3562cc82053a2952975432"
                        }
                    }
                ], 
                img: "https://i.ibb.co/xSYfcTJ4/suntv.jpg", 
                category: "Tamil",
                description: "India"
            },
            { 
                name: "Sun Music HD", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5011/default_ott.mpd",
                        type: "dash",
                        drm: {
                            kid: "beaca9461f7ca0d58ba529fed2e7b610",
                            key: "da0a70148e126eb40cce02665753896d"
                        }
                    }
                ], 
                img: "https://i.ibb.co/tpqfzFNb/sunmusichd.jpg", 
                category: "Tamil",
                description: "India"
            },
            { 
                name: "Star Vijay", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2707/default_ott.mpd",
                        type: "dash",
                        drm: {
                            kid: "af35608a7d4b13d1158c2ef6d6c1a010",
                            key: "d01c81050dfab309c6be7e60d03c2d82"
                        }
                    }
                ], 
                img: "https://i.ibb.co/JwVftCgr/Vijay.jpg", 
                category: "Tamil",
                description: "India"
            },
            { 
                name: "Discovery", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Discoverychannel2/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "b70a8cf9450c4d6484b4ac4d3c6761c0",
                            key: "0908be844260409cbac180bf0181da40"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/SjFpx6XX/discovery.jpg", 
                category: "Infotainment",
                description: "India"
            },
            { 
                name: "Fox TV", 
                sources: [
                    { name: "Server 1", url: "https://anywhere.pwisetthon.com/http://103.118.151.130:11037/hls/fox.m3u8" },
                ], 
                img: "https://i.ibb.co/qYTZTRkL/FoxTV.jpg", 
                category: "Local Cable Channel (Kerala)",
                description: "India"
            },
            { 
                name: "K7 Keralam", 
                sources: [
                    { name: "Server 1", url: "https://live.skystream.in/live/keralam2742/index.m3u8" },
                ], 
                img: "https://i.ibb.co/ksx1FSPc/K7-Keralam.jpg", 
                category: "Local Cable Channel (Kerala)",
                description: "India"
            },
            { 
                name: "History", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_historyhd.mpd",
                        type: "dash",
                        drm: {
                            kid: "a7724b7ca2604c33bb2e963a0319968a",
                            key: "6f97e3e2eb2bade626e0281ec01d3675"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/LsC3pgKH/history.jpg", 
                category: "Infotainment",
                description: "India"
            },
            { 
                name: "TLC", 
                sources: [
                    { 
                        name: "Auto", 
                        url: "https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Discoverykids2/default/manifest.mpd",
                        type: "dash",
                        drm: {
                            kid: "601f58d4b7094d2baf78c85d1d9cb6c9",
                            key: "609e0cc03198455fa36fd2cc3e7f940d"
                        }
                    }
                ], 
                img: "https://i.postimg.cc/63p7Yght/tlc-1.jpg", 
                category: "Infotainment",
                description: "India"
            },
            { 
                name: "T Sports", 
                sources: [
                    { name: "Server 1", url: "https://tvsen6.aynaott.com/tsportsfhd/index.m3u8" }
                ], 
                img: "https://i.postimg.cc/DZbVq4jM/t-sports.jpg", 
                category: "Sports",
                description: "Bangladesh"
            },
            { 
                name: "Ten Cricket", 
                sources: [
                    { name: "Server 1", url: "https://edge3-moblive.yuppcdn.net/drm/smil:tencricketdrm.smil/master.m3u8" }
                ], 
                img: "https://i.postimg.cc/C10jYyff/ten-cricket.jpg", 
                category: "Sports",
                description: "India"
            },
            { 
                name: "S TV", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/stv/stv.m3u8" },
                ], 
                img: "https://i.ibb.co/prQVsxPG/STV.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "ATN Media", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/atn/atn.m3u8" },
                ], 
                img: "https://i.ibb.co/CK11Wb7Z/ATNMedia.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Suryan TV", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/suryantv/suryantv.m3u8" },
                ], 
                img: "https://i.ibb.co/c7G5bph/Suryantv.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Anisa TV", 
                sources: [
                    { name: "Server 1", url: "https://web.applelive.in/anisatv/anisatv/index.m3u8" },
                ], 
                img: "https://i.ibb.co/39DM7bYd/AnisaTV.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Kalaignar Seithigal", 
                sources: [
                    { name: "Server 1", url: "https://live-cf-kalaignarnews.dailyhunt.in/master.m3u8" },
                    { name: "Server 2", url: "https://test-yupptv.cachefly.net/120723/smil:seithagal.smil/playlist.m3u8" },
                ], 
                img: "https://i.ibb.co/zHDP6HyT/Kalaignar-Seithigal.jpg", 
                category: "News",
                description: "India"
            },
            { 
                name: "Anjai TV", 
                sources: [
                    { name: "Server 1", url: "https://web.applelive.in/stream/anjaitv/index.m3u8" },
                ], 
                img: "https://i.ibb.co/kgLMBrX0/AnjaiTV.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "STN", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/stntv/stntv.m3u8" },
                ], 
                img: "https://i.ibb.co/JjGRHxX6/STN.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Ruhasha TV", 
                sources: [
                    { name: "Server 1", url: "https://live.applelive.in/ruhashatv/ruhashatv/index.m3u8" },
                ], 
                img: "https://i.ibb.co/MxkzdXdh/Ruhasha-TV.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Boss TV", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/vasantv/vasantv.m3u8" },
                ], 
                img: "https://i.ibb.co/jZVXKPSy/BossTV.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "News18 Tamilnadu", 
                sources: [
                    { name: "Server 1", url: "https://nw18live.cdn.jio.com/bpk-tv/News18_Tamil_Nadu_NW18_MOB/output01/index.m3u8" },
                ], 
                img: "https://i.ibb.co/j9TtH29x/News18-Tamilnadu.jpg", 
                category: "News",
                description: "India"
            },
            { 
                name: "Drishya (TVM)", 
                sources: [
                    { name: "Server 1", url: "https://live.skystream.in/live/drishya5060/index.m3u8" },
                ], 
                img: "https://i.ibb.co/PZYkzNBg/Drishya-TV.jpg", 
                category: "Trivandrum District Local Channel",
                description: "India"
            },
            { 
                name: "Jai TV", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/jaitv/jaitv.m3u8" },
                ], 
                img: "https://i.ibb.co/KcqvpBBX/JaiTV.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Bhadra TV", 
                sources: [
                    { name: "Server 1", url: "https://ipcloud.live/sdevtv/bhadratv/index.m3u8" },
                ], 
                img: "https://i.ibb.co/HLK2N2zg/Bhadratv.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "News18 Keralam", 
                sources: [
                    { name: "Server 1", url: "https://nw18live.cdn.jio.com/bpk-tv/News18_Kerala_NW18_MOB/output01/index.m3u8" },
                ], 
                img: "https://i.ibb.co/LhcN1PLC/News18-Keralam.jpg", 
                category: "News",
                description: "India"
            },
            { 
                name: "Dolphin TV", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/dolphintv/dolphintv.m3u8" },
                ], 
                img: "https://i.ibb.co/237vjkWT/Dolphin5v.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "KCN (Kuttanad)", 
                sources: [
                    { name: "Server 1", url: "https://live.skystream.in/live/kcvkuttanadhd/index.m3u8" },
                ], 
                img: "https://i.ibb.co/20KcQG5W/KCVHD.jpg", 
                category: "Local Cable Channel (Kerala)",
                description: "India"
            },
            { 
                name: "Eagle TV", 
                sources: [
                    { name: "Server 1", url: "https://live.applelive.in/eagletv/eagletv/index.m3u8" }
                ], 
                img: "https://i.ibb.co/35M9h2Sj/Eagletv.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Harin TV", 
                sources: [
                    { name: "Server 1", url: "https://ipcloud.live/harintv/harintvhd/index.m3u8" },
                ], 
                img: "https://i.ibb.co/xKrySVzg/Harintv.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Drishya (Karunagapally)", 
                sources: [
                    { name: "Server 1", url: "https://live.skystream.in/live/drishyakarunagapally/index.m3u8" },
                ], 
                img: "https://i.ibb.co/F4MTMXc7/DrisyaTV.jpg", 
                category: "Local Cable Channel (Kerala)",
                description: "India"
            },
            { 
                name: "Digital TV", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/digitaltv/digitaltv.m3u8" },
                ], 
                img: "https://i.ibb.co/Xrp0MmhT/Digitaltv.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "News Tamil 24x7", 
                sources: [
                    { name: "Server 1", url: "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/news-tamil-24x7/index.m3u8" },
                ], 
                img: "https://i.ibb.co/3mMPTz82/News-Tamil24x7.jpg", 
                category: "News",
                description: "India"
            },
            { 
                name: "Thalapathy TV", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/thalapathytv/thalapathytv.m3u8" },
                ], 
                img: "https://i.ibb.co/wr3LBg22/Thalapathy-TV.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Boys TV", 
                sources: [
                    { name: "Server 1", url: "https://rtmp.applelive.in/boystv/boystv/index.m3u8" },
                ], 
                img: "https://i.ibb.co/xK2PZCJV/BoysTV.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Garudan TV", 
                sources: [
                    { name: "Server 1", url: "https://play.applelive.in/hls/garudantv.m3u8" },
                ], 
                img: "https://i.ibb.co/DPJGFsrz/Garudan-TV.jpg", 
                category: "Kanyakumari District Local Channel",
                description: "India"
            },
            { 
                name: "Media Today News", 
                sources: [
                    { name: "Server 1", url: "https://live.skystream.in/live/mediatday/index.m3u8" },
                ], 
                img: "https://i.ibb.co/My43DQ3R/Media-Today-News.jpg", 
                category: "Local Cable Channel (Kerala)",
                description: "India"
            },
            { 
                name: "Annai TV HD", 
                sources: [
                    { name: "Server 1", url: "https://annainew.livebox.co.in/annailivehls/live.m3u8" },
                ], 
                img: "https://i.ibb.co/F4htQDVY/Annai-TVHD.jpg", 
                category: "Local Cable Channel (Tamilnadu)",
                description: "India"
            },
            { 
                name: "New Media Channel", 
                sources: [
                    { name: "Server 1", url: "https://live.skystream.in/live/newmedia2924/index.m3u8" },
                ], 
                img: "https://i.ibb.co/ch3QB10J/New-Media-Channel.jpg", 
                category: "Local Cable Channel (Kerala)",
                description: "India"
            },
            { 
                name: "Annai Tamil HD", 
                sources: [
                    { name: "Server 1", url: "https://annainew.livebox.co.in/annaitamilhls/live.m3u8" },
                ], 
                img: "https://i.ibb.co/BhR84nG/Annai-Tamil-HD.jpg", 
                category: "Local Cable Channel (Tamilnadu)",
                description: "India"
            },
            { 
                name: "7Star TV", 
                sources: [
                    { name: "Server 1", url: "https://annainew.livebox.co.in/7startvhls/livestream.m3u8" },
                ], 
                img: "https://i.ibb.co/C3gpVrps/7-Star-Television.jpg", 
                category: "Local Cable Channel (Tamilnadu)",
                description: "India"
            },
            { 
                name: "Network TV", 
                sources: [
                    { name: "Server 1", url: "https://live.skystream.in/live/networkpayyanur/index.m3u8" },
                ], 
                img: "https://i.ibb.co/prGsM7cW/Network-TV.jpg", 
                category: "Local Cable Channel (Kerala)",
                description: "India"
            },
            { 
                name: "Amma TV HD", 
                sources: [
                    { name: "Server 1", url: "https://annainew.livebox.co.in/ammatvhls/live.m3u8" },
                ], 
                img: "https://i.ibb.co/Zp4nBKwg/Amma-TV.jpg", 
                category: "Local Cable Channel (Tamilnadu)",
                description: "India"
            },
            { 
                name: "Sri Sai TV", 
                sources: [
                    { name: "Server 1", url: "https://annainew.livebox.co.in/srisaihls/live.m3u8" },
                ], 
                img: "https://i.ibb.co/JFzHmL4C/Sai-TV.jpg", 
                category: "Local Cable Channel (Tamilnadu)",
                description: "India"
            },
            { 
                name: "Sabari TV", 
                sources: [
                    { name: "Server 1", url: "https://annai.inet.moe/sabaritv/index.m3u8" },
                ], 
                img: "https://i.ibb.co/hx1VXpTR/Sabari-TV.jpg", 
                category: "Local Cable Channel (Tamilnadu)",
                description: "India"
            },
            { 
                name: "Animal Plant English HD", 
                sources: [
                    { name: "Server 1", url: "https://servertvhub.site/jio/app/ts_live_286.m3u8" },
                ], 
                img: "https://i.ibb.co/846PpwKj/Animal-Planet-Eng.jpg", 
                category: "Infotainment",
                description: "World"
            }
            
            
        ];
