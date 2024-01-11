
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.pt-BR.f987c5a776f4916f1c11.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/362.latest.pt-BR.c484297628026cccf0ed.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/605.latest.pt-BR.314e89a8131329087f6a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/598.latest.pt-BR.3fb86ef4bcd439d4643e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.59094646f9326d86a023.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/731.latest.pt-BR.13d4de92b88330e8fea9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/958.latest.pt-BR.1fc6147cec25648c914d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/844.latest.pt-BR.7fcd45ae446a9a5574e8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.pt-BR.231e97154bcc8beb8afb.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/362.latest.pt-BR.18eecd205dabb9c44d0a.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.e5a7f63ca146c0549466.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/958.latest.pt-BR.4947f3421db1cb997387.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/74.latest.pt-BR.2cb15212a95d22789656.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  