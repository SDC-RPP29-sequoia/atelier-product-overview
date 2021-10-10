/* eslint-disable camelcase */
module.exports = {
  checkProduct: (product) => {
    product.features.forEach((feature) => {
      if (feature.value === 'null') {
        feature.value = 'No ' + feature.feature;
      }
    });
    return product;
  },

  checkStyle: (styles, inputId) => {
    if (styles.length !== 0) {
      styles.forEach((style) => {
        if (style.photos.length === 0) {
          style.photos = [
            {
              url: 'https://i.ibb.co/gwHDnx0/coming-Soon.png',
              thumbnail_url: 'https://i.ibb.co/gwHDnx0/coming-Soon.png'
            }
          ];
        }
        if (Object.keys(style.skus).length === 0) {
          const emptySku = {};
          emptySku[1] = {
            styleId: style.style_id,
            quantity: '1',
            size: 'Temporarily sold out'
          };
          style.skus = emptySku;
        }
      });
      return styles;
    } else {
      let styleObj = {
        'default?': true,
        name: 'No available styles',
        original_price: 0,
        photos: [
          {
            url: 'https://i.ibb.co/gwHDnx0/coming-Soon.png',
            thumbnail_url: 'https://i.ibb.co/gwHDnx0/coming-Soon.png'
          }
        ],
        product_id: inputId,
        sale_price: null,
        skus: { '1': { styleId: '1', quantity: '1', size: 'Temporarily sold out' } },
        styleId: '1'
      };
      styles.push(styleObj);
    }
    return styles;
  }
};