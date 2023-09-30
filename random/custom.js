const videos= [{
    thumbnail: "./images/thumbnails/attackontitan.jpeg",
    sub_img: "./images/icons/closed-captioning-solid.svg" ,
    sub_num:3,
    video_ep:3,
    thumbnail_hover_heading:"Attack On Titan",
    thumbnail_hover_rating:{
        thumbnail_hover_rating_img:"./images/icons/star-solid.svg",
        thumbnail_hover_rating_count:6.8,
    },
    thumbnail_hover_HD:"HD",
    thumbnail_hover_ep_num:25,
    thumbnail_hover_tv:"TV",
    thumbnail_hover_description:"After losing his leg as a newbie adventurer, he retired and returned to his hometown in the countryside. Doing things such as collecting medicinal herbs, exterminating magic beasts and wild beasts, and helping with the villagers' farm work, it's hard to decide whether to call our protagonist an adventurer or a handyman.",
    thumbnail_hover_play_icon:"./images/icons/play-solid.svg",
    watch_now:"Watch now",
    video_title:"Attack On Titan",
    video_description:"Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to hide in fear behind enormous concentric walls.",
    video_stats: "TV &#183; 23m"
},{
    thumbnail: "./images/thumbnails/thedailylifeoftheimmortalking.jpeg",
    sub_img: "./images/icons/closed-captioning-solid.svg" ,
    sub_num:3,
    video_ep:3,
    thumbnail_hover_heading:"The Daily Life of the Immortal King",
    thumbnail_hover_rating:{
        thumbnail_hover_rating_img:"./images/icons/star-solid.svg",
        thumbnail_hover_rating_count:"N/A",
    },
    thumbnail_hover_HD:"HD",
    thumbnail_hover_ep_num:8,
    thumbnail_hover_tv:"TV",
    thumbnail_hover_description:"Wang Ling, the major Protagonist of the anime, has enormous uncontrollable power wants to live a low-key life. He wants to get rid of these powers. Sometimes, he just hides his powers from other kids just to look normal. He avoids contact and connections with others just to hide his powers.",
    thumbnail_hover_play_icon:"./images/icons/play-solid.svg",
    watch_now:"Watch now",
    video_title:"Wang Ling, the major Protagonist of the anime, has enormous uncontrollable power wants to live a low-key life. He wants to get rid of these powers. Sometimes, he just hides his powers from other kids just to look normal. He avoids contact and connections with others just to hide his powers.",
    video_stats: "TV &#183; 23m"
}];

videos.forEach((video) => {
    const html = `
    <div class="video-preview">
        <div class="thumbnail-row">
            <img class="thumbnail" src="./images/thumbnails/attackontitan.jpeg" alt="">
            <div class="subtitles">
                <button class="sub-button"><img class="sub-img"  src="./images/icons/closed-captioning-solid.svg" alt=""></button> 
                <button class="sub-num">3</button>
                <button class="video-ep">3</button>
            </div>
            <div class="thumbnail-hover">
                <h1 class="thumbnail-hover-heading">Attack On Titan</h1>
                <div class="thumbnail-hover-rating"><img class="thumbnail-hover-img" src="./images/icons/star-solid.svg" alt="">6.8</div>
                <button class="thumbnail-hover-HD">HD</button>
                 <button class="thumbnail-hover-ep-num">25</button>
                <button class="thumbnail-hover-tv">TV</button>
                <p class="thumbnail-hover-description">After losing his leg as a newbie adventurer, he retired and returned to his hometown in the countryside. Doing things such as collecting medicinal herbs, exterminating magic beasts and wild beasts, and helping with the villagers' farm work, it's hard to decide whether to call our protagonist an adventurer or a handyman.</p>
                <div class="thumbnail-hover-information">
                    <p>Genre:</p><p style="color: white; margin: -40px 0 0 55px;"> Action,Adventure,Fantasy</p> 
                    <p style="margin-top: 2px;">Aired:</p><p style="color: white; margin: -40px 0 0 50px;">Sep 28, 2023</p>
                </div>
                <div class="thumbnail-hover-buttons">
                    <button class="thumbnail-hover-play-button"><img class="thumbnail-hover-play-icon" src="./images/icons/play-solid.svg" alt=""><p class="watch-now">Watch now</p></button>
                </div>
            </div>
        </div>
        <div class="video-info-grid">
            <div class="video-info">
                <p class="video-title">
                    Attact On Titan
                </p>
                <p class="video-description">
                    Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to hide in fear behind enormous concentric walls. 
                </p>
                <p class="video-stats">
                T   V &#183; 23m
                </p>
            </div>
        </div>
    </div>
    `;
    console.log(html);
})