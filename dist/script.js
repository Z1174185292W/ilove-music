/*
design by Voicu Apostol.
design: https://dribbble.com/shots/3533847-Mini-Music-Player
I can't find any open music api or mp3 api so i have to download all musics as mp3 file.
You can fork on github: https://github.com/muhammederdem/mini-player
*/

new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
     tracks: [
        {
          name: "花海",
          artist: "周杰伦",
          cover:
            "https://img0.baidu.com/it/u=1326584185,3524982671&fm=253&fmt=auto&app=138&f=JPEG?w=711&h=445",
          source:
            "https://music.audiomack.com/albums/manmyl/zhou-jie-lunjay-re-men-ge-qu-he-ji/streaming/62c7960722bc3__1665820012.m4a?Expires=1670755076&Signature=bjj3k6a6gg7mjrw4eAucDi0oHUTmoyWA3QbI30YgNhGj8GaQbpLqgaMwxis93lPZDd2btgcI7V0I7CMuBBO5N6tcBRSIYdcuQG-YXAsX8v6O9Q4FKtOqFaKiC5FcyuuZHZkYqFuUv~QYr74bOb~SPs9N7tD~6V3s3nAkSa~Z6pM_&Key-Pair-Id=APKAIKAIRXBA2H7FXITA",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "一路向北",
          artist: "周杰伦",
          cover:
            "https://img0.baidu.com/it/u=720616809,2362165079&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          source:
            "https://music.audiomack.com/albums/manmyl/zhou-jie-lunjay-re-men-ge-qu-he-ji/streaming/62c796c68ab26__1665826050.m4a?Expires=1670755348&Signature=ZDpzIo~14B~3KSUojjny-PwSgb2PX-wwXApHxdOVPKX~2KMe1jk3waAwh2fqVk0CbEW3l1saW9b9kwSqRrAJTNHsrNOGkQ4UoGExMpzh1SC~VfBUiAlzsB2abWoTjnO4tRjwSaRdv743Uyedt43QdGMdafnolnEcxbwlc8PQ~N8_&Key-Pair-Id=APKAIKAIRXBA2H7FXITA",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "此生不换",
          artist: "青鸟飞鱼",
          cover:
            "https://img0.baidu.com/it/u=4040902079,2954932421&fm=253&fmt=auto&app=138&f=PNG?w=889&h=500",
          source:
            "https://tyst.migu.cn/public/product5th/product28/2019/02/26/2018%E5%B9%B408%E6%9C%8802%E6%97%A508%E7%82%B953%E5%88%86%E7%B4%A7%E6%80%A5%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E5%8D%8E%E7%BA%B3444%E9%A6%96/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/6005751EFTP.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "告白气球🎈",
          artist: "周杰伦",
          cover:
            "https://img2.baidu.com/it/u=634992834,2445107078&fm=253&fmt=auto&app=138&f=JPEG?w=1032&h=485",
          source:
            "https://music.audiomack.com/albums/manmyl/zhou-jie-lunjay-re-men-ge-qu-he-ji/streaming/62c795d91188f__1665829771.m4a?Expires=1670755242&Signature=Wkn6681oqn47JDi4LrdT2LFZRh1A89x9RAi8BNKp7B6VPp7v7ShP7HGU29BpUDulD0AFeNkfTxWyYJKIB7Lily8IPfElzUvL67BNQD9FvPCl5yRAmGTg9obF6ML4aoKpOfSU1BtCvq8Ds3kfmSnt0j8qabX81Im3fhzUJ1nkfFk_&Key-Pair-Id=APKAIKAIRXBA2H7FXITA",
          url: "https://www.youtube.com/watch?v=Lin-a2lTelg",
          favorited: true
        },
        {
          name: "给我一首歌的时间🎵",
          artist: "周杰伦",
          cover:
            "https://img2.baidu.com/it/u=3451743116,1723333409&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
          source:
            "https://music.audiomack.com/albums/manmyl/zhou-jie-lunjay-re-men-ge-qu-he-ji/streaming/62c795e81f944__1665825595.m4a?Expires=1670755283&Signature=MFZjxs1oZJ3OXe7duhNzpAHz9AOKW~4leQ8YTkVkP4IC8LtCUoTenfU8UO9gmF2r~PpPvVMvYBmr0PzEnCNKVBG0~rqrLTKgULYbCFyhcrnBBjcRscNkmY3qb7VvT1ooDtjJtpnFr2e8AahEe~sC438TrdZnMO2hcOzzkzrHYKQ_&Key-Pair-Id=APKAIKAIRXBA2H7FXITA",
          url: "https://www.youtube.com/watch?v=ICjyAe9S54c",
          favorited: false
        },
        {
          name: "大城小爱❤",
          artist: "王力宏",
          cover:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimagepphcloud.thepaper.cn%2Fpph%2Fimage%2F169%2F543%2F170.jpg&refer=http%3A%2F%2Fimagepphcloud.thepaper.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673248841&t=9994d94c0bf41466dde73e126ccf1a2c",
          source:
            "https://tyst.migu.cn/public/product9th/product44/2021/08/0310/2018%E5%B9%B411%E6%9C%8809%E6%97%A503%E7%82%B910%E5%88%86%E6%89%B9%E9%87%8F%E9%A1%B9%E7%9B%AESONY100%E9%A6%96-2/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/6005971B8V4102236.mp3",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        },
        {
          name: "发如雪❄",
          artist: "周杰伦",
          cover:
            "https://img1.baidu.com/it/u=3746972612,251213723&fm=253&fmt=auto&app=138&f=JPEG?w=457&h=500",
          source:
            "https://rl01-sycdn.kuwo.cn/8513b0fd96f945cab477d113b979ab06/639432d4/resource/n3/72/37/3791587157.mp3",
          url: "https://www.youtube.com/watch?v=kYgGwWYOd9Y",
          favorited: false
        },
        {
          name: "稻香💟",
          artist: "周杰伦",
          cover:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fy.gtimg.cn%2Fmusic%2Fphoto_new%2FT023R750x750M000004K0oCT3FvLFX.jpg&refer=http%3A%2F%2Fy.gtimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673252087&t=15364e3cd65583174cd0953855ba33c4",
          source:
            "https://music.audiomack.com/albums/manmyl/zhou-jie-lunjay-re-men-ge-qu-he-ji/streaming/62c79561e4697__1665822735.m4a?Expires=1670755446&Signature=Um1PLZDlkNGns8EDAsnxA-0g13SIXS-W73gZAIHsAV2b9D87YpvUWfoPfGd2G9DVbPrUZemCxzc8nKgR7tPwOCQjdCmWChKGLxWWE8quKpgzPUTLytrg3Bsw6bl6AYBcJtM5E4qWyJ6NYWv0ls1rm-rcJHdcpvcjN64m683uXpU_&Key-Pair-Id=APKAIKAIRXBA2H7FXITA",
          url: "https://www.youtube.com/watch?v=0WlpALnQdN8",
          favorited: true
        },
        {
          name: "必杀技",
          artist: "古巨基",
          cover:
            "https://img1.baidu.com/it/u=3072937077,2630303959&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=266",
          source:
            "https://tyst.migu.cn/public/product9th/product45/2022/05/0716/2018%E5%B9%B410%E6%9C%8829%E6%97%A514%E7%82%B935%E5%88%86%E7%B4%A7%E6%80%A5%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E5%8D%8E%E7%BA%B3583%E9%A6%96/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/6005751H9CL163820.mp3",
          url: "https://www.youtube.com/watch?v=00-Rl3Jlx-o",
          favorited: false
        },
        {
          name: "七里香",
          artist: "周杰伦",
          cover:
            "https://img0.baidu.com/it/u=669009181,1794590130&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=833",
          source:
            "https://music.audiomack.com/albums/manmyl/zhou-jie-lunjay-re-men-ge-qu-he-ji/streaming/62c79669c61fd__1665822341.m4a?Expires=1670755494&Signature=Z7UqwFgMN0HsxS65W1guxjSq4uBWqhKqpYTw8oKUYPRIraitPUEmdhDtVvbl3JzNlQDCLGOePlQG-kkGvTVFQJUwsfo9d-Ii0J6N5LJmB8eyiVRl4SgagjaNPphvNf8i1HEMHHAMAHgj7SY6-AtS1cwqkxUIeKeEW8psEXGxSRU_&Key-Pair-Id=APKAIKAIRXBA2H7FXITA",
          url: "https://www.youtube.com/watch?v=HhoATZ1Imtw",
          favorited: false
        },
        {
          name: "半岛铁盒",
          artist: "周杰伦",
          cover:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fcb072fe19c7b10e7d4b420415bc69dca6206ed012307c-a1qgWe_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673249741&t=c2bc6ff697914ee5829e321a2b5f976b",
          source:
            "https://tyst.migu.cn/public/product9th/product45/2021/12/3120/2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60054701912204832.mp3",
          url: "https://www.youtube.com/watch?v=me6aoX0wCV8",
          favorited: true
        },
        {
          name: "背对背的拥抱",
          artist: "林俊杰",
          cover:
            "https://tse1-mm.cn.bing.net/th/id/OIP-C.LkIfc5QqJ7IOImRLphiTOQHaJ-?w=162&h=219&c=7&r=0&o=5&dpr=1.6&pid=1.7",
          source:
            "https://win-web-ra01-sycdn.kuwo.cn/0310edcb2e29e1460204b53c84701e38/63957f19/resource/n3/192/48/16/3564001722.mp3",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        },
        {
          name: "退后",
          artist: "周杰伦",
          cover:
            "https://img0.baidu.com/it/u=3824868315,631943469&fm=253&fmt=auto&app=120&f=JPEG?w=421&h=500",
          source:
            "https://music.audiomack.com/albums/manmyl/zhou-jie-lunjay-re-men-ge-qu-he-ji/streaming/62c7969147f54__1665833412.m4a?Expires=1670755564&Signature=IPK3D5GFlZglbB2ite18bFUbNhOIF8xX7xkeB2nr0LBPteXZwmX43kB4-dNEX3D~98A91DviaoE7Sg5X75Y9L17AsAnsz7rbOaVTwgux34do057tquwDQgQFtNb4S-Tt0bNIRhuGq~f2pyhYIJYCF9rGNH43SDFUQCPGtcPeUic_&Key-Pair-Id=APKAIKAIRXBA2H7FXITA",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "她说",
          artist: "林俊杰",
          cover:
            "https://img1.baidu.com/it/u=3156691697,1172424477&fm=253&fmt=auto&app=138&f=JPEG?w=495&h=318",
          source:
            "https://tyst.migu.cn/public/product10th/productB35/2022/05/0916/2010%E5%B9%B412%E6%9C%8809%E6%97%A500014%E6%89%B9%E6%AC%A1/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60058622891161430.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "我是如此相信",
          artist: "周杰伦",
          cover:
            "https://img1.baidu.com/it/u=727251976,1779040036&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500",
          source:
            "https://music.audiomack.com/albums/manmyl/zhou-jie-lunjay-re-men-ge-qu-he-ji/streaming/62c796a29aa29__1665841974.m4a?Expires=1670755588&Signature=BatfRTwm2y76nD7vdwHydSfnUWBMemBKg-xRs7x-T9TpJimWNSGRRi8ifEvZaEJyureuItIp6uBUYElKh4AW8yCzKRCqUccGsS15QxMX8CxOiUQgh1ZonO8LIc812Qt8~Bd9Bo~ar86Dv2Qf2t9TWiEpsuBmIJANnTLkIjeqNXQ_&Key-Pair-Id=APKAIKAIRXBA2H7FXITA",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "绅士",
          artist: "薛之谦",
          cover:
            "https://img2.baidu.com/it/u=1049817904,1442314643&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=418",
          source:
            "https://tyst.migu.cn/public/product9th/product45/2022/06/1415/2015%E5%B9%B45%E6%9C%8822%E6%97%A5%E7%B4%A7%E6%80%A5%E5%87%86%E5%85%A5%E6%B5%B7%E8%9D%B6%E6%97%B6%E4%BB%A3%E6%95%B0%E7%A0%811%E9%A6%96/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60084600633154930.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "晴天",
          artist: "周杰伦",
          cover:
            "https://img2.baidu.com/it/u=3536050658,2427311769&fm=253&fmt=auto&app=120&f=JPEG?w=720&h=450",
          source:
            "https://tyst.migu.cn/public/product9th/product45/2021/12/3017/2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60054701923172203.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "偏爱",
          artist: "张芸京",
          cover:
            "https://img0.baidu.com/it/u=3987765416,283915319&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
          source:
            "https://tyst.migu.cn/public/product9th/product45/2022/04/2016/2018%E5%B9%B408%E6%9C%8801%E6%97%A509%E7%82%B916%E5%88%86%E7%B4%A7%E6%80%A5%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E5%8D%8E%E7%BA%B3100%E9%A6%96/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/6005751EDXK160430.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },

        {
          name: "不为谁而做的歌",
          artist: "林俊杰",
          cover:
            "https://img2.baidu.com/it/u=1576131660,2788025083&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
          source:
            "https://lj-sycdn.kuwo.cn/3f430c22207b2b3dc9b76902f1fb9400/63957f6f/resource/n2/40/14/546910943.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "演员",
          artist: "薛之谦",
          cover:
            "https://img1.baidu.com/it/u=1085092873,2464712202&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=300",
          source:
            "https://tyst.migu.cn/public/product9th/product45/2022/06/0814/2015%E5%B9%B46%E6%9C%889%E6%97%A5%E7%B4%A7%E6%80%A5%E5%87%86%E5%85%A5%E6%B5%B7%E8%9D%B6%E6%97%B6%E4%BB%A3%E6%95%B0%E7%A0%812%E9%A6%96/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60084600638145359.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "后来",
          artist: "刘若英",
          cover:
            "https://ts1.cn.mm.bing.net/th/id/R-C.accefdcfdd72c50cd52215907b5489c5?rik=FqLeY71DCNhSkA&riu=http%3a%2f%2fimg.xiumu.cn%2f2018%2f0428%2f20180428103937690.jpg&ehk=9zAiFCYwT99CXi5%2bunX2R6yHuMUC%2fwDxWKTMrVzIDg0%3d&risl=&pid=ImgRaw&r=0",
          source:
            "https://en-sycdn.kuwo.cn/e6274f61a1afb2f9fafba867cafbe60e/63958527/resource/n3/37/6/3927300328.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "痕迹",
          artist: "毛若琼",
          cover:
            "https://bkimg.cdn.bcebos.com/pic/2cf5e0fe9925bc315c606045738a9ab1cb134854daeb",
          source:
            "http://freetyst.nf.migu.cn/public/product9th/product41/20200618/202006181828/69934400075.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});



//渐变背景颜色
var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.005;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);
