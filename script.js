const movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Movie about the wizard',
        image: 'https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/box_620_330/image.jpg',
        alt: 'Harry Potter'
    },
    {
        id: 2,
        title: 'Lion king',
        desc: 'Movie about the savannah king',
        image: 'https://cdn.galleries-dev.smcloud.net/t/galleries/gf-CG8m-voqq-EoeZ_krol-lew-664x0-nocrop.jpg' ,
        alt: 'Lion King'
    },
    {
        id: 3,
        title: 'Lord of the Ring',
        desc: 'Movie about the ring of power',
        image: 'https://i.cdn29.hu/apix_collect_c/1405/a-gyuruk-ura/a_gyuruk_ura_screenshot_20171104095103_1_original_760x425_cover.jpg',
        alt: 'Lord of the Ring'
    }
];

const moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.image, alt: movie.alt})
    );
});

const element =
    React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));