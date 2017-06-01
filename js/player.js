var ap = new APlayer({
    element: document.getElementById('player'),                       // Optional, player element
    narrow: true,                                                     // Optional, narrow style
    autoplay: true,                                                    // Optional, autoplay song(s), not supported by mobile browsers
    showlrc: false,                                                        // Optional, show lrc, can be 0, 1, 2, see: ###With lrc
    mutex: true,                                                       // Optional, pause other players when this player playing
    theme: '#e6d0b2',                                                  // Optional, theme color, default: #b7daff
    mode: 'random',                                                    // Optional, play mode, can be `random` `single` `circulation`(loop) `order`(no loop), default: `circulation`
    preload: 'auto',                                               // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
    listmaxheight: '513px',                                             // Optional, max height of play list
    music: {                                                           // Required, music info, see: ###With playlist
        title: 'Loneliness',                                          // Required, music title
        author: 'Resonance',                          // Required, music author
        url: 'audio/Resonance%20-%20Loneliness.mp3',                   // Required, music url
        pic: 'images/Resonance%20-%20Loneliness.jpg',  // Optional, music picture
    },
    
    {                                                           // Required, music info, see: ###With playlist
        title: 'Fantastic',                                          // Required, music title
        author: 'Sub.Sound',                          // Required, music author
        url: 'audio/Sub.Sound%20-%20Fantastic.mp3',                   // Required, music url
        pic: 'images/Sub.Sound%20-%20Fantastic.jpg',  // Optional, music picture
    }
});
