jQuery.fn.tabs = function (contentHolderId) {
  var contentHolder = $(contentHolderId),
  tabs = $(this);

  tabs.on('click', 'li', function () {
    var tabName = $(this).attr('data-tab');
    tabs.trigger('change.tabs', tabName);
  });

  tabs.on('change.tabs', function(e, tabName) {
    tabs.find('li').removeClass('active');
    tabs.find('>[data-tab="' + tabName + '"]').addClass('active');

    contentHolder.find('>[data-tab]').removeClass('active');
    contentHolder.find('>[data-tab="' + tabName + '"]').addClass('active');
  });

  return this;
};
