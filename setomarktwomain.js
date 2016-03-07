 google.load('search', '1', {language: 'enn', style: google.loader.themes.V2_DEFAULT});
    google.setOnLoadCallback(function() {
      var customSearchOptions = {};
      var orderByOptions = {};
      orderByOptions['keys'] = [{label: 'Relevance', key: ''} , {label: 'Date', key: 'date'}];
      customSearchOptions['enableOrderBy'] = true;
      customSearchOptions['orderByOptions'] = orderByOptions;
      var imageSearchOptions = {};
      imageSearchOptions['layout'] = 'google.search.ImageSearch.LAYOUT_CLASSIC';
      customSearchOptions['enableImageSearch'] = true;
      var customSearchControl =   new google.search.CustomSearchControl('014690078927872812715:d724mnemdjy', customSearchOptions);
      customSearchControl.setResultSetSize(google.search.Search.LARGE_RESULTSET);
      var options = new google.search.DrawOptions();
      options.enableSearchboxOnly('https://www.google.com/cse?cx=014690078927872812715:d724mnemdjy', null, true);
      options.setAutoComplete(true);
      customSearchControl.draw('cse-search-form', options);
    }, true);
