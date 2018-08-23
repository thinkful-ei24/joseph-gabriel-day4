const hero_image = () => {
  $('.thumbnails a').on('click', function(e) {
    const image_source = $(this)
      .find('img')
      .attr('src');
    const image_alt = $(this)
      .find('img')
      .attr('alt');
    $('div.hero img').attr('src', image_source);
    $('div.hero alt').attr('alt', image_alt);
  });
};

$(hero_image);
