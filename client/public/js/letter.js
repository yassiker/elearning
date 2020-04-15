$(document).ready(function() {
  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 5; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1
    .owlCarousel({
      items: 1,
      slideSpeed: 200,
      nav: false,
      autoplay: false,
      dots: false,
      loop: true,
      responsiveRefreshRate: 200,
    })
    .on("changed.owl.carousel", syncPosition);

  sync2
    .on("initialized.owl.carousel", function() {
      sync2
        .find(".owl-item")
        .eq(0)
        .addClass("current");
    })
    .owlCarousel({
      items: 5,
      dots: false,
      nav: false,
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: 1, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate: 100,
    })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    var count = el.item.count - 1;

    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }

    if (current > 2 && current < 8) {
      sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      sync2.data("owl.carousel").to(current - 2, 300, true);
    } else {
      sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
    }

    var onscreen = sync2.find(".owl-item.active").length - 1;

    var start = sync2
      .find(".owl-item.active")
      .first()
      .index();

    var end = sync2
      .find(".owl-item.active")
      .last()
      .index();

    if (current > end) {
      sync2.data("owl.carousel").to(current - 3, 100, true);
    }
    if (current < start) {
      sync2.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      if (number === 0) {
        sync1.data("owl.carousel").to(number, 100, true);
      } else {
        sync1.data("owl.carousel").to(number + 2, 100, true);
      }
    }
  }

  sync2.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    if (number === 1) {
      sync1.data("owl.carousel").to(0, 100, true);
    }

    if (number === 8) {
      sync1.data("owl.carousel").to(9, 100, true);
    }
    sync1.data("owl.carousel").to(number, 300, true);
  });
});
