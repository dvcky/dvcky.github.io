var ap4 = new APlayer({
    element: document.getElementById('player4'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    theme: '#7cfc00',
    mode: 'circulation',
    listmaxheight: '1px',
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
            title: 'Yukinohara',
            author: 'Orito Shinji',
            url: 'audio/Orito%20Shinji%20-%20Yukinohara.mp3',
            pic: 'images/Orito%20Shinji%20-%20Yukinohara.jpg'
        },
        {
            title: 'me & u',
            author: 'succducc',
            url: 'audio/succducc%20-%20me%20%26%20u.mp3',
            pic: 'images/succducc%20-%20me%20%26%20u.jpg'
        }
    ]
});
