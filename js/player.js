var ap4 = new APlayer({
    element: document.getElementById('player4'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    theme: '#ad7a86',
    mode: 'random',
    music: [
        {
            title: 'Loneliness',
            author: 'Resonance',
            url: 'audio/Resonance%20-%20Loneliness.mp3',
            pic: 'images/Resonance%20-%20Loneliness.jpg'
        },
        {
            title: 'Fantastic',
            author: 'Sub.Sound',
            url: 'audio/Sub.Sound%20-%20Fantastic.mp3',
            pic: 'images/Sub.Sound%20-%20Fantastic.jpg'
        },
        {
            title: '回レ！雪月花',
            author: '小倉唯',
            url: 'http://devtest.qiniudn.com/回レ！雪月花.mp3',
            pic: 'http://devtest.qiniudn.com/回レ！雪月花.jpg'
        }
    ]
});
